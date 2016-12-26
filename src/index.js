import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

const libraries = [
  {name: 'Backbone.js', url: 'http://documentcloud.github.io/backbone/'},
  {name: 'AngularJS', url: 'https://angularjs.org/'},
  {name: 'jQuery', url: 'http://jquery.com/'},
  {name: 'Prototype', url: 'http://www.prototypejs.org/'},
  {name: 'React', url: 'http://facebook.github.io/react/'},
  {name: 'Ember', url: 'http://emberjs.com/'},
  {name: 'Knockout.js', url: 'http://knockoutjs.com/'},
  {name: 'Dojo', url: 'http://dojotoolkit.org/'},
  {name: 'Mootools', url: 'http://mootools.net/'},
  {name: 'Underscore', url: 'http://documentcloud.github.io/underscore/'},
  {name: 'Lodash', url: 'http://lodash.com/'},
  {name: 'Moment', url: 'http://momentjs.com/'},
  {name: 'Express', url: 'http://expressjs.com/'},
  {name: 'Koa', url: 'http://koajs.com/'},
]

function SearchResults(props) {
	let libraryArr = props.libraries.filter(element => {
		if (props.query.length === 0) return true
		else return element.name.toLowerCase().indexOf(props.query) > -1
	}).map((element, index) => {
		return (<li className="item" key={index}>{element.name} <a href={element.url}>{element.url}</a></li>)
	})
	return (
		<div>
			<ul>
				{libraryArr}
			</ul>
		</div>
	)
}

class Search extends React.Component {

	constructor() {
		super()
		this.state = {userinput: '', libraries: libraries}
		this.handleInput = this.handleInput.bind(this)

	}

	handleInput(e) {
		e.preventDefault()
		this.setState({userinput: e.target.value})
	}

	render() {

		return (
			<div>
				<input type="text" name="searchform" value={this.state.userinput} onChange={this.handleInput} />
				<SearchResults query={this.state.userinput} libraries={this.state.libraries} />
			</div>
		)
	}
}

ReactDOM.render(
  <Search />,
  document.getElementById('root')
)
