import React from 'react';
import s from './tovar.module.css';
import tovarkart from '../../assets/tovar.png';
import { Link } from 'react-router-dom';

export function Tovar({ title, size, price, image, id, quantity }) {
    return (
        <div className={s.Tovars}>
            <img src={image} className={s.imagecart}></img>
            <p className={s.zagalov}>{title}</p>
            <p className={s.zagalov}>{size}</p>
            <div className={s.nizh}>
            <h3 className={s.tsena}>{price}</h3>
            <button className={s.button}><Link to={`/tovar/${id}`} className='Textik'>
                    Подробнее
                </Link></button>
                <p className={s.quantity}>Кол-во:{quantity}</p>
            </div>
        </div>
    );
}