
import React, { useRef, useState } from 'react';
import styles from '../styles/ImageUploader.module.css'; // Import the CSS module

function ImageUploader({ type, onImageUpload }) {
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        onImageUpload(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div className={`${styles['image-uploader']} ${styles[type]}`}>
      <input 
        type="file" 
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        style={{ display: 'none' }}
      />
      <div 
        className={styles['upload-area']} 
        onClick={triggerFileInput}
      >
        {preview ? (
          <img 
            src={preview} 
            alt={`${type} upload preview`} 
            className={styles['preview-image']}
          />
        ) : (
          <div className={styles['upload-placeholder']}>
            Upload {type === 'bride' ? 'Bride' : 'Groom'} Photo
          </div>
        )}
      </div>
    </div>
  );
}

export default ImageUploader;
