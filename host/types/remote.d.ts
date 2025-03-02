declare module 'products/ProductList' {
    import { FC } from 'react';
  
    interface Product {
      id: number;
      title: string;
      price: number;
    }
  
    const ProductList: FC<{ products: Product[] }>;
    export default ProductList;
  }
  
  declare module 'basket/Basket' {
    import { FC } from 'react';
  
    interface Item {
      id: number;
      title: string;
      price: number;
    }
  
    const Basket: FC<{ items: Item[]; onRemove: (id: number) => void }>;
    export default Basket;
  }