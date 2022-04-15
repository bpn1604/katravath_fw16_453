import React from 'react'

import styles from './restro.module.css'; 

function RestroShow(props) {
     const { name, currency, cuisines, featured_image,id,average_cost_for_two } = props.restaurant;
     const { aggregate_rating,rating_color,rating_text,votes} = props.restaurant.user_rating;
     const {address,city,zipcode,city_id} = props.restaurant.location;
    // console.log(votes);

  return (
  

    <div id={styles.btndiv}>
      
      <div className={styles.carddiv}>
        <div className={styles.resto_details_menu}>
    <div className={styles.image_resto}>
      <img className={styles.img_width} src={featured_image} alt=''/>
    </div>
    <div className={styles.resto_name_div}>
 
      <h4 className={styles.name}>{name}</h4>
      <p className={styles.cuisines}>{cuisines}</p>
      <p className={styles.cuisines}>Cost {currency }:{average_cost_for_two} for Two</p>
      <p className={styles.address}>Address :{address},{city},{zipcode}</p>
      <p className={styles.address}>Accepted Online Payment Only</p>
      
     
    </div>
    <div id={styles.rating_div}>
     <p className={styles.rating} style={{backgroundColor: rating_color }}>{aggregate_rating}</p>
     <p className={styles.votes}>{votes } votes</p>
     <p className={styles.votes}>{ city_id} reviews</p>
     
    </div>
        </div>

        <div className={styles.payment}>
          <button>Online Payment</button>

        </div>


      </div>
      
     
      
    </div>
  
  
  );
}

export default RestroShow