import React from "react";
import { Table, Row, Col } from "reactstrap";
import styled from "styled-components";

const Example = (props) => {
  return (
      <DoneWrapper>
    <Row>
      <Col xs="12">
        <Table>
          <thead>
            <tr>
              <th>
                <img src="/images/Arrow.png" alt="bkefervwkb" />
                Done
              </th>
              <th>Owner</th>
              <th>Status</th>
              <th>Due date</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Task 1 <img src="/images/Message.png" alt="bkefervwkb" />
              </td>
              <td>
                <img src="/images/Owner.png" alt="bkefervwkb" />
              </td>
              <td>Working on it</td>
              <td className="colorWrapper">mar 6</td>
              <td>
                <span></span>
              </td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
    </DoneWrapper>
  );
};

export default Example;


const DoneWrapper = styled.div`
  .colorWrapper {
    background: #ff8400a8;
    color: white;
  }
`;
