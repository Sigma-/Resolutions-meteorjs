import React from 'react';
import { mount } from 'react-mounter';
import ResolutionsWrapper from './imports/ResolutionsWrapper.jsx'
import { FlowRouter } from 'meteor/kadira:flow-router';

import {MainLayout} from './layouts/MainLayout.jsx';
import About from './About.jsx';
import ResolutionDetail from './imports/ResolutionDetail.jsx';

FlowRouter.route('/', {
  action() {
    mount(MainLayout, {
      content: (<ResolutionsWrapper />)
    })
  }
});

FlowRouter.route('/about', {
  action(params) {
    mount(MainLayout, {
      content: (<About />)
    })
  }
});

FlowRouter.route('/resolutions/:id', {
  action(params) {
    mount(MainLayout, {
      content: (<ResolutionDetail id={params.id} />)
    })
  }
});
