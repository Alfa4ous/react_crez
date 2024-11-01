import { useParams } from 'react-router-dom';
import s from './Product.module.css';
import { OrderFormModal } from '../Modal/Modal';
import React, { useState } from 'react';

const products = [
    {
        id: 1,
        title: 'Толстовка 1',
        size: 'S-M',
        description: 't is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ',
        price: 5000,
        image: 'https://www.shop-fighter.ru/upload/resize_cache/iblock/afb/270_270_1/5n75siv7oe19mg53ud08zl465zhrdjui.png',
        quantity: 0
    },

    {
        id: 2,
        title: 'Толстовка 2',
        size: 'S-M',
        description: 't is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ',
        price: 5500,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6wMkDwlsOxvSeZ9Q7gpx1Ndr59_VlQuv0lw&s',
        quantity: 7
    },
    {
        id: 3,
        title: 'Толстовка 3',
        size: 'S-M',
        description: 't is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ',
        price: 3000,
        image: 'https://sinners-bones.ru/upload/iblock/521/d7fukd20lbazuwfiby5b9m7gb8uyzwrb.jpg',
        quantity: 4
    },
    {
        id: 4,
        title: 'Толстовка 4',
        size: 'S-M',
        description: 't is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ',
        price: 4400,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWI4wviYSivkNWkXWSFEPrJfKF6RGTwMl3LA&s',
        quantity: 0
    },

    {
        id: 5,
        title: 'Толстовка 5',
        size: 'S-M',
        description: 't is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ',
        price: 1300,
        image: 'https://cdn.crockid.ru/crockid/catalog/thumbs_small/0_a531356b-18d0-11ef-a973-3cecef7f0f5b.jpg',
        quantity: 2
    },
    {
        id: 6,
        title: 'Толстовка 6',
        size: 'S-M',
        description: 't is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ',
        price: 3500,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8-o27mCtbKomZKY8GYFmvmgmscVJZzGXmsw&s',
        quantity: 5
    }
    
];

export function ProductPage() {
    const { id } = useParams();
    const product = products.find((product) => product.id === Number(id));
    
    const [isModalOpen, setModalOpen] = useState(false);

    if (!product) {
        return <h2>Товар не найден</h2>;
    }

    const handleOrderClick = () => {
        setModalOpen(true);
    };

    return (
        <div className={s.Productda}>
            <img className={s.ProductImage} src={product.image} alt={product.title} />
            <div className={s.Producttext}>
                <h1 className={s.ProductTitle}>{product.title}</h1>
                <p className={s.ProductDesc}>{product.description}</p>
                <div className={s.btnopis}>
                <h3 className={s.ProductSize}>{product.size}</h3>
                    <h3 className={s.ProductTsena}>{product.price}₽</h3>
                    {product.quantity === 0 ? (
                        <button onClick={handleOrderClick} className={s.AddKorzin}>Заказать</button>
                    ) : (
                        <button className={s.AddKorzin}>В корзину</button>
                    )}
                </div>
            </div>
            <OrderFormModal   
                isOpen={isModalOpen} 
                onClose={() => setModalOpen(false)} 
                product={product} 
            />
        </div>
    );
}