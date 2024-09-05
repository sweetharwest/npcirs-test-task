import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import TablePage from './components1/table-page/TablePage';
import CardCatalogPage from './components1/card-catalog-page/CardCatalogPage';
import './App.css';
import PeopleCards from "./components1/people-cards/PeopleCards";
import {getPeople} from "./services/api";

function App() {

    const people = getPeople();

    return (
        <Router>
            <div className="app-container">
                <div className="header">
                    <div className="header-nav">
                        <Link className="nav-link" to="/">Главная</Link>
                        <Link className="nav-link" to="/statistics">Статистика</Link>
                        <Link className="nav-link" to="/table">Таблица</Link>
                    </div>
                </div>
                <div className="content">
                    <Routes>
                        <Route exact path='/' element={<CardCatalogPage people={people} />}/>
                        <Route path='/statistics' element={<PeopleCards />}/>
                        <Route path='/table' element={<TablePage />}/>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
