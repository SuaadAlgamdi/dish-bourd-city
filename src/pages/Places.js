import { Button } from "react-bootstrap"
import { useState } from "react"
import { Table } from "react-bootstrap"
import AddIcon from "@mui/icons-material/Add"
import PlaceRow from "../components/PlaceRow"
import { useContext } from "react"
import CitysContext from "../utils/CitysContext"
import PlaceAddModale from "../components/PlaceAddModal"

function Places() {
  const { places } = useContext(CitysContext)
  console.log(places)
  const [show, setShow] = useState(false)
  return (
    <>
      <h1 style={{ marginTop: 10 }}>place</h1>
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
            <th style={{ width: "18%" }}>City</th>
            <th style={{ width: "18%" }}>logo</th>
            <th style={{ width: "18%" }}> type</th>
            <th style={{ width: "18%" }}> location</th>
            <th style={{ width: "10%" }}>Rating</th>
            <th style={{ width: "18%" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {places.map(place => (
            <PlaceRow key={place._id} place={place} />
          ))}
        </tbody>
      </Table>
      <PlaceAddModale show={show} setShow={setShow} />
    </>
  )
}

export default Places
