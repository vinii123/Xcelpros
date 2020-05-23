import React from 'react';
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";
import LeftNav from "./component/LeftNav";
import Table from "./component/Table";
import WorkSpaces from "./component/WorkSpaces";
import UpperNav from "./component/UpperNav";
import DoneTable from "./component/DoneTable";

class App extends React.Component {
  state = {
    data: {
      "Web Design": { headers: ["things to do", "owner", "status", "due date", "priority"], rows: [["New Item", "bkefervwkb",	"Working on it", 	"Apr 9",	"Urgent"], ] },
    },
    newPageInput: false,
    currentPageIndex: 0,
  };
  

  addNewPage = (e) => {
    const { newPageInput } = this.state;
    if (!newPageInput) {
      return this.setState({ newPageInput: true }, () => {
        document.getElementById("newPageInput").focus();
      });
    }
    const value = document.getElementById("newPageInput").value;
    const data = JSON.parse(JSON.stringify(this.state.data));
    data[value] = {
      headers: ["things to do", "owner", "status", "due date", "priority"],
      rows: [],
    };
    this.setState({ data, newPageInput: false });
    document.getElementById("newPageInput").value = "";
  };

  setPageIndex = (currentPageIndex) => {
    this.setState({ currentPageIndex });
  };

  addNewColumn = () => {
    const { data, currentPageIndex } = this.state;
    const pageKey = Object.keys(data)[currentPageIndex];
    const newColName = document.getElementById("newColName").value;
    data[pageKey].headers.push(newColName);
    document.getElementById("newColName").value = "";
  }

  addRow = () => {
    const { data, currentPageIndex } = this.state;
    const pageKey = Object.keys(data)[currentPageIndex];
    const newRowText = document.getElementById("newRowText").value;
    data[pageKey].rows.push([newRowText]);
    this.setState({data});
  }

  render() {
    const { data, newPageInput, currentPageIndex } = this.state;

    return (
      <AppHeader>
        <Container>
          <Row>
            <Col className="colum1" xs="1">
              <LeftNav />
            </Col>
            <Col className="colum2" xs="4">
              <WorkSpaces
                setPageIndex={this.setPageIndex}
                newPageInput={newPageInput}
                data={data}
                currentPageIndex={currentPageIndex}
                addNewPage={this.addNewPage}
              />
            </Col>
            <Col xs="8" className="colum3">
              <Row>
                <Col className="colum3-1">
                  <UpperNav name={Object.keys(data)[currentPageIndex]} />
                </Col>
              </Row>
              <Row>
                <Col className="colum3-2">
                  <Table
                    addRow = {this.addRow}
                    addNewColumn={this.addNewColumn}
                    data={Object.values(data)[currentPageIndex]}
                  />
                </Col>
              </Row>
              <Row>
                <Col className="colum3-3">
                  <DoneTable />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </AppHeader>
    );
  }
}

export default App;


const AppHeader = styled.div`
  .colum1 {
    margin-left: -90px;
    background-color:grey;
  }
  .colum3{
    margin: 10px 0px 0px -59px;
    .colum3-2{
      margin-top:40px;
    }
  }
  .colum3-3{
    margin-top: 60px;
  }
`;