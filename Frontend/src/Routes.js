import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Core/Home"
import Signup from "./user/signup";
// import Signin from "./user/Signin";
import Signin from "./user/Signin"
import Create from "./user/Create"

const Routes=()=>{
    return (
        <BrowserRouter>
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={Signup} />
        {/* <Route path="/signin" exact component={Signin} /> */}
        <Route path="/create" exact component={Create} />
        <Route path="/signin" exact component={Signin} />
        </Switch>
        </BrowserRouter>
    )
}
export default Routes