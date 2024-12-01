
import React from 'react';
import styles from '../styles/WeddingCardTemplate.module.css'; // Importing the CSS module

const WeddingCardTemplate = ({ brideImage, groomImage, textFields }) => {
  const { brideName, groomName, venue, additionalDetails } = textFields;

  return (
    <div className={styles['wedding-card-container']}>
      <div className={styles['card-header']}>
        <h2>Wedding Invitation</h2>
      </div>
      <div className={styles['card-content']}>
        <div className={styles['couple-images']}>
          <div className={styles['bride-image']}>
            {brideImage && <img src={brideImage} alt="Bride" />}
          </div>
          <div className={styles['groom-image']}>
            {groomImage && <img src={groomImage} alt="Groom" />}
          </div>
        </div>
        <div className={styles['couple-names']}>
          <h3>{brideName}</h3>
          <h3>&</h3>
          <h3>{groomName}</h3>
        </div>
        <div className={styles['wedding-details']}>
          <p>cordially invite you to celebrate their wedding</p>
          <p><strong>Venue:</strong> {venue}</p>
        </div>
        {additionalDetails && (
          <div className={styles['additional-details']}>
            <p>{additionalDetails}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeddingCardTemplate;
