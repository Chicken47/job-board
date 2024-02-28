import React from "react";
import { Button } from "antd";
import { HeaderProps } from "../models";

const Header: React.FC<HeaderProps> = ({ setIsModalOpen }: HeaderProps) => {
  return (
    <div className="z-50 flex items-center justify-between w-full px-10 py-3 bg-blue-200 shadow-lg">
      <span className="font-serif font-bold text-[24px]">
        2024 Job Board Planner
      </span>
      <div className="flex items-center space-x-10">
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
