import { PoiskTovarov } from '../Poisk/Poisk';
import { Tovar } from '../tovar/tovar'
import s from './catalogtovarov.module.css'
import React, { useState } from 'react';

const products = [
    {
        id: 1,
        title: 'Толстовка 1',
        size: 'S-M',
        price: 5000,
        image: 'https://www.shop-fighter.ru/upload/resize_cache/iblock/afb/270_270_1/5n75siv7oe19mg53ud08zl465zhrdjui.png',
        quantity: 0,
        category: 'Красивые'
    },

    {
        id: 2,
        title: 'Толстовка 2',
        size: 'S-M',
        price: 5500,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6wMkDwlsOxvSeZ9Q7gpx1Ndr59_VlQuv0lw&s',
        quantity: 7,
        category: 'Повседневные'
    },
    {
        id: 3,
        title: 'Толстовка 3',
        size: 'S-M',
        price: 3000,
        image: 'https://sinners-bones.ru/upload/iblock/521/d7fukd20lbazuwfiby5b9m7gb8uyzwrb.jpg',
        quantity: 4,
        category: 'Красивые'
    },
    {
        id: 4,
        title: 'Толстовка 4',
        size: 'S-M',
        price: 4400,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWI4wviYSivkNWkXWSFEPrJfKF6RGTwMl3LA&s',
        quantity: 0,
        category: 'Стильные'
    },

    {
        id: 5,
        title: 'Толстовка 5',
        size: 'S-M',
        price: 1300,
        image: 'https://cdn.crockid.ru/crockid/catalog/thumbs_small/0_a531356b-18d0-11ef-a973-3cecef7f0f5b.jpg',
        quantity: 2,
        category: 'Повседневные'
    },
    {
        id: 6,
        title: 'Толстовка 6',
        size: 'S-M',
        price: 3500,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8-o27mCtbKomZKY8GYFmvmgmscVJZzGXmsw&s',
        quantity: 5,
        category: 'Стильные'
    }
];


export function Catalogtovarov() {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortCriteria, setSortCriteria] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(''); 

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const sortProducts = (products) => {
        if (sortCriteria === 'priceAsc') {
            return products.sort((a, b) => a.price - b.price);
        } else if (sortCriteria === 'priceDesc') {
            return products.sort((a, b) => b.price - a.price);
        } else if (sortCriteria === 'quantityAsc') {
            return products.sort((a, b) => a.quantity - b.quantity);
        } else if (sortCriteria === 'quantityDesc') {
            return products.sort((a, b) => b.quantity - a.quantity);
        }
        return products;
    };

    const filterProducts = (products) => {
        if (selectedCategory) {
            return products.filter(product => product.category === selectedCategory);
        }
        return products; 
    };

    const filteredProducts = filterProducts(products).filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedProducts = sortProducts(filteredProducts);

    return (
        <div className={s.catalogszag}>
        <h1 className={s.Zagolovktov}>Каталог товаров</h1>
        <div className={s.PoiskFiltr}>
            <input className={s.Pole}
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Поиск товаров..."
            />
            <select value={selectedCategory} onChange={handleCategoryChange}>
                <option value="">Все категории</option>
                <option value="Красивые">Красивые</option>
                <option value="Стильные">Стильные</option>
                <option value="Повседневные">Повседневные</option>
            </select>
            <select value={sortCriteria} onChange={(e) => setSortCriteria(e.target.value)}>
                <option value="">Без сортировки</option>
                <option value="priceAsc">Цена: по возрастанию</option>
                <option value="priceDesc">Цена: по убыванию</option>
            </select>
        </div>
            <div className={s.catalogs}>
                <div className={s.catalog}>
                    {sortedProducts.map((product) => (
                        <Tovar 
                            key={product.id}
                            id={product.id}
                            title={product.title} 
                            size={product.size}
                            price={product.price} 
                            image={product.image} 
                            quantity={product.quantity} 
                            category={product.category}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}