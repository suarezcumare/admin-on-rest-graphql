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
  BooleanInput,
  Show,
  SimpleShowLayout,
  ShowButton,
  ReferenceField,
  SelectInput,
  ReferenceInput,
  BooleanField,
  NullableBooleanInput } from 'admin-on-rest';


const ReviewSettingPagination = () => {
    return ""
}

export const ReviewSettingList = (props) => (
  <List {...props} pagination={<ReviewSettingPagination />}>
    <Datagrid>
      <TextField source="id" sortable={false} />
      <BooleanField source="detailed" sortable={false}/>
      <ReferenceField source="businessUnit.id" reference="BusinessUnit" linkType="show" sortable={false}>
      <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="ratingSetting.id" reference="RatingSetting" linkType="show" sortable={false}>
        <TextField source="name" />
      </ReferenceField>
      <ShowButton />
    </Datagrid>
  </List>
);

export const ReviewSettingShow = (props) => (
  <Show title={<ReviewSettingTitle />} {...props}>
      <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="detailed" />
      <ReferenceField source="businessUnit.id" reference="BusinessUnit" linkType="show" sortable={false}>
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="ratingSetting.id" reference="RatingSetting" linkType="show" sortable={false}>
        <TextField source="name" />
      </ReferenceField>
      </SimpleShowLayout>
  </Show>
);


const ReviewSettingTitle = translate(({ record, translate }) =>  
  <span>{translate('resources.ReviewSetting.name', { smart_count: 1 })} {record.name}</span>
);

export const ReviewSettingEdit = (props) => (
  <Edit title={<ReviewSettingTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id"  />
      <BooleanInput source="detailed" validate={required} />
      <ReferenceField source="businessUnit.id" reference="BusinessUnit" linkType="show" sortable={false}>
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="ratingSetting.id" reference="RatingSetting" linkType="show" sortable={false}>
        <TextField source="name" />
      </ReferenceField>
    </SimpleForm>
  </Edit>
);

export const ReviewSettingCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
    <NullableBooleanInput  source="detailed" allowEmpty={false} validate={required} />
    <ReferenceInput source="businessUnit.id" reference="BusinessUnit" allowEmpty validate={required}>
      <SelectInput optionText="name" />
    </ReferenceInput>
    <ReferenceInput source="ratingSetting.id" reference="RatingSetting" allowEmpty validate={required}>
      <SelectInput optionText="name" />
    </ReferenceInput>
    </SimpleForm>
  </Create>
);