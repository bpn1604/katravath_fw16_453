import React from 'react'
import { Carddiv, Card__number, Chipimg, Creditcardwrap, CreditExip, Visa } from '../components/CardStyled'
function CreaditCard(props) {
   // console.log(props);
const {name,number,year,month,cvv}=props
  return (
    <div>
        <Creditcardwrap>
        <header>
                <Visa>Visa</Visa>
  <Chipimg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHzRrjPsvrA2b9XFdtR7ur4Bu2pIy5Se_IXg&usqp=CAU"/>

</header>

<div>
     <div>
    <Card__number>{number}</Card__number>
    <CreditExip>
     
    <div><h4>CARD HOLDER</h4><p>{name}</p></div>
    <div><h4>EXPIRY</h4><p>{month}/{year}</p> </div>
    <div><h4>CVC</h4><p>{cvv}</p></div>
   
  </CreditExip>
    
   
  </div>
  
</div>


</Creditcardwrap>
    </div>
  )
}

export default CreaditCard