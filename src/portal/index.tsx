import reactDom from 'react-dom';

const ModalPortal = ({ children }: { children: React.ReactNode }) => {
  const el = document.getElementById('modal') as HTMLElement;
  return reactDom.createPortal(children, el);
};

export default ModalPortal;
