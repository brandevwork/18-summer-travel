import React, { Fragment, useState, useContext } from  'react';
import Card from './components/UI/card';
import Login from './components/auth/login';
import Intro from './components/intro';
import SignUp from './components/auth/signup';
import Home from './components/main/home';
import Profile from './components/main/profile';
import Survey from './components/main/survey';
import { Route, Routes, Navigate } from 'react-router-dom';
import AuthContext from './store/authContext';
import { HomeContextProvider } from './store/homeContext';

function App() {
  const ctxUser = useContext(AuthContext);
  const navigateToRoot = <Navigate to='/' />;
  const authRoutes = 
  <Fragment>
    <Route path='/login' element={navigateToRoot} />
    <Route path='/signup' element={navigateToRoot} />
    <Route path='/home' element={<Card headerClasses="bg-white-only" className="custom"><Home /></Card>} />
    <Route path='/survey/:id' element={<Card headerClasses="bg-white-only" className="custom"><Survey /></Card>} />
    <Route path='/profile' element={<Card headerClasses="bg-white-only" className="custom"><Profile/></Card>} />
    <Route path='*' element={<div>404 not found</div>} />
  </Fragment>;

  return (
    <HomeContextProvider>
      <Routes>
        <Route path='/' element={ctxUser.email === '' ? <Intro/> : <Card headerClasses="bg-white-only" className="custom"><Intro/></Card>} />
        { ctxUser.email === '' && 
          <Fragment>
            <Route path='/signup' element={<SignUp/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='*' element={<Intro/>} />
          </Fragment>
        }
        { ctxUser.email !== '' && authRoutes }
      </Routes>
    </HomeContextProvider>  
  );
}

export default App;
