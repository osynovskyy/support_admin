
import React from 'react';
import {useRecordContext, List, Pagination, Datagrid, Show, TextField, EmailField, BooleanField, DateField, Tab, TabbedShowLayout, TextInput, ShowButton, ArrayField, SingleFieldList, ChipField, Button, userCheck} from 'react-admin';

import { JsonField } from "react-admin-json-view";
import get from 'lodash/get';

const UserPagination = props => <Pagination rowsPerPageOptions={[25, 50]} {...props} />;

const UserFilters = [
    <TextInput label="USER ID" source="id" alwaysOn />,
    <TextInput label="EMAIL" source="email" alwaysOn />,
];

const AnalyticsButton = (props) => {
    const { source } = props;
    const record = useRecordContext(props);

    return (
    <Button label={props.label} variant="outlined" href={"https://analytics.amplitude.com/amazingapps/project/269374/search/user_id="+get(record, source)} />
    );
}

export const UserList = props => {
    console.log(props)

    return (
    <List {...props} filters={UserFilters}sort={{ field: "created_at", order: "DESC" }} bulkActionButtons={false} pagination={<UserPagination />} perPage={25}>
        <Datagrid>
            <DateField source="created_at" label="CREATED AT" />
            <TextField source="id" label="ID"/>
            <EmailField source="email" label="EMAIL" emptyText="-"/>
            <TextField source="created_on" label="CREATED ON"/>
            <BooleanField source="is_paid" label="PAID"/>
            <ArrayField source="active_products" label="PRODUCTS" emptyText="-">
                <SingleFieldList>
                    <ChipField source="product" clickable={false} />
                </SingleFieldList>
            </ArrayField>
            <BooleanField source="has_account" label="ACCOUNT" emptyText="-"/>
            <TextField source="client_platform" label="CLIENT PLATFORM" emptyText="-"/>
            <TextField source="client_version" label="CLIENT VERSION" emptyText="-"/>
            {/* <TextField source="gender" label="GENDER"/>
            <TextField source="fitness_level" label="FITNESS LEVEL"/> */}
            <TextField source="language" label="LANGUAGE" emptyText="-"/>
            <BooleanField source="has_extra_purchases" label="EXTRA PURCHASES"/>
            
            <ShowButton />
            <AnalyticsButton source="id" label="Analytics" />
        </Datagrid>
    </List>
    );
}

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