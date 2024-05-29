import {useShoppingCart} from "../context/ShoppingCartContext";
import storeItems from "../data/items.json"
import {Button, Stack} from "react-bootstrap";
import React from "react";

type CartItemProps = {
    id: number
    quantity: number
}

export function CartItem({id, quantity}: CartItemProps){
    const {removeFromCart} = useShoppingCart()
    const item = storeItems.find(i => i.id === id)
    if (item == null) return null

    return (
        <Stack direction="horizontal" gap={2}>
            <img src={item.img} style={{width: "125px", height: "75px", objectFit: "cover"}}/>
            <div>
                <div>
                    {item.name} {quantity > 1 && <span
                    className={'kolichestvo'} style={{fontSize: ".65rem"}}>x{quantity}
                    </span>}
                </div>
                <div style={{fontSize: ".75rem"}}>
                    <span className="price-now">{item.price} ₽</span>
                </div>
            </div>
            <div><span className="price-now">{item.price * quantity} ₽</span></div>
            <Button onClick={() => removeFromCart(item.id)}>&times;</Button>
        </Stack>
    )
}