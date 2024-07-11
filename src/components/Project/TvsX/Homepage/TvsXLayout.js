import React, { useEffect, useState } from 'react';
import { Placeholder } from '@sitecore-jss/sitecore-jss-react';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.css';
import '../../../../assets/app.css';
import '../../../../assets/TvsX/images/favicon.png';
import '../../../../assets/TvsX/sass/css/output.css';
import '../../../../assets/TvsX/vendors/slick/slick.css';
import '../../../../assets/TvsX/vendors/aos/css/aos.css';
import '../../../../assets/TvsX/vendors/bootstrap/css/bootstrap.min.css';
import AssetsLoader from '../../../AssetsLoader/AssetsLoader';
import axios from 'axios';

const TvsXLayout = ({ route }) => {
  
  console.log(route);
  return (
    <div className="home__page">
      <Helmet>
        <title>TVS X</title>
      </Helmet>
      <div>{sessionData}</div>
      <Placeholder name="tvs-x-header" rendering={route} />
      <Placeholder name="tvs-x-content" rendering={route} />
      <Placeholder name="tvs-x-footer" rendering={route} />
      <AssetsLoader />
    </div>
  );
};

export default TvsXLayout;
