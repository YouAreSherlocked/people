import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './views/Home/Home';
import DetailVideo from './views/Detail/DetailVideo';
import DetailPhoto from './views/Detail/DetailPhoto';
import DetailDocu from './views/Detail/DetailDocu';
import ErrorPage from './views/ErrorPage/ErrorPage';



class AppRouter extends Component {
    
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/detail/video" component={DetailVideo}></Route>
          <Route exact path="/detail/photo" component={DetailPhoto}></Route>
          <Route exact path="/detail/documentation" component={DetailDocu}></Route>
          <Route component={ErrorPage}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default AppRouter;