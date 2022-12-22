import React, { Fragment, useState, useContext } from  'react';
import Card from './components/UI/card';
import Wrapper from './components/UI/wrapper';
import Login from './components/auth/login';
import Intro from './components/intro';
import SignUp from './components/auth/signup';
import Home from './components/main/home';
import Settings from './components/main/settings';
import Result from './components/result/result';
import Survey from './components/main/survey';
import { Route, Routes, Navigate } from 'react-router-dom';
import AuthContext from './store/authContext';
import { HomeContextProvider } from './store/homeContext';
import './assets/scss/main.scss';


function App() {
  const ctxUser = useContext(AuthContext);
  const navigateToRoot = <Navigate to='/' />;
  const authRoutes = 
  <Fragment>
    <Route path='/login' element={navigateToRoot} />
    <Route path='/signup' element={navigateToRoot} />
    <Route path='/home' element={<Wrapper><Home /></Wrapper>} />
    <Route path='/result' element={<Wrapper><Result /></Wrapper>} />
    <Route path='/survey/:id' element={<Wrapper><Survey /></Wrapper>} />
    <Route path='/settings' element={<Wrapper><Settings/></Wrapper>} />
    <Route path='*' element={<div>404 not found</div>} />
  </Fragment>;

  return (
    <HomeContextProvider>
      <Routes>
        <Route path='/' element={ctxUser.email === '' ? <Wrapper><Intro/></Wrapper> : <Wrapper><Intro/></Wrapper>} />
        { ctxUser.email === '' && 
          <Fragment>
            <Route path='/signup' element={<Wrapper><SignUp/></Wrapper>} />
            <Route path='/login' element={<Wrapper><Login/></Wrapper>} />
            <Route path='*' element={<Wrapper><Intro/></Wrapper>} />
          </Fragment>
        }
        { ctxUser.email !== '' && authRoutes }
      </Routes>
    </HomeContextProvider>  
  );
}

export default App;
