import React from 'react';

function CreateEvent() {
  const handleCancel = () => {
    console.log('c');
  };
  const handleSave = () => {
    console.log('s');
  };
  return (
    <div className="CreateEvent">
      <form>
        <div className="title">
          <label htmlFor="title">
            Title :
            <input type="text" id="title" />
          </label>
        </div>
        <div className="imageUrl">
          <label htmlFor="imageUrl">
            ImageUrl :
            <input type="text" id="imageUrl" />
          </label>
        </div>
        <div className="date">
          <label htmlFor="date">
            Date :
            <input type="date" id="date" />
          </label>
        </div>
        <div className="description">
          <label htmlFor="description">
            Description :
            <input type="text" id="description" />
          </label>
        </div>
      </form>
      <button type="button" onClick={handleCancel} className="cancel">Cancel</button>
      <button type="button" onClick={handleSave} className="save">Save</button>
    </div>
  );
}

export default CreateEvent;
