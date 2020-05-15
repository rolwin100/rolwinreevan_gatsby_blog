import React from 'react';
import { Row, Col } from 'antd';
import ProgressBar from '../../Progress';

const SkillsProgress = () => (
  <div>
    <h2>Tech Skills</h2>
    <Row gutter={[20, 20]}>
      <Col xsV={24} sm={24} md={12}>

        <ProgressBar
          percent={70}
          text="Python"
        />
        <ProgressBar
          percent={60}
          text="Scala"
        />
        <ProgressBar
          percent={85}
          text="Spark"
        />
        <ProgressBar
          percent={70}
          text="Docker"
        />
      </Col>
      <Col xsV={24} sm={24} md={12}>

        <ProgressBar
          percent={80}
          text="AWS"
        />
        <ProgressBar
          percent={95}
          text="Spark"
        />
        <ProgressBar
          percent={65}
          text="Terraform"
        />
        <ProgressBar
          percent={50}
          text="Javascript"
        />
      </Col>
    </Row>
  </div>
);

export default SkillsProgress;
