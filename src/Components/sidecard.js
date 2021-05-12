import React, { Fragment } from 'react';
import Must from '../MustangShine.jpg'
import Chal from '../ChallengerShine.jpg'
import Cama from '../CamaroShine.jpg'
 
import {
  Button, Card, CardImg, CardBody,
  CardTitle, CardText, CardDeck
} from 'reactstrap';

const SideCard = () => (
  <Fragment>

  <CardDeck>

    <Card>
      <CardImg top width="100%" src={Must} alt="Mustang Photo" />
      <CardBody>
        <CardTitle className="h3 mb-2 pt-2 font-weight-bold text-secondary">Diamond Package</CardTitle>
        <CardText className="text-secondary mb-4" style={{ fontSize: '0.75rem' }}>Exterior Wash, Claybar treatment, 2-step Polish and Compound, Ceramic Coating. All windows treated...</CardText>
        <Button color="success" className="font-weight-bold">More Info</Button>
      </CardBody>
    </Card>
    <Card>
      <CardImg top width="100%" src={Chal} alt="Challenger Photo" />
      <CardBody>
        <CardTitle className="h3 mb-2 pt-2 font-weight-bold text-secondary">Platinum Package</CardTitle>
        <CardText className="text-secondary mb-4" style={{ fontSize: '0.75rem' }}>Exterior Wash, Claybar treatment, 2-step Polish and Compound, Wax. Windshield Treatment...</CardText>
        <Button color="success" className="font-weight-bold">More Info</Button>
      </CardBody>
    </Card>
    <Card>
      <CardImg top width="100%" src={Cama} alt="Camaro Photo" />
      <CardBody>
        <CardTitle className="h3 mb-2 pt-2 font-weight-bold text-secondary">Gold Package</CardTitle>
        <CardText className="text-secondary mb-4" style={{ fontSize: '0.75rem' }}>Exterior Wash, Claybar treatment, One-step AIO. Glass cleaned inside and out...</CardText>
        <Button color="success" className="font-weight-bold">More Info</Button>
      </CardBody>
    </Card>

    </CardDeck>
    
  </Fragment>
);

export default SideCard;