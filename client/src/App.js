import React, { Fragment, useContext } from  'react';
import Wrapper from './components/UI/wrapper';
import Login from './components/auth/login';
import Intro from './components/intro';
import SignUp from './components/auth/signup';
import Home from './components/main/home';
import Settings from './components/main/settings';
import Result from './components/result/result';
import LetsStart from './components/main/letsStart';
import Recomendation from './components/suggestions/recomendation';
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
    <Route path='/home' element={<Wrapper customClassName=""><Home /></Wrapper>} />
    <Route path='/lets_start/:id' element={<Wrapper pageName="survey" customClassName="family-results"><LetsStart /></Wrapper>} />
    <Route path='/result' element={<Wrapper customClassName="family-results"><Result /></Wrapper>} />
    <Route path='/recomendation' element={<Wrapper customClassName="family-results recommendations"><Recomendation /></Wrapper>} />
    <Route path='/survey/:id' element={<Wrapper pageName="survey" customClassName=""><Survey /></Wrapper>} />
    <Route path='/settings' element={<Settings/>} />
    <Route path='*' element={<div>404 not found</div>} />
  </Fragment>;

  return (
    <HomeContextProvider>
      <Routes>
        <Route path='/' element={ctxUser.email === '' ? <Wrapper pageName="intro" customClassName=""><Intro/></Wrapper> : <Wrapper pageName="intro" customClassName=""><Intro/></Wrapper>} />
        { ctxUser.email === '' && 
          <Fragment>
            <Route path='/signup' element={<Wrapper customClassName=""><SignUp/></Wrapper>} />
            <Route path='/login' element={<Wrapper customClassName=""><Login/></Wrapper>} />
            <Route path='*' element={<Wrapper pageName="intro" customClassName=""><Intro/></Wrapper>} />
          </Fragment>
        }
        { ctxUser.email !== '' && authRoutes }
      </Routes>
    </HomeContextProvider>  
  );
}

export default App;
