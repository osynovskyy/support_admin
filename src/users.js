import * as React from "react";
import { List, Pagination, Datagrid, Show, TextField, EmailField, BooleanField, DateField, Tab, TabbedShowLayout, TextInput} from 'react-admin';

const UserPagination = props => <Pagination rowsPerPageOptions={[25, 50]} {...props} />;

const UserFilters = [
    <TextInput label="USER ID" source="id" alwaysOn />,
    <TextInput label="EMAIL" source="email" alwaysOn />,
];

export const UserList = props => (
    <List {...props} filters={UserFilters}sort={{ field: "created_at", order: "DESC" }} bulkActionButtons={false} pagination={<UserPagination />} perPage={25}>
        <Datagrid rowClick="show">
            <DateField source="created_at" label="CREATED AT" />
            <TextField source="sign_up_platform" label="SIGNED UP ON"/>
            <TextField source="id" label="USER ID"/>
            <EmailField source="email" label="EMAIL"/>
            <BooleanField source="has_account" label="ACCOUNT"/>
            <TextField source="client_platform" label="CLIENT PLATFORM"/>
            <TextField source="client_version" label="CLIENT VERSION"/>
            {/* <TextField source="gender" label="GENDER"/>
            <TextField source="fitness_level" label="FITNESS LEVEL"/> */}
            <TextField source="language" label="LANGUAGE"/>
            <BooleanField source="is_paid" label="PAID"/>
            <BooleanField source="has_extra_purchases" label="EXTRA PURCHASES"/>
            <TextField source="payment_info.product" label="PRODUCT"/>
        </Datagrid>
    </List>
);

export const UserShow = (props) => (
    <Show {...props} >
        <TabbedShowLayout>
            <Tab label="User Details">
                <DateField source="created_at" label="CREATED AT" />
                <TextField source="id" label="USER ID"/>
                <EmailField source="email" label="EMAIL"/>
                <TextField source="platform" label="PLATFORM"/>
                <TextField source="client_version" label="CLIENT VERSION"/>
                <TextField source="gender" label="GENDER"/>
                <TextField source="fitness_level" label="FITNESS LEVEL"/>
                <TextField source="language" label="LANGUAGE"/>
                <BooleanField source="is_paid" label="PAID"/>
                <BooleanField source="has_extra_purchases" label="EXTRA PURCHASES"/>
            </Tab>
            <Tab label="Payment Info" path="payment_details">
            <TextField source="payment_info.product" label="PRODUCT"/>
                <DateField source="payment_info.original_purchase_date" label="ORIGINAL PURCHASE DATE"/>
                <DateField source="payment_info.purchase_date" label="PURCHASE DATE"/>
                <DateField source="payment_info.expires_date" label="EXPIRES DATE"/>
                <BooleanField source="payment_info.is_trial_period" label="TRIAL PERIOD"/>
            </Tab>
        </TabbedShowLayout>
    </Show>
);