import './topbar.css'
import userprofile from  '../../images/profileimg.jpeg'
export default function topbar() {
  return (
    <div className='Topbar'>
        <div className="topleft">
            <p className="logo1">BLOG</p>
            <p className="logo2">ino</p>
        </div>

        <div className="topcenter">
            <ul className="topList">
                <li className="topListItem">HOME</li>
                <li className="topListItem">ABOUT</li>
                <li className="topListItem">CONTACT</li>
                <li className="topListItem">NEW BLOG</li>
                <li className="topListItem">LOGOUT</li>

            </ul>
        </div>

        <div className="topright">
            <img className="profilImg" src={userprofile}/>

        </div>

    </div>
  )
}
