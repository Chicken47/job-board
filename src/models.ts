export interface Job {
  id: number;
  companyName: string;
  title: string;
}

export interface NewJob {
  title: string;
  companyName: string;
  notes: string;
}

export interface AddNewModalProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setNewJob: React.Dispatch<React.SetStateAction<NewJob>>;
  newJob: NewJob;
  addJob: () => void;
}

export interface HeaderProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ColumnsProps {
  columnName: string;
  droppableId: string;
  jobList: Job[];
  openModal: any;
}

export interface JobModalProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  jobDetails: NewJob | null;
  onSave: (updatedJobDetails: NewJob) => void;
}
