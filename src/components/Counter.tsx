import React, { useState, useEffect, useRef } from 'react';

interface CounterProps {
    initialValue?: number;
    onAddToCart?: () => void;
}

const Counter: React.FC<CounterProps> = ({ initialValue = 0, onAddToCart }) => {
    const [count, setCount] = useState(initialValue);
    const counterRef = useRef<HTMLSpanElement>(null);
    const iconRef = useRef<HTMLSpanElement>(null);
    const [showCounter, setShowCounter] = useState(false);

    useEffect(() => {
        if (counterRef.current) {
            counterRef.current.textContent = count.toString();
        }
    }, [count]);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const handleAddToCart = () => {
        if (onAddToCart) {
            onAddToCart();
        }
        setShowCounter(true);
        setCount(1); // Устанавливаем начальное значение счетчика
    };

    return (

        <div className="card-cart">
            {count > 0 && showCounter ? (
                <div className="counter-buttons">
                    <button className={'minus'} onClick={decrement}>–</button>
                    <span ref={iconRef} className="icon">
                        <img className='cart' src="./cart.svg" alt="" width={'60'}/>
                        <span ref={counterRef} className="counter">{count}</span>
                        <button className={'plus'} onClick={increment}>+</button>
                        </span>
                </div>
            ) : (
                <button className='add-cart' onClick={handleAddToCart}>В корзину</button>
            )}
        </div>

    );
};

export default Counter;