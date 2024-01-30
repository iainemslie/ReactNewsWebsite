import Navigation from './components/Navigation';
import Hero from './components/Hero';
import useScreenSize from './hooks/useScreenSize';
import { useEffect, useState } from 'react';

function App() {
  const screenSize = useScreenSize();

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
    </>
  );
}

export default App;
