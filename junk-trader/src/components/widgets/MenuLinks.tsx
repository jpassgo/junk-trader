import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { NavLink } from 'react-router-dom'


function handleClick(event: { preventDefault: () => void; }) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function SimpleBreadcrumbs() {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <NavLink color="inherit" to="/" onClick={handleClick}>
        Home
      </NavLink>
      <NavLink color="inherit" to="/posts" onClick={handleClick}>
        Add Post
      </NavLink>
    </Breadcrumbs>
  );
}