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
    <div className="step-section">
      <div className="row align-items-center">
        <div className={imageColumnClass}>
          <div className="step-images">
            {images.map((src, index) => (
              <img key={index} src={src} alt={`Step ${stepNumber} illustration ${index + 1}`} />
            ))}
          </div>
        </div>
        <div className={textColumnClass}>
          <div className="step-content">
            <div className="step-number">{stepNumber}</div>
            <h3 className="step-title">{title}</h3>
            <p className="step-description">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepSection;
