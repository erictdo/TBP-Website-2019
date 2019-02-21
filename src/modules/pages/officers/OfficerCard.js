import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardFooter
} from "reactstrap";
import "../../../assets/fonts/FontStyles.css";
import "../../components/GlobalStyles.css";

const OfficerCards = props => {
  return (
    <Card style={cardStyle} className="h-100">
      <CardImg
        top
        width="100%"
        src={props.officer.imgSource}
        alt="Officer Image (not loaded)"
      />
      <CardBody>
        <CardTitle style={officerName} className="nexa-light">
          {props.officer.name}
        </CardTitle>
        <CardSubtitle style={officerPosition} className="nexa-light">
          {props.officer.position}
        </CardSubtitle>
        <CardSubtitle style={officerMajor} className="nexa-light">
          {props.officer.major}
        </CardSubtitle>
        <hr />
        <CardText style={officerBio} className="montserrat">
          {props.officer.bio}
        </CardText>
      </CardBody>
      <CardFooter style={officerEmail} className="nexa-light">
        {props.officer.email}
      </CardFooter>
    </Card>
  );
};

export default OfficerCards;

const cardStyle = {
  marginTop: "1.5rem",
  boxShadow: "1px 2px 6px rgba(0,0,0,0.1)"
};

const officerName = {
  fontSize: "2.5rem"
};

const officerPosition = {
  fontSize: "1rem",
  color: "rgba(0,0,0,0.5)",
  marginBottom: ".6rem"
};

const officerMajor = {
  fontSize: "1rem",
  letterSpacing: "0.1rem",
  fontWeight: "bold"
};

const officerBio = {
  fontSize: ".9rem",
  width: "100%",
  padding: 0
};

const officerEmail = {
  fontSize: ".8rem"
};
