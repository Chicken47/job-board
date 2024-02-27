import JobCard from "./JobCard";
import { Droppable } from "react-beautiful-dnd";

export const SavedColumn = ({ jobList }: any) => {
  return (
    <div
      className={`bg-blue-300 h-full min-w-[25vw] rounded-lg mx-2 flex flex-col`}
    >
      <div className="flex items-center justify-between w-full px-5 py-3">
        <span>{"Saved Jobs"}</span>
        <div className="px-4 py-2 text-white bg-blue-400 rounded-lg shadow-lg">
          {jobList.length} {jobList.length > 1 ? "Jobs" : "Job"}
        </div>
      </div>
      <Droppable droppableId="saved_jobs">
        {(provided, snapshot) => {
          return (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className={`w-full h-full overflow-y-auto p-5 ${
                snapshot.isDraggingOver ? "bg-blue-200" : "bg-blue-100"
              } rounded-b-lg`}
            >
              {jobList.map((job: any, idx: any) => {
                return (
                  <JobCard
                    companyName={job.companyName}
                    title={job.title}
                    dragId={job.id}
                    index={idx}
                  />
                );
              })}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </div>
  );
};

export const AppliedColumn = ({ jobList }: any) => {
  return (
    <div
      className={`bg-blue-300 h-full min-w-[25vw] rounded-lg mx-2 flex flex-col`}
    >
      <div className="flex items-center justify-between w-full px-5 py-3">
        <span>{"Applied Jobs"}</span>
        <div className="px-4 py-2 text-white bg-blue-400 rounded-lg shadow-lg">
          {jobList.length} {jobList.length > 1 ? "Jobs" : "Job"}
        </div>
      </div>
      <Droppable droppableId="applied_jobs">
        {(provided, snapshot) => {
          return (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className={`w-full h-full overflow-y-auto p-5 ${
                snapshot.isDraggingOver ? "bg-blue-200" : "bg-blue-100"
              } rounded-b-lg`}
            >
              {jobList.map((job: any, idx: any) => {
                return (
                  <JobCard
                    companyName={job.companyName}
                    title={job.title}
                    dragId={job.id}
                    index={idx}
                  />
                );
              })}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </div>
  );
};

export const InterviewColumn = ({ jobList }: any) => {
  return (
    <div
      className={`bg-blue-300 h-full min-w-[25vw] rounded-lg mx-2 flex flex-col`}
    >
      <div className="flex items-center justify-between w-full px-5 py-3">
        <span className="line-clamp-1">{"Interview Stage"}</span>
        <div className="px-4 py-2 text-white bg-blue-400 rounded-lg shadow-lg line-clamp-1">
          {jobList.length} {jobList.length > 1 ? "Jobs" : "Job"}
        </div>
      </div>
      <Droppable droppableId="interview_jobs">
        {(provided, snapshot) => {
          return (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className={`w-full h-full overflow-y-auto p-5 ${
                snapshot.isDraggingOver ? "bg-blue-200" : "bg-blue-100"
              } rounded-b-lg`}
            >
              {jobList.map((job: any, idx: any) => {
                return (
                  <JobCard
                    companyName={job.companyName}
                    title={job.title}
                    dragId={job.id}
                    index={idx}
                  />
                );
              })}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </div>
  );
};

export const OfferColumn = ({ jobList }: any) => {
  return (
    <div
      className={`bg-blue-300 h-full min-w-[25vw] rounded-lg mx-2 flex flex-col`}
    >
      <div className="flex items-center justify-between w-full px-5 py-3">
        <span>{"Offer!"}</span>
        <div className="px-4 py-2 text-white bg-blue-400 rounded-lg shadow-lg">
          {jobList.length} {jobList.length > 1 ? "Jobs" : "Job"}
        </div>
      </div>
      <Droppable droppableId="offer_jobs">
        {(provided, snapshot) => {
          return (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className={`w-full h-full overflow-y-auto p-5 ${
                snapshot.isDraggingOver ? "bg-blue-200" : "bg-blue-100"
              } rounded-b-lg`}
            >
              {jobList.map((job: any, idx: any) => {
                return (
                  <JobCard
                    companyName={job.companyName}
                    title={job.title}
                    dragId={job.id}
                    index={idx}
                  />
                );
              })}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </div>
  );
};

export const RejectedColumn = ({ jobList }: any) => {
  return (
    <div
      className={`bg-blue-300 h-full min-w-[25vw] rounded-lg mx-2 flex flex-col`}
    >
      <div className="flex items-center justify-between w-full px-5 py-3">
        <span>{"Rejected Jobs"}</span>
        <div className="px-4 py-2 text-white bg-blue-400 rounded-lg shadow-lg">
          {jobList.length} {jobList.length > 1 ? "Jobs" : "Job"}
        </div>
      </div>
      <Droppable droppableId="rejected_jobs">
        {(provided, snapshot) => {
          return (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className={`w-full h-full overflow-y-auto p-5 ${
                snapshot.isDraggingOver ? "bg-blue-200" : "bg-blue-100"
              } rounded-b-lg`}
            >
              {jobList.map((job: any, idx: any) => {
                return (
                  <JobCard
                    companyName={job.companyName}
                    title={job.title}
                    dragId={job.id}
                    index={idx}
                  />
                );
              })}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </div>
  );
};
