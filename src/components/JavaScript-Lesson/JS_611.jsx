

import css from './JS_611.module.css';


//-----------------------------------------------------
export const JS_611 = () => {
    console.log("JS_6-11:");

    //! Навигация по DOM:
    console.log("Навигация по DOM:");

    console.log("document:", document);

    const body = document.body;
    console.log("body:", body);
    
    const list = body.firstElementChild;
    console.log("list:", list);
    
    const firstListItem = list.firstElementChild;
    console.log("firstListItem:", firstListItem);
    
    const listItems = list.children;
    console.log("listItems:", listItems);

    //! Поиск элементов
    console.log("Поиск элементов:");

    // <ul id="menu">
    //     <li className={css.menuItem}>home</li>
    //     <li className={css.menuItem}>about</li>
    //     <li className={css.menuItem}>gallery</li>
    //     <li>blog</li>
    // </ul>

    const listWithId = document.querySelector('#menu');
    // listWithId.style.textTransform = 'uppercase';
    // listWithId.style.fontSize = '24px';
    console.log("listWithId:", listWithId);
    
    const listWithClass = document.querySelector('.menu');
    console.log("listWithClass:", listWithClass);
    
    const menuItemsByTagName = document.querySelectorAll("li");
    console.log("menuItemsByTagName:", menuItemsByTagName);
    
    const menuItemsByClass = document.querySelectorAll(".menu-item");
    console.log("menuItemsByClass:", menuItemsByClass);
    
    const firstMenuItem = document.querySelector(".menu-item");
    // firstMenuItem.style.color = 'tomato';
    console.log("firstMenuItem:", firstMenuItem);

    //! Свойства и атрибуты
    console.log("Свойства и атрибуты:");

    const message = document.querySelector("#message");
    console.log("message:", message);
    // console.log(message.value); // Default textarea message

    //===================================================
    const activeLink = document.querySelector(".btn.active");
    console.log("activeLink:", activeLink);
    // console.log(activeLink.href); // https://s.codepen.io/about

    //===================================================
    const image = document.querySelector(".image");
    console.log("image:", image);
    // console.log(image.src); // https://placeimg.com/640/480/animals
    // image.src = 'https://placeimg.com/640/480/tech';

    return (
        <>
            <p style={{ color: "tomato" }}>{`<---- ${"JS_6-11"} ---->`}</p>
            {/* Навигация по DOM */}
            <h3 style={{ color: "blue" }}>{`Навигация по DOM`}</h3>
            <ul>
                <li>First item</li>
                <li>Second item</li>
                <li>Third item</li>
                <li>Fourth item</li>
                <li>Fifth item</li>
            </ul>
            {/* Поиск элементов */}
            <h3 style={{ color: "blue" }}>{`Поиск элементов`}</h3>
            <ul id="menu" className={css.menuList}>
                <li className={css.menuItem}>home</li>
                <li className={css.menuItem}>about</li>
                <li className={css.menuItem}>gallery</li>
                <li>blog</li>
            </ul>
            {/* Свойства и атрибуты */}
            <h3 style={{ color: "blue" }}>{`Свойства и атрибуты`}</h3>
            <textarea
                id="message"
                className={css.materializeTxtarea}
                defaultValue="Default textarea message"
                rows="5"
            >
                {/* Default textarea message */}
            </textarea>
            <div>
                <a href="/home">home</a>
                <a href="/about">about</a>
                <a href="/gallery">gallery</a>
            </div>

            <br/>
            <img src="https://placeimg.com/640/480/animals" alt="" width="320" />

            
        </>
    )
}
