import {
    HashRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import {Sidebar} from "./components";
import {useTheme} from "./hooks";

function App() {
    const [theme,,] = useTheme();

    return (
        <Router>
            <div className='app'>
                <Sidebar />

                <Routes>
                    <Route path='/about' element={<main style={{backgroundColor: `var(--${theme}-500)`}}>About me</main>} />
                    <Route path='/contact' element={<main style={{backgroundColor: `var(--${theme}-500)`}}>Contact</main>} />
                    <Route path='/' element={<main style={{backgroundColor: `var(--${theme}-500)`}}>Home</main>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
