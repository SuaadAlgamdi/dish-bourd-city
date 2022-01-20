import { Button } from "react-bootstrap"
import { useContext, useState } from "react"
import { Table } from "react-bootstrap"
import AddIcon from "@mui/icons-material/Add"
import CityRow from "../components/CityRow"
import CityAddModal from "../components/CityAddModal"
import CitysContext from "../utils/CitysContext"

function Cities() {
  const { cities } = useContext(CitysContext)
  const [show, setShow] = useState(false)
  return (
    <>
      <h1 style={{ marginTop: 10 }}>Cities</h1>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button style={{ marginRight: 40, marginBottom: 10 }} onClick={() => setShow(true)} variant="outline-primary">
          <AddIcon />
        </Button>
      </div>
      <Table bordered hover style={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th style={{ width: "9%" }}>#</th>
            <th style={{ width: "18%" }}>Name</th>
          
            <th style={{ width: "20%" }}>photo</th>
            <th style={{ width: "30%" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cities.map(city => (
            <CityRow key={city._id} city={city} />
          ))}
        </tbody>
      </Table>
      <CityAddModal show={show} setShow={setShow} />
    </>
  )
}

export default Cities
