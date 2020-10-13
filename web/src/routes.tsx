import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import OrphanagesMap from "./pages/OrphanagesMap";
import Landing from "./pages/Landing";
function Routes() {
    return (
        <BrowserRouter>
            <switch>
                <Route path="/" exact component={Landing} />
                <Route path="/app" component={OrphanagesMap} />
            </switch>
        </BrowserRouter>
    );
}
export default Routes;
