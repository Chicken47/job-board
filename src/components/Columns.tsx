import React from "react";
import {
  Droppable,
  DroppableProvided,
  DroppableStateSnapshot,
} from "react-beautiful-dnd";
import JobCard from "./JobCard";
import { ColumnsProps, Job } from "../models";

const Column: React.FC<ColumnsProps> = ({
  columnName,
  droppableId,
  jobList,
  openModal,
}: ColumnsProps) => {
  return (
    <div
      className={`bg-blue-300 h-full min-w-[25vw] rounded-lg mx-2 flex flex-col`}
    >
      <div className="flex items-center justify-between w-full px-5 py-3">
        <span>{columnName}</span>
        <div className="px-4 py-2 text-white bg-blue-400 rounded-lg shadow-lg">
          {jobList.length}{" "}
          {jobList.length > 1 || jobList.length === 0 ? "Jobs" : "Job"}
        </div>
      </div>
      <Droppable droppableId={droppableId}>
        {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => {
          return (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className={`w-full h-full overflow-y-auto p-5 ${
                snapshot.isDraggingOver ? "bg-blue-200" : "bg-blue-100"
              } rounded-b-lg`}
            >
              {jobList.map((job: Job, idx: number) => (
                <JobCard
                  key={job.id}
                  companyName={job.companyName}
                  title={job.title}
                  dragId={job.id}
                  index={idx}
                  onClick={() => openModal(job)}
                />
              ))}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </div>
  );
};

export default Column;
