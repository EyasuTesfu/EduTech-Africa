import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
// import Homepage from "./pages/HomePage";
// import SignupPage from "./pages/SignupPage";
// import UserProfilePage from "./pages/UserProfilePage";
// import ProjectDetailsPage from "./pages/ProjectDetailsPage";
// import ProjectApplicationPage from "./pages/ProjectApplicationPage";
// import ProjectDonationPage from "./pages/ProjectDonationPage";

function App() {
  return (
    // <Router>
    //   <Switch>
    //     <Route exact path="/" component={HomePage} />
    //     <Route path="/login" component={LoginPage} />
    //     <Route path="/signup" component={SignupPage} />
    //     <Route path="/profile/:userId" component={UserProfilePage} />
    //     <Route path="/project/:projectId" component={ProjectDetailsPage} />
    //     <Route path="/apply/:projectId" component={ProjectApplicationPage} />
    //     <Route path="/donate/:projectId" component={ProjectDonationPage} />
    //   </Switch>
    // </Router>
    <LoginPage />
    // <Homepage />
  );
}

export default App;
