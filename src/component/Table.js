import React, { useState } from 'react';
import { Table,Row,Col, Input } from 'reactstrap';
import styled from "styled-components";

const Example = ({ data: { headers, rows }, addNewColumn, addRow }) => {
  const [addColumn, setAddColumn] = useState(false);
  const [addRowInput, setAddRowInput] = useState(false);

  return (
    <TableWrapper>
      <Row>
        <Col>
          <Table>
            <thead>
              <tr>
                {headers.map((header) => {
                  if (header === "things to do") {
                    return (
                      <th>
                        <img src="/images/Arrow.png" alt="bkefervwkb" />
                        Things to do
                      </th>
                    );
                  }
                  return <th>{header}</th>;
                })}
                {addColumn ? (
                  <input
                    id="newColName"
                    onKeyDown={({ keyCode }) => {
                      if (keyCode == "13") {
                        addNewColumn();
                        setAddColumn(false);
                      }
                    }}
                  />
                ) : (
                  <th
                    onClick={() => {
                      setAddColumn(true);
                      setTimeout(() => {
                        document.getElementById("newColName").focus();
                      }, 100);
                    }}
                  >
                    (+)
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => {
                return (
                  <tr>
                    {row.map((col, index) => {
                      if (index === 0) {
                        return (
                          <td>
                            {col}
                            <img src="/images/Message.png" alt="bkefervwkb" />
                          </td>
                        );
                      }

                      if (index === 1) {
                        return (
                          <td>
                            <img src="/images/Owner.png" alt="bkefervwkb" />
                          </td>
                        );
                      }

                      if (index === 3) {
                        return <td className="colorTable1">{col}</td>;
                      }
                      return <td>{col}</td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
        <tr onClick={() => {setAddRowInput(true); setTimeout(()=>{ document.getElementById("newRowText").focus() }, 100) } } className="add-new-row">
          {" "}
          {addRowInput ? (
            <input
              id="newRowText"
              onKeyDown={({ keyCode }) => {
                if (keyCode == "13") {
                  addRow();
                  setAddRowInput(false);
                }
              }}
            />
          ) : (
            "+ New Row"
          )}
        </tr>
      </Row>
    </TableWrapper>
  );
};

export default Example;


const TableWrapper = styled.div`
  .colorTable1 {
    background: #ff8400a8;
    color: white;
  }
  .colorTable2 {
    background: red;
    color: white;
  }
  .colorTable3 {
    background: blue;
    color: white;
  }
  .colorTable4 {
    background: green;
    color: white;
  }

  .add-new-row {
    width: 100%;
    background-color: #00ff1336;
    padding: 10px 20px;
  }
`;