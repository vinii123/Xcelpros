import React from 'react';
import { Row, Col } from 'reactstrap';
import styled from 'styled-components';



const NavHeader = (props) => {


    return (
      <Header>
        <Row style={{ marginTop: "20px" }}>
          <Col>
            <img src="/images/Logo.png" alt="bkefervwkb" />
          </Col>
        </Row>
        <Row style={{ marginTop: "20px" }}>
          <Col>
            <img src="/images/Bell.png" alt="bkefervwkb" />
          </Col>
        </Row>
        <Row style={{ marginTop: "20px" }}>
          <Col>
            <img src="/images/Download.png" alt="bkefervwkb" />
          </Col>
        </Row>
        <Row style={{ marginTop: "280px" }}>
          <Col>
            <img src="/images/Office.png" alt="bkefervwkb" />
          </Col>
        </Row>
        <Row style={{ marginTop: "20px" }}>
          <Col>
            <img src="/images/Addmember.png" alt="bkefervwkb" />
          </Col>
        </Row>
        <Row style={{ marginTop: "20px" }}>
          <Col>
            <img src="/images/Search.png" alt="bkefervwkb" />
          </Col>
        </Row>
        <Row style={{ marginTop: "20px" }}>
          <Col>
            <img src="/images/Question.png" alt="bkefervwkb" />
          </Col>
        </Row>
        <Row style={{ marginTop: "20px" }}>
          <Col>
            <img src="/images/Admin.png" alt="bkefervwkb" />
          </Col>
        </Row>
      </Header>
    );
}

export default NavHeader;


const Header = styled.div`
  .left-nav-wrapper {
      max-width:10%;
    border: solid 1px blue;
   color: black;
  }
`;