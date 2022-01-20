import { ListGroup, Button, Modal } from "react-bootstrap"

function CityViewModel(props) {
  const { show, setShow, city } = props

  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>View city</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            <ListGroup.Item>
              <strong>name:</strong> {city.name}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Description:</strong> {city.description}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>photo:</strong>{" "}
              <img src={city.photo} style={{ objectFit: "contain", height: "200px", width: "100%" }} />
            </ListGroup.Item>
          
            <ListGroup.Item>
              <strong>Restaurants</strong>
              <ListGroup style={{ maxHeight: "100px", overflowY: "scroll" }}>
                {city.restaurants?.map(restaurant => (
                  <ListGroup.Item>{restaurant.name}</ListGroup.Item>
                ))}
              </ListGroup>
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Museums</strong>
              <ListGroup style={{ maxHeight: "100px", overflowY: "scroll" }}>
                {city.museums?.map(museum => (
                  <ListGroup.Item>{museum.name}</ListGroup.Item>
                ))}
              </ListGroup>
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Malls</strong>
              <ListGroup style={{ maxHeight: "100px", overfloeY: "scroll" }}>
                {city.malls?.map(mall => (
                  <ListGroup.Item>{mall.name}</ListGroup.Item>
                ))}
              </ListGroup>
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Events</strong>
              <ListGroup style={{ maxHeight: "100px", overflowY: "scroll" }}>
                {city.events?.map(event => (
                  <ListGroup.Item>{event.name}</ListGroup.Item>
                ))}
              </ListGroup>
            </ListGroup.Item>{" "}
            <ListGroup.Item>
              <strong>TouristPlaces</strong>
              <ListGroup style={{ maxHeight: "100px", overflowY: "scroll" }}>
                {city.touristPlaces?.map(touristPlace => (
                  <ListGroup.Item>{touristPlace.name}</ListGroup.Item>
                ))}
              </ListGroup>
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

export default CityViewModel
