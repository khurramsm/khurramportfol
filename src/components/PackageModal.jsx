import { useState } from "react";

const PackageModal = ({ id }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [packageName, setPackageName] = useState("select");
 
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
              <form name="packageForm" method="POST" action="/success">
                <input type="hidden" name="form-name" value="packageForm" />
                <p className="navbar-brand my-3 text-center">
                  Sheikh <span>Khurram</span>
                </p>
                <input
                  type="text"
                  value={name}
                  id="name"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required={true}
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required={true}
                />
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your phone"
                  required={true}
                />
                <select
                  id="package"
                  name="package"
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
