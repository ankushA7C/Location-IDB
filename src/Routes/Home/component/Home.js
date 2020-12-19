import React from "react";
import "./style.css";
import { Route, Switch } from 'react-router-dom';
import { IDBService } from "../../../Service/IDBService"
import Header from "../../../../src/Components/Header/index"
import AddLocation from "../../AddLocation/index"
import ViewLocation from "../../ViewLocation/index"
import Particle from "../../../Components/Particle/index"

class Home extends React.Component {
    constructor(props) {
        super(props);
        this._db = new IDBService()
    }

    render() {
        return (
            <div className="row bg-dark-blue margin-0 main-Containerr">
                <div className="particle-custom"><Particle /></div>
                <Header />
                <Switch >
                    <Route exact path="/Location-IDB" render={(props) => <ViewLocation idb={this._db} {...props} />} />
                    <Route exact path="/Location-IDB/addLocation" render={(props) => <AddLocation dbKey={new Date().getTime()} {...props} />} />
                </Switch>
            </div>
        );
    }
}

export default Home;