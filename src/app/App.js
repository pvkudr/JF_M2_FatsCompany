import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Main from './layouts/main';
import Login from './layouts/login';
import NavBar from './components/ui/navBar';
import Users from './layouts/users';
import { ToastContainer } from 'react-toastify';
import ProfessionProvider from './hooks/useProfAndQual';
import AuthProvider from './hooks/useAuth';
import ProtectedRoute from './components/common/protectedRoute';
import LogOut from './layouts/logOut';
import { useDispatch } from 'react-redux';
import { loadQualitiesList } from './store/qualities';

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        console.log('useEff from app is working');
        dispatch(loadQualitiesList());
    }, []);

    return (
        <div>
                <AuthProvider>
                <NavBar/>
                <ProfessionProvider>
                    <Switch>
                        <Route exact path = '/' component = {Main} />
                        <Route path = '/login/:type?' component = {Login} />
                        <Route path= '/logout' component={LogOut} />
                        <ProtectedRoute path = '/users/:userId?/:edit?' component = {Users} />
                        <Redirect to = '/' />
                    </Switch>
                </ProfessionProvider>
                </AuthProvider>
                <ToastContainer/>
        </div>
    );
};

export default App;
