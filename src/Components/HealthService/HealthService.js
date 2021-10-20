import { Card, Col } from "react-bootstrap";
import "./HealthServices.css";
// import { useHistory } from "react-router";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const HealthService = (props) => {
    const [card, setCard] = useState([])
  const { id, title, img } = props.service;
//   const history = useHistory();
  const url = `/allservice/${id}`;

//   const handleOnClick = ()=>{
//       ;
      
//   }


  useEffect(() => {
      fetch("/fakedata.json")
      .then(res=>res.json())
      .then(data => setCard(data))
      
  }, [])
  return (
    <div style={{ height: "auto" }} >
      {/* <div className="row row-cols-1 row-cols-md-2 "> */}

      {/* <div className="col">
    <div className="card">
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title"> {title} </h5>
        
      </div>
    </div>
  </div>
        
   </div> */}
      {/*  */}

      <Col>
        <Card>
          <Card.Img variant="top" src={img} className="img_class" />
          <Card.Body>
            <Card.Title> <h1> {title} </h1> </Card.Title>
            <Card.Text>
            <p className="card-text"> Which services do you want to get</p>
        
            </Card.Text>
            <div className="d-grid gap-2">
              <Link className="btn btn-primary"
              variant="primary" 
              size="lg"
              to= {url}
              >
                Booked the services now
              </Link>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default HealthService;
