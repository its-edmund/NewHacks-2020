import './App.css';
import { Divider, Grid, Header, Image, Segment, Button, Input } from 'semantic-ui-react';

import BlocksTray from './components/BlocksTray/BlocksTray';
import Workspace from './components/Workspace/Workspace';
import CodeWindow from './components/CodeWindow/CodeWindow';

import BlocksTray from './components/BlocksTray/BlocksTray';
import BlocksMenu from './components/BlocksTray/BlocksMenu';

function App() {
  return (
<<<<<<< HEAD
    <div className="App">
      <BlocksMenu />
    </div>
=======
    <>
      <Grid> 
        <Grid.Column textAlign="center">
          <Input size='massive' placeholder='Monkey Code'/>
        </Grid.Column>
      </Grid> 

      <Grid columns={2} verticalAlign='middle'>
        <Grid.Row stretched>
          <Grid.Column>
            <Segment attached>
              <BlocksTray/>
              <Workspace/>
            </Segment>
            <Button attached="bottom">Compile</Button>

          </Grid.Column>

          <Grid.Column>

            <Segment attached>
              <CodeWindow/>
            </Segment>
            <Button attached='bottom'>Download</Button>

          </Grid.Column>
        </Grid.Row>
      </Grid>

    </>
>>>>>>> master
  );
}

export default App;
