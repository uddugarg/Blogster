import { Suspense } from 'react';
import { Route, Switch } from 'react-router';
import Auth from './hoc/auth';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Upload from './components/Upload/Upload';
import PostDetails from './components/Post/PostDetails';
import Preferences from './components/Preferences';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <Suspense fallback={(<div>Loading....</div>)}>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Auth(Home, false)} />
          <Route path='/login' component={Auth(Login, false)} />
          <Route path='/register' component={Auth(Register, false)} />
          <Route exact path='/select/preferences' component={Auth(Preferences, true)} />
          <Route path='/upload' component={Auth(Upload, true)} />
          <Route path='/blogster/:postId' component={Auth(PostDetails, true)} />
          <Route exact path='/:username' component={Auth(Dashboard, true)} />
        </Switch>
      </div>
    </Suspense>
  );
}

export default App;
