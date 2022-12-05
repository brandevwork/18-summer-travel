import React from 'react';
import Button from '../UI/Button';


function PickKid(props)	{
	return (
		<div>
  	<p>How Many people Kids/Adults are you travelling with</p>
  		<select>
  			<option>Pick One</option>
  			<option value="2">2</option>
  			<option value="3">3</option>
  			<option value="4">4</option>
  			<option value="5">5</option>
  			<option value="6">6</option>
  			<option value="7">7</option>
  			<option value="8">8</option>
  			<option value="9">9</option>
  			<option value="10">10</option>
  		</select>
  		<Button title="Next" buttonClickHandler={() => props.nextClickHandler('after_kid')}/>
  	</div>
	)
}

export default PickKid;