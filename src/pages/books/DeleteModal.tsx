import React, { Dispatch, SetStateAction } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDeleteBookMutation } from "../../redux/features/books/booksApi";
import { useNavigate } from "react-router-dom";

function DeleteModal({
  show,
  setShow,
  id,
}: {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  id: string;
}) {
  const handleClose = () => setShow(false);

  const navigate = useNavigate();

  const [deleteBook, { error }] = useDeleteBookMutation();
  const handleDelete = (data: boolean) => {
    if (!data) {
      handleClose();
    } else {
      deleteBook(id);
      if (error) {
        return;
      }
      navigate("/");
    }
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Are You sure want to delete it?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex justify-content-center">
          <button className="edit" onClick={() => handleDelete(false)}>
            No
          </button>
          <button className="delete" onClick={() => handleDelete(true)}>
            Yes
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default DeleteModal;
