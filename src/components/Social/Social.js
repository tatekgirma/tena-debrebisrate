import React from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faFacebook, faYoutube,faLinkedin,faTelegram,faWhatsapp } from '@fortawesome/free-brands-svg-icons'

function Social() {
  return (
    <div>
      <FontAwesomeIcon icon={faFacebook} /> 
      <FontAwesomeIcon icon={faYoutube} /> 
      <FontAwesomeIcon icon={faTelegram} /> 
      <FontAwesomeIcon icon={faWhatsapp} /> 
      <FontAwesomeIcon icon={faLinkedin} /> 
         </div>
  );
}

export default Social;