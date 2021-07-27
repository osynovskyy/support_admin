import * as React from "react";
import { List, Datagrid, TextField, EmailField, BooleanField} from 'react-admin';

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" title="USER ID"/>
            <EmailField source="email" title="EMAIL"/>
            <TextField source="platform" title="PLATFORM"/>
            <TextField source="client_version" title="CLIENT VERSION"/>
            <TextField source="gender" title="GENDER"/>
            <TextField source="fitness_level" title="FITNESS LEVEL"/>
            <TextField source="language" title="LANGUAGE"/>
            <BooleanField source="is_paid" title="PAID"/>
            <BooleanField source="has_extra_purchases" title="EXTRA PURCHASES"/>
            <TextField source="payment_info.product" title="PRODUCT"/>
        </Datagrid>
    </List>
);