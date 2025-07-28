import {HashRouter as Router, Route, Routes} from "react-router-dom";
import {Sidebar} from "./components";
import {useBoolean, useDarkMode} from "usehooks-ts";
import {GrMenu} from 'react-icons/gr';
import Menu from "./data/menu.json";
import RoutesEl from "./routes";

function App() {
    const {isDarkMode} = useDarkMode();
    const theme = isDarkMode ? 'dark' : 'light';
    const {value, setTrue, setFalse} = useBoolean(true);

    const style = {
        backgroundColor: `var(--${theme}-200)`,
        color: isDarkMode ? 'white' : 'black',
        flex: 1,
        height: '100vh'
    };

    return (
        <Router>
            <div className='app'>
                <Sidebar collapsed={value} onClose={setTrue} />

                <main {...{style}}>
                    <GrMenu className='menu-button' onClick={setFalse}/>
                    <Routes>
                        {Menu.map((section) => {
                            return section.routes.map((route) => (
                                <Route
                                    key={`${section.root}${route.path}`}
                                    path={`${section.root}${route.path}`}
                                    element={RoutesEl[section.root][route.path]}
                                />
                            ))
                        })}
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
