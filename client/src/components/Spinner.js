import { PulseLoader } from 'react-spinners';

const Spinner = () => {
  return (
    <div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}}>
        <PulseLoader color="#d46565" />
    </div>
  )
}
export default Spinner