import { Draggable } from "react-beautiful-dnd";

const JobCard = ({ companyName, title, dragId, index, onClick }: any) => {
  return (
    <Draggable
      draggableId={dragId.toString()}
      index={index}
      key={dragId.toString()}
    >
      {(provided) => {
        return (
          <div
            onClick={onClick}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            className="z-50 flex flex-col w-full p-3 my-3 bg-white rounded shadow select-none focus:cursor-grabbing cursor-grab"
          >
            <span className="font-bold text-[18px]">{companyName}</span>
            <span>{title}</span>
          </div>
        );
      }}
    </Draggable>
  );
};

export default JobCard;
