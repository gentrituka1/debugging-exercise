
import LoadingAnimation from '../LoadingAnimation';
import ProductList from '../ProductList/ProductList';
import useApp from './useApp';
import './App.css'
import { gK, strings } from '../../utils/strings-english';

function App() {
  const { isLoading, products } = useApp();

  if (!isLoading) return <LoadingAnimation />;

  return (
    <div className="App product__list">
      <h2>{gK('products_title')}</h2>
      <ProductList products={products} />
    </div>
  )
}

export default App

