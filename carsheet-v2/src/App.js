import React, { useState } from 'react';

/* Router */
import { Route } from 'react-router-dom';

/* Components */
import HeaderNav from './components/HeaderNav';
import FooterNav from './components/FooterNav';

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

import { Layout, Row, Col, Button } from 'antd';

const { Header, Content, Footer } = Layout;

function App() {
  /* State */

  return (
    <div className="App" style={{ height: 'inherit'}}>
      <Row style={{ height: 'inherit' }}>
        <Col span={12} offset={6}>
          <Header style={{ position: 'sticky', top: 0, height: 'auto', padding: 0, background: '#fff', lineHeight: 'auto' }}>
            { /* 로고, 우측 메뉴 */}
            <div style={{ minHeight: '60px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>Logo</div>
              <div>
                <Button>Button-1</Button>
                <Button>Button-2</Button>
              </div>
            </div>

            { /* 하단 메뉴 선택에 따라 nav toggle, 홈에서는 출력 안함 */ }
            {/* <HeaderNav /> */}
          </Header>

          <div style={{ height: '150%', background: 'aliceblue' }}>
            col-12 col-offset-6
          </div>

          <Footer style={{ position: 'sticky', bottom: 0 }}>
            <FooterNav />
          </Footer>
        </Col>
      </Row>
    </div>
  );
}

export default App;
