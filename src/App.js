import './App.css';
import { Divider, Grid, Header, Image, Segment, Button, Input } from 'semantic-ui-react';

import BlocksTray from './components/BlocksTray/BlocksTray';
import Workspace from './components/Workspace/Workspace';
import CodeWindow from './components/CodeWindow/CodeWindow';

function App() {
  return (
    <>
      <Grid> 
        <Grid.Column textAlign="center">
          <Input size='massive' placeholder='Monkey Code'/>
        </Grid.Column>
      </Grid> 
{/* 
      <Grid celled='internally'>
        <Grid.Row>
          <Grid.Column width={3}>

            <BlocksTray/>
            <Workspace attached/>
            <Button>Compile</Button>

          </Grid.Column>

          <Grid.Column> 

            <Segment attached>
              <CodeWindow/>
            </Segment>
            <Button>Download</Button>

          </Grid.Column>

        </Grid.Row>
      </Grid>
       */}
      <Grid columns={2} rows='equal' textAlign='center' divided>
        <Grid.Row stretched>

          <Grid.Column stretched>

            <BlocksTray/>
            <Workspace attached/>
            
          </Grid.Column>

          <Grid.Column stretched> 

            <Segment attached>
              <CodeWindow/>
            </Segment>  

          </Grid.Column>

        </Grid.Row>
        <Grid.Row stretched>

          <Grid.Column stretched>
            <Button>Compile</Button>
          </Grid.Column>

          <Grid.Column stretched>
            <Button>Download</Button>
          </Grid.Column>
          
        </Grid.Row>
      </Grid>

    </>
  );
}

export default App;
