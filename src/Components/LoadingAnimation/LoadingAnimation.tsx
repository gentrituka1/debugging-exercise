import loading from '../../assets/loading.gif';
import './style.css';
/*
Animation displayed before fetch concludes
*/
function LoadingAnimation (){
  return (
  <div className='loadingAnimation'>
    <img src={loading} width={300} />
  </div>
  )
}
export default LoadingAnimation;