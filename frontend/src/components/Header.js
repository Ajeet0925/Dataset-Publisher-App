import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark" id="bg">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <a
            className="navbar-brand"
            style={{ color: "White", fontSize: "40px" }}
          >
            <i class="fab fa-hornbill"></i>
            <h3 style={{ fontStyle: "italic", fontWeight: "bold" }}>
              OpenData
            </h3>
          </a>

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/homepage"
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  fontStyle: "italic",
                  marginLeft: "5px",
                  color: "white",
                }}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/loginpage"
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  fontStyle: "italic",
                  color: "white",
                  marginLeft: "5px",
                }}
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/signup"
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  fontStyle: "italic",
                  color: "white",
                  marginLeft: "5px",
                }}
              >
                SignUp
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/AddDataset"
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  fontStyle: "italic",
                  color: "white",
                  marginLeft: "5px",
                }}
              >
                AddData
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/browsing"
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  fontStyle: "italic",
                  color: "white",
                  marginLeft: "5px",
                }}
              >
                Browsing
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/view"
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  fontStyle: "italic",
                  color: "white",
                  marginLeft: "5px",
                }}
              >
                ViewData
              </NavLink>
            </li>
            <input
              type="search"
              class="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
              style={{
                width: "250px",
                marginLeft: "15px",
                height: "35px",
                marginTop: "8px",
              }}
            />
            <span class="input-group-text border-0" id="search-addon">
              <i
                class="fas fa-search"
                style={{ color: "white", marginTop: "8px", fontSize: "20px" }}
              ></i>
            </span>
          </ul>
        </div>
        <div className="d-flex align-items-center">
          <a className="text-reset me-3" href="#">
            <i
              className="fas fa-shopping-cart"
              style={{ fontSize: "20px", color: "white" }}
            ></i>
          </a>

          <div className="dropdown">
            <a
              className="text-reset me-3 dropdown-toggle hidden-arrow"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <i
                className="fas fa-bell"
                style={{ fontSize: "20px", color: "white", marginRight: "5px" }}
              ></i>
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li>
                <a className="dropdown-item" href="#">
                  Some news
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another news
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>

          <div className="dropdown">
            <a
              className="dropdown-toggle d-flex align-items-center hidden-arrow"
              href="#"
              id="navbarDropdownMenuAvatar"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            ></a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuAvatar"
            >
              <li>
                <a className="dropdown-item" href="#">
                  Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Logout
                </a>
              </li>
            </ul>
            <div className="d-flex align-items-center">
              <a
                className="btn btn-light px-3"
                href="https://github.com/digipodium/DP-2022-MAR-MERN-10-00-WSS"
                role="button"
              >
                <i className="fab fa-github" style={{ fontSize: "20px" }}></i>
              </a>

              <a
                className="btn btn-light px-3"
                style={{ marginLeft: "5px", marginRight: "10px" }}
                href="https://www.amazon.in/amazonpay/home?ref_=apay_logo_APayDashboard"
                role="button"
              >
                <i
                  class="fab fa-cc-amazon-pay"
                  style={{ fontSize: "20px" }}
                ></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
