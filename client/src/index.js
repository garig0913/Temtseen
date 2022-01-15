import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ThemeProvider } from "./darkmode/ThemeContext";
import Background from "./Background";
import NotFoundPage from "./Pages/NotFoundPage";
import Category from "./Pages/SelectCategory";
import PostJob from "./Pages/PostJob";
import Main from "./Pages/Main";
import Explore from "./Pages/Explore";
import Categories from "./Pages/Categories";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "./components/Login";

ReactDOM.render(
  <ThemeProvider>
    <Background>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/category" component={Category} />
          <Route path="/postjob" component={PostJob} />
          <Route exact path="/explore" component={Explore} />
          <Route path="/categories" component={Categories} />
          <Route path="/404" component={NotFoundPage} />
          <Redirect to="/404" />
        </Switch>
      </BrowserRouter>
    </Background>
  </ThemeProvider>,
  document.getElementById("root")
);
