import type { AppProps } from 'next/app';
import Header from '@components/Header/Header';
import '../styles/styles.scss';
import { useEffect } from 'react';
import Home from '@components/Home/Home';

export default function App({ Component, pageProps }: AppProps) {
  const tabs = ['Home', 'Recipes', 'Ingredients', 'Drink', 'Liked'];

  useEffect(() => {
    const onPageLoad = () => {
      document.getElementById('app')!.classList.remove('preload');
    };

    // Check if the page has already loaded
    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, []);

  return (
    <>
      <div id="app" className="app preload">
        <Header />
        <main className="main">
          <Home />
        </main>
      </div>
    </>
  );
}
