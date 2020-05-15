import React, { Fragment } from 'react';
import history from '../history';

import './css/HomeMenu.css';

const HomeMenu = ({ lang }) => {
    return (
        <Fragment>
            <section className="home_menu_wrapper">
                <div id="main_waiter_btn" className="home_menu_btn home_menu_btn_side">
                    <p className="home_menu_btn_text">{lang('Camarero')}</p>
                </div>
                <div id="main_menu_btn" onClick={() => history.push('/menu')} data="menu" className="home_menu_btn home_menu_btn_center">
                    <p className="home_menu_btn_text">{lang('Ver la carta')}</p>
                </div>
                <div id="main_ticket_status_btn" onClick={() => history.push('/status')} data="status" className="home_menu_btn home_menu_btn_side" >
                    <p className="home_menu_btn_text">{lang('Estado')}</p>
                </div>
            </section>
        </Fragment>
    )
}

export default HomeMenu;