import "../css/HireModal.css";
import { useState } from "react";
import Swal from "sweetalert2";

const HireModal = ({ id }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [requirements, setRequirements] = useState("");

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
  const onSubmitModal = (e) => {
    e.preventDefault();
    Toast.fire({
      icon: "success",
      title: "I will contact you shortly, Thank you for reaching out to me!",
    });
    setName("");
    setEmail("");
    setPhone("");
    setRequirements("");
  };

  return (
    <div className="hireMe">
      <div
        className="modal fade"
        id={id}
        tabIndex="-1"
        aria-labelledby="ModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <form
                name="hireForm"
                method="post"
                data-netlify="true"
                onSubmit={onSubmitModal}
              >
                <input type="hidden" name="form-name" value="hireForm" />
                <p className="navbar-brand my-3 text-center">
                  Sheikh <span>Khurram</span>
                </p>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required={true}
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required={true}
                />
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your phone"
                  required={true}
                />
                <textarea
                  rows="2"
                  type="text"
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                  placeholder="Enter your requirements"
                  required={true}
                />
                {!name || !email || !phone || !requirements ? (
                  <div className="disabledHireBtn">Send</div>
                ) : (
                  <button type="submit" className="hireBtn">
                    Send
                  </button>
                )}
                <button data-dismiss="modal" type="button" className="closeBtn">
                  close
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireModal;
