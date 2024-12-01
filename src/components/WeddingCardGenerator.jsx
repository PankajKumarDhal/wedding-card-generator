import React, { useState } from 'react';
import styles from '../styles/Wedding.module.css'; // Import the CSS module
import WeddingCardTemplate from './WeddingCardTemplate';
import ImageUploader from './ImageUploader';
import TextFieldManager from './TextFieldManager';

function WeddingCardGenerator() {
  const [brideImage, setBrideImage] = useState(null);
  const [groomImage, setGroomImage] = useState(null);
  const [textFields, setTextFields] = useState({
    brideName: '',
    groomName: '',
    venue: '',
    additionalDetails: ''
  });

  const handleImageUpload = (image, type) => {
    if (type === 'bride') {
      setBrideImage(image);
    } else {
      setGroomImage(image);
    }
  };

  const handleTextChange = (field, value) => {
    setTextFields(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className={styles['wedding-card-generator']}>
      <h1 className={styles['header']}>Wedding Card Generator</h1>
      <div className={styles['card-creation-container']}>
        <div className={styles['image-upload-section']}>
          <ImageUploader 
            type="bride" 
            onImageUpload={(img) => handleImageUpload(img, 'bride')}
          />
          <ImageUploader 
            type="groom" 
            onImageUpload={(img) => handleImageUpload(img, 'groom')}
          />
        </div>
        
        <TextFieldManager 
          textFields={textFields}
          onTextChange={handleTextChange}
        />
        
        <WeddingCardTemplate 
          brideImage={brideImage}
          groomImage={groomImage}
          textFields={textFields}
        />
      </div>
    </div>
  );
}

export default WeddingCardGenerator;
