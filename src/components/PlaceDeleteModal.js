import { Modal, Button } from "react-bootstrap"
import { useContext } from "react"
import CitysContext from "../utils/CitysContext"

function PlaceDeleteModal(props) {
  const { show, setShow, placeId } = props
  const { deletePlace } = useContext(CitysContext)
  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete place</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Are you sure to delete this place ?</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => deletePlace(placeId)}>
            Delete place{" "}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default PlaceDeleteModal
