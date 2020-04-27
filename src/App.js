import React from 'react';
import './App.css';

import { Layout, Menu } from 'antd';

import { Route, Switch, Link, Redirect } from 'react-router-dom';

import Todos from './Components/Todos';
import Users from './Components/Users';
import ModalDisplay from './Components/Utility/ModalDisplay';


function App() {
  let [selected, setSelected] = React.useState('1');
  let handleSelected = (e) => {
    setSelected(e.key);
  }
  return (
    <Layout className='layout'>
      <Layout.Header>
        <h3 style={{color:'#fff'}}>Todo Users</h3>
      </Layout.Header>
        <Menu selectedKeys={selected} mode='horizontal' onClick={(e)=>handleSelected(e)}>
          <Menu.Item key='1'>
            <Link to='/'>To-Do's</Link>
          </Menu.Item>
          <Menu.Item key='2'>
            <Link to='/user'>User's</Link>
          </Menu.Item>
        </Menu>
        <Switch>
          <Route path='/' strict exact component={Todos} />
          <Route path='/user' strict exact render={() => (
            selected !== '1' ? <Users /> : <Redirect to='/' />
          )} />
        </Switch>
        <ModalDisplay />
    </Layout>
  );
}

export default App;
