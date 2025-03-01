import React from 'react';

const Basket = ({ items }: { items: { id: number; title: string; price: number }[] }) => {
  return (
    <div>
      <h2>Basket</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.title} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Basket;