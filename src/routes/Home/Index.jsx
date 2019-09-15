import React from 'react';
import Users from '../../components/Users'
import { inject } from 'mobx-react';

const Home = (props) => {
  const { TestStore } = props;
  console.log(TestStore)
  return(
  <div>
    Home
    <Users />
  </div>
  )
}

export default inject('TestStore')(Home)