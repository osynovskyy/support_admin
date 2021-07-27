import * as React from "react";
import { List, Datagrid, Show, TextField, EmailField, BooleanField, DateField, SimpleShowLayout, Title} from 'react-admin';

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="show">
            <TextField source="id" label="USER ID"/>
            <EmailField source="email" label="EMAIL"/>
            <TextField source="platform" label="PLATFORM"/>
            <TextField source="client_version" label="CLIENT VERSION"/>
            <TextField source="gender" label="GENDER"/>
            <TextField source="fitness_level" label="FITNESS LEVEL"/>
            <TextField source="language" label="LANGUAGE"/>
            <BooleanField source="is_paid" label="PAID"/>
            <BooleanField source="has_extra_purchases" label="EXTRA PURCHASES"/>
            <TextField source="payment_info.product" label="PRODUCT"/>
        </Datagrid>
    </List>
);

const PostTitle = ({ record }) => {
    return <span>{record.id}</span>;
};

export const UserShow = (props) => (
    <Show title={<PostTitle/>} {...props} >
        <SimpleShowLayout>
            <TextField source="id" label="USER ID"/>
            <EmailField source="email" label="EMAIL"/>
            <TextField source="platform" label="PLATFORM"/>
            <TextField source="client_version" label="CLIENT VERSION"/>
            <TextField source="gender" label="GENDER"/>
            <TextField source="fitness_level" label="FITNESS LEVEL"/>
            <TextField source="language" label="LANGUAGE"/>
            <BooleanField source="is_paid" label="PAID"/>
            <BooleanField source="has_extra_purchases" label="EXTRA PURCHASES"/>
            <Title />
            <TextField source="payment_info.product" label="PRODUCT"/>
            <DateField source="payment_info.original_purchase_date" label="ORIGINAL PURCHASE DATE"/>
            <DateField source="payment_info.purchase_date" label="PURCHASE DATE"/>
            <DateField source="payment_info.expires_date" label="EXPIRES DATE"/>
            <BooleanField source="payment_info.is_trial_period" label="TRIAL PERIOD"/>
        </SimpleShowLayout>
    </Show>
);