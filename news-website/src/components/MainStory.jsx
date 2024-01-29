import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';

function MainStory() {
  return (
    <Card style={{ width: '40vw' }}>
      <Card.Img
        variant='top'
        src='https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1244&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
      <Card.Body>
        <Card.Title>Story Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Subtitle>Rick Moranis | 2024-01-09</Card.Subtitle>
        <Button className='mt-3' variant='dark'>
          Go somewhere
        </Button>
      </Card.Body>
    </Card>
  );
}

export default MainStory;
