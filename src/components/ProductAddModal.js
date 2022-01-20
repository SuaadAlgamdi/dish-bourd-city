import { useContext } from "react"
import { Button, Col, Form, Image, ListGroup, Modal, Row } from "react-bootstrap"
import CitysContext from "../utils/CitysContext"

function ProductAddModale(props) {
  const { show, setShow } = props
  const { addProduct, places } = useContext(CitysContext)

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form
        onSubmit={e => {
          addProduct(e)
          setShow(false)
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Name
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="name" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Price
            </Form.Label>
            <Col md="8">
              <Form.Control as="textarea" name="price" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Photo
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="photo" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              description
            </Form.Label>
            <Col md="8">
              <Form.Control as="textarea" name="description" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Place
            </Form.Label>
            <Col md="8">
              {places.map(place => (
                <Row>
                  <Col md="2">
                    <Form.Check type="radio" name="place" value={place._id} />
                  </Col>
                  <Col md="2">
                    <span>{place.name}</span>
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

export default ProductAddModale
