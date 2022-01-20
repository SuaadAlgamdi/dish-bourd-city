import { useContext } from "react"
import { Col, Form, Row, Button, Modal } from "react-bootstrap"
import CitysContext from "../utils/CitysContext"

function PlaceEditModal(props) {
  const { show, setShow, place } = props
  const { editPlace } = useContext(CitysContext)

  console.log("editPlace")
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form className="mt-5" onSubmit={e => editPlace(e, place._id)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit place</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Name
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="name" defaultValue={place.name} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              description
            </Form.Label>
            <Col md="8">
              <Form.Control as="textarea" name="description" defaultValue={place.description} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              logo
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="logo" defaultValue={place.logo} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              photos
            </Form.Label>
            <Col md="8">
              <Form.Control as="textarea" name="photos" defaultValue={place.photos} required />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              location
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="location" defaultValue={place.location} required />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              website
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="website" defaultValue={place.website} required />
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="success" type="submit" onClick={() => setShow(false)}>
            Confirm Edit
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}
export default PlaceEditModal
