import * as React from "react";
import { Admin, Resource, Layout, MenuItemLink, UserMenu, ShowGuesser } from 'react-admin';

import jsonServerProvider from 'ra-data-json-server';
import { UserList, UserShow } from "./Users";

import customRoutes from './customRoutes';
import NotFound from "./NotFound";
// import dataProviders from "./dataProviders";


// const settings = {
//   headers: {
//     Authorization: "Bearer 1/1193694351433099:1ee2f9bbd9a342e01a7ab7b0b2ecd59f",
//     Accept: "application/json"
//   }
// }

const dataProvider = jsonServerProvider("https://my-json-server.typicode.com/osynovskyy/support_admin/")

const App = () => (
  // <Admin dataProvider={dataProviders} title="Support Admin" disableTelemetry catchAll={NotFound}>
  //   <Resource name="FitCoach" list={UserList} show={ShowGuesser} />
  //   <Resource name="Yoga-Go" list={UserList} show={ShowGuesser} />
  // </Admin>

  <Admin dataProvider={dataProvider} title="Support Admin" customRoutes={customRoutes} disableTelemetry catchAll={NotFound}>
    <Resource title="FitCoach" name="users" list={UserList} show={ShowGuesser} />
  </Admin>
);

export default App;

