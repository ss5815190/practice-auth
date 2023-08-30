import React, { useRef } from 'react';
import { v4 } from 'uuid';
import SubmitEvent from '../../components/SubmitEvent';

function CreateEvent() {
  const titleInputRef = useRef();
  const imgUrlInputRef = useRef();
  const dateInputRef = useRef();
  const descriptionInputRef = useRef();
  const handleCancel = () => {
    console.log('c');
  };
  const handleSave = () => {
    SubmitEvent({
      id: v4(),
      title: titleInputRef.current.value,
      image: imgUrlInputRef.current.value,
      date: dateInputRef.current.value,
      description: descriptionInputRef.current.value,
    });
  };
  return (
    <div className="CreateEvent">
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
      <button type="button" onClick={handleCancel} className="cancel">Cancel</button>
      <button type="button" onClick={handleSave} className="save">Save</button>
    </div>
  );
}

export default CreateEvent;
