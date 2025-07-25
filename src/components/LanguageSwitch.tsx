import '../styles/LanguageSwitch.css';
import {useTranslation} from "react-i18next";

function LanguageSwitch() {
    const {i18n} = useTranslation();

    const handleLanguageChange = (e: any) => {
        const newLang = (e.target as HTMLInputElement).value;
        i18n.changeLanguage(newLang);
    }

    return (
        <div id='language-switch'>
            <select
                value={i18n.language}
                onChange={handleLanguageChange}
            >
                <option value='en'>🇬🇧</option>
                <option value='fr'>🇫🇷</option>
            </select>
        </div>
    )
}

export default LanguageSwitch;