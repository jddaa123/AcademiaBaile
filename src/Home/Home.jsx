import "./Home.css";
export function Home() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark menu fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              URBAN STYLE
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    INICIO
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    CURSOS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    EVENTOS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    CONTACTO
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown link
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <div className="banner">
        <div className="black-bg">
          <div className="b text-white">
            <h3>A TU ALCANCE</h3>
            <h2>
              PROYECTO <br></br>ACADEMIA <br></br> BAILE
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a enim
              nec nisl ullamcorper eleifend. Praesent risus leo, fringilla et
              ipsum.
            </p>
            <button className="btn btn-outline-light">UNETE A NOSOTROS</button>
          </div>
        </div>
        <div className="imagen">
          <img src="/src/assets/img/bailarin.png" alt="bailarin" />
        </div>
      </div>
    </>
  );
}
