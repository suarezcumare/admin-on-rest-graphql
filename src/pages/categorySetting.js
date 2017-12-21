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


const CategorySettingPagination = () => {
    return ""
}

export const CategorySettingList = (props) => (
  <List {...props} pagination={<CategorySettingPagination />}>
    <Datagrid>
      <TextField source="id" sortable={false} />
      <TextField source="code" sortable={false} />
      <TextField source="name" sortable={false} />
      <TextField source="title" sortable={false}/>
      <TextField source="description" sortable={false} />
      <EditButton />
    </Datagrid>
  </List>
);


const CategorySettingTitle = translate(({ record, translate }) =>  
  <span>{translate('resources.CategorySetting.name', { smart_count: 1 })} {record.name}</span>
);

export const CategorySettingEdit = (props) => (
  <Edit title={<CategorySettingTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id"  />
      <TextInput source="code" validate={required} />
      <TextInput source="name" validate={required}  />
      <TextInput source="title" validate={required}  />
      <LongTextInput source="description" validate={required}  />
    </SimpleForm>
  </Edit>
);

export const CategorySettingCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="code" validate={required} />
      <TextInput source="name" validate={required} />
      <TextInput source="title" validate={required}  />
      <LongTextInput source="description" validate={required}  />
    </SimpleForm>
  </Create>
);