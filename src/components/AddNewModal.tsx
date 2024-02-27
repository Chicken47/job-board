import { Button, Modal } from "antd";

const AddNewModal = ({
  isModalOpen,
  setIsModalOpen,
  setNewJob,
  newJob,
  addJob,
}: any) => {
  return (
    <Modal
      open={isModalOpen}
      title="Add a job"
      onCancel={() => setIsModalOpen(false)}
      footer={[
        <Button onClick={addJob} type="default" className="">
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
            onChange={(e) =>
              setNewJob({
                ...newJob,
                title: e.target.value,
              })
            }
          />
        </div>
        <div className="flex flex-col gap-1">
          <span>Company Name</span>
          <input
            className="px-2 py-1 border rounded "
            value={newJob?.companyName}
            onChange={(e) =>
              setNewJob({
                ...newJob,
                companyName: e.target.value,
              })
            }
          />
        </div>
        <div className="flex flex-col gap-1">
          <span>Notes</span>
          <textarea
            className="px-2 py-1 border rounded "
            value={newJob?.notes}
            onChange={(e) =>
              setNewJob({
                ...newJob,
                notes: e.target.value,
              })
            }
          />
        </div>
      </div>
    </Modal>
  );
};

export default AddNewModal;
