import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import TablePage from './components/table-page/TablePage';
import CardCatalogPage from './components/card-catalog-page/CardCatalogPage';
import MainPage from "./components/main-page/MainPage";
import './App.css';
import {getPeople} from "./services/api";

function App() {

    const initialPeople = getPeople();

    return (
        <Router>
            <div className="app-container">
                <div className="header">
                    <div className="header-nav">
                        <Link className="nav-link" to="/">Главная</Link>
                        <Link className="nav-link" to="/card-catalog">Картотека</Link>
                        <Link className="nav-link" to="/table">Таблица</Link>
                    </div>
                </div>
                <div className="content">
                    <Routes>
                        <Route exact path='/' element={<MainPage initialPeople={initialPeople} />}/>
                        <Route path='/card-catalog' element={<CardCatalogPage initialPeople={initialPeople} />}/>
                        <Route path='/table' element={<TablePage />}/>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
