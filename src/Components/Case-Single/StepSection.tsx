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
    <>
      <div className="service-inner-header sp8" style={{ marginBottom: '0px' }}>
        <div className="container">
          <div
            className={`row align-items-center step-row${reverse && stepNumber === 'Step 02' ? ' step2-mobile-center' : ''}`}
            style={{ minHeight: '340px', ...(reverse && stepNumber === 'Step 02' ? { marginLeft: '48px' } : {}) }}
          >
            {reverse ? (
              <>
                {/* On mobile, show image first then text for step 2 */}
                <div className="col-lg-6 d-flex align-items-center justify-content-center step2-mobile-img" style={{ minHeight: '340px' }}>
                  <div className="service-images d-flex justify-content-center align-items-center h-100">
                    <img src={images[0]} alt={title} style={{ maxWidth: '240px', width: '100%', height: 'auto', borderRadius: '24px', objectFit: 'cover' }} />
                  </div>
                </div>
                <div className="col-lg-6 step2-mobile-text d-flex align-items-center justify-content-center" style={{ minHeight: '340px' }}>
                  <div className="service-textarea heading2 d-flex flex-column justify-content-center h-100">
                    <div className="step-number" style={{ marginBottom: '8px' }}>{stepNumber}</div>
                    <h2 style={{ fontWeight: 600, fontSize: '2rem', marginBottom: '16px' }}>{title}</h2>
                    <p className="step-description">{description}</p>
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
      {/* Responsive mobile centering for step 2 */}
      <style>{`
        @media (max-width: 767px) {
          .step2-mobile-center {
            flex-direction: column !important;
            margin-left: 0 !important;
            text-align: center;
          }
          .step2-mobile-center > .step2-mobile-img {
            order: 1;
            width: 100% !important;
            max-width: 100% !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
            justify-content: center !important;
            align-items: center !important;
            display: flex !important;
            flex-direction: column !important;
          }
          .step2-mobile-center > .step2-mobile-text {
            order: 2;
            width: 100% !important;
            max-width: 100% !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
            justify-content: center !important;
            align-items: center !important;
            display: flex !important;
            flex-direction: column !important;
          }
          .step2-mobile-center .service-textarea {
            align-items: center !important;
          }
        }
        .step-row {
          min-height: 340px;
          align-items: center !important;
          display: flex;
        }
        .step-row > div {
          display: flex;
          align-items: center;
          height: 100%;
        }
      `}</style>
    </>
  );
};

export default StepSection;
