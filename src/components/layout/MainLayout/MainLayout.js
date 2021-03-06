import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

import { useRecoilValue, useSetRecoilState } from 'recoil';
import axios from 'axios';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';

import {  todosState } from '../../../atoms';

const MainLayout = ({children}) => {

  const setTodos = useSetRecoilState(todosState);
  const todos = useRecoilValue(todosState);

  useEffect( () => {
    if(todos.data) {
      return null;
    }
    const getTodos = async () => {
      const result = await axios(
        `https://gorest.co.in/public-api/todos`,
      );
      setTodos(result.data.data);
    };
    if(!todos.data) {
      getTodos();
    }
  }, []);

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
