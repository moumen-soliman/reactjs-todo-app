import React from 'react';

const Header = (props) => (
  <div>
    <h1>{this.props.title}</h1>
    <h2>{this.props.subtitle}</h2>
  </div>
)

Header.defaultProps = {
  title: 'To Do Application by ReactJS',
  subtitle: 'Here subtitle for ToDo Application'
}

export default Header