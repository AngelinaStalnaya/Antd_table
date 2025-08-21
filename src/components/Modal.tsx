import { Button, Modal } from 'antd';
import FormComp from './Form';
import { useStore } from '../store/store';
import { useState } from 'react';
import type { TableDataType } from '../types/dataTypes';

type ModalCompProps = {
  btnContent: string,
  title: string,
  record?: TableDataType | null,
  id?: string,
}

const ModalComp = ({ btnContent, title, record, id }: ModalCompProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const addRecord = useStore((state) => state.setRecord);
  const updateRecord = useStore((state) => state.updateRecord);
  const deleteRecord = useStore((state) => state.deleteRecord);
  
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleDeleteRecord = (id: string) => {
    deleteRecord(id)
  }

  return (
    <>
      <Button type="default" onClick={showModal}>
        {btnContent}
      </Button>
      <Modal
        title={title}
        closable={{ 'aria-label': 'Close Button' }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        centered
      >
        {record && <FormComp recordValues={record} updateOpt={updateRecord} />}
        {id && <Button type='primary' onClick={() => handleDeleteRecord(id)}>Delete anyway</Button>}
        {!record && !id && <FormComp addOpt={addRecord}/>}

      </Modal>
    </>
  );
};

export default ModalComp;