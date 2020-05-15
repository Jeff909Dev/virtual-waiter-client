import React, { useState } from 'react';
import { Button } from 'antd';
import { Collapse } from 'react-collapse';
import { WAITER_CHAT_ICON } from '../constants/icons';

import './css/WaiterChat.css';

const WaiterChat = () => {

    const [show, setShow] = useState(false);
    const openChat = () => {
        setShow(!show);
    }
    return (
        <section>
            <div id="waiter_chat" className="fixed-bottom">
                <Button onClick={() => openChat()} className="waiter_chat_btn" type="primary" size="large" shape="circle" icon={WAITER_CHAT_ICON} />
                <Collapse isOpened={show}>
                    <div style={{ minHeight: '50vh' }}>
                        CHAT EN CONSTRUCCIÓN <span role="img" aria-label="Monito">🙊</span>
                    </div>
                </Collapse>
            </div>
        </section>
    )
}

export default WaiterChat;