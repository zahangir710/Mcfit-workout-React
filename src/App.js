import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home/Home";
import GymNavber from "./pages/Header/Navbar/GymNavber";
import Membership from "./pages/Membership/Membership";
import Courses from "./pages/CoursesOffered/Courses/Courses";
import NotFound from "./pages/NotFound/NotFound";

import TrailTraining from "./pages/TrailTraining/TrailTraining";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HelpAndSupport from "./pages/HelpAndSupport/HelpAndSupport";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <GymNavber></GymNavber>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/membership">
            <Membership></Membership>
          </Route>
          <Route path="/courses">
            <Courses></Courses>
          </Route>
          <PrivateRoute path="/trailtraining">
            <TrailTraining></TrailTraining>
          </PrivateRoute>
          <Route path="/helpandsupport">
            <HelpAndSupport></HelpAndSupport>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/registration">
            <Registration></Registration>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
