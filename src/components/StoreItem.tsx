import React from "react";
import {useShoppingCart} from "../context/ShoppingCartContext";
import {Button} from "react-bootstrap";

type StoreItemProps = {
    id: number;
    name: string;
    description: string;
    weight: string;
    price: number;
    type: string;
    img: string
}

export function StoreItem({id, name, description, weight, price, type, img}: StoreItemProps){
    const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useShoppingCart()
    const quantity = getItemQuantity(id)

    return (
        <>
            <div className="food-card-img">
                <img className="food-img-card" src={img} width="352" alt={"food-img-cart"}/>
            </div>
            <div className='food-card-title'>{name}</div>
            <div className="food-card-descr">{description}</div>
            <div className="gramm">{weight}</div>
            <div className="food-card-bottom">
                <div className="price">
                    <span className="price-now">{price} ₽</span>
                </div>

                <div className="card-cart">
                    {quantity === 0 ? (
                        <Button className="add-cart" onClick={() => increaseCartQuantity(id)}>В корзину</Button>
                    ) : <div>
                            <div className="container-buttons">
                                <Button className={'minus'} onClick={() => decreaseCartQuantity(id)}>–</Button>
                                <div className='between-buttons'>
                                    <span className="counter">{quantity}</span> В корзине
                                </div>
                                <Button className={'plus'} onClick={() => increaseCartQuantity(id)}>+</Button>
                            </div>
                        </div>

                    }


                    </div>



            </div>

        </>

    )
}

