

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
  CountryCreate,
  CountryShow
} from './pages/country';
import {
  BusinessUnitList,
  BusinessUnitEdit,
  BusinessUnitCreate,
  BusinessUnitShow
} from './pages/businessUnit';
import {
  CategorySettingList,
  CategorySettingEdit,
  CategorySettingCreate,
  CategorySettingShow
} from './pages/categorySetting';
import {
  RatingSettingList,
  RatingSettingEdit,
  RatingSettingCreate,
  RatingSettingShow
} from './pages/ratingSetting';
import {
  ReviewSettingList,
  ReviewSettingEdit,
  ReviewSettingCreate,
  ReviewSettingShow
} from './pages/reviewSetting';
import { 
  ReviewCategorySettingList,
  ReviewCategorySettingEdit,
  ReviewCategorySettingCreate,
  ReviewCategorySettingShow
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
          create={CountryCreate} 
          show={CountryShow} />
        
        <Resource 
          name="BusinessUnit"
          list={BusinessUnitList}
          edit={BusinessUnitEdit}
          create={BusinessUnitCreate}
          show={BusinessUnitShow} />
        
        <Resource
          name="CategorySetting"
          list={CategorySettingList}
          edit={CategorySettingEdit}
          create={CategorySettingCreate}
          show={CategorySettingShow} />
        
        <Resource
          name="RatingSetting"
          list={RatingSettingList}
          edit={RatingSettingEdit}
          create={RatingSettingCreate}
          show={RatingSettingShow} />
        
        <Resource
          name="ReviewSetting"
          list={ReviewSettingList}
          edit={ReviewSettingEdit}
          create={ReviewSettingCreate}
          show={ReviewSettingShow} />

        <Resource 
          name="ReviewCategorySetting"
          list={ReviewCategorySettingList}
          edit={ReviewCategorySettingEdit}
          create={ReviewCategorySettingCreate}
          show={ReviewCategorySettingShow} />
    </Admin>
    );
  }
}

export default App;
