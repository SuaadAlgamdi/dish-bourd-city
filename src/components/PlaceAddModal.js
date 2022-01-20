import { useContext } from "react"
import { Button, Col, Form, Image, ListGroup, Modal, Row } from "react-bootstrap"
import CitysContext from "../utils/CitysContext"

function PlaceAddModale(props) {
  const { show, setShow } = props
  const { addPlace, cities } = useContext(CitysContext)
  const types=["Restaurant", "Museum", "Mall", "Hotel", "TouristPlace", "Event"]

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form onSubmit={e => {
          addPlace(e)
          setShow(false)
          }}>
        <Modal.Header closeButton>
          <Modal.Title>Add Place</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              PlaceName
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="name" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Description
            </Form.Label>
            <Col md="8">
              <Form.Control as="textarea" name="description" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Logo
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="logo" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              location
            </Form.Label>
            <Col md="8">
              <Form.Control as="textarea" name="location" required />
            </Col>

          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              website
            </Form.Label>
            <Col md="8">
              <Form.Control as="textarea" name="website" required />
            </Col>
            
          </Form.Group>


       
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              photos
            </Form.Label>
            <Col md="8">
              <Form.Control as="textarea" name="photos" required />
            </Col>
            
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              City
            </Form.Label>
            <Col md="8">
              {cities.map(city => (
                <Row>
                  <Col md="2">
                    <Form.Check type="radio" name="city" value={city._id} />
                  </Col>
                  <Col md="2">
                    <span>{city.name}</span>
                  </Col>
                </Row>
              ))}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              type
            </Form.Label>
            <Col md="8">
              {types.map(type => (
                <Row>
                  <Col md="2">
                    <Form.Check type="radio" name="type" value={type} />
                  </Col>
                  <Col md="2">
                    <span>{type}</span>
                  </Col>
                </Row>
              ))}
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Add place
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default PlaceAddModale
