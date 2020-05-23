import React from "react";
import { Row, Col } from "reactstrap";
import styled from "styled-components";

const WorkSpaces = ({ addNewPage = () => {}, newPageInput, data, setPageIndex, currentPageIndex }) => {
  return (
    <Wrapper>
      <Row>
        <div className="work">
          <Col>
            <Title>Workspaces</Title>
          </Col>
          <Row>
            <InputWork>
              <Col>
                <input type="search" placeholder="Filter boards..." />
              </Col>
            </InputWork>
          </Row>
          <MainWrapper>
            <Row>
              <Col className="mainWrapper1">
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  class="dropdown-toggle btn"
                >
                  <span class="sr-only" style={{ width: "1px" }}>
                    Toggle Dropdown
                  </span>
                </button>
              </Col>
              <Col className="mainWrapper2">
                <span>
                  <img src="/images/HomeMain.png" alt="bkefervwkb" />
                </span>
              </Col>
              <Col className="mainWrapper3">
                <h3>Main</h3>
              </Col>
              <Col className="mainWrapper4">
                <button onClick={addNewPage} className="buttonWrapper">
                  <img src="/images/AddButton.png" alt="bkefervwkb" />
                </button>
                {newPageInput && (
                  <div>
                    <input
                      id="newPageInput"
                      onKeyDown={({ keyCode }) => {
                        if (keyCode === 13) {
                          addNewPage();
                        }
                      }}
                    ></input>
                  </div>
                )}
              </Col>
            </Row>
          </MainWrapper>
          {Object.keys(data).map((item, index) => {
            return (
              <Row className={index===currentPageIndex ? "sidebarlist active": "sidebarlist"} >
                <div onClick={()=>setPageIndex(index)}>{item}</div>
              </Row>
            );
          })}
          <DashWrapper>
            <Row>
              <Col>
                <h1>Dashboards</h1>
              </Col>
            </Row>
          </DashWrapper>
          <Row>
            <GetWrapper>
              <Col>
                <b>
                  Get the mobile app{" "}
                  <span>
                    {" "}
                    <img src="/images/Icon.png" alt="bkefervwkb" />
                  </span>
                </b>
              </Col>
            </GetWrapper>
          </Row>
        </div>
      </Row>
    </Wrapper>
  );
};

export default WorkSpaces;

const Wrapper = styled.div`
  .sidebarlist.active {
    background-color: #80808057;
  }
  .work {
    padding: 20px;
    max-width: 100%;
    border: solid 1px black;
    box-sizing: border-box;
  }
`;
const Title = styled.h1`
  font-size: 1.5em;
  text-align: left;
  color: black;
  margin-top: 15px;
`;
const DashWrapper = styled.h1`
   {
    padding: 20px;
    margin-top: 150px;
    margin-bottom: 20px;
    border: solid 1px black;
  }
`;

const GetWrapper = styled.b`
   {
    padding: 8px;
    margin-left: 16px;
    border-radius: 15px;
    border: solid 1px black;
  }
`;
const MainWrapper = styled.button`
   {
    margin-top: 40px;
  }
  .mainWrapper1 {
  }
  .mainWrapper2 {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-grow: 30;
  }
  .mainWrapper3 {
    flex-grow: 300;
    align-items: center;
  }
  .mainWrapper4 {
    flex-grow: 110;
    position: relative;
  }

  .mainWrapper4 > div {
    left: -109px;
    top: 43px;
    position: absolute;
  }

  .buttonWrapper {
    border: none;
    background: none;
    margin-top: 5px;
  }
`;
const InputWork = styled.div`
   {
    margin-top: 30px;
  }
`;
