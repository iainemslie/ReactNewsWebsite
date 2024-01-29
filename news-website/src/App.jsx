import Navigation from './components/Navigation';
import MainStory from './components/MainStory';
import SecondaryStory from './components/SecondaryStory';
import Container from 'react-bootstrap/esm/Container';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <>
      <Navigation />
      <Container className='mt-4'>
        <Row>
          <Col>
            <MainStory />
          </Col>
          <Col>
            <Stack gap={4}>
              <SecondaryStory />
              <SecondaryStory />
              <SecondaryStory />
            </Stack>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
