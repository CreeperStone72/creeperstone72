import {HashRouter as Router, Route, Routes} from "react-router-dom";
import {Sidebar} from "./components";
import {useBoolean, useDarkMode} from "usehooks-ts";
import {GrMenu} from 'react-icons/gr';

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
                    <GrMenu className='menu-button' style={{margin: '1em', position: 'absolute'}} onClick={setFalse}/>
                    <Routes>
                        <Route path='/about' element={<>About me</>}/>
                        <Route path='/contact' element={<>Contact</>}/>
                        <Route path='/' element={<>Home</>}/>
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
