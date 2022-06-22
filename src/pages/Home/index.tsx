import React from "react";
import { Flex, Row, Col } from "styles";

const Home = () => {
  return (
    <div>
      <Flex alignItems="center" justifyContent="center">
        Hello world
      </Flex>
      <Row>
        <Col col={12} sm={8} md={4}>
          1
        </Col>
        <Col col={12} sm={4} md={4}>
          2
        </Col>
        <Col col={12} sm={8} md={4}>
          3
        </Col>
        <Col col={12} sm={4} md={4}>
          4
        </Col>
      </Row>
    </div>
  );
};

export default Home;
