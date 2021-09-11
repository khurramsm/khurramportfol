import { useState } from "react";
import Swal from "sweetalert2";

const PackageModal = ({ id }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [packageName, setPackageName] = useState("select");
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
      title: "I will contact you shortly, Thank you!",
    });
    setName("");
    setEmail("");
    setPhone("");
    setPackageName("select");
  };

  const options = [
    {
      label: "Select",
      value: "select",
    },
    {
      label: "Basic",
      value: "basic",
    },
    {
      label: "Standard",
      value: "standard",
    },
    {
      label: "Premium",
      value: "premium",
    },
  ];

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
                name="packageForm"
                method="POST"
                data-netlify="true"
                onSubmit={onSubmitModal}
              >
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
                <select
                  value={packageName}
                  onChange={(e) => setPackageName(e.target.value)}
                  style={{
                    color: packageName === "select" ? "#000" : "#fff",
                    background:
                      packageName === "basic"
                        ? "crimson"
                        : packageName === "standard"
                        ? "rgb(0, 58, 134)"
                        : packageName === "premium"
                        ? "rgb(3, 180, 86)"
                        : "",
                  }}
                >
                  {options.map((option) => (
                    <option
                      style={{
                        color: packageName === "select" ? "#000" : "#fff",
                      }}
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </select>

                {!name || !email || !phone || packageName === "select" ? (
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

export default PackageModal;
