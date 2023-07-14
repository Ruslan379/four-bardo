import whel from 'images/four-bardo-815892_512.png';

import css from './Logo.module.css';


//------------------------------------------------------
export const Logo = () => {
    return (
        <div className={css.logoContainer}>
            <div className={css.logoShadowContainer}>
                <img
                    className={css.logoImage}
                    // style={{
                    //     marginBottom: '15px',
                    // }}
                    alt={whel}
                    src={whel}
                    width="150"
                />
            </div>
            <div className={css.titleText}>
                Nosce te ipsum
            </div>
        </div>
    );
};
