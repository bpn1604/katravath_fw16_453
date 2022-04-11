

import React, { Component } from 'react'



// import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';


class  ShowCard extends Component {
    render(){
      
        const CardData=this.props.data.map((item)=>
        {
            return (
                <div  key={item.id}>
                <div className="card" >
                    <div  className='deatails'>
                    <p>{item.date}</p>
                    <p id='casseStudy'>{item.CaseStudy}</p>
                    <h1>{item.name}</h1>
                    <h4>{item.Desktop}</h4>
                    </div>
                 
                  <div>
                  <img className='logos' src={item.logo} alt={item.name} />
                 

                  </div>

                </div>
              </div>
                );
        });
        return (
          <div className="container">
             
                  {CardData}
            
              
          </div>
      );
    

}
}

export default ShowCard