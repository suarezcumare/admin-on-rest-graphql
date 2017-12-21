import React from 'react';
import { 
  List, 
  Edit,
  Create,
  Datagrid,
  TextField,
  DisabledInput,
  SimpleForm,
  TextInput,
  translate,
  required,
  Show,
  SimpleShowLayout,
  ShowButton,
  Responsive,
  SimpleList } from 'admin-on-rest';


const CountryPagination = () => {
    return ""
}

export const CountryList = (props) => (
  <List {...props} pagination={<CountryPagination />}>
    <Responsive
      small={
        <SimpleList
          primaryText={record => record.name}
          secondaryText={record => record.code}
          tertiaryText={record => record.id}
        />
      }
      medium={
        <Datagrid>
          <TextField source="id" sortable={false} />
          <TextField source="code" sortable={false} />
          <TextField source="name" sortable={false} />
          <ShowButton />
        </Datagrid>
      }
    />
  </List>
);

export const CountryShow = (props) => (
  <Show title={<CountryTitle />} {...props}>
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="code" />
        <TextField source="name" />
      </SimpleShowLayout>
  </Show>
);


const CountryTitle = translate(({ record, translate }) =>  
  <span>{translate('resources.Country.name', { smart_count: 1 })} {record.name}</span>
);

export const CountryEdit = (props) => (
  <Edit title={<CountryTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id"  />
      <TextInput source="code" validate={required} />
      <TextInput source="name" validate={required}  />
    </SimpleForm>
  </Edit>
);

export const CountryCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="code" validate={required} />
      <TextInput source="name" validate={required} />
    </SimpleForm>
  </Create>
);