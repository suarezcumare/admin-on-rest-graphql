

import React, { Component } from 'react';
import { buildApolloClient } from 'aor-simple-graphql-client';
import {
  Admin,
  Resource,
  resolveBrowserLocale } from 'admin-on-rest';

import './App.css';
import authClient from './authClient';
import Dashboard from './pages/dashboard';
import translations from './i18n/index';
import myQueries from './queries/index';

import {
  CountryList,
  CountryEdit,
  CountryCreate
} from './pages/country';
import {
  BusinessUnitList,
  BusinessUnitEdit,
  BusinessUnitCreate
} from './pages/businessUnit';
import {
  CategorySettingList,
  CategorySettingEdit,
  CategorySettingCreate
} from './pages/categorySetting';
import {
  RatingSettingList,
  RatingSettingEdit,
  RatingSettingCreate
} from './pages/ratingSetting';
import { 
  ReviewCategorySettingList,
  ReviewCategorySettingEdit,
  ReviewCategorySettingCreate
} from './pages/reviewCategorySetting';
import myGraphCoolFlavor from './flavors/default'

class App extends Component {
  constructor() {
    super();
    this.state = { restClient: null };
  }
  componentDidMount() {
    buildApolloClient({
      clientOptions: { uri: 'http://localhost:4000/reviews/graphql' },
      introspection: false,
      queries: myQueries,
      flavor: myGraphCoolFlavor
    }).then(restClient => this.setState({ restClient }));
  }

  render() {
    const { restClient } = this.state;
    
    if (!restClient) {
      return <div>Loading</div>;
    }

    return (
      <Admin
        title='Reviews'
        locale={resolveBrowserLocale()}
        messages={translations}
        authClient={authClient}
        dashboard={Dashboard}
        restClient={restClient}>
        
        <Resource 
          name="Country"
          list={CountryList}
          edit={CountryEdit}
          create={CountryCreate} />
        
        <Resource 
          name="BusinessUnit"
          list={BusinessUnitList}
          edit={BusinessUnitEdit}
          create={BusinessUnitCreate} />
        
        <Resource
        name="CategorySetting" list={CategorySettingList} edit={CategorySettingEdit} create={CategorySettingCreate} />
        
        <Resource
          name="RatingSetting"
          list={RatingSettingList}
          edit={RatingSettingEdit}
          create={RatingSettingCreate} />
        
        <Resource 
          name="RatingSetting"
          list={ReviewCategorySettingList}
          edit={ReviewCategorySettingEdit}
          create={RatingSettingCreate} />

        <Resource 
          name="ReviewCategorySetting"
          list={ReviewCategorySettingList}
          edit={ReviewCategorySettingEdit}
          create={ReviewCategorySettingCreate} />
    </Admin>
    );
  }
}

export default App;
