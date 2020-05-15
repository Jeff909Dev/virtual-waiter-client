import React from 'react';
import { useTranslation } from 'react-i18next';
import MainContainer from './containers/MainContainer';

import './css/App.css';
import './assets/css/fontAwesome/fontawesome.css';
import './assets/css/fontAwesome/duotone.css';
import './assets/css/fontAwesome/light.min.css';
import './assets/css/fontAwesome/regular.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const { t } = useTranslation();

  return (
    <div className="App">
      <MainContainer lang={t} />
    </div>
  );
}

export default App;
