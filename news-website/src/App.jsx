import { useEffect, useState } from 'react';
import useScreenSize from './hooks/useScreenSize';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Section from './components/Section';
import Footer from './components/Cards/Footer';

function App() {
  const screenSize = useScreenSize();
  console.log(screenSize);

  const [articles, setArticles] = useState([]);

  async function getArticles() {
    const response = await fetch('http://localhost:3000/articles');
    const resArticles = await response.json();
    setArticles([...articles, resArticles]);
  }

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      <Navigation screenSize={screenSize} />
      <Hero screenSize={screenSize} articles={articles} />
      <Section />
      {/* <Footer /> */}
    </>
  );
}

export default App;
