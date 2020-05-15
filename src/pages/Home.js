import React, { Fragment } from 'react';
import MainLogo from '../components/MainLogo';
import HomeMenu from '../components/HomeMenu';
import WaiterChat from '../components/WaiterChat';
import AllergenInfo from '../components/AllergenInfo';
import LanguageSelector from '../components/LanguageSelector';
import { Grid, Row, Col } from 'react-flexbox-grid';


const Home = ({ lang }) => {

    return (
        <Fragment>
            <Grid>
                <Row>
                    <Col xs={12} xl={6} xlOffset={3}>
                        <p>{lang('Carta Virtual')}</p>
                        <MainLogo width={150} />
                        <HomeMenu lang={lang} />
                        <hr />
                        <WaiterChat />
                        <AllergenInfo lang={lang} />
                        <LanguageSelector />
                    </Col>
                </Row>
            </Grid>
        </Fragment>
    )
}

export default Home;