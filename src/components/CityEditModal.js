
import { useContext } from "react"
import { Col, Form, Row, Button,Modal } from "react-bootstrap"
import CitysContext from "../utils/CitysContext"

function CityEditModal(props) {
  const { show, setShow, city } = props
  const { editCity } = useContext(CitysContext)
  console.log("hh");
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form className="mt-5" onSubmit={e => editCity(e, city._id)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit City</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Name
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="name" defaultValue={city.name} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              description
            </Form.Label>
            <Col md="8">
              <Form.Control as="textarea" name="description" defaultValue={city.description} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              photo
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="photo" defaultValue={city.photo} required />
            </Col>
          </Form.Group>
          {/* <Form.Group as={Row} className="mb-3">
              <Form.Label column md="3">
                Genres
              </Form.Label>
              <Col md="8">
                {genres.map(genreObject => (
                  <Row>
                    <Col md="2">
                      <Form.Check
                        type="checkbox"
                        name="genres"
                        defaultChecked={film.genres.find(genreFilm => genreFilm._id === genreObject._id)}
                        value={genreObject._id}
                      />
                    </Col>
                    <Col md="2">
                      <span>{genreObject.name}</span>
                    </Col>
                  </Row>
                ))}
              </Col>
            </Form.Group> */}
          {/* <Form.Group as={Row} className="mb-3">
              <Form.Label column md="3">
                Actors
              </Form.Label>
              <Col md="8">
                {actors.map(actor => (
                  <Row style={{ height: 55, display: "flex", alignItems: "center" }}>
                    <Col md="2">
                      <Form.Check
                        type="checkbox"
                        name="actors"
                        defaultChecked={film.actors.find(actorFilm => actorFilm._id === actor._id)}
                        value={actor._id}
                      />
                    </Col>
                    <Col md="7">
                      <Image src={actor.photo} roundedCircle height={50} width={50} style={{ objectFit: "cover" }} />
                      <span style={{ marginLeft: 10 }}>
                        {actor.firstName} {actor.lastName}
                      </span>
                    </Col>
                  </Row>
                ))}
              </Col>
            </Form.Group> */}
          {/* <Form.Group as={Row} className="mb-3">
              <Form.Label column md="3">
                Director
              </Form.Label>
              <Col md="8">
                {directors.map(director => (
                  <Row style={{ height: 55, display: "flex", alignItems: "center" }}>
                    <Col md="2">
                      <Form.Check
                        type="radio"
                        name="director"
                        defaultChecked={film.director._id === director._id}
                        value={director._id}
                      />
                    </Col>
                    <Col md="8">
                      <Image src={director.photo} roundedCircle height={50} width={50} style={{ objectFit: "cover" }} />
                      <span style={{ marginLeft: 10 }}>
                        {director.firstName} {director.lastName}
                      </span>
                    </Col>
                  </Row>
                ))}
              </Col>
            </Form.Group> */}
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
export default CityEditModal
