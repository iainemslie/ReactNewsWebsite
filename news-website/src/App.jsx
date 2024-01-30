import Navigation from './components/Navigation';
import Hero from './components/Hero';
import useScreenSize from './hooks/useScreenSize';

function App() {
  const screenSize = useScreenSize();

  return (
    <>
      <Navigation screenSize={screenSize} />
      <Hero screenSize={screenSize} />
    </>
  );
}

export default App;
