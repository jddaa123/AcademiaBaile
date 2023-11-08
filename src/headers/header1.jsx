export function Header1() {
  return (
    <>
      <header>
        <nav class="navbar navbar-custom navbar-expand-lg mwnu navbar-dark fixed-top">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              URBAN STYLE
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a className="nav-link " href="#">
                    Link
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" aria-disabled="true">
                    Disabled
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <div className="banner col-6 fw-bold position-relative">
        <img src="/src/assets/img/nnegro.jpg" alt="fondo negro" />
        <div className="textoBanner container-fluid text-start">
          <p className="alcance">A TU ALCANCE</p>
          <br />
          <h1>PROYECTO ACADEMIA BAILE</h1> <br />
          <br />
          <p className="lorem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a enim
            nec nisl ullamcorper eleifend. Praesent risus leo, fringilla et
            ipsum.
          </p>
          <button type="button" className="btn btn-primary mt-5 w-50">
            UNETE A NOSOTROS
          </button>
        </div>
        <img src="/src/assets/img/bailarin.png" alt="bailarin img" />
      </div>
    </>
  );
}
