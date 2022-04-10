

import React, { Component } from 'react'


import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';


class  ShowCard extends Component {
    render(){
      
        const CardData=this.props.data.map((item)=>
        {
            return (
                <div  className="">
                <div key={item.id}>
                  <img className='logos' src={item.logo} alt={item.name} />
                  <div>
                      <p>{item.name}</p>
                  </div>
                </div>
              </div>
                );
        });
        return (
          <div className="container">
              <div className="row">
                  {CardData}
              </div>
              
          </div>
      );
    

}
}

export default ShowCard