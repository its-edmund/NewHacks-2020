import './App.css';
import { Divider, Grid, Header, Image, Segment, Button, Input } from 'semantic-ui-react';

import BlocksTray from './components/BlocksTray/BlocksTray';
import Workspace from './components/Workspace/Workspace';
import CodeWindow from './components/CodeWindow/CodeWindow';

function App() {
  return (
    <>

     <Input color='red' placeholder='Monkey Code'/>

      <Grid columns={2} divided>
        <Grid.Row stretched>
          <Grid.Column>
            <Segment>

              <BlocksTray/>

              <Divider section />

              <Workspace/>

            </Segment>

          </Grid.Column>
          <Grid.Column>

            <Button.Group attached='top'>
              <Button>Java</Button>
              <Button>C++</Button>
              <Button>Python</Button>
            </Button.Group>
            <CodeWindow/>

            <Button>Compile</Button>
            <Button>Download</Button>

          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Divider vertical></Divider>
    </>
  );
}

export default App;
