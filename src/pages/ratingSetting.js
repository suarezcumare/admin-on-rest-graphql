import React from 'react';
import { 
  List, 
  Edit,
  Create,
  Datagrid,
  TextField,
  DisabledInput,
  LongTextInput,
  SimpleForm,
  TextInput,
  translate,
  required,
  Show,
  SimpleShowLayout,
  ShowButton,
  Responsive,
  SimpleList } from 'admin-on-rest';


const RatingSettingPagination = () => {
    return ""
}

export const RatingSettingList = (props) => (
  <List {...props} pagination={<RatingSettingPagination />}>
    <Responsive
      small={
        <SimpleList
            primaryText={record => record.name}
            secondaryText={record => record.description}
            tertiaryText={record => record.id}
        />
      }
      medium={
        <Datagrid>
          <TextField source="id" sortable={false} />
          <TextField source="code" sortable={false} />
          <TextField source="name" sortable={false} />
          <TextField source="description" sortable={false} />
          <ShowButton />
        </Datagrid>
      }
    />
  </List>
);

export const RatingSettingShow = (props) => (
  <Show title={<RatingSettingTitle />} {...props}>
      <SimpleShowLayout>
        <TextField source="id" sortable={false} />
        <TextField source="code" sortable={false} />
        <TextField source="name" sortable={false} />
        <TextField source="description" sortable={false} />
      </SimpleShowLayout>
  </Show>
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