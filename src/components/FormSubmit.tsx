import React, { useState } from 'react';

const Form: React.FC = () => {

    const [name, setName] = useState('');
    const [review, setReview] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setName('');
        setReview('');
    };

    return (
        <form className='form' onSubmit={handleSubmit}>
            <label className='otzyv-name'>
                Ваше имя:
                <input
                    type="text"
                    value={name}
                    placeholder='Иван Иванов'
                    onChange={(e) => setName(e.target.value)}
                />
            </label>

            <label className='otzyv-desc'>
                Отзыв:
                <textarea
                    name="comment"
                    value={review}
                    placeholder="Что вам понравилось?"
                    onChange={(e) => setReview(e.target.value)}
                />
            </label>
            <button className='otzyv-btn' type="submit">Отправить</button>
        </form>
    );
};

export default Form;