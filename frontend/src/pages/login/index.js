import Image from 'next/image'
import LoginForm from '../../components/Form/LoginForm'

const login = () => {
  return (
    <div class="w-screen h-screen bg-white flex">
      <div class="m-auto w-1/4 text-center"><Image src="/GS-logo.png" width="450px" height="450px" layout="responsive" /></div>
      <div class="w-1 h-4/6 bg-black my-auto"></div>
      <div class="container m-auto h-5/6 w-2/5 p-8 rounded-lg" style={{backgroundColor: '#6388BD'}}>
        <LoginForm  />
      </div>
    </div>
  )
}

export default login
