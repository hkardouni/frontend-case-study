import dynamic from 'next/dynamic';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { addToBasket, removeFromBasket } from '../store/productsSlice';
import { useGetProductsQuery } from '../store/api';
import { List, Button } from 'antd';

const Basket = dynamic(() => import('basket/Basket'), { ssr: false });

export default function Home() {
  const dispatch = useDispatch();
  const selectedItems = useSelector((state: RootState) => state.products.selectedItems);
  const { data: products = [], isLoading, error } = useGetProductsQuery();

  const handleAddToBasket = (product: { id: number; title: string; price: number }) => {
    console.log('Adding to basket:', product);
    dispatch(addToBasket(product));
  };

  const handleRemoveFromBasket = (id: number) => {
    console.log('Removing from basket:', id);
    dispatch(removeFromBasket(id));
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>E-Commerce Demo</h1>
      <List
        header={<h2>Product List</h2>}
        bordered
        dataSource={products}
        renderItem={(product) => (
          <List.Item
            actions={[
              <Button type="primary" onClick={() => handleAddToBasket(product)}>
                Add to Basket
              </Button>,
            ]}
          >
            {product.title} - ${product.price}
          </List.Item>
        )}
      />
      <Basket items={selectedItems} onRemove={handleRemoveFromBasket} />
    </div>
  );
}