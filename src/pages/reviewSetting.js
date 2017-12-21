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
  required,
  BooleanInput } from 'admin-on-rest';


const ReviewSettingPagination = () => {
    return ""
}

export const ReviewSettingList = (props) => (
  <List {...props} pagination={<ReviewSettingPagination />}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="detailed" />
      <TextField source="businessUnitId" />
      <TextField source="ratingSettingId" />
      <EditButton />
    </Datagrid>
  </List>
);


const ReviewSettingTitle = translate(({ record, translate }) =>  
  <span>{translate('resources.ReviewSetting.name', { smart_count: 1 })} {record.name}</span>
);

export const ReviewSettingEdit = (props) => (
  <Edit title={<ReviewSettingTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id"  />
      <BooleanInput source="detailed" validate={required} />
      <TextInput source="reviewSettingId" validate={required} />
      <TextInput source="categorySettingId" validate={required} />
    </SimpleForm>
  </Edit>
);

export const ReviewSettingCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="reviewSettingId" validate={required} />
      <TextInput source="categorySettingId" validate={required} />
    </SimpleForm>
  </Create>
);