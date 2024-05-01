import  './Header.css'
import sidImge from "../../images/work.jpeg"

export default function Header() {
  return (
    <div className='header'>
      <div className='headertitle'>
        <span className='headerText'>
          <h1> Immerse Yourself in the World of Stories <br />Discover the Power of Words</h1>
          <p>Welcome to our realm of boundless imagination. Become part of our thriving community, where writers and readers converge to explore the art of storytelling and unlock the magic within words.</p>
          </span>
          <span className='headerImg'><img src={sidImge } alt="side image"   /></span>
      </div>

    </div>
  )
}
