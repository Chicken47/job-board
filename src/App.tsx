import { DragDropContext, DropResult } from "react-beautiful-dnd";
import Header from "./components/Header";
import { useState } from "react";
import { Job } from "./models";
import {
  AppliedColumn,
  InterviewColumn,
  OfferColumn,
  RejectedColumn,
  SavedColumn,
} from "./components/Columns";
import AddNewModal from "./components/AddNewModal";

// add job functionality (done)
// zustand
// add all types
// make code better

const App = () => {
  const saved: Array<Job> = [
    { id: 12345, companyName: "Google", title: "Frontend" },
    { id: 11345, companyName: "Google", title: "Frontend" },
    { id: 54321, companyName: "Microsoft", title: "Backend" },
    { id: 87655, companyName: "PhonePe", title: "CTO" },
    { id: 87654, companyName: "NPCI", title: "SWET" },
  ];

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [savedJobs, setSavedJobs] = useState<Array<Job>>(saved);
  const [appliedJobs, setAppliedJobs] = useState<Array<Job>>([]);
  const [interviewJobs, setInterviewJobs] = useState<Array<Job>>([]);
  const [offerJobs, setOfferJobs] = useState<Array<Job>>([]);
  const [rejectedJobs, setRejectedJobs] = useState<Array<Job>>([]);

  const [newJob, setNewJob] = useState({
    title: "",
    companyName: "",
    notes: "",
  });

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
    const newObj = {
      id: Date.now(),
      companyName: newJob.companyName,
      title: newJob.title,
    };
    setSavedJobs((prevSavedJobs) => [...prevSavedJobs, newObj]);
    setNewJob({ title: "", companyName: "", notes: "" });
    setIsModalOpen(false);
  };

  return (
    <div className="h-screen max-w-screen">
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex flex-col h-full overflow-hidden selection:bg-green-400">
          <Header setIsModalOpen={setIsModalOpen} />
          <div className="flex w-auto h-full px-5 py-10 overflow-x-auto bg-blue-50">
            <SavedColumn jobList={savedJobs} />
            <AppliedColumn jobList={appliedJobs} />
            <InterviewColumn jobList={interviewJobs} />
            <OfferColumn jobList={offerJobs} />
            <RejectedColumn jobList={rejectedJobs} />
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
    </div>
  );
};

export default App;
