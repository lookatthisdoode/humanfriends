import React, { Component } from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import './App.css'
import BoxComponent from '../BoxComponent'


class App extends Component {
	constructor() {
		super()
		this.state = {
			humans: [],
			searchField: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.cypress.io/users')
		.then(response => response.json())
		.then(users => this.setState({ humans: users }))
	}

	onSearchChange = (event) => {
		this.setState({ searchField: event.target.value })
	}

	render() {
		const { humans, searchField} = this.state
		const filteredHumans = humans.filter(human => {
			return human.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		})
		return !humans.length ? <h1>Loading</h1> : 
			(
			  <div className='tc'>
			  {/*<BoxComponent />*/}
				  <h1>Human Friends</h1>
				  <SearchBox searchChange={this.onSearchChange}/>
				  <Scroll>
						<CardList humans={filteredHumans}/>
					</Scroll>
				</div>
	  	)
	}
}

export default App