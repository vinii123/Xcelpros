import React from "react";
import { Row, Col } from "reactstrap";
import styled from "styled-components";

const UpperNav = ({name}) => {
    return (
      <WrapContent>
        <UpperNavBar>
          <Row>
            <Col className="session1">
              <Row>
                <Col xs="auto">
                <h3>{name}</h3>
                </Col>
                <Col xs="8" className="nav-right">
                  <Row>
                    <Col xs="auto">
                      <a href="#User+one">
                        <img
                          width="50px"
                          src="/images/User+one.png"
                          alt="bkefervwkb"
                        />
                      </a>
                    </Col>
                    <Col xs="auto">
                      <a href="#Changer">
                        <img
                          width="50px"
                          src="/images/Changer.png"
                          alt="bkefervwkb"
                        />
                      </a>
                    </Col>
                    <Col xs="auto">
                      <a href="#Swtich">
                        <img
                          width="50px"
                          src="/images/Swtich.png"
                          alt="bkefervwkb"
                        />
                      </a>
                    </Col>
                    <Col xs="auto">
                      <a href="#Zoom">
                        <img
                          width="100px"
                          src="/images/Zoom.png"
                          alt="bkefervwkb"
                        />
                      </a>
                    </Col>
                    <Col xs="auto">
                      <a href="#Activities">
                        <img
                          width="100px"
                          src="/images/Activities.png"
                          alt="bkefervwkb"
                        />
                      </a>
                    </Col>
                    <Col xs="auto">
                      <a href="#3dot">
                        {" "}
                        <img
                          width="20px"
                          src="/images/3dot.png"
                          alt="bkefervwkb"
                        />
                      </a>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </UpperNavBar>
        <LowerNavBar>
          <Row>
            <Col>
              <Row>
                <Col>
                  <a href="#NewItem">
                    <img
                      width="100px"
                      src="/images/MainTable.png"
                      alt="bkefervwkb"
                    />
                  </a>
                </Col>
                <Col xs="auto">
                  <Row>
                    <Col>
                      <a href="#NewItem">
                        <img
                          width="100px"
                          src="/images/NewItem.png"
                          alt="bkefervwkb"
                        />
                      </a>
                    </Col>
                    <Col xs="auto">
                      <input
                        className="search-bar"
                        type="search"
                        placeholder="Search/Filter boards"
                        width="100px"
                      />
                    </Col>
                    <Col xs="0.5">
                      <a href="#owner">
                        <img
                          width="20px"
                          src="/images/Owner.png"
                          alt="bkefervwkb"
                        />
                      </a>
                    </Col>
                    <Col xs="0.5">
                      <a href="#eye">
                        <img
                          width="20px"
                          src="/images/Eye.png"
                          alt="bkefervwkb"
                        />
                      </a>
                    </Col>
                    <Col xs="0.5">
                      <a href="#colum">
                        <img
                          width="20px"
                          src="/images/3colum.png"
                          alt="bkefervwkb"
                        />
                      </a>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </LowerNavBar>
      </WrapContent>
    );

}

export default UpperNav;


const WrapContent = styled.div``;

const UpperNavBar = styled.div`
    width:800px;
    .nav-right{
        Col{
            padding:0px;
        }
    }

`;
const LowerNavBar = styled.div`
    .search-bar{
        border-radius:20px;
    }

`;