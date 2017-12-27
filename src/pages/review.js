import React from 'react';
import { 
  List, 
  Edit,
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
  BooleanField,
  NullableBooleanInput,
  Responsive,
  SimpleList,
  LongTextInput,
  NumberInput } from 'admin-on-rest';

import reviewIcon from 'material-ui/svg-icons/communication/comment';

export const ReviewIcon = reviewIcon;

const ReviewPagination = () => {
    return ""
}

export const ReviewList = (props) => (
  <List {...props} pagination={<ReviewPagination />}>
    <Responsive
      small={
        <SimpleList
            primaryText={record => record.comment}
            secondaryText={record => record.value}
            tertiaryText={record => record.id}
        />
      }
      medium={
        <Datagrid bodyOptions={{ showRowHover: true }}>
          <TextField source="id" sortable={false} />
          <TextField source="comment" sortable={false}/>
          <TextField source="value" sortable={false}/>
          <TextField source="userId" sortable={false}/>
          <TextField source="userName" sortable={false}/>
          <BooleanField source="published" sortable={false} />
          <ReferenceField source="reviewSetting.id" reference="ReviewSetting" linkType="show" sortable={false}>
            <TextField source="id" />
          </ReferenceField>
          <BooleanField source="active" sortable={false} />
          <ShowButton />
        </Datagrid>
      }
    />
  </List>
);

export const ReviewShow = (props) => (
  <Show title={<ReviewTitle />} {...props}>
      <SimpleShowLayout>
      <TextField source="id" sortable={false} />
      <TextField source="comment" sortable={false} />
      <TextField source="value" sortable={false} />
      <TextField source="userId" sortable={false} />
      <TextField source="userName" sortable={false} />
      <BooleanField source="published" sortable={false} />
      <ReferenceField source="reviewSetting.id" reference="ReviewSetting" linkType="show" sortable={false}>
        <TextField source="id" />
      </ReferenceField>
      <BooleanField source="active" sortable={false} />
      </SimpleShowLayout>
  </Show>
);

const ReviewTitle = translate(({ record, translate }) =>  
  <span>{translate('resources.Review.name', { smart_count: 1 })} {record.name}</span>
);

export const ReviewEdit = (props) => (
  <Edit title={<ReviewTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id"  />
      <LongTextInput source="comment" validate={required} />
      <NumberInput source="value" step={1} validate={required}/>
      <NullableBooleanInput  source="published" allowEmpty={false} validate={required} />
      <NullableBooleanInput  source="active" allowEmpty={false} validate={required} />
    </SimpleForm>
  </Edit>
);

// export const ReviewCreate = (props) => (
//   <Create {...props}>
//     <SimpleForm>
//     <LongTextInput source="comment" validate={required} />
//     <NumberInput source="value" step={1} validate={required}/>
//     <NullableBooleanInput source="published" allowEmpty={false} validate={required} />
//     <NullableBooleanInput source="active" allowEmpty={false} validate={required} />
//     </SimpleForm>
//   </Create>
// );
