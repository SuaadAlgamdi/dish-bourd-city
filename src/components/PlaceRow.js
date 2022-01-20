import { useState } from "react"
import { Button } from "react-bootstrap"
import PlaceDeleteModal from "./PlaceDeleteModal"
import PlaceEditModal from "./PlaceEditModal"
import PlaceViewModal from "./PlaceViewModal"

function PlaceRow(props) {
  const { place } = props
  const [viewShow, setViewShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)
  const [editShow, setEditShow] = useState(false)

  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{place._id}</td>
      <td>{place.name}</td>
     
      <td>{place.city.name}</td>
      <td>
        {" "}
        <img src={place.logo} style={{ objectFit: "contain", height: "100px", width: "100%" }} />
      </td>
      <td>{place.type}</td>
      <td>{place.location}</td>
      <td>{place.ratingAvarage}</td>

      <td>
        <Button variant="info" className="me-2" onClick={() => setViewShow(true)}>
          View
        </Button>
        <Button variant="success" className="me-2" onClick={() => setEditShow(true)}>
          Edit
        </Button>
        <Button variant="danger" onClick={() => setDeleteShow(true)}>
          Delete
        </Button>
      </td>
      <PlaceViewModal show={viewShow} setShow={setViewShow} place={place} />
      <PlaceDeleteModal show={deleteShow} setShow={setDeleteShow} placeId={place._id} />
      <PlaceEditModal show={editShow} setShow={setEditShow}place={place}/>     
    </tr>
  )
}

export default PlaceRow
