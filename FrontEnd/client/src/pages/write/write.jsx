import './write.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{faPlus} from '@fortawesome/free-solid-svg-icons'
import imag from '../../images/beach.jpg'
export default function write() {
  return (
    <div className='write'>
      <img src={imag} alt="postImg" className='writeImg' />
        <form className='writForm' >
            <div className="writFormGroup">
              <label htmlFor="file"><FontAwesomeIcon icon={faPlus}  className='writeIcon'/></label>
                <input type="file" name="file" id="file" style={{display:"none"}} />
                <input type="text" name="text" id="text" placeholder='Title' className='writInput' autoFocus={true } />
            </div>
            <div className="writFormGroup">
              <textarea name="posttext" id="texterea" cols="30" rows="10" placeholder='Tell your story...' type='text' className='writInput   writeText'></textarea>
            </div>
            <div className="weritSubmit">Publish</div>
        </form>
    </div>
  )
}
