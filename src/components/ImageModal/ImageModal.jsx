import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, closeModal, imgUrl, imgAlt }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={{
        overlay: {
          backgroundColor: "#d5d6f8",
        },
        content: {
          padding: "0",
          height: "max-content",
          overflow: "hidden",
        },
      }}
    >
      <img className={css.imageModal} src={imgUrl} alt={imgAlt} />
    </Modal>
  );
};

export default ImageModal;