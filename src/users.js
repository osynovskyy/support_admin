
import React from 'react';
import { List, Pagination, Datagrid, Show, TextField, EmailField, BooleanField, DateField, Tab, TabbedShowLayout, TextInput, useShowController, ShowButton} from 'react-admin';

import { JsonField } from "react-admin-json-view";

const UserPagination = props => <Pagination rowsPerPageOptions={[25, 50]} {...props} />;

const UserFilters = [
    <TextInput label="USER ID" source="id" alwaysOn />,
    <TextInput label="EMAIL" source="email" alwaysOn />,
];

export const UserList = props => (
    <List {...props} filters={UserFilters}sort={{ field: "created_at", order: "DESC" }} bulkActionButtons={false} pagination={<UserPagination />} perPage={25}>
        <Datagrid rowClick="show">
            <DateField source="created_at" label="CREATED AT" />
            <TextField source="id" label="USER ID"/>
            <TextField source="created_on" label="CREATED ON"/>
            <EmailField source="email" label="EMAIL" emptyText="-"/>
            <BooleanField source="has_account" label="ACCOUNT" emptyText="-"/>
            <TextField source="client_platform" label="CLIENT PLATFORM" emptyText="-"/>
            <TextField source="client_version" label="CLIENT VERSION" emptyText="-"/>
            {/* <TextField source="gender" label="GENDER"/>
            <TextField source="fitness_level" label="FITNESS LEVEL"/> */}
            <TextField source="language" label="LANGUAGE" emptyText="-"/>
            <BooleanField source="is_paid" label="PAID"/>
            <BooleanField source="has_extra_purchases" label="EXTRA PURCHASES"/>
            <TextField source="active_products" label="PRODUCT" emptyText="-"/>
            <ShowButton title="RAW DATA"/>
        </Datagrid>
    </List>
);

export const UserShow = props => {
    return (
    <Show {...props} >
        <TabbedShowLayout>
            <Tab label="User Info">
                <DateField source="created_at" label="CREATED AT" />
                <TextField source="id" label="USER ID"/>
                <TextField source="created_on" label="CREATED ON"/>
                <EmailField source="email" label="EMAIL" emptyText="-"/>
                <BooleanField source="has_account" label="ACCOUNT" emptyText="-"/>
                <TextField source="client_platform" label="CLIENT PLATFORM" emptyText="-"/>
                <TextField source="client_version" label="CLIENT VERSION" emptyText="-"/>
                <TextField source="language" label="LANGUAGE" emptyText="-"/>
                <BooleanField source="is_paid" label="PAID"/>
                <BooleanField source="has_extra_purchases" label="EXTRA PURCHASES"/>
            </Tab>
            <Tab label="Payment Info (RAW)" path="payment_info">
                <JsonField source="payment_info" />
            </Tab>
        </TabbedShowLayout>
    </Show>
    );
}