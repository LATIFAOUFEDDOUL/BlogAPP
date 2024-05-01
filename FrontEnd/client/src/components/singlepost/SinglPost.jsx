import './SinglPost.css'
import postImg from '../../images/postimg.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{faEdit} from '@fortawesome/free-regular-svg-icons'
import{faTrashCan} from '@fortawesome/free-solid-svg-icons'

export default function SinglPost() {
  return (
    <div className='singlepost'>
        <div className="singlePostwraper">
            <img src={postImg} alt="Singlpostimg" className="singlpostIMG" />
            <h1 className="singlPostTitle">hello wolrld i'm latifa
            <div className="singlPostEdit">
              <FontAwesomeIcon className='postIcon' icon={faEdit} />
            <FontAwesomeIcon className='postIcon'icon={faTrashCan} /> </div>
            </h1>
            <div className="singPostInfo">
              <span className='SinglPostAutor'>Autor: <b>latifa oufedoul</b></span>
              <span className='SinglPostDate'>1 hour ago</span>
            </div>
            <p className='singlPostDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Adipisci quia impedit beatae rem magni laboriosam iure aut. 
               Molestias ipsa ullam fugit, accusamus consequuntur obcaecati,
               quas aperiam magnam odit dignissimos porro.
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Adipisci quia impedit beatae rem magni laboriosam iure aut. 
               Molestias ipsa ullam fugit, accusamus consequuntur obcaecati,
               quas aperiam magnam odit dignissimos porroLorem ipsum dolor sit amet consectetur adipisicing elit.
               Adipisci quia impedit beatae rem magni laboriosam iure aut. 
               Molestias ipsa ullam fugit, accusamus consequuntur obcaecati,
               quas aperiam magnam odit dignissimos porroLorem ipsum dolor sit amet consectetur adipisicing elit.
               Adipisci quia impedit beatae rem magni laboriosam iure aut. 
               Molestias ipsa ullam fugit, accusamus consequuntur obcaecati,
               quas aperiam magnam odit dignissimos porroLorem ipsum dolor sit amet consectetur adipisicing elit.
               Adipisci quia impedit beatae rem magni laboriosam iure aut. 
               Molestias ipsa ullam fugit, accusamus consequuntur obcaecati,
               quas aperiam magnam odit dignissimos porroLorem ipsum dolor sit amet consectetur adipisicing elit.
               Adipisci quia impedit beatae rem magni laboriosam iure aut. 
               Molestias ipsa ullam fugit, accusamus consequuntur obcaecati,
               quas aperiam magnam odit dignissimos porro </p>
        </div>
        </div>
  )
}
