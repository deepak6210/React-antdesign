import React from 'react';

import image1 from '../../assets/images/modern-design.jpg';
import image2 from '../../assets/images/clean-design.jpg';
import image3 from '../../assets/images/great-support.jpg';
import image4 from '../../assets/images/easy-customise.jpg';
import image5 from '../../assets/images/unlimited-features.jpg';
import image6 from '../../assets/images/advanced-option.jpg';

import { Row, Col } from 'antd';
import { Card } from 'antd';
const { Meta } = Card;

const items = [
  {
    key: '1',
    data: 'Modern Design',
    img: image1,
  },
  {
    key: '2',
    data: 'Clean and Elegant',
    img: image2,
  },
  {
    key: '3',
    data: 'Great Support',
    img: image3,
  },
  {
    key: '4',
    data: 'Easy to customise',
    img: image4,
  },
  {
    key: '5',
    data: 'Unlimited Features',
    img: image5,
  },
  {
    key: '6',
    data: 'Advanced Options',
    img: image6,
  },
]

function AppFeature() {
  return (
    <div id="feature" className="block featureBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Key Features and Benefits</h2>
          <p>Obcaecati consequatur libero repudiandae, aperiam itaque laborum!</p>
        </div>
        <Row gutter={[16, 16]}>
          {items.map(item => {
            return (
              <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} key={item.key}>
                <div className="content title">
                  <Card
                    hoverable
                    cover={<img alt={item.data} src={item.img} />}
                  >
                    <Meta title={item.data} />
                  </Card>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default AppFeature;