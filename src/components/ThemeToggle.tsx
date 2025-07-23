import {MdDarkMode, MdLightMode} from "react-icons/md";
import '../styles/ThemeToggle.css';
import {useTheme} from "../hooks";

function ThemeToggle() {
    const [theme,, toggleTheme] = useTheme();
    
    return (
        <button onClick={toggleTheme} className="theme-toggle">
            {theme === 'light' ? <MdLightMode /> : <MdDarkMode />}
        </button>
    );
}

export default ThemeToggle;