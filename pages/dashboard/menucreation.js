
import React, { useState } from 'react';
import DashboardLayout from '../../components/dashboard/DashboardLayout';
import styles from '../../styles/menucreation.module.css';



const MenuCreation = () => {
  const [showMenuCreation, setShowMenuCreation] = useState(false);

  const handleAddMenuClick = () => {
    setShowMenuCreation(true);
  };

  const handleAlertCode = () => {
    alert('Your code here');
  };

  return (
    <DashboardLayout>
      <div className={styles.menuContainer}>
        <div>
          <h2 className={styles.menu}>Your Heading Content</h2>
          {/* Render content */}
          <div>
            {showMenuCreation ? (
              // Render MenuCreation component
              <div>
                {/* ... your existing MenuCreation component code ... */}
                <button className={styles.inn} type="button" onClick={handleAlertCode}>
                  Add menu
                </button>
              </div>
            ) : (
              <>
                <nav className={`flex flex-row space-y-7 w-full ${styles.topNav}`}>
                  <button className={`border-solid border-2 ${styles.inn}`} onClick={handleAddMenuClick}>
                    Add Menu
                  </button>
                </nav>
               
              </>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MenuCreation;
