import React from "react";
import { FaTimes } from "react-icons/fa";
import { useAppContext } from "../util/context";

const Modal = () => {
  const { modalOpen, closeModal } = useAppContext();
  return (
    <div className={`modal-overlay ${modalOpen && "show-modal"}`}>
      <div className="modal-container">
        <h3>Subscribe to our News Letter</h3>
        <h5 className="subscribe-desc">
          Join our subscribers list to stay informed with daily emails about
          what's happening in the world around you. You will also receive
          special offers dirrectly to your inbox.
        </h5>
          <div className="sub-flex">
            <input
              type="text"
              className="email"
              className="email-input"
              placeholder="Enter your Email"
            />
            <button className="subscribe" onClick={closeModal}>Subscribe Now!</button>
          </div>
        <button className="close-modal-btn">
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
