import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Mission } from './components/Mission';
import { Impact } from './components/Impact';
import { Gallery } from './components/Gallery';
import { Philosophy } from './components/Philosophy';
import { Process } from './components/Process';
import { Footer } from './components/Footer';
import { translations } from './data/translations';

function AppContent() {
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
      <Impact t={t} />
      <Gallery t={t} />
      <Philosophy t={t} />
      <Process t={t} />
      <Footer t={t} />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
