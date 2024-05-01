import React from 'react';

const LogoLoader = (props) => {
  return (
    <div className="loader-container">
      <img src={require('/vercel/path0/src/components/LoaderLoader.svg')} alt="Loader" />
    </div>
  );
};

export default LogoLoader;
