import React from 'react';
import { Row, Col } from 'antd';
import TechSkill from '../../TechSkill';
import {
  CodeOutlined,
  DatabaseOutlined,
  SettingOutlined,
  CloudServerOutlined
} from '@ant-design/icons';


const TechSkillDisplay = () => (
  <div>
    <h2>Tech Skills</h2>
    <Row gutter={[20, 20]}>
      <Col xsV={24} sm={24} md={12}>
        <TechSkill
          textH3="Coding"
          textH4="Python • SQL • Scala • Javascript"
          icon={<CodeOutlined />}
        />
        <TechSkill
          textH3="Data"
          textH4="Spark • Kafka • Hive • Presto • Postgres • Airflow • DBT • Pandas"
          icon={<DatabaseOutlined />}
        />
      </Col>
      <Col xsV={24} sm={24} md={12}>
        <TechSkill
          textH3="Infrastructure"
          textH4="Linux • Docker • Kubernetes • Terraform • Pulumi"
          icon={<SettingOutlined />}
        />
        <TechSkill
          textH3="Cloud"
          textH4="AWS (Athena/EMR/Glue/Redshift/Step Functions/CloudWatch/Lambda) • Google Cloud (BigQuery/Dataproc)"
          icon={<CloudServerOutlined />}
        />
      </Col>
    </Row>
  </div>
);

export default TechSkillDisplay;
