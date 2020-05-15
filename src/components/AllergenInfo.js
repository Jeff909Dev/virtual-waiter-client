import React, { useState } from 'react';
import { Button, Typography, Drawer, List, Avatar } from 'antd';
import { Row, Col } from 'react-flexbox-grid';
import { allergens } from '../constants/allergens';

import './css/AllergenInfo.css';

const { Text } = Typography;
const allergen_list_style = { marginTop: '.5rem' };
const allergen_list_meta_style = { alignItems: 'center', textAlign: 'left', marginBottom: 0 };

const AllergenInfo = ({ lang }) => {

    const [show, setShow] = useState(false);

    return (
        <section>
            <Row>
                <Col xs={10} xsOffset={1}>
                    <p className="allergen_title">{lang("INFORMACIÓN SOBRE ALÉRGENOS:")}</p>
                    <small className="allergen_sub_title">{lang('REGLAMENTO (EU) Nº 1169/2011')}</small>
                    <p className="allergen_info_text">{lang("Establecimiento con información disponible en materia de alergia e intolerancias alimentarias. Pueden solicitar esta información a nuestro personal o también consultarla en la APP pulsando en el botón:")}</p>
                    <Button onClick={() => setShow(!show)} className="allergen_btn" shape="round" size="small">
                        <Text className="allergen_btn_text">{lang("MÁS INFORMACIÓN")}</Text>
                    </Button>
                </Col>
            </Row>

            <Drawer visible={show} onClose={() => setShow(false)} placement="left" width="90vw" zIndex={1031} closable maskClosable>
                <h6 className="allergen_title">{lang("INFORMACIÓN SOBRE ALÉRGENOS:")}</h6>
                <small className="allergen_sub_title">{lang('REGLAMENTO (EU) Nº 1169/2011')}</small>
                <List style={allergen_list_style}>
                    {allergens.map(allergen =>
                        <List.Item.Meta style={allergen_list_meta_style} key={`allergen-list-key-${allergen.id}`}
                            avatar={<Avatar src={allergen.icon} />} title={lang(allergen.label)} />)
                    }
                </List>
            </Drawer>
        </section>
    )
};

export default AllergenInfo;