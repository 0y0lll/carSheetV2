import React, { useState } from 'react';

import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

// Footer menu list
const items = [
  {
    label: '홈',
    key: 'home',
    icon: <MailOutlined />
  },
  {
    label: '탐색',
    key: 'search',
    icon: <AppstoreOutlined />
  },
  {
    label: '커뮤니티',
    key: 'community',
    icon: <SettingOutlined />
  },
  {
    label: '마이페이지',
    key: 'mypage',
    icon: <SettingOutlined />
  },
];

const FooterNav = (props) => {
  /* State */
  const [current, setCurrent] = useState('home');

  /* Functions */
  // click menu
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  /* Render */
  return <Menu
    onClick={onClick}
    defaultSelectedKeys={'home'}
    selectedKeys={[current]}
    mode="horizontal"
    items={items}
    style={{ justifyContent: 'center' }}
  />;
}

export default FooterNav;