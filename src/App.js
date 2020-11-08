import './App.css';
import React, { useState } from 'react';
import { Container, Divider, Grid, Header, Image, Segment, Button, Input } from 'semantic-ui-react';

import Workspace from './components/Workspace/Workspace';
import CodeWindow from './components/CodeWindow/CodeWindow';
import BlocksMenu from './components/BlocksTray/BlocksMenu';

function App() {
  const [element, setElement] = useState('');

  return (
    <Container style={{ margin: 10 }}>
      <Grid>
        <Grid.Column textAlign="center">
          <Input size='massive' placeholder='Monkey Code' />
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
      <Grid columns={2} rows='equal' textAlign='center' >
        <Grid.Row stretched>

          <Grid.Column stretched>

            <BlocksMenu />
            <Workspace attached />

          </Grid.Column>

          <Grid.Column stretched>

            <CodeWindow />

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

    </Container>
  );
}

export default App;
