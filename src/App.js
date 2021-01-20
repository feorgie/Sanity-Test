import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import BlogPage from "./components/BlogPage.js";
import SinglePost from "./components/SinglePost.js";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route component={BlogPage} path="/" exact />
        <Route component={SinglePost} path="/:slug" />
      </div>
    </BrowserRouter>
  );
}
export default App;
