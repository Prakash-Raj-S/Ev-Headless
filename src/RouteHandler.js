import React from 'react';
import i18n from 'i18next';
import Helmet from 'react-helmet';
import { isEditorActive, withSitecoreContext } from '@sitecore-jss/sitecore-jss-react';
import { layoutServiceFactory } from './lib/layout-service-factory';
import config from './temp/config';
import Layout from './Layout';
import NotFound from './NotFound';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TvsXLayout from './components/Project/TvsX/Homepage/TvsXLayout';
/* eslint-disable no-console */

// Dynamic route handler for Sitecore items.
// Because JSS app routes are defined in Sitecore, traditional static React routing isn't enough -
// we need to be able to load dynamic route data from Sitecore after the client side route changes.
// So react-router delegates all route rendering to this handler, which attempts to get the right
// route data from Sitecore - and if none exists, renders the not found component.

class RouteHandler extends React.Component {
  constructor(props) {
    super(props);

    // tell i18next to sync its current language with the route language
    this.updateLanguage();
  }

  componentDidMount() {
    // If we are not using SSR we have to load layout data
    if (!this.props.isSSR) {
      this.updateLayoutData();
    }
  }

  /**
   * Loads route data from Sitecore Layout Service into state.routeData
   */
  updateLayoutData() {
    const language = this.getLanguage();

    // instantiate the dictionary service.
    const layoutServiceInstance = layoutServiceFactory.create();

    // get the route data for the new route
    layoutServiceInstance.fetchLayoutData(this.props.route, language).then((routeData) => {
      this.props.updateSitecoreContext(routeData);
    });
  }

  getLanguage() {
    return this.props.language || this.props.sitecoreContext.language || config.defaultLanguage;
  }

  /**
   * Updates the current app language to match the route data.
   */
  updateLanguage() {
    const newLanguage = this.getLanguage();

    if (i18n.language !== newLanguage) {
      i18n.changeLanguage(newLanguage);
    }
  }

  componentDidUpdate(previousProps) {
    const existingRoute = previousProps.url;
    const newRoute = this.props.url;

    // don't change state (refetch route data) if the route has not changed
    if (existingRoute === newRoute) {
      return;
    }

    // if in Sitecore editor - force reload instead of route data update
    // avoids confusing Sitecore's editing JS
    if (isEditorActive()) {
      window.location.assign(newRoute);
      return;
    }

    this.updateLanguage();
    this.updateLayoutData();
  }

  render() {
    const layoutData = this.props.sitecoreContext;

    // Note: this is client-side only 404 handling. Server-side 404 handling is the responsibility
    // of the server being used (i.e. node-headless-ssr-proxy and Sitecore intergrated rendering know how to send 404 status codes).
    // `route` is null in case if route is not found
    if (layoutData.route === null) {
      return (
        <div>
          <Helmet>
            <title>{i18n.t('Page not found')}</title>
          </Helmet>
          <NotFound context={layoutData} />
        </div>
      );
    }

    // Don't render anything if the route data or dictionary data is not fully loaded yet.
    // This is a good place for a "Loading" component, if one is needed.
    if (!layoutData.route) {
      return null;
    }
    let selectedLayout = '';

    if (layoutData.route.layoutId === 'D209F22C-4123-40B8-8724-E2C3775E3325'.toLowerCase()) {
      selectedLayout = <TvsXLayout route={layoutData.route} />;
    } else {
      selectedLayout = <Layout route={layoutData.route} />;
    }

    // Render the app's root structural layout
    return (
      <Routes>
        <Route path="*" element={selectedLayout} />
      </Routes>
    );
  }
}

export default withSitecoreContext({ updatable: true })(RouteHandler);
