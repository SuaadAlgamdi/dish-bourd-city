import { useState } from "react"
import { Button } from "react-bootstrap"
import ProductDeleteModal from "./ProductDeleteModal"
import ProductEditModal from "./ProductEditModal"
import ProductViewModal from "./ProductViewModal"

function ProductRow(props) {
  const { product } = props
  const [viewShow, setViewShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)
  const [editShow, setEditShow] = useState(false)

  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{product._id}</td>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>
        
        <img src={product.photo} style={{ objectFit: "contain", height: "100px", width: "100%" }} />
      </td>

      <td>{product.place?.name}</td>
      
   
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

      <ProductEditModal show={editShow} setShow={setEditShow} product={product} />
      <ProductDeleteModal show={deleteShow} setShow={setDeleteShow} productId={product._id} />
      <ProductViewModal show={viewShow} setShow={setViewShow} product={product} />

    </tr>
  )
}

export default ProductRow
