import React from 'react';
import { 
  List, 
  Edit,
  Create,
  Datagrid,
  TextField,
  EditButton,
  DisabledInput,
  SimpleForm,
  TextInput,
  translate,
  required } from 'admin-on-rest';


const CountryPagination = () => {
    return ""
}

export const CountryList = (props) => (
  <List {...props} pagination={<CountryPagination />}>
    <Datagrid>
      <TextField source="id" sortable={false} />
      <TextField source="code" sortable={false} />
      <TextField source="name" sortable={false} />
      <EditButton />
    </Datagrid>
  </List>
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