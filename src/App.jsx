import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import { forwardRef } from 'react';
import { Container } from './components/Layout';
import { ThemeToggleButton } from './components/ThemeToggleButton';
import { Navbar } from './components/Navbar';
import { ThemeProvider } from './contexts/theme';
import { MoviePage } from './pages/Movie';

import { HomePage } from './pages/Home';
import BackButton from './components/BackButton/BackButton';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Navbar>
            <Switch>
              <Route exact path="/" />
              <Route path="/"><BackButton /></Route>
            </Switch>
            <Link to="/">Home</Link>
            <ThemeToggleButton />
          </Navbar>
          <Container direction="vertical">
            <Switch>
              <Route exact path="/movie/:id" component={MoviePage} />
              <Route exact path="/" component={HomePage} />
              <Route path="/">
                <h1>404</h1>
              </Route>
            </Switch>
          </Container>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
