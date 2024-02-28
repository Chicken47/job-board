import React, { useState, ChangeEvent } from "react";
import { Button, Modal } from "antd";
import { AddNewModalProps, NewJob } from "../models";

const AddNewModal: React.FC<AddNewModalProps> = ({
  isModalOpen,
  setIsModalOpen,
  setNewJob,
  newJob,
  addJob,
}: AddNewModalProps) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

  const handleInputChange = (field: keyof NewJob, value: string) => {
    setNewJob({
      ...newJob,
      [field]: value,
    });
    setIsButtonDisabled(!newJob.title || !newJob.companyName);
  };

  return (
    <Modal
      open={isModalOpen}
      title="Add a job"
      onCancel={() => setIsModalOpen(false)}
      footer={[
        <Button
          key="addJobBtn"
          onClick={addJob}
          type="default"
          className=""
          disabled={isButtonDisabled}
        >
          Add Job
        </Button>,
      ]}
    >
      <div className="flex flex-col w-full p-5 space-y-4 bg-blue-50 rounded-xl">
        <div className="flex flex-col gap-1">
          <span>Title/Designation</span>
          <input
            className="px-2 py-1 border rounded "
            value={newJob?.title}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleInputChange("title", e.target.value)
            }
          />
        </div>
        <div className="flex flex-col gap-1">
          <span>Company Name</span>
          <input
            className="px-2 py-1 border rounded "
            value={newJob?.companyName}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleInputChange("companyName", e.target.value)
            }
          />
        </div>
        <div className="flex flex-col gap-1">
          <span>
            Notes <i className="text-xs text-gray-400">(optional)</i>
          </span>
          <textarea
            className="px-2 py-1 border rounded "
            value={newJob?.notes}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setNewJob({ ...newJob, notes: e.target.value })
            }
          />
        </div>
      </div>
    </Modal>
  );
};

export default AddNewModal;
