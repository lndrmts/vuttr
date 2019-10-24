import React, { useState, useEffect } from 'react';

import { Title, Container, SubTitle, Actions } from './styles';
import List from './List';
import AddItem from './addItem';
import Filter from './Filter';

import api from '../../services/api';

export default function Main() {
  const [tool, setTool] = useState([]);
  const [searchTagOnly, setSearchTagOnly] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    api.get('/tools').then(res => {
      setTool(res.data);
    });
  }, []);

  function handleInputChange(event) {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : true;

    setSearchTagOnly(value);
  }
  function handleChange(event) {
    setSearch(event.target.value);
  }

  useEffect(() => {
    api
      .get(`/tools?${!searchTagOnly ? 'q' : 'tags_like'}=${search}`)
      .then(res => {
        setTool(res.data);
      });
  }, [search, searchTagOnly]);

  return (
    <>
      <Container>
        <Title>VUTTR</Title>
        <SubTitle>Very Useful Tools To Remember</SubTitle>
        <Actions>
          <Filter
            tool={tool}
            handleChange={handleChange}
            handleInputChange={handleInputChange}
            search={search}
          />
          <AddItem />
        </Actions>
        <List tool={tool} />
      </Container>
    </>
  );
}
