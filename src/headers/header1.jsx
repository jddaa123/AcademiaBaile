    import { Cartas } from "../cartas/cartas";
export function Header1() {
  return (
    <>
      <header>
        <nav className="navbar navbar-custom navbar-expand-lg mwnu navbar-dark fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              URBAN STYLE
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#">
                    Link
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
                    Dropdown
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
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" aria-disabled="true">
                    Disabled
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <div className="particulas container-fluid g-0">
          <div className="row g-0">
            <div className="col-6 p-5 text-center">
              <video autoPlay loop muted className="video-background">
                <source src="/src/assets/vid/particulas.mp4" type="video/mp4" />
              </video>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <p className="alcance">A TU ALCANCE</p>
              <br />
              <h1>PROYECTO ACADEMIA BAILE</h1> <br />
              <br />
              <p className="lorem">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a
                enim nec nisl ullamcorper eleifend. Praesent risus leo,
                fringilla et ipsum.
              </p>
              <button type="button" className="btn btn-primary mt-5 w-50">
                UNETE A NOSOTROS
              </button>
            </div>
            <div className="col-6">
              <img
                src="../../src/assets/img/bailarin.png"
                className="img-fluid w-75 bailarin d-none d-md-block"
              />
            </div>
            <Cartas></Cartas>
          </div>
        </div>
      </main>
    </>
  );
}