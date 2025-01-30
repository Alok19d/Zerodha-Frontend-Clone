import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

const MemberCard = (props) => {
  const [bio, setBio] = useState(false);

  return (
    <div className='member'>
    <img src={props.member.img}/>
    <h5>{props.member.name}</h5>
    <p>{props.member.position}</p>
    <p className='show-bio' >
      <a onClick={()=>setBio(!bio)}>
        Bio 
        {
          bio?
          <FontAwesomeIcon icon={faAngleUp} />:
          <FontAwesomeIcon icon={faAngleDown} />
        }
      </a>
    </p>
    {
      bio &&
      <p className='bio'>{props.member.bio}</p>
    }
    </div>
  )
}

export default MemberCard