import React from 'react';
import IntersectionViewer from './IntersectionViewer';
// import './App.css';

const Appp = () => {
  return (
    <div className="app">

      <IntersectionViewer
        onIntersect={() => console.log('Element is in view!')}
        options={{ rootMargin: '0px', threshold: 0.5 }}
      >
        {(isInView) => (
          <div
            style={{
              height: '300px',
              backgroundColor: isInView ? 'lightgreen' : 'lightcoral',
              transition: 'background-color 0.3s ease-in-out',
            }}
          >
            {isInView ? 'In View!' : 'Scroll more to bring into view'}
          </div>
        )}
      </IntersectionViewer>

    </div>
  );
};

export default Appp;
