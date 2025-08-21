import { useState } from 'react';
import { Button, Modal } from 'antd';
import FormComp from './Form';

const ModalComp = ({ btnContent, title, initialFormValues }: { btnContent: string, title: string, initialFormValues?: FormData }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };


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
        <FormComp initialFormValues={initialFormValues} />
      </Modal>
    </>
  );
};

export default ModalComp;