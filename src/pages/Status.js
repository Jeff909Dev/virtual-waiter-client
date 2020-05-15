import React, { Fragment } from 'react';
import { Timeline } from 'antd';
import { Row, Col } from 'react-flexbox-grid';

const Status = () => {
    return (
        <Fragment>
            <h6>
                <i className="fal fa-cauldron mr-2"></i>
                ESTADO DE LA COMANDA
            </h6>
            <Row className="w-50 m-auto">
                <Col xs={12} xl={6} xlOffset={3} >
                    <Timeline pending="Cocinando...">
                        <Timeline.Item>¡Oido cocina!</Timeline.Item>
                    </Timeline>
                </Col>
            </Row>
        </Fragment>
    )
}

export default Status;