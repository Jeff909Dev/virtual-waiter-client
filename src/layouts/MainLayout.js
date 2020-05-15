import React from 'react';
import { Layout } from 'antd';
import AppHeader from '../ui/AppHeader';

const { Content, Footer } = Layout;

const MainLayout = props => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <AppHeader />
            <Content className="site-layout" style={{ padding: 0, marginTop: 64 }}>
                <div className="site-layout-background" style={{ paddingTop: 24 }}>
                    {props.children}
                </div>
            </Content>
            <Footer style={{ textAlign: 'center', display: 'none' }}>Developed with <span role="img" aria-label="hearth">💜</span> by Kuara Software.</Footer>
        </Layout>
    )
}

export default MainLayout;