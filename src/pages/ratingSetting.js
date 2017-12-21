import React from 'react';
import { 
  List, 
  Edit,
  Create,
  Datagrid,
  TextField,
  EditButton,
  DisabledInput,
  LongTextInput,
  SimpleForm,
  TextInput,
  translate,
  required } from 'admin-on-rest';


const RatingSettingPagination = () => {
    return ""
}

export const RatingSettingList = (props) => (
  <List {...props} pagination={<RatingSettingPagination />}>
    <Datagrid>
      <TextField source="id" sortable={false} />
      <TextField source="code" sortable={false} />
      <TextField source="name" sortable={false} />
      <TextField source="description" sortable={false} />
      <EditButton />
    </Datagrid>
  </List>
);


const RatingSettingTitle = translate(({ record, translate }) =>  
  <span>{translate('resources.RatingSetting.name', { smart_count: 1 })} {record.name}</span>
);

export const RatingSettingEdit = (props) => (
  <Edit title={<RatingSettingTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id"  />
      <TextInput source="code" validate={required} />
      <TextInput source="name" validate={required}  />
      <LongTextInput source="description" validate={required}  />
    </SimpleForm>
  </Edit>
);

export const RatingSettingCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="code" validate={required} />
      <TextInput source="name" validate={required} />
      <LongTextInput source="description" validate={required}  />
    </SimpleForm>
  </Create>
);