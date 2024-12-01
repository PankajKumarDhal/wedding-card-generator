

import React from 'react';
import styles from '../styles/TextFieldManager.module.css'; // Import the CSS module

function TextFieldManager({ textFields, onTextChange }) {
  return (
    <div className={styles['text-field-manager']}>
      <div className={styles['input-group']}>
        <label>Bride's Name</label>
        <input 
          type="text" 
          value={textFields.brideName}
          onChange={(e) => onTextChange('brideName', e.target.value)}
          placeholder="Enter Bride's Name"
        />
      </div>
      <div className={styles['input-group']}>
        <label>Groom's Name</label>
        <input 
          type="text" 
          value={textFields.groomName}
          onChange={(e) => onTextChange('groomName', e.target.value)}
          placeholder="Enter Groom's Name"
        />
      </div>
      <div className={styles['input-group']}>
        <label>Wedding Venue</label>
        <input 
          type="text" 
          value={textFields.venue}
          onChange={(e) => onTextChange('venue', e.target.value)}
          placeholder="Enter Wedding Venue"
        />
      </div>
      <div className={styles['input-group']}>
        <label>Additional Details</label>
        <textarea 
          value={textFields.additionalDetails}
          onChange={(e) => onTextChange('additionalDetails', e.target.value)}
          placeholder="Enter Additional Wedding Details"
        />
      </div>
    </div>
  );
}

export default TextFieldManager;
