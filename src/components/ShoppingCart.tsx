import {Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Stack} from "react-bootstrap";
import {useShoppingCart} from "../context/ShoppingCartContext";
import {CartItem} from "./CartItem";
import React from "react";
import storeItems from "../data/items.json"

type ShoppingCartProps = {
    isOpen: boolean
}

export function ShoppingCart({isOpen}: ShoppingCartProps){
    const {closeCart, cartItems} = useShoppingCart()
    return <Offcanvas placement={'end'} className='off-cart' show={isOpen} onHide={closeCart} >
        <OffcanvasHeader className='off-header' closeButton>
            <OffcanvasTitle className="off-tittle">Корзина</OffcanvasTitle>
        </OffcanvasHeader>
        <OffcanvasBody className='off-body'>
            <Stack gap={3}>
                {cartItems.map(item => (
                <CartItem key={item.id} {...item} />))}
                <div className='total'>
                    Цена:{" "}
                    <span className="price-now">{cartItems.reduce((total, cartItem) => {
                    const item = storeItems.find(i => i.id === cartItem.id)
                    return total + (item?.price || 0) * cartItem.quantity}, 0)} ₽</span>
                </div>
                <div className="order-button">
                    <button className='order'>Оформить заказ</button>
                </div>
            </Stack>
        </OffcanvasBody>
    </Offcanvas>
}