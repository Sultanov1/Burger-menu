import React from 'react';

interface AddItemsProps {
    menuItems: { name: string; price: number; image: string }[];
    onAddItem: (item: string) => void;
}

const AddItems: React.FC<AddItemsProps> = ({ menuItems, onAddItem }) => {
    return (
        <div className="add-items">
            <h2>Add items</h2>
            <ul>
                {menuItems.map((item) => (
                    <li key={item.name}>
                        <div className="item-container">
                            <img src={item.image} alt={item.name} />
                            <div>
                                <button onClick={() => onAddItem(item.name)}>
                                    {item.name} - {item.price}KGS
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AddItems;