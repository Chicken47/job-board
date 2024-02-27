import { Button } from "antd";

const Header = ({ setIsModalOpen }: any) => {
  return (
    <div className="flex items-center justify-between w-full px-10 py-3 bg-blue-200">
      <span>2024 Job Board Planner</span>
      <div className="flex items-center space-x-10">
        <span>Drag and drop your jobs into the correct columns</span>
        <Button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center justify-center px-4 py-2 text-white bg-blue-500 rounded drop-shadow-xl"
        >
          Add Job
        </Button>
      </div>
    </div>
  );
};

export default Header;
