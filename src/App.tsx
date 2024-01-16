import React from 'react';
import './App.css';
import { NavBarComponent } from './components/nav-bar.component';
import { Route, Routes } from 'react-router-dom';
import { HomeComponent } from './components/home.component';
import { WorkComponent } from './components/work.component';
import { GaleryComponent } from './components/galery.component';
import { NoMatchComponent } from './components/nomatch.component';


export const App: React.FC = (): React.ReactElement => {
  return (
    <div className="App">
      <NavBarComponent></NavBarComponent>
      <Routes>
        <Route path="/">
          <Route index element={<HomeComponent />} />
          <Route path="work" element={<WorkComponent />} />
          <Route path="galery" element={<GaleryComponent />} />
          <Route path="*" element={<NoMatchComponent />} />
        </Route>
      </Routes>
    </div>
  );
}

