import React from 'react';
import { List, Button } from 'antd';

const Basket: React.FC<{
  items: { id: number; title: string; price: number }[];
  onRemove: (id: number) => void;
}> = ({ items, onRemove }) => {
  return (
    <div style={{ marginTop: '20px' }}>
      <List
        header={<h2>Basket</h2>}
        bordered
        dataSource={items}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Button color="danger" variant='solid' onClick={() => onRemove(item.id)}>
                Remove
              </Button>,
            ]}
          >
            {item.title} - ${item.price}
          </List.Item>
        )}
      />
    </div>
  );
};

export default Basket;