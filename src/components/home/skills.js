import React from 'react';
import { Row, Col } from 'antd';
import { Progress } from 'antd';

const items = [
  {
    key: '1',
    percent:60,
    data: 'HTML',
    
  },
  {
    key: '2',
    percent:70,
     data: 'CSS',
  },
  {
    key: '3',
    percent:50,
     data: 'JavaScript',
  },
  {
    key: '4',
    percent:40,
     data: 'Sass',
  },
  {
    key: '5',
    percent:50,
     data: 'Bootstrap',
  },
  {
    key: '6',
    percent:30,
     data: 'React',
  },
  {
    key: '7',
    percent:80,
     data: 'Python',
  },
  {
    key: '8',
    percent:20,
     data: 'DataStructure',
  },
  {
    key: '9',
    percent:50,
     data: 'DataStructure',
  },
  {
    key: '10',
    percent:30,
     data: 'DataStructure',
  },
  {
    key: '11',
    percent:90,
     data: 'DataStructure',
  },
  {
    key: '12',
    percent:85,
     data: 'DataStructure',
  },
]

function Skills() {
  
  return (
    <div id="skills" className="block pricingBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Choose a Course</h2>
          <p>Debitis itaque minima dolorum fuga aperiam inventore, quidem enim</p>
        </div>
        <Row gutter={[16, 16]}>
          {items.map(item => {
            return (
              <Col md={{ span: 4 }} key={item.key}>
                  <div className="content title">
                <Progress
                  format={percent => `${percent} Days`}
                  type="circle"
                  strokeColor={{
                    '0%': '#108ee9',
                    '100%': '#87d068',
                  }}
                  percent={item.percent}
                />
                <div className="title">
                <p>{item.data}</p>
                </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}


export default Skills;