import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import { store } from "./redux";

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route path="/" component={Home} exact />
                    </Switch>
                </Router>
            </Provider>
        </div>
    );
}

export default App;
