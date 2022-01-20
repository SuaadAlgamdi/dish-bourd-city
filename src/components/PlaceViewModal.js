import { ListGroup, Button, Modal } from "react-bootstrap"

function PlaceViewModal(props) {
  const { show, setShow, place, city } = props
console.log(place);
  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>View place</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            <ListGroup.Item>
              <strong>name:</strong> {place.name}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Description:</strong> {place.description}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>photo:</strong>{" "}
              <img src={place.photos[0]} style={{ objectFit: "contain", height: "200px", width: "100%" }} />
            </ListGroup.Item>
            <ListGroup.Item>
              <strong> {place.ratingAverage}</strong>
            </ListGroup.Item>
            <ListGroup.Item>
              <strong> {place.city.name}</strong>
            </ListGroup.Item>

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

export default PlaceViewModal
