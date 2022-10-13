import loading from '../../assets/loading.gif';
import './style.css';
const LoadingAnimation = () => {
  return (
    <div className='loadingAnimation'>
      <img src={loading} width={300} />
    </div>
  )
}

export default LoadingAnimation;