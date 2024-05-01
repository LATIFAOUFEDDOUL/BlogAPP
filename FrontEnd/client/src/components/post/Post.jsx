import './Post.css'
import postImg from '../../images/postimg.jpeg'

export default function Post() {
  return (
    <div className='post'>
        <img  className="postImage"  src={postImg} alt="post imgage" />
        <div className='postInfo'>
        <span className="posttitle">Discover the Power of Words</span><hr />
        <span className='postDate'> 1 hour </span>
        </div>
        <p className='postDesc'>Lorem ipsum dolor sit amet 
            consectetur adipisicing elit.
             Reprehenderit mollitia odit, 
             ab ducimus repellendus qui non!
              Perferendis rerum consectetur 
              aperiam fuga quod quasi vero molestias doloremque,
             facere, repudiandae dolore modiLorem ipsum dolor sit amet 
            consectetur adipisicing elit.
             Reprehenderit mollitia odit, 
             ab ducimus repellendus qui non!
              Perferendis rerum consectetur 
              aperiam fuga quod quasi vero molestias doloremque,
             facere, repudiandae dolore modiLorem ipsum dolor sit amet 
            consectetur adipisicing elit.
             Reprehenderit mollitia odit, 
             ab ducimus repellendus qui non!
              Perferendis rerum consectetur 
              aperiam fuga quod quasi vero molestias doloremque,
             facere, repudiandae dolore modiLorem ipsum dolor sit amet 
            consectetur adipisicing elit.
             Reprehenderit mollitia odit, 
             ab ducimus repellendus qui non!
              Perferendis rerum consectetur 
              aperiam fuga quod quasi vero molestias doloremque,
             facere, repudiandae dolore modiLorem ipsum dolor sit amet 
            consectetur adipisicing elit.
             Reprehenderit mollitia odit, 
             ab ducimus repellendus qui non!
              Perferendis rerum consectetur 
              aperiam fuga quod quasi vero molestias doloremque,
             facere, repudiandae dolore modi.</p>
    </div>
  )
}
