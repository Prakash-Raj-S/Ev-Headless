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
  const [sessionData, setSessionData] = useState(null);
  const [newData, setNewData] = useState('');
  const [cookievalue, setCookievalue] = useState('');

  useEffect(() => {
    const fetchSessionData = async () => {
      try {
        const response = await axios.get(
          'http://localhost:3001/get-session-data?key=EvScooterSessionValue'
        );
        setSessionData(response.data.data);
        console.log('Fetched session data:', response.data.data); // Log the fetched session data
      } catch (error) {
        console.error('Error fetching session data:', error);
      }
    };

    fetchSessionData();
  }, []);

  useEffect(() => {
    // Function to get the value of a specific cookie by name
    const getCookieValue = (name) => {
      const nameEQ = name + '=';
      const ca = document.cookie.split(';');
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
    };

    // Read the cookie value
    const value = getCookieValue('redissession');
    setCookievalue(value);
    console.log('cookie', value);
  }, []);

  const handleSetData = async () => {
    try {
      await axios.post('http://localhost:3001/set-session-data', {
        key: 'EvScooterSessionValue',
        value: newData,
      });
      const response = await axios.get(
        'http://localhost:3001/get-session-data?key=EvScooterSessionValue'
      );
      setSessionData(response.data.data);
      console.log('Updated session data:', response.data.data); // Log the updated session data
    } catch (error) {
      console.error('Error setting session data:', error);
    }
  };
  console.log(handleSetData);
  console.log(route);
  return (
    <div className="home__page">
      <Helmet>
        <title>TVS X {sessionData}</title>
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
