import React from 'react';
import { Card,CardImg, Row, Col } from 'reactstrap';

const Example = (props) => {
  return (
    <Row>
      <h2>
        Graphic Design
      </h2>
      <Col sm="3">
        <Card body>
        <CardImg top width="100%" src={` ${process.env.PUBLIC_URL}/assets/images/ebola1.jpg`}alt="Card image cap" />
        </Card>
      </Col>
      <Col sm="3">
        <Card body>
        <CardImg top width="100%" src={` ${process.env.PUBLIC_URL}/assets/images/ebola4.jpg`}alt="Card image cap" />
        </Card>
      </Col>

      <Col sm="3">
        <Card body>
        <CardImg top width="100%" src={` ${process.env.PUBLIC_URL}/assets/images/ebola3.jpg`}alt="Card image cap" />
        </Card>
      </Col>
      <Col sm="3">
        <Card body>
        <CardImg top width="100%" src={` ${process.env.PUBLIC_URL}/assets/images/ebola2.jpg`}alt="Card image cap" />
        </Card>
      </Col>

      <Col sm="3">
        <Card body>
        <CardImg top width="100%" src={` ${process.env.PUBLIC_URL}/assets/images/sis1.jpg`}alt="Card image cap" />
        </Card>
      </Col>
      <Col sm="3">
        <Card body>
        <CardImg top width="100%" src={` ${process.env.PUBLIC_URL}/assets/images/solo1.png`}alt="Card image cap" />
        </Card>
      </Col>

      <Col sm="3">
        <Card body>
        <CardImg top width="100%" src={` ${process.env.PUBLIC_URL}/assets/images/solo2.png`}alt="Card image cap" />
        </Card>
      </Col>
      <Col sm="3">
         <Card body>
         <CardImg className="img-fluid" src={` ${process.env.PUBLIC_URL}/assets/images/solo4.png`} alt="jojo" />
         </Card>
      </Col>

      <Col sm="3">
        <Card body>
        <CardImg className="img-fluid" src={` ${process.env.PUBLIC_URL}/assets/images/sis6.jpg`} alt="jojo" />
        </Card>
      </Col>
      <Col sm="3">
        <Card body>
        <CardImg className="img-fluid" src={` ${process.env.PUBLIC_URL}/assets/images/sis5.jpg`} alt="jojo" />
        </Card>
      </Col>

      <Col sm="3">
        <Card body>
        <CardImg className="img-fluid" src={` ${process.env.PUBLIC_URL}/assets/images/sis4.jpg`} alt="jojo" />
        </Card>
      </Col>
      <Col sm="3">
        <Card body>
        <CardImg className="img-fluid" src={` ${process.env.PUBLIC_URL}/assets/images/sis7.jpg`} alt="jojo" />
        </Card>
      </Col>

      <Col sm="3">
        <Card body>
        <CardImg className="img-fluid" src={` ${process.env.PUBLIC_URL}/assets/images/wedd1.jpg`} alt="jojo" />
        </Card>
      </Col>
      <Col sm="3">
        <Card body>
        <CardImg className="img-fluid" src={` ${process.env.PUBLIC_URL}/assets/images/wedd2.jpg`} alt="jojo" />
        </Card>
      </Col>

      <Col sm="3">
        <Card body>
        <CardImg className="img-fluid" src={` ${process.env.PUBLIC_URL}/assets/images/wedd3.jpg`} alt="jojo" />
        </Card>
      </Col>
      <Col sm="3">
        <Card body>
        <CardImg className="img-fluid" src={` ${process.env.PUBLIC_URL}/assets/images/wedd5.jpg`} alt="jojo" />
        </Card>
      </Col>
      <h2>
        Fashion Design
      </h2>
      <Col sm="3">
        <Card body>
        <CardImg className="img-fluid" src={` ${process.env.PUBLIC_URL}/assets/images/fash2.jpg`} alt="jojo" />
        </Card>
      </Col>
      <Col sm="3">
        <Card body>
        <CardImg className="img-fluid" src={` ${process.env.PUBLIC_URL}/assets/images/fash3.jpg`} alt="jojo" />
        </Card>
      </Col>

      <Col sm="3">
        <Card body>
        <CardImg className="img-fluid" src={` ${process.env.PUBLIC_URL}/assets/images/fash5.jpeg`} alt="jojo" />
        </Card>
      </Col>
      <Col sm="3">
        <Card body>
        <CardImg className="img-fluid" src={` ${process.env.PUBLIC_URL}/assets/images/fash6.jpeg`} alt="jojo" />
        </Card>
      </Col>

      <Col sm="3">
        <Card body>
        <CardImg className="img-fluid" src={` ${process.env.PUBLIC_URL}/assets/images/fash8.jpeg`} alt="jojo" />
        </Card>
      </Col>
      <Col sm="3">
        <Card body>
        <CardImg className="img-fluid" src={` ${process.env.PUBLIC_URL}/assets/images/fash12.jpg`} alt="jojo" />
        </Card>
      </Col>

      <Col sm="3">
        <Card body>
        <CardImg className="img-fluid" src={` ${process.env.PUBLIC_URL}/assets/images/fash11.jpg`} alt="jojo" />
        </Card>
      </Col>
      <Col sm="3">
        <Card body>
        <CardImg className="img-fluid" src={` ${process.env.PUBLIC_URL}/assets/images/fash1.jpeg`} alt="jojo" />
        </Card>
      </Col>
    </Row>
  );
};

export default Example;