import React from 'react';
import { Layout } from 'antd';
import { HOME_HEADER_ICON, BACK_ARROW_HEADER_ICON, TICKET_HEADER_ICON } from '../constants/icons';

import './css/AppHeader.css';
import history from '../history';
import { useSelector } from 'react-redux';

const { Header } = Layout;

const AppHeader = () => {

    const stablishment = useSelector(state => state.stablishment);

    return (
        <Header className="header_style">
            <div onClick={() => history.goBack()}>
                {history.location.pathname !== "/"
                    ? BACK_ARROW_HEADER_ICON : HOME_HEADER_ICON
                }
            </div>
            <h6 className="header_title_style">{stablishment.Nombre}</h6>
            <div>
                {TICKET_HEADER_ICON}
            </div>
        </Header>
    )
}

export default AppHeader;
