import React from 'react';

// Define the props for the StepSection component
interface StepSectionProps {
  stepNumber: string;
  title: string;
  description: string;
  images: string[];
  reverse?: boolean;
}

const StepSection: React.FC<StepSectionProps> = ({
  stepNumber,
  title,
  description,
  images,
  reverse,
}) => {
  return (
    <div className="service-inner-header sp8" style={{ marginBottom: '0px' }}>
      <div className="container">
        <div
          className="row align-items-center"
          style={{ minHeight: '320px', ...(reverse && stepNumber === 'Step 02' ? { marginLeft: '48px' } : {}) }}
        >
          {reverse ? (
            <>
              <div className="col-lg-6" style={{ paddingLeft: '64px', paddingRight: '8px' }}>
                <div className="service-textarea heading2 d-flex flex-column justify-content-center h-100">
                  <div className="step-number" style={{ marginBottom: '8px' }}>{stepNumber}</div>
                  <h2 style={{ fontWeight: 600, fontSize: '2rem', marginBottom: '16px' }}>{title}</h2>
                  <p className="step-description">{description}</p>
                </div>
              </div>
              <div className="col-lg-6 d-flex align-items-center justify-content-center" style={{ paddingLeft: '32px', paddingRight: '32px' }}>
                <div className="service-images d-flex justify-content-center align-items-center h-100">
                  <img src={images[0]} alt={title} style={{ maxWidth: '240px', width: '100%', height: 'auto', borderRadius: '24px', objectFit: 'cover' }} />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="col-lg-6 d-flex align-items-center justify-content-center" style={{ paddingLeft: '32px', paddingRight: '32px' }}>
                <div className="service-images d-flex justify-content-center align-items-center h-100">
                  <img src={images[0]} alt={title} style={{ maxWidth: '240px', width: '100%', height: 'auto', borderRadius: '24px', objectFit: 'cover' }} />
                </div>
              </div>
              <div className="col-lg-6" style={{ paddingLeft: '32px', paddingRight: '32px' }}>
                <div className="service-textarea heading2 d-flex flex-column justify-content-center h-100">
                  <div className="step-number" style={{ marginBottom: '8px' }}>{stepNumber}</div>
                  <h2 style={{ fontWeight: 600, fontSize: '2rem', marginBottom: '16px' }}>{title}</h2>
                  <p className="step-description">{description}</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default StepSection;
