import React, { useState } from 'react';

const ImageWithFallback = ({ src, alt, className }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 bg-tertiary-light dark:bg-tertiary-dark animate-pulse rounded-lg" />
      )}
      {hasError ? (
        <div className="absolute inset-0 flex items-center justify-center bg-tertiary-light dark:bg-tertiary-dark rounded-lg">
          <p className="text-textSecondary-light dark:text-textSecondary-dark text-sm">
            Image not available
          </p>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
          onLoad={handleLoad}
          onError={handleError}
        />
      )}
    </div>
  );
};

export default ImageWithFallback; 