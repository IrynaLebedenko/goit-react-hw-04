import Modal from "react-modal";

import css from "./ImageModal.module.css";

const ImageModal = ({ closeModal, IsOpen, photo }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "gray",
    },
  };
  return (
    <div>
      <Modal isOpen={IsOpen} onRequestClose={closeModal} style={customStyles}>
        {photo && (
          <div>
            <img
              className={css.modalPhoto}
              src={photo.urls.regular}
              alt={photo.alt_description}
            />
            <div className={css.modalWrap}>
              {/* <img
                className={css.author}
                src={photo.user.profile_image.medium}
                alt={photo.user.username}
              /> */}
              <p>Author: {photo.user.username}</p>
              {/* <p>likes:{photo.likes}</p> */}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ImageModal;