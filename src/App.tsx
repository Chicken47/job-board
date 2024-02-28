import { DragDropContext, DropResult } from "react-beautiful-dnd";
import Header from "./components/Header";
import { useState } from "react";
import { Job, NewJob } from "./models";
import Column from "./components/Columns";
import AddNewModal from "./components/AddNewModal";
import JobModal from "./components/JobModal";

// add job functionality (done)
// open job with data in modal (done)
// add all types (done)
// make code better (done)
// zustand

const App: React.FC = () => {
  const saved: Array<Job> = [
    { id: 12345, companyName: "Facebook", title: "The Mighty Zucc" },
  ];

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [openJob, setOpenJob] = useState<boolean>(false);

  const [selectedJob, setSelectedJob] = useState<NewJob | null>(null);

  const [savedJobs, setSavedJobs] = useState<Array<Job>>(saved);
  const [appliedJobs, setAppliedJobs] = useState<Array<Job>>([]);
  const [interviewJobs, setInterviewJobs] = useState<Array<Job>>([]);
  const [offerJobs, setOfferJobs] = useState<Array<Job>>([]);
  const [rejectedJobs, setRejectedJobs] = useState<Array<Job>>([]);

  const [newJob, setNewJob] = useState<NewJob>({
    title: "",
    companyName: "",
    notes: "",
  });

  const columns: { columnName: string; droppableId: string; jobList: Job[] }[] =
    [
      {
        columnName: "Saved Jobs",
        droppableId: "saved_jobs",
        jobList: savedJobs,
      },
      {
        columnName: "Applied Jobs",
        droppableId: "applied_jobs",
        jobList: appliedJobs,
      },
      {
        columnName: "Interview Jobs",
        droppableId: "interview_jobs",
        jobList: interviewJobs,
      },
      {
        columnName: "Job Offered",
        droppableId: "offer_jobs",
        jobList: offerJobs,
      },
      {
        columnName: "Rejected Jobs",
        droppableId: "rejected_jobs",
        jobList: rejectedJobs,
      },
    ];

  const onDragEnd = (result: DropResult) => {
    console.log(result);
    const { destination, source } = result;

    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    let spliceIndex;
    let savedArray = [...savedJobs];
    let appliedArray = [...appliedJobs];
    let interviewArray = [...interviewJobs];
    let offerArray = [...offerJobs];
    let rejectedArray = [...rejectedJobs];

    // source
    if (source.droppableId === "saved_jobs") {
      spliceIndex = savedArray[source.index];
      savedArray.splice(source.index, 1);
    } else if (source.droppableId === "applied_jobs") {
      spliceIndex = appliedArray[source.index];
      appliedArray.splice(source.index, 1);
    } else if (source.droppableId === "interview_jobs") {
      spliceIndex = interviewArray[source.index];
      interviewArray.splice(source.index, 1);
    } else if (source.droppableId === "offer_jobs") {
      spliceIndex = offerArray[source.index];
      offerArray.splice(source.index, 1);
    } else if (source.droppableId === "rejected_jobs") {
      spliceIndex = rejectedArray[source.index];
      rejectedArray.splice(source.index, 1);
    } else {
      return;
    }

    // destination
    if (destination.droppableId === "saved_jobs") {
      savedArray.splice(destination.index, 0, spliceIndex);
    } else if (destination.droppableId === "applied_jobs") {
      appliedArray.splice(destination.index, 0, spliceIndex);
    } else if (destination.droppableId === "interview_jobs") {
      interviewArray.splice(destination.index, 0, spliceIndex);
    } else if (destination.droppableId === "offer_jobs") {
      offerArray.splice(destination.index, 0, spliceIndex);
    } else if (destination.droppableId === "rejected_jobs") {
      rejectedArray.splice(destination.index, 0, spliceIndex);
    } else {
      return;
    }

    setSavedJobs(savedArray);
    setAppliedJobs(appliedArray);
    setInterviewJobs(interviewArray);
    setOfferJobs(offerArray);
    setRejectedJobs(rejectedArray);
  };

  const addJob = () => {
    console.log("addJob reached");
    const newObj: Job = {
      id: Date.now(),
      companyName: newJob.companyName,
      title: newJob.title,
    };
    setSavedJobs((prevSavedJobs) => [...prevSavedJobs, newObj]);
    setNewJob({ title: "", companyName: "", notes: "" });
    setIsModalOpen(false);
  };

  const openModal = (job: NewJob) => {
    setSelectedJob(job);
    setOpenJob(true);
  };

  const saveChanges = (updatedJobDetails: NewJob) => {
    // Handle saving changes here
    console.log("Updated job details:", updatedJobDetails);
    setIsModalOpen(false);
  };

  return (
    <div className="h-screen max-w-screen">
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex flex-col h-full overflow-hidden selection:bg-green-400">
          <Header setIsModalOpen={setIsModalOpen} />
          <div className="flex w-auto h-full px-5 py-10 overflow-x-auto bg-blue-50">
            {columns.map((column) => {
              return (
                <Column
                  key={column.droppableId}
                  columnName={column.columnName}
                  droppableId={column.droppableId}
                  jobList={column.jobList}
                  openModal={openModal}
                />
              );
            })}
          </div>
        </div>
      </DragDropContext>
      <AddNewModal
        addJob={addJob}
        isModalOpen={isModalOpen}
        newJob={newJob}
        setIsModalOpen={setIsModalOpen}
        setNewJob={setNewJob}
      />
      <JobModal
        visible={openJob}
        setVisible={setOpenJob}
        jobDetails={selectedJob}
        onSave={saveChanges}
      />
    </div>
  );
};

export default App;
