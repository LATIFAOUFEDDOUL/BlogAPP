import Header from '../../components/header/Header'
import Posts from '../../components/postes/Postes'
import  './Home.css'

export default function Home() {
  return (
    <>
        <Header/> 
    <div className='home'>
      <Posts/>

    </div>
    
    </>
  )
}
