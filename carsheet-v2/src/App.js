import React, { useState } from 'react';

/* Router */
import { Route } from 'react-router-dom';

/* Components */
import Navbar from './components/Navbar';

import './App.css';
import 'antd/dist/antd.css';

/* Style */
import {
  HomeOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
  LoadingOutlined,
} from '@ant-design/icons';

import { Layout, Row, Col, Affix } from 'antd';

const { Header, Content, Footer } = Layout;

function App() {
  const [container, setContainer] = useState(null);

  return (
    <div className="App" style={{ height: 'inherit'}}>
      <div className="scrollable-container" ref={setContainer}>
        <Row style={{ height: 'inherit' }}>
          <Col span={12} offset={6}>
            <div style={{ height: '1200px' }}>
              col-12 col-offset-6
              <SmileOutlined />
            </div>

            <Affix target={() => container} offsetBottom={ 0 }>
              <Footer>
                <Navbar></Navbar>
              </Footer>
            </Affix>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
