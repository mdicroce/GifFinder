import { useState } from "react";
import "./App.css";
import { Switch, BrowserRouter, Route, Link } from "react-router-dom";
import { GifSearchPage } from "./pages/GifSearchPage";
import GifFinder from "./components/GifFinder";
import GifDetail from "./pages/GifDetail";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App App-header">
        <GifFinder />
        <Switch>
          <Route path="/search/:keyword">
            <GifSearchPage />
          </Route>
          <Route path="/gif/:gifId">
            <GifDetail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
