import {MdDarkMode, MdLightMode} from "react-icons/md";
import '../styles/ThemeToggle.css';
import {useDarkMode} from "usehooks-ts";

function ThemeToggle() {
    const {isDarkMode, toggle} = useDarkMode();

    return (
        <button onClick={toggle} className="theme-toggle">
            {isDarkMode ? <MdDarkMode fill='white'/> : <MdLightMode fill='black'/>}
        </button>
    );
}

export default ThemeToggle;