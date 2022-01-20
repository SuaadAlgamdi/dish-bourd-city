import { Button, Table } from "react-bootstrap"
import { useContext, useState } from "react"
import CitysContext from "../utils/CitysContext"
import AddIcon from "@mui/icons-material/Add"
import ProductRow from "../components/ProductRow"
import ProductAddModale from "../components/ProductAddModal"

function Products() {
  const { products } = useContext(CitysContext)
  const [show, setShow] = useState(false)
  return (
    <>
      <h1 style={{ marginTop: 10 }}>Products</h1>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button style={{ marginRight: 40, marginBottom: 10 }} onClick={() => setShow(true)} variant="outline-primary">
          <AddIcon />
        </Button>
      </div>
      <Table bordered hover style={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th style={{ width: "9%" }}>#</th>
            <th style={{ width: "18%" }}>Name</th>
            <th style={{ width: "10%" }}>Price</th>
            <th style={{ width: "15%" }}>photo</th>
            <th style={{ width: "18%" }}>place</th>
            <th style={{ width: "20%" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <ProductRow key={product._id} product={product} />
          ))}
          <ProductAddModale show={show} setShow={setShow} />
        </tbody>
      </Table>
    </>
  )
}

export default Products
