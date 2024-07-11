import React from 'react';
import { Text, Image, Link } from '@sitecore-jss/sitecore-jss-react';

const SecondaryHeader = (props) => {
  console.log(props);
  return (
    <div className="secondary-header-wrapper">
      <div className="secondary-header align-items-center justify-content-between ">
        <div className="logo-wrapper">
          <Image media={props.fields.logo.value.src} className="w-100" />
        </div>
        <div className="menu-wrapper d-flex align-items-center justify-content-between">
          {props.fields.headerlist.map((item, index) => (
            <a
              key={index}
              href={item.fields.link.value.href}
              className={index === 0 ? 'active' : ''}
            >
              <p className="txt-montserrat-16-500-140 text-uppercase mb-0 ">
                <Text field={item.fields.title} />
              </p>
            </a>
          ))}
        </div>
        <div className="cta-wrapper d-flex">
          <div className="secondary-cta-wrapper d-flex justify-content-center align-items-center">
            <p className="txt-montserrat-16-700-normal text-white text-uppercase mb-0">
              <a href={props.fields.TestRideCtaLink.value.href}>
                <Text field={props.fields.TestRideCtaText} />
              </a>
            </p>
          </div>
          <div className="primary-cta-wrapper d-flex justify-content-center align-items-center">
            <p className="txt-montserrat-16-700-normal text-white text-uppercase mb-0">
              <a href={props.fields.BookCtaLink.value.href}>
                <Text field={props.fields.BookCtaText} />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondaryHeader;
