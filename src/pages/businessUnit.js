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


const BusinessUnitPagination = () => {
    return ""
}

export const BusinessUnitList = (props) => (
  <List {...props} pagination={<BusinessUnitPagination />}>
    <Datagrid>
      <TextField source="id" sortable={false} />
      <TextField source="code" sortable={false} />
      <TextField source="name" sortable={false} />
      <EditButton />
    </Datagrid>
  </List>
);


const BusinessUnitTitle = translate(({ record, translate }) =>  
  <span>{translate('resources.BusinessUnit.name', { smart_count: 1 })} {record.name}</span>
);

export const BusinessUnitEdit = (props) => (
  <Edit title={<BusinessUnitTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id"  />
      <TextInput source="code" validate={required} />
      <TextInput source="name" validate={required}  />
    </SimpleForm>
  </Edit>
);

export const BusinessUnitCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="code" validate={required} />
      <TextInput source="name" validate={required} />
    </SimpleForm>
  </Create>
);