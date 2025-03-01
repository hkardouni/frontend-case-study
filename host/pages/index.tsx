import dynamic from 'next/dynamic';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { addToBasket } from '../store/productsSlice';
import { useGetProductsQuery } from '../store/api';

const ProductList = dynamic(() => import('products/ProductList'), { ssr: false });
const Basket = dynamic(() => import('basket/Basket'), { ssr: false });

export default function Home() {
  const dispatch = useDispatch();
  const selectedItems = useSelector((state: RootState) => state.products.selectedItems);
  const { data: products = [], isLoading, error } = useGetProductsQuery();

  const handleAddToBasket = (product: { id: number; title: string; price: number }) => {
    console.log('Adding to basket:', product);
    dispatch(addToBasket(product));
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <div>
      <h1>E-Commerce Demo</h1>
      <ProductList products={products} />
      <div>
        {products.map((product) => (
          <button key={product.id} onClick={() => handleAddToBasket(product)}>
            Add {product.title} to Basket
          </button>
        ))}
      </div>
      <Basket items={selectedItems} />
    </div>
  );
}