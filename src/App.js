import React from 'react'
import {Route, Switch} from 'react-router-dom';
import ShelveListPage from './pages/ShelveListPage'
import './App.css'
import SearchPage from "./pages/SearchPage";


class BooksApp extends React.Component {
    render() {
        return (
            <div className="app">
                <Switch>
                    <Route path="/search" component={SearchPage}/>
                    <Route path="/" exact component={ShelveListPage}/>
                </Switch>
            </div>
        )
    }
}
export default BooksApp
