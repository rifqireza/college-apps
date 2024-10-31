import './App.css'
import { Button, Layout, theme } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import ContentLayout from './layout/ContentLayout';
import SidebarLayout from './layout/SideBarLayout';
import { useState } from 'react';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

function App() {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();


  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout className='App'>
      <Header style={{ display: 'flex', alignItems: 'center', width: '100vw' }}>
        <Button type="primary" onClick={toggleCollapsed}>
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      </Header>
      <Content>
        <Layout
          style={{ padding: '24px 0', background: colorBgContainer, borderRadius: borderRadiusLG }}
        >
          <Sider collapsed={collapsed} style={{ background: colorBgContainer }}>
            <SidebarLayout />
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <ContentLayout />
          </Content>
        </Layout>
      </Content>
    </Layout>
  )
}

export default App
