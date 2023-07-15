import whel from 'images/four-bardo-815889_128.png';

import css from './Home.module.css';


//------------------------------------------------------
export const Home = () => {
    return (
        <div className={css.logoHomeContainer}>
            <div className={css.titleText}>
                Γνῶθι σεαυτόν
            </div>
            <div className={css.logoHomeShadowContainer}>
                <img
                    className={css.logoHomeImage}
                    alt={whel}
                    src={whel}
                    width="100"
                />
            </div>

        </div>
    );
};
