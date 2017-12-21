import React from 'react';
import { 
  List, 
  Edit,
  Create,
  Datagrid,
  TextField,
  DisabledInput,
  SimpleForm,
  translate,
  required,
  Show,
  SimpleShowLayout,
  ShowButton,
  ReferenceField,
  SelectInput,
  ReferenceInput,
  Responsive,
  SimpleList } from 'admin-on-rest';


const ReviewCategorySettingPagination = () => {
    return ""
}

export const ReviewCategorySettingList = (props) => (
  <List {...props} pagination={<ReviewCategorySettingPagination />}>
    <Responsive
      small={
        <SimpleList
            primaryText={record => record.reviewSetting.name}
            secondaryText={record => record.categorySetting.id}
            tertiaryText={record => record.id}
        />
      }
      medium={
        <Datagrid>
          <TextField source="id" sortable={false} />
          <ReferenceField source="categorySetting.id" reference="CategorySetting" linkType="show" sortable={false}>
            <TextField source="id" />
          </ReferenceField>
          <ReferenceField source="reviewSetting.id" reference="ReviewSetting" linkType="show" sortable={false}>
            <TextField source="name" />
          </ReferenceField>
          <ShowButton />
        </Datagrid>
      }
    />
  </List>
);

export const ReviewCategorySettingShow = (props) => (
  <Show title={<ReviewCategorySettingTitle />} {...props}>
      <SimpleShowLayout>
      <TextField source="id" />
      <ReferenceField source="reviewSetting.id" reference="ReviewSetting" linkType="show" sortable={false}>
        <TextField source="id" />
      </ReferenceField>
      <ReferenceField source="categorySetting.id" reference="CategorySetting" linkType="show" sortable={false}>
        <TextField source="name" />
      </ReferenceField>
      </SimpleShowLayout>
  </Show>
);


const ReviewCategorySettingTitle = translate(({ record, translate }) =>  
  <span>{translate('resources.ReviewCategorySetting.name', { smart_count: 1 })} {record.name}</span>
);

export const ReviewCategorySettingEdit = (props) => (
  <Edit title={<ReviewCategorySettingTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id"  />
      <ReferenceInput source="reviewSetting.id" reference="ReviewSetting" allowEmpty validate={required}>
        <SelectInput optionText="id" />
      </ReferenceInput>
      <ReferenceInput source="categorySetting.id" reference="CategorySetting" allowEmpty validate={required}>
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);


export const ReviewCategorySettingCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="reviewSetting.id" reference="ReviewSetting" allowEmpty validate={required}>
        <SelectInput optionText="id" />
      </ReferenceInput>
      <ReferenceInput source="categorySetting.id" reference="CategorySetting" allowEmpty validate={required}>
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);