import React, { useState } from "react";
import { Modal, Button, Input } from "antd";
import { JobModalProps } from "../models";

const JobModal: React.FC<JobModalProps> = ({
  visible,
  setVisible,
  jobDetails,
  onSave,
}: JobModalProps) => {
  const [editedJobDetails, setEditedJobDetails] = useState({
    title: "",
    companyName: "",
    notes: "",
  });
  const [edit, setEdit] = useState(false);

  console.log(editedJobDetails);
  const handleSave = () => {
    if (!editedJobDetails) return;
    onSave(editedJobDetails);
    setVisible(false);
  };

  return (
    <Modal
      title="View/Edit Job Details"
      open={visible}
      onCancel={() => {
        setVisible(false);
        setEditedJobDetails({ title: "", companyName: "", notes: "" });
        setEdit(false);
      }}
      footer={[
        <Button key="cancel" type="link" onClick={() => setEdit(!edit)}>
          Edit
        </Button>,
        <Button key="save" type="default" onClick={handleSave}>
          Save
        </Button>,
      ]}
    >
      <div className="flex flex-col p-5 space-y-5 bg-blue-50 rounded-xl">
        <div className="space-x-2">
          <label className="font-bold">Title:</label>
          {edit ? (
            <Input
              value={
                editedJobDetails?.title
                  ? editedJobDetails?.title
                  : jobDetails?.title
              }
              onChange={(e) =>
                setEditedJobDetails({
                  ...editedJobDetails,
                  title: e.target.value,
                })
              }
            />
          ) : (
            <span>{jobDetails?.title}</span>
          )}
        </div>
        <div className="space-x-2">
          <label className="font-bold">Company Name:</label>
          {edit ? (
            <Input
              value={
                editedJobDetails?.companyName
                  ? editedJobDetails?.companyName
                  : jobDetails?.companyName
              }
              onChange={(e) =>
                setEditedJobDetails({
                  ...editedJobDetails,
                  companyName: e.target.value,
                })
              }
            />
          ) : (
            <span>{jobDetails?.companyName}</span>
          )}
        </div>
        <div className="space-x-2">
          <label className="font-bold">Notes:</label>
          {edit ? (
            <Input
              value={
                editedJobDetails?.notes
                  ? editedJobDetails?.notes
                  : jobDetails?.notes
              }
              onChange={(e) =>
                setEditedJobDetails({
                  ...editedJobDetails,
                  notes: e.target.value,
                })
              }
            />
          ) : (
            <span>{jobDetails?.notes}</span>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default JobModal;
