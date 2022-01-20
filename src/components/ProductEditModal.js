import { useContext } from "react"
import { Col, Form, Row, Button, Modal } from "react-bootstrap"
import CitysContext from "../utils/CitysContext"

function ProductEditModal(props) {
  const { show, setShow, product } = props
  const { editProduct } = useContext(CitysContext)

  console.log("editProduct")
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form className="mt-5" onSubmit={e => editProduct(e, product._id)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Name
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="name" defaultValue={product.name}  />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              description
            </Form.Label>
            <Col md="8">
              <Form.Control as="textarea" name="description" defaultValue={product.description}  />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Photo
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="photo" defaultValue={product.photo}  />
            </Col>
          </Form.Group>

         

          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              price
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="price" defaultValue={product.price}  />
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
export default ProductEditModal
