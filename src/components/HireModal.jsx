import "../css/HireModal.css";
import { useState } from "react";

const HireModal = ({ id }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [requirements, setRequirements] = useState("");
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
              <form name="hireForm" method="POST" action="/success">
                <input type="hidden" name="form-name" value="hireForm" />
                <p className="navbar-brand my-3 text-center">
                  Sheikh <span>Khurram</span>
                </p>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required={true}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  required={true}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  placeholder="Enter your phone"
                  required={true}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <textarea
                  rows="2"
                  id="requirements"
                  name="requirements"
                  type="text"
                  placeholder="Enter your requirements"
                  required={true}
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
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
