import { Container } from "./components/Container.styled";
import Button from "./components/Button";

function App() {
  return (
    <Container>
      <Button 
        color={'secondary'}
        bgColor={'outlined'}
        size={'medium'}
        type='button'
        >
        OUTLINED
      </Button>
      <Button 
        color={'primary'}
        bgColor={'contained'}
        size={'large'}
        type='button'
        >
        CONTAINED
      </Button>
      <Button 
        color={'primary'}
        bgColor={'warning'}
        size={'small'}
        type='button'
        >
        <b>WARNING</b>
      </Button>
      <Button 
        color={'primary'}
        bgColor={'danger'}
        size={'default'}
        type='button'
        >
        DANGER
      </Button>
    </Container>
  );
}

export default App;
