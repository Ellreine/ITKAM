import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navbar />
                <div className="app-wrapper-content">
                    <Routes>
                        <Route
                            path="/profile"
                            element={
                                <Content
                                    profilePage={props.state.profilePage}
                                    dispatch={props.dispatch}
                                />
                            }
                        />
                        <Route
                            path="/messages/*"
                            element={
                                <Dialogs
                                    store={props.store}
                                    state={props.state.messagesPage}
                                />
                            }
                        />
                        <Route path="/news" element={<Dialogs />} />
                    </Routes>
                </div>

                <footer></footer>
            </div>
        </BrowserRouter>
    );
};

export default App;
