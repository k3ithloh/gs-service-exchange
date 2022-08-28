import Image from 'next/image'
import RegisterForm from '../../components/Form/RegisterForm'

const register = () => {
  return (
    <div className="w-screen h-screen bg-white flex">
      <div className="m-auto w-1/4 text-center"><Image alt="GS Logo" src="/Gs-logo.png" width="450px" height="450px" layout="responsive" /></div>
      <div className="w-1 h-4/6 bg-black my-auto" style={{backgroundColor:'black'}}></div>
      <div className="container m-auto h-5/6 w-2/5 p-8 bg-sky-700 rounded-lg" style={{overflow: 'scroll', backgroundColor: '#6388BD'}}>
        <RegisterForm  />
      </div>
    </div>
  )
}

export default register

