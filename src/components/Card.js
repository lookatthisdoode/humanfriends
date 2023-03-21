import React from 'react';

const Card = ({ name, email, id }) => {
	return(
	   <div 
	   className='tc bg-lightest-blue dib br3 pa3 ma2 grow bw2 shadow-5'
	   style={{ width: '25vw' }}
	   >
	   	<img alt={name} src={`https://robohash.org/${id}?set=set5&size=200x200`} />
	   	<div style={{ fontSize: '0.7rem' }}>
	   		<h2>{name}</h2>
	   		<p>{email}</p>
	   	</div>
	   </div>    
 	);
}

export default Card;