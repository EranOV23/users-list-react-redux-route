import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {FilterList} from "../actions/creators";

import './nav.scss'

class Nav extends React.Component{

  render(){
    return(
      <div className="nav">
          <Link to="/">About</Link>
          <Link to="/users">Users</Link>
          <input className="filterInput" onChange={ (e) => this.props.setFilter(e.target.value, this.props.list) }/>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    list: state.friends.usersList
  }
}

function mapDispatchToProps(dispatch){
  return{
    setFilter: (filterValue, list) => dispatch(FilterList(filterValue, list)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
