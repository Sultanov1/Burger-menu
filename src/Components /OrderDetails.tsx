import React from 'react';

interface OrderDetailsProps {
    order: { item: string; quantity: number; price: number }[];
    total: number;
    onRemoveItem: (item: string) => void;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ order, total, onRemoveItem }) => {
    return (
        <div className="order-details">
            <h2>Order Details</h2>
            {order.length === 0 ? (
                <p>No items in the order</p>
            ) : (
                <>
                    <ul>
                        {order.map((item) => (
                            <li key={item.item}>
                                {item.quantity}x {item.item} - {item.price}KGS
                                <button className="remove-btn" onClick={() => onRemoveItem(item.item)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                    <p>Total price: {total}KGS</p>
                </>
            )}
        </div>
    );
};

export default OrderDetails;
