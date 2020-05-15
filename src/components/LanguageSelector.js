import React from 'react';
import { Select } from 'antd';
import Flags from 'country-flag-icons/react/3x2';
import i18next from 'i18next';

import './css/LanguageSelector.css';

const { Option } = Select;
const langLabels = {
    es: <div><span><Flags.ES className="lang-flag" /></span><span>Español</span></div>,
    en: <div><span><Flags.GB className="lang-flag" /></span><span>English</span></div>,
    de: <div><span><Flags.DE className="lang-flag" /></span><span>German</span></div>
}

const LanguageSelector = () => {
    
    const changeLanguage = lang => i18next.changeLanguage(lang);

    return (
        <Select size="small" onChange={changeLanguage} defaultValue="es" optionLabelProp="label" style={{ width: 120, margin: '.5rem auto' }}>
            <Option label={langLabels.es} value="es" key="es-lang">
                {langLabels.es}
            </Option>
            <Option label={langLabels.en} value="en" key="en-lang">
                {langLabels.en}
            </Option>
            <Option label={langLabels.de} value="de" key="de-lang">
                {langLabels.de}
            </Option>
        </Select>
    )
}

export default LanguageSelector;