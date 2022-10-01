import { useState } from 'react';
import { IntlProvider, FormattedMessage, FormattedNumber } from 'react-intl';
import styles from '../App.css';
const messages = {
  'tr-TR': {
    title: 'Merhaba Dünya',
    description: '3 yeni mesajınız var!'
  },
  'en-EN': {
    title: 'Hello World',
    description: 'You have 3 new messages!',
  }
};

function React_Inıtl() {
  const [lang, setLang] = useState('tr-TR');

  return (
    <div>
      <IntlProvider messages={messages[lang]}>
        <FormattedMessage id='title' />
        <p>
          <FormattedMessage id='description' />
        </p>

        <br />
        <br />
        <button onClick={() => setLang('tr-TR')}>TR</button>&nbsp;
        <button onClick={() => setLang('en-EN')}>EN</button>
      </IntlProvider>
    </div>
  )
}

export default React_Inıtl