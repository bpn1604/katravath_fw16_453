import React from 'react'
import { Carddiv } from '../components/CardStyled'
import '../components/card.css'
function CreaditCard(props) {
    
  return (
    <div>
        <div className="credit-card-wrap">
	<div className="mk-icon-world-map"></div>
	<div className="credit-card-inner">
		<header className="header">
			<div className="credit-logo">
				<div className="shape"><span className="txt"></span></div> <span className="text">Public Bank of Nepal</span>
			</div>
		</header>
		<div className="mk-icon-sim"></div>
		<div className="credit-font credit-card-number" data-text="4716">4716 6109 5211 3010</div>
		<footer className="footer">
			<div className="clearfix">
				<div className="pull-left">
					<div className="credit-card-date"><span className="title">Expires End</span><span className="credit-font">01/018</span></div>
					<div className="credit-font credit-author">MOHAN KHADKA</div>
				</div>
				<div className="pull-right"><div className="mk-icon-visa"></div></div>
			</div>
		</footer>
	</div>
</div>
    </div>
  )
}

export default CreaditCard