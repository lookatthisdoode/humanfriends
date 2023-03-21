import React from 'react';



const Scroll = (props) => {
	return (
		<div 
			style={{ 
				background:'white', 
				padding:'20px 0', 
				overflowY: 'scroll',  
				height:'60vh' 
			}}
		>
			{props.children}
		</div>
	)
};



export default Scroll;