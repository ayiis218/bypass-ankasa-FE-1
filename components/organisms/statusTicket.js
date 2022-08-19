import React from "react";

const StatusTicket = (props) => {
  const statusCheck = () => {
    if (props.status === "waiting") {
      return (
        <>
          <button className="btn btn-warning btn-lg shadow-none" type="button">
            Waiting for payment
          </button>
        </>
      );
    } else if (props.status === "success") {
      return (
        <>
          <button className="btn btn-success btn-lg shadow-none" type="button">
            Eticket issued
          </button>
        </>
      );
    } else if (props.status === "failed") {
      return (
        <>
          <button className="btn btn-danger btn-lg shadow-none" type="button">
            Failed
          </button>
        </>
      );
    }
  };

  return (
    <>
      <div id="myBooking">{statusCheck()}</div>
    </>
  );
};

export default StatusTicket;
