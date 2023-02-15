import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Calculator.css"

export const Calculator = () => {
  const [calNumber, setNumber] = useState("0");
  const [firstNum, setFirstNum] = useState("0");
  const [secNum, setSecNum] = useState("0");
  const [operator, setOperator] = useState("");
  const sum = () => {
    setFirstNum(calNumber);
    console.log(firstNum);
    setNumber('0');
    setOperator("+");
  }
  const sub = () => {
    setFirstNum(calNumber);
    console.log(firstNum);
    setNumber('0');
    setOperator("-");
  }
  const mul = () => {
    setFirstNum(calNumber);
    console.log(firstNum);
    setNumber('0');
    setOperator("*");
  }
  const divide = () => {
    setFirstNum(calNumber);
    console.log(firstNum);
    setNumber('0');
    setOperator("/");
  }
  const modulous = () =>{
    setFirstNum(calNumber);
    console.log(firstNum);
    setNumber('0');
    setOperator("%");
  }
  const equal = () => {
    let result = 0;
    if (operator === "+") {
      result = parseInt(firstNum) + parseInt(calNumber)
      setNumber(result.toString());
    } else if (operator === "-") {
      result = parseInt(firstNum) - parseInt(calNumber)
      setNumber(result.toString());
    } else if (operator === "*") {
      result = parseInt(firstNum) * parseInt(calNumber)
      setNumber(result.toString());
    } else if (operator === "/") {
      result = parseInt(firstNum) / parseInt(calNumber)
      setNumber(result.toString());
    }else if(operator === "%"){
      result = parseInt(firstNum) % parseInt(calNumber)
      setNumber(result.toString());
    }
  }
  const setInput = (number) => {
    if (calNumber > "0") {
      let newNum = calNumber + number;
      setNumber(newNum);
    } else {
      setNumber(number);
    }

  }
  const allClear = () => {
    setNumber("0");
    setFirstNum("0");
    setSecNum("0");
  }
  return (
    <Container className='my-5'>
      <Row>
        <Col lg={12} className="inputNumber">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="" value={calNumber} onChange={(e) => setNumber(e.target.value)} />
            </Form.Group>
          </Form>
        </Col>
        <Col lg={3} className="opBtn btn-cal">
          <Button onClick={allClear}>AC</Button>
        </Col>
        <Col lg={3} className="opBtn btn-cal">
          <Button>+/-</Button>
        </Col>
        <Col lg={3} className="opBtn btn-cal">
          <Button onClick={modulous}>%</Button>
        </Col>
        <Col lg={3} className="funcBtn btn-cal">
          <Button onClick={divide}>÷</Button>
        </Col>
        <Col lg={3} className="opBtn btn-cal">
          <Button onClick={() => setInput("7")}>7</Button>
        </Col>
        <Col lg={3} className="opBtn btn-cal">
          <Button onClick={() => setInput("8")}>8</Button>
        </Col>
        <Col lg={3} className="opBtn btn-cal">
          <Button onClick={() => setInput("9")}>9</Button>
        </Col>
        <Col lg={3} className="funcBtn btn-cal">
          <Button onClick={mul}>x</Button>
        </Col>
        <Col lg={3} className="opBtn btn-cal">
          <Button onClick={() => setInput("4")}>4</Button>
        </Col>
        <Col lg={3} className="opBtn btn-cal">
          <Button onClick={() => setInput("5")}>5</Button>
        </Col>
        <Col lg={3} className="opBtn btn-cal">
          <Button onClick={() => setInput("6")}>6</Button>
        </Col>
        <Col lg={3} className="funcBtn btn-cal">
          <Button onClick={sub}>-</Button>
        </Col>
        <Col lg={3} className="opBtn btn-cal">
          <Button onClick={() => setInput("1")}>1</Button>
        </Col>
        <Col lg={3} className="opBtn btn-cal">
          <Button onClick={() => setInput("2")}>2</Button>
        </Col>
        <Col lg={3} className="opBtn btn-cal">
          <Button onClick={() => setInput("3")}>3</Button>
        </Col>
        <Col lg={3} className="funcBtn btn-cal">
          <Button onClick={sum}>+</Button>
        </Col>
        <Col lg={6} className="opBtn btn-cal">
          <Button onClick={() => setInput("0")}>0</Button>
        </Col>
        <Col lg={3} className="opBtn btn-cal">
          <Button>.</Button>
        </Col>
        <Col lg={3} className="funcBtn btn-cal">
          <Button onClick={equal}>=</Button>
        </Col>
      </Row>
    </Container>
  )
}
