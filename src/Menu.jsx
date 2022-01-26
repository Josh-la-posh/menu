import React from "react";

function Menu({items}) {
    return (
        <div className="section-center">
            {items.map(menuItems=> {
                const {id, title, img, price, desc} = menuItems;

                return <article key={id} className="menu-item">
                <img className="photo" src={img} alt={title} />
                <div>
                    <div className="item-info">
                        <header>
                            <h4>{title}</h4>
                            <h4 className="price">{price}</h4>
                        </header>
                    </div>
                    <p className="item-text">{desc}</p>
                </div>
                </article>
                
            })}
        </div>
    )
}

export default Menu;