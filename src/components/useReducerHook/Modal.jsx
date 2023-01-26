import React, { useEffect } from "react";

const style = {
  position: "absolute",
  fontFamily: "sans-serif",
  top: "20px",
  width: "300px",
  height: "50px",
  backgroundColor: "rgba(87, 196, 159, 0.603)",
  borderRadius: "10px",
  color: "black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontWeight: "800",
  left: "50%",
  transform: "translate(-50%, 0)",
};

export const Modal = ({ modalContent, closeModal }) => {
  useEffect(() => {
      const tt = setTimeout(() => {
          closeModal();
        }, 3000);
  });

  return <div style={style}>{modalContent.toUpperCase()}</div>;
};
