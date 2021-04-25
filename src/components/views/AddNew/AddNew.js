import React, { useState }from 'react';

/** @jsxImportSource theme-ui */

import { Box, Button, Label, Input, Container } from 'theme-ui';
import { Link } from 'react-router-dom';
import { useRecoilState, useSetRecoilState, atom } from 'recoil';
import {  titleState, todosState } from '../../../atoms';

let id = 0;
const getId = () => {
  return id++;
};

const AddNew = () => {

  const [title, setTitle] = useRecoilState(titleState);
  const setTodoList = useSetRecoilState(todosState);
  // const updateTodo = useSetRecoilState(todo);

  const onChange = (event) => {
    setTitle(event.target.value);
  };

  const addTodo = (event) => {
    event.preventDefault();
    if (!title.length) return;
    setTodoList((oldTodoList) => {
      const newTodoList = [
        ...oldTodoList,
        {
          id: getId(),
          title,
          completed: false,
        },
      ];
      return newTodoList;
    });
  };

  // const addTodo = (event) => {
  //   event.preventDefault();
  // if (!title.length) return;
  //   setTodoList((oldTodoList) => [

  //     ...oldTodoList,
  //     {
  //       id: getId(),
  //       title,
  //       completed: false,
  //     },


  //   ]);
  //   handleClose();
  // };


  // const addValue = () => {
  //   setTitle(``);
  //   updateTodo((oldList) => [
  //     ...oldList,
  //     {
  //       id: getId(),
  //       value: title,
  //     },
  //   ]);
  //   console.log(`old list`, oldList);
  // };


  // const addTodo = () => {
  //   setTodoList((oldTodoList) => [
  //     ...oldTodoList,
  //     {
  //       id: getId(),
  //       text: title,
  //       completed: false,
  //     },
  //   ]);
  //   setTitle(``);
  // };

  // const onChange = ({ target: {title} }) => {
  //   setTitle(title);
  //   console.log(`title`, title);
  // };

  return(
    <div
      // onSubmit={onSubmit}
      sx={{
        backgroundColor: `backgroundList`,
        display: `flex`,
        flexDirection: `column`,
        position: `center`,
        alignItems: `center`,
        fontSize: `calc(10px + 2vmin)`,
        color: `black`,
        padding: `150px`,
        minHeight: `80vh`,
      }}
    >
      <Container
        sx={{
          backgroundColor: `muted`,
          display: `flex`,
          flexDirection: `column`,
          position: `center`,
          alignItems: `center`,
          width: `500px`,
          color: `black`,
          fontFamily: `body`,
        }}>
        <Box
          sx={{
            width: `380px`,
            display: `flex`,
            justifyContent: `flex-end`,
            marginTop: `25px`,
          }}>
          <Link to='/'>
            <Button variant='primary'>
            Powrót
            </Button>
          </Link>
        </Box>
        {/* <form onSubmit={handleSubmit(onSubmit)}> */}
        <Box
          as="form"
          // onSubmit={AddTodo}
          sx={{
            marginBottom: `25px`,
          }}>
          <Label>
            Tytuł
          </Label>
          <Input
            type='text'
            name='title'
            mb={3}
            value={title}
            // onChange={event => setTitle(event.target.value)}
            onChange={onChange}
          />
          <Button
            variant='third'
            onClick={() => addTodo()}
            // onClick={() => addValue()}
          >
            Dodaj
          </Button>
        </Box>
        {/* </form> */}
      </Container>
    </div>
  );
};

export default AddNew;
