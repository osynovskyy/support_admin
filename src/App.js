import * as React from "react";
import { Admin, ListGuesser, Resource } from 'react-admin';

import jsonServerProvider from 'ra-data-json-server';

// const settings = {
//   headers: {
//     Authorization: "Bearer 1/1193694351433099:1ee2f9bbd9a342e01a7ab7b0b2ecd59f",
//     Accept: "application/json"
//   }
// }

const dataProvider = jsonServerProvider("https://my-json-server.typicode.com/osynovskyy/support_admin/")

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={ListGuesser} />
  </Admin>
);

export default App;