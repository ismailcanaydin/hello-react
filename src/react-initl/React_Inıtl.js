import { useState, useEffect } from 'react';
import { IntlProvider, FormattedMessage, FormattedNumber } from 'react-intl';
import styles from '../App.css';

const messages = {
  'tr-TR': {
    title: 'Merhaba Dünya',
    description: '{count} yeni mesajınız var!'
  },
  'en-EN': {
    title: 'Hello World',
    description: 'You have {count} new messages!',
  }
};

function React_Inıtl() {
  const isLocale = localStorage.getItem("locale");
  const defaultLocale = isLocale ? isLocale : navigator.language;
  const [locale, setLocale] = useState(defaultLocale);

  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);

  return (
    <div>
      <IntlProvider locale={locale} messages={messages[locale]}>
        <FormattedMessage id='title' />
        <p>
          <FormattedMessage id='description' values={{ count: 5 }} />
        </p>

        <br />
        <br />
        <button onClick={() => setLocale('tr-TR')}>TR</button>&nbsp;
        <button onClick={() => setLocale('en-EN')}>EN</button>
      </IntlProvider>
    </div>
  )
}

export default React_Inıtl