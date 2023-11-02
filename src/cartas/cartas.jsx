export function Cartas() {
    const containerStyle = {
      background: "black",
      color: "white",
    };
  
    return (
      <>
        <div className="container-fluid text-center py-5 " style={containerStyle}>
          <div className="row">
            <div className="tarjeta col-md-6 col-lg-4">
              <div className="p-3">
                
                <h2 className="">EVENTO!</h2>
                <img 
                  src="/src/assets/img/foto2.png"
                  className="img-fluid rounded mt-4"
                  alt="Baile"
                />
                <button type="button" className="btn btn-primary mt-4 w-50">
                 BOLETAS!
                </button>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 align-self-center">
              <div className="p-3 d-flex flex-column justify-content-center align-items-center">
                <img
                  src="/src/assets/img/logoss.png"
                  className="img-fluid "
                  alt="logo"
                />
              </div>
            </div>
            <div className="tarjeta col-md-6 col-lg-4">
              <div className="p-3">
                <h2>CONTACTANOS!</h2>
                <img
                  src="/src/assets/img/foto2.png"
                  className="img-fluid rounded mt-4"
                  alt="apasionado"
                />
  
                <button type="button" className="btn btn-primary mt-4 w-50">
                  MAS DE NOSTROS!
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }