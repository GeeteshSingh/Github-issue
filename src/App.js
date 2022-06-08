import './App.css';
//components
import NavigationPanel from "./Components/NavigationPanel";
import ContainerView from "./Components/Container";
import { QueryClient, QueryClientProvider} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
import Boiler from "./Components/Wrapper";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {IssueDetail} from "./Components/IssuesDetail";
import {Form} from "react-bootstrap";
import Footer from "./Components/Footer";

const queryClient = new QueryClient()


function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <NavigationPanel/>
            <Boiler/>
            <BrowserRouter>
                <Routes>
                    <Route path="/issues" element={<ContainerView/>} exact />
                    <Route path="/issues/:issue" element={<IssueDetail/>} exact />
                </Routes>
            </BrowserRouter>
            <Footer/>
            <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
    );
}

export default App;
