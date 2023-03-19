import React, { useState } from 'react';
import axios from '../../axios/axios';
import FileUploadButton from './CreateFormUpload';

function CreateForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/courses', { name, description })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="create-form">
      <label>
        Название курса
        <input className='create-form-input' type="text" value={name} onChange={e => setName(e.target.value)} />
      </label>
      <label>
        Описание курса
        <input className='create-form-input' type="text" value={description} onChange={e => setDescription(e.target.value)} />
      </label>
      <FileUploadButton/>
      <button className='create-form_create-btn' type="submit">Создать курс</button>
    </form>
  );
}

export default CreateForm;