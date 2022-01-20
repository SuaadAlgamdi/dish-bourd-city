import { Modal, Button } from "react-bootstrap"
import { useContext } from "react"
import CitysContext from "../utils/CitysContext"

function ProductDeleteModal(props) {
  const { show, setShow, productId } = props
  const { deleteProduct } = useContext(CitysContext)
  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete product</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Are you sure to delete this product ?</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => deleteProduct(productId)}>
            Delete product{" "}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ProductDeleteModal
