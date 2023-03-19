import React, { useRef } from 'react';
import axios from 'axios';

function FileUploadButton() {
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log('Selected file:', file);

    const formData = new FormData();
    formData.append('file', file);

    axios.post('/api/upload-file', formData)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <button className='upload-btn' onClick={handleButtonClick}>Прикрепить файлы</button>
      <input type="file" ref={inputRef} onChange={handleFileChange} style={{ display: 'none' }} />
    </div>
  );
}

export default FileUploadButton;