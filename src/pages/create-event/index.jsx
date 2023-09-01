import React, { useRef, useState } from 'react';
import { v4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import SubmitEvent from '../../components/SubmitEvent';
import { getAuthToken } from '../../util/auth';

function CreateEvent() {
  const titleInputRef = useRef();
  const imgUrlInputRef = useRef();
  const dateInputRef = useRef();
  const descriptionInputRef = useRef();
  const token = getAuthToken();
  const [error, setError] = useState({});
  // 還沒登入
  if (!token) {
    return <div className="CreateEvent">Not login yet</div>;
  }
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate(-1);
  };

  const handleSave = async () => {
    try {
      const response = await SubmitEvent({
        id: v4(),
        title: titleInputRef.current.value,
        image: imgUrlInputRef.current.value,
        date: dateInputRef.current.value,
        description: descriptionInputRef.current.value,
        token,
        navigate,
      });
      setError(response);
    } catch (errorMessage) {
      setError(errorMessage);
    }
  };

  return (
    <div className="CreateEvent">
      {error && Object.values(error).map((e) => (<h1 key={e}>{e}</h1>))}
      <form>
        <div className="title">
          <label htmlFor="title">
            Title :
            <input type="text" id="title" ref={titleInputRef} />
          </label>
        </div>
        <div className="imageUrl">
          <label htmlFor="imageUrl">
            ImageUrl :
            <input type="text" id="imageUrl" ref={imgUrlInputRef} />
          </label>
        </div>
        <div className="date">
          <label htmlFor="date">
            Date :
            <input type="date" id="date" ref={dateInputRef} />
          </label>
        </div>
        <div className="description">
          <label htmlFor="description">
            Description :
            <textarea rows="7" type="text" id="description" ref={descriptionInputRef} />
          </label>
        </div>
      </form>
      <div className="button-wrap">
        <button type="button" onClick={handleCancel} className="cancel">Cancel</button>
        <button type="button" onClick={handleSave} className="btn-light">Save</button>
      </div>
    </div>
  );
}

export default CreateEvent;
