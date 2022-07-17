import NotificationButton from "../NotificationButton"
import "./styles.css"

function SalesCard() {
  return (
    <>
      <div className="dsmeta-card">
        <h2 className="dsmeta-sales-title">Vendas</h2>
        <div>
          <div className="dsmeta-form-control-container">
            <input className="dsmeta-form-control" type="text" />
          </div>
        </div>
        <div className="dsmeta-form-control-container">
          <input className="dsmeta-form-control" type="text" />
        </div>
      </div>


      <div>
        <table className="dsmeta-sales-table">
          <thead>
            <tr>
              <th className="show992">ID</th>
              <th className="show576">Data</th>
              <th className="show576">Vendedor</th>
              <th className="show992">Visitas</th>
              <th className="show992">Vendas</th>
              <th>Total</th>
              <th>Notificar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="show992">#180921</td>
              <td className="show576">13/07/2022</td>
              <td>Leonardo</td>
              <td className="show992">20</td>
              <td className="show992">15</td>
              <td>R$ 55400.00</td>
              <td>
                <div className="dsmeta-red-btn-container">
                <NotificationButton />  
                </div>
              </td>
            </tr>
            <tr>
              <td className="show992">#250320</td>
              <td className="show576">13/07/2022</td>
              <td>Sarah</td>
              <td className="show992">15</td>
              <td className="show992">11</td>
              <td>R$ 52400.00</td>
              <td>
                <div className="dsmeta-red-btn-container">
                <NotificationButton />    
                </div>
              </td>
            </tr>
            <tr>
              <td className="show992">#280921</td>
              <td className="show576">13/07/2022</td>
              <td>Bernardo</td>
              <td className="show992">13</td>
              <td className="show992">11</td>
              <td>R$ 50400.00</td>
              <td>
                <div className="dsmeta-red-btn-container">
                <NotificationButton />    
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </>

  )
}

export default SalesCard
