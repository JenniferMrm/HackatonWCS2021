import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import Modal from "react-modal";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  messageContainer: {
    width: "100%",
    height: "600px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },

  textarea: {
    fontFamily: "Poppins",
    margin: "0 20px",
    width: "280px",
    borderRadius: "10px",
    border: "solid 1px grey",
  },

  label: {
    alignSelf: "start",
    margin: "0 45px 10px 45px",
    fontFamily: "Poppins",
  },

  button: {
    alignSelf: "end",
    margin: "10px 45px 0 45px",
    fontFamily: "Poppins",
    fontSize: "20px",
    background: "none",
    width: "100px",
    height: "50px",
    border: "solid grey 1px",
    borderRadius: "10px",
  },

  explanations: {
    fontFamily: "Poppins",
    margin: "0 25px 40px 25px",
  },

  description: {
    fontFamily: "Poppins",
    margin: "0 45px 40px 45px",
  },

  messageSend: {
    fontFamily: "Poppins",
    margin: "0 25px 40px 25px",
    fontSize: "25px",
  },

  gif: {
    width: "250px",
    margin: "0 auto",
  },

  buttonModal: {
    alignSelf: "end",
    fontFamily: "Poppins",
    fontSize: "20px",
    background: "none",
    width: "250px",
    height: "50px",
    border: "solid grey 1px",
    borderRadius: "10px",
  },

  link: {
    textDecoration: "none",
    color: "inherit",
    alignSelf: "end",
  },
});

const modal = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    height: "600px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
};

function Message() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  function openModal() {
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
  }

  return (
    <div className={classes.messageContainer}>
      <p className={classes.description}>
        Congrats, you find a peer ! Take the time to explain why you reached
        her/him in the box below !
      </p>
      <label className={classes.label}>Your message :</label>
      <textarea
        name="text"
        type="text"
        cols="40"
        rows="10"
        className={classes.textarea}
      ></textarea>
      <button className={classes.button} onClick={openModal}>
        Send
      </button>
      <Modal
        isOpen={open}
        onRequestClose={closeModal}
        className={classes.modal}
        style={modal}
        contentLabel="Exemple Modal"
      >
        <p className={classes.messageSend}>
          Your message was succesfully send !
        </p>
        <img src="assets/giphy.gif" alt="gif" className={classes.gif} />
        <p className={classes.explanations}>
          The freelancer you just picked will receive your message with your
          coordinates. You will get an answer from her/him if she/he accepts to
          work with you !
        </p>
        <Link to={"/home"} className={classes.link}>
          <button className={classes.buttonModal}>Back to home page</button>
        </Link>
      </Modal>
    </div>
  );
}

export default Message;
