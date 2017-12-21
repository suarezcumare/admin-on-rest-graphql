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


const ReviewCategorySettingPagination = () => {
    return ""
}

export const ReviewCategorySettingList = (props) => (
  <List {...props} pagination={<ReviewCategorySettingPagination />}>
    <Datagrid>
      <TextField source="id" sortable={false} />
      <TextField source="code" sortable={false} />
      <TextField source="reviewSettingId" />
      <TextField source="categorySettingId" />
      <EditButton />
    </Datagrid>
  </List>
);


const ReviewCategorySettingTitle = translate(({ record, translate }) =>  
  <span>{translate('resources.ReviewCategorySetting.name', { smart_count: 1 })} {record.name}</span>
);

export const ReviewCategorySettingEdit = (props) => (
  <Edit title={<ReviewCategorySettingTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id"  />
      <TextInput source="code" validate={required} />
      <TextInput source="reviewSettingId" validate={required} />
      <TextInput source="categorySettingId" validate={required} />
    </SimpleForm>
  </Edit>
);

export const ReviewCategorySettingCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="code" validate={required} />
      <TextInput source="reviewSettingId" validate={required} />
      <TextInput source="categorySettingId" validate={required} />
    </SimpleForm>
  </Create>
);