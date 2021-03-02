import React from 'react';
import './section.scss';

const Section = ({ children, wrapper = true, backgroundColor = '#FFFFFF' }: any) => {
  return (
    <section className="section" style={{ backgroundColor }}>
      {wrapper ? <div className="section-wrapper">{children}</div> : children}
    </section>
  );
};

export default Section;
