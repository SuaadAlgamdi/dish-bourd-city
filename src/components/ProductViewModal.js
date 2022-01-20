import { ListGroup, Button, Modal, Form, Col, Row } from "react-bootstrap"

function ProductViewModal(props) {
  const { show, setShow, product } = props

  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>View Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            <ListGroup.Item>
              <strong>name:</strong> {product.name}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Description:</strong> {product.description}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>photo:</strong>{" "}
              <img src={product.photo} style={{ objectFit: "contain", height: "200px", width: "100%" }} />
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Price:</strong> {product.price}
            </ListGroup.Item>

            {/* <Form.Group as={Row} className="mb-3">
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
          </Form.Group> */}

            {/* <ListGroup.Item>
            <strong>Actors:</strong>
            <ListGroup>
              {city.actors.map(actor => (
                <ListGroup.Item>
                  <Image src={actor.photo} roundedCircle height={50} width={50} style={{ objectFit: "cover" }} />
                  <span style={{ marginLeft: 10 }}>
                    {actor.firstName} {actor.lastName}
                  </span>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Director:</strong>
            <ListGroup>
              <ListGroup.Item>
                <Image src={city.director.photo} roundedCircle height={50} width={50} style={{ objectFit: "cover" }} />
                <span style={{ marginLeft: 10 }}>
                  {city.director.firstName} {city.director.lastName}
                </span>
              </ListGroup.Item>
            </ListGroup>
          </ListGroup.Item> */}
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ProductViewModal
