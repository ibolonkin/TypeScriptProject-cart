import storeItems from "../data/items.json"
import React from "react";
import {StoreItem} from "../components/StoreItem"

export function Menu(){
    return(
        <div className="menu">

            <div className="selector">
                <div className="navigation-selector">
                    <div className="hot"><button>Меню</button></div>
                </div>
            </div>

            <div className="food-cards">
                {storeItems.map(item => (
                    <div className="food-card" key={item.id}>
                        <StoreItem {...item}/>
                    </div>
                ))}
            </div>

        </div>
    )
}