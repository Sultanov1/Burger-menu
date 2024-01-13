import React, { useState } from 'react';
import OrderDetails from './Components /OrderDetails';
import AddItems from './Components /AddItems';
import burgerImage from './assets/burger.png';
import friesImage from './assets/fries.png';
import chickenImage from './assets/chicken.png';
import teaImage from './assets/tea.png';
import coffeeImage from './assets/coffee.png';
import cokeImage from './assets/coke.png';
import './App.css';

const App: React.FC = () => {
    const [order, setOrder] = useState<{ item: string; quantity: number; price: number }[]>([]);
    const menuItems = [
        { name: 'Hamburger', price: 180, image: burgerImage },
        { name: 'Fries', price: 100, image: friesImage },
        { name: 'Chicken wings', price: 350, image: chickenImage },
        { name: 'Tea', price: 30, image: teaImage },
        { name: 'Coffee', price: 80, image: coffeeImage },
        { name: 'Coke', price: 60, image: cokeImage }
    ];

    const handleAddItem = (item: string) => {
        const existingItem = order.find((i) => i.item === item);

        if (existingItem) {
            setOrder((prevOrder) =>
                prevOrder.map((i) =>
                    i.item === item ? { ...i, quantity: i.quantity + 1, price: i.price + existingItem.price } : i
                )
            );
        } else {
            setOrder((prevOrder) => [...prevOrder, { item, quantity: 1, price: menuItems.find((i) => i.name === item)!.price }]);
        }
    };

    const handleRemoveItem = (item: string) => {
        setOrder((prevOrder) => prevOrder.filter((i) => i.item !== item));
    };

    const calculateTotal = () => {
        return order.reduce((acc, item) => acc + item.price, 0);
    };

    return (
        <div className="app">
            <OrderDetails order={order} total={calculateTotal()} onRemoveItem={handleRemoveItem} />
            <AddItems menuItems={menuItems} onAddItem={handleAddItem} />
        </div>
    );
};

export default App;
