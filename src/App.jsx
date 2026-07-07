import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Mission } from './components/Mission';
import { Programs } from './components/Programs';
import { Impact } from './components/Impact';
import { Gallery } from './components/Gallery';
import { Philosophy } from './components/Philosophy';
import { Founder } from './components/Founder';
import { Process } from './components/Process';
import { Footer } from './components/Footer';
import { translations } from './data/translations';

function App() {
  const [lang, setLang] = useState(() => {
    const browserLang = navigator.language || navigator.userLanguage || '';
    return browserLang.startsWith('fr') ? 'fr' : 'en';
  });
  const t = translations[lang];

  return (
    <div className="app">
      <Navbar lang={lang} setLang={setLang} t={t} />
      <Hero t={t} lang={lang} />
      <Mission t={t} />
      <Programs t={t} />
      <Impact t={t} />
      <Gallery t={t} />
      <Philosophy t={t} />
      <Founder t={t} />
      <Process t={t} />
      <Footer t={t} />
    </div>
  );
}

export default App;
