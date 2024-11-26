import React from 'react';
import './MemberCard.css';

const MemberCard = () => {
  return (
    <div className='member-card'>
        <div className='member-image-container'>
        <img src="https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Member Name" className='member-image' />
        
        <div className='member-details'>
            <span className='member-name'>EK HASINA</span>
            <span className='member-dept'>B.Tech CSE , 2026</span>
            <div className='member-socials'>
                <span>instagram</span>
                <span>linkedin</span>
                <span>X</span>
                <span>email</span>
                <span>contact</span>
                <span>github</span>

            </div>
            <p className='member-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eligendi sed quidem qui error in illo reiciendis adipisci itaque explicabo dicta recusandae, molestias reprehenderit nostrum natus debitis velit earum dolores, possimus deleniti.</p>
        </div>
        </div>
    </div>
  )
}

export default MemberCard