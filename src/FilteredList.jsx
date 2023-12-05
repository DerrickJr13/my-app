import React, { Component } from 'react';
import { DropdownButton, MenuItem, DropdownItem, DropdownDivider } from 'react-bootstrap';
import List from './List';

const produce =
[
	{name:"Apple", type:"Fruit"},
	{name:"Pineapple", type:"Fruit"},
	{name:"Banana", type:"Fruit"},
	{name:"Pear", type:"Fruit"},
	{name:"Strawberry", type:"Fruit"},
	{name:"Orange", type:"Fruit"},
	
	{name:"Lettuce", type:"Vegetable"},
	{name:"Cucumber", type:"Vegetable"},
	{name:"Eggplant", type:"Vegetable"},
	{name:"Squash", type:"Vegetable"},
	{name:"Bell pepper", type:"Vegetable"},
	{name:"Onion", type:"Vegetable"},
];

class FilteredList extends Component {
  constructor(props) {
    super(props);

    //The state is just a list of key/value pairs (like a hashmap)
    //TODO (FilteredList): Add an additional state variable within this.state called "type" and set it to a default value
    this.state = {
      search: "",
	  type: "default",
    };
  }

  //Sets the state whenever the user types on the search bar
  onSearch = (event) => {
    this.setState({search: event.target.value.trim().toLowerCase()});
  }

  //TODO (FilteredList): Set the state of the "type" state variable depending on what is passed in
  onFilter = (event) => {
	
  }

  //TODO (FilteredList): Change filterItem to take into account the "type" state variable when filtering
  filterItem = (item) => {
      return item.name.toLowerCase().search(this.state.search) !== -1;
  }

  render(){
    return (
        <div className = "filter-list">
         <h1>Produce Search</h1>
		 
		 <DropdownButton id="typeDropdown"title={"Type"}>
		 <DropdownItem eventkey="all" onSelect={this.handleselect}>All</DropdownItem>
		 <DropdownDivider />
		 <DropdownItem eventkey="fruit" onSelect={this.handleselect}>Fruit</DropdownItem>
		 <DropdownDivider />
		 <DropdownItem eventkey="vegetables" onSelect={this.handleselect}>Vegetables</DropdownItem>
		 </DropdownButton>
          /*TODO (FilteredList): Create a Dropdown Menu with three different menu options: Fruit, Vegetables, and All*/
          
          <input type = "text" placeholder = "Search" onChange = {this.onSearch} />
          <List items = {this.props.items.filter(this.filterItem)} />
        </div>
    );
  }
}

export default FilteredList;
