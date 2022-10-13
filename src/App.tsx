
import './App.css'
import LoadingAnimation from './Components/LoadingAnimation';
import NewItemForm from './Components/NewItemForm';
import ProductList from './Components/ProductList/ProductList';
import useApp from './useApp';

function App() {
  const { isLoading, products } = useApp();

  //TODO: break;
  if (isLoading) return <LoadingAnimation />;

  return (
    <div className="App product__list">
      <NewItemForm />
      <ProductList products={products} />

    </div>
  )
}

export default App

