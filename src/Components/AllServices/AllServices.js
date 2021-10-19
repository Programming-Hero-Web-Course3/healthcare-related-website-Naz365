

import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { Card, CardGroup } from "react-bootstrap";

const AllServices = () => {
    const { serviceId }= useParams()
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("/fakedata.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
                const newData = service.find(item=>item.id == serviceId)
                console.log(newData);
  return (
    <div>

<CardGroup>
        <Card>
          <Card.Img variant="top" src={newData?.img} />
          <Card.Body>
            <Card.Title> {newData?.title}</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>

      </div>
    
  );
};

export default AllServices;
