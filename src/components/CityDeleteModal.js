import { Modal, Button } from "react-bootstrap"
import { useContext } from "react"
import CitysContext from "../utils/CitysContext"

function CityDeleteModal(props) {
  const { show, setShow, cityId } = props
  const { deleteCity } = useContext(CitysContext)
  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete City</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Are you sure to delete this city ?</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => deleteCity(cityId)}>
            Delete City{" "}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default CityDeleteModal
