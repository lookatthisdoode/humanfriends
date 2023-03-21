import React from 'react';

const SearchBox = ({ searchChange }) => {
	return(
 		<div className='ma5 pa2'>
			<input 
				style={{ textAlign:'center', height:'5vh', borderRadius:'10px', fontSize:'1.4rem' }}
				type='search' 
				placeholder='search friends'
				onChange={searchChange}
			/>
		</div>
	)
}

export default SearchBox;