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
  const imageColumnClass = reverse ? 'col-lg-7 order-lg-1' : 'col-lg-7';
  const textColumnClass = reverse ? 'col-lg-5 order-lg-2' : 'col-lg-5';

  return (
    <div className="service-inner-header sp8" style={{ marginBottom: '64px' }}>
      <div className="container">
        <div className="row align-items-center">
          {reverse ? (
            <>
              <div className="col-lg-6" style={{ paddingLeft: '32px', paddingRight: '32px' }}>
                <div className="service-textarea heading2">
                  <div className="step-number" style={{ marginBottom: '8px' }}>{stepNumber}</div>
                  <h2 style={{ fontWeight: 600, fontSize: '2rem', marginBottom: '16px' }}>{title}</h2>
                  <p className="step-description">{description}</p>
                </div>
              </div>
              <div className="col-lg-6" style={{ paddingLeft: '32px', paddingRight: '32px' }}>
                <div className="service-images">
                  <img src={images[0]} alt={title} style={{ maxWidth: '380px', width: '100%', height: 'auto', borderRadius: '32px', objectFit: 'cover' }} />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="col-lg-6" style={{ paddingLeft: '32px', paddingRight: '32px' }}>
                <div className="service-images">
                  <img src={images[0]} alt={title} style={{ maxWidth: '380px', width: '100%', height: 'auto', borderRadius: '32px', objectFit: 'cover' }} />
                </div>
              </div>
              <div className="col-lg-6" style={{ paddingLeft: '32px', paddingRight: '32px' }}>
                <div className="service-textarea heading2">
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
