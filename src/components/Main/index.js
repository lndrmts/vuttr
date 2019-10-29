import React, { useState, useEffect } from 'react';

import { Title, Container, SubTitle, Actions } from './styles';
import List from './List';
import AddItem from './addItem';
import Filter from './Filter';

import api from '../../services/api';

export default function Main(props) {
  const [tool, setTool] = useState([]);
  const [searchTagOnly, setSearchTagOnly] = useState(false);
  const [search, setSearch] = useState('');
  const { id } = props;

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

  function handleRemove(id) {
    api.delete(`/tools/${id}`).then(res => {
      window.location.href = '/';
    });
  }

  function handleSubmit({ title, link, description, tags }) {
    const newtags = tags.split(', ');
    api
      .post(`/tools/`, {
        title,
        link,
        description,
        tags: newtags,
      })
      .then(res => {
        window.location.href = '/';
      });
  }

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
          <AddItem handleSubmit={handleSubmit} />
        </Actions>
        <List tool={tool} handleRemove={handleRemove} id={id} />
      </Container>
    </>
  );
}
