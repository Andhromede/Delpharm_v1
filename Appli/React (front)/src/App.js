import "./helpers/string.helper";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import BaseView from "./vues/BaseView";
import LoadingSpinner from "./components/LoadingSpinner";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";


const LoginView = React.lazy(() => import("./vues/auth/LoginView"));
const InscriptionView = React.lazy(() => import("./vues/auth/InscriptionView"));
const HomeView = React.lazy(() => import("./vues/HomeView"));
const AccountView = React.lazy(() => import("./vues/profil/AccountView"));
const LogoutView = React.lazy(() => import("./vues/auth/LogoutView"));
const StatView = React.lazy(() => import("./vues/stat/StatView"));
const MyStatsView = React.lazy(() => import("./vues/stat/MyStatsView"));
const AccidentInterneView = React.lazy(() => import("./vues/formulaires/AccidentInterneView"));
const AccidentExterneView = React.lazy(() => import("./vues/formulaires/AccidentExterneView"));
const PqaView = React.lazy(() => import("./vues/formulaires/PqaView"));
const ErrorView = React.lazy(() => import("./vues/ErrorView"));
const ListActionView = React.lazy(() => import("./vues/action/ListActionView"));
const ResumAccidentExtern = React.lazy(() => import("./vues/formulaires/ResumAccidentExtern.jsx"));
const ResumAccidentIntern = React.lazy(() => import("./vues/formulaires/ResumAccidentIntern.jsx"));



const App = () => {
    const { auth } = useContext(AuthContext);

    return (
        <div className="App background-radial-gradient">
            <Router>
                <Routes>
                    <Route path="/" element={<BaseView />}>
                        <Route index element={<Suspense fallback={<LoadingSpinner />} > <LoginView /> </Suspense>} />
                        {/* {auth.role > 0 && <Route path="/accueil" element={<Suspense fallback={<LoadingSpinner />} > <HomeView /> </Suspense>} /> }
                        {auth.role > 0 && <Route path="/compte" element={<Suspense fallback={<LoadingSpinner />} > <AccountView /> </Suspense>} /> }
                        {auth.role === 0 &&<Route path="/inscription" element={<Suspense fallback={<LoadingSpinner />} > <InscriptionView /> </Suspense>} /> }
                        {auth.role === 0 && <Route path="/connexion" element={<Suspense fallback={<LoadingSpinner />} > <LoginView /> </Suspense>} /> }
                        {auth.role > 0 && <Route path="/deconnexion" element={<Suspense fallback={<LoadingSpinner />} > <LogoutView /> </Suspense>} /> }
                        {auth.role > 0 && <Route path="/statistique" element={<Suspense fallback={<LoadingSpinner />} > <StatView /> </Suspense>} /> }
                        {auth.role > 0 && <Route path="/action" element={<Suspense fallback={<LoadingSpinner />} > <ListActionView /> </Suspense>} /> } */}
                        
                        {/* {auth.role > 0 && <Route path="/declarationAccidentInterne" element={<Suspense fallback={<LoadingSpinner />} > <AccidentInterneView /> </Suspense>} /> }
                        {auth.role > 0 && <Route path="/declarationAccidentExterne" element={<Suspense fallback={<LoadingSpinner />} > <AccidentExterneView /> </Suspense>} /> }
                        {auth.role > 0 && <Route path="/declarationPqa" element={<Suspense fallback={<LoadingSpinner />} > <PqaView /> </Suspense>} /> } */}

                        
                        <Route path="/accueil" element={<Suspense fallback={<LoadingSpinner />} > <HomeView /> </Suspense>} /> 
                        <Route path="/compte" element={<Suspense fallback={<LoadingSpinner />} > <AccountView /> </Suspense>} /> 
                        <Route path="/inscription" element={<Suspense fallback={<LoadingSpinner />} > <InscriptionView /> </Suspense>} /> 
                        <Route path="/connexion" element={<Suspense fallback={<LoadingSpinner />} > <LoginView /> </Suspense>} /> 
                        <Route path="/deconnexion" element={<Suspense fallback={<LoadingSpinner />} > <LogoutView /> </Suspense>} /> 
                        <Route path="/statistique" element={<Suspense fallback={<LoadingSpinner />} > <StatView /> </Suspense>} /> 
                        <Route path="/mesStats" element={<Suspense fallback={<LoadingSpinner />} > <MyStatsView /> </Suspense>} /> 
                        <Route path="/action" element={<Suspense fallback={<LoadingSpinner />} > <ListActionView /> </Suspense>} /> 
                        
                        <Route path="/declarationAccidentInterne" element={<Suspense fallback={<LoadingSpinner />} > <AccidentInterneView /> </Suspense>} /> 
                        <Route path="/declarationAccidentExterne" element={<Suspense fallback={<LoadingSpinner />} > <AccidentExterneView /> </Suspense>} /> 
                        <Route path="/ResumIntern" element={<Suspense fallback={<LoadingSpinner />} > <ResumAccidentIntern /> </Suspense>} /> 
                        <Route path="/ResumExtern" element={<Suspense fallback={<LoadingSpinner />} > <ResumAccidentExtern /> </Suspense>} /> 
                        <Route path="/declarationPqa" element={<Suspense fallback={<LoadingSpinner />} > <PqaView /> </Suspense>} /> 
                        
                    </Route>

                    <Route path="*" element={<Suspense fallback={<LoadingSpinner />} > <ErrorView /> </Suspense>} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
