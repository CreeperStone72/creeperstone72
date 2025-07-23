import {Link} from "react-router-dom";
import '../styles/Sidebar.css';
import {ThemeToggle} from ".";
import {useTheme} from "../hooks";

function Sidebar() {
    const [theme,,] = useTheme();

    return (
        <nav className='sidebar' style={{backgroundColor: `var(--secondary-${theme === 'light' ? 500 : 700})`}}>
            <ThemeToggle />
            <h3>Loïc Dornel</h3>
            <ul>
                <li>
                    <Link to='/loic-dornel'>Présentation</Link>
                </li>
                <li>
                    <Link to='/loic-dornel/cv'>CV</Link>
                </li>
                <li>
                    <Link to='/loic-dornel/portfolio'>Réalisations</Link>
                </li>
                <li>
                    <Link to='/loic-dornel/socials'>Réseaux sociaux</Link>
                </li>
            </ul>
            <h3>CreeperStone72</h3>
            <ul>
                <li>
                    <Link to='/creeperstone72'>Présentation</Link>
                </li>
                <li>
                    <Link to='/creeperstone72/blog'>Blog</Link>
                </li>
                <li>
                    <Link to='/creeperstone72/socials'>Réseaux sociaux</Link>
                </li>
            </ul>
            <h3>MJ Enraciné</h3>
            <ul>
                <li>
                    <Link to='rooted-dm'>Présentation</Link>
                </li>
                <li>
                    <Link to='/rooted-dm/experience'>Expérience</Link>
                </li>
                <li>
                    <Link to='/rooted-dm/journey-of-the-marked'>Journey of the Marked</Link>
                </li>
                <li>
                    <Link to='/rooted-dm/socials'>Réseaux sociaux</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Sidebar;