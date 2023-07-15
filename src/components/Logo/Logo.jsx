import { useNavigate } from "react-router-dom";
import wheel from 'images/four-bardo-815892_512.png';

import css from './Logo.module.css';


//------------------------------------------------------
export const Logo = () => {
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate("/", { replace: true });
    }


    return (
        <div
            className={css.logoContainer}
            onClick={handleSubmit}
        >
            <div className={css.logoShadowContainer}>
                <img
                    className={css.logoImage}
                    // style={{
                    //     marginBottom: '15px',
                    // }}
                    alt={wheel}
                    src={wheel}
                    width="150"
                />
            </div>
            <div className={css.titleText}>
                Nosce te ipsum
            </div>
        </div>
    );
};
