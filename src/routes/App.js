import React from "react";
import {HashRouter, Route, Switch } from "react-router-dom";
import DataCollect from "./DataCollect/index";
import DataAudit from './DataAudit/index';
import DevOps from './DevOps/index';
import LayerManage from './DevOps/layermanage';
import UserManage from './DevOps/usermanage';
import OrgManage from './DevOps/orgmanage';
import MenuManage from './DevOps/menumanage';
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";
import zh_CN from "antd/lib/locale-provider/zh_CN";
import store from "../store/createStore";

const App = () => (
  <Provider store={store}>
    <ConfigProvider locale={zh_CN}>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={DataCollect} />
          <Route  path="/audit" component={DataAudit} />
          <Route  path="/devops/menu" component={MenuManage} />
          <Route  path="/devops/layer" component={LayerManage} />
          <Route  path="/devops/org" component={OrgManage} />
          <Route  path="/devops/user" component={UserManage} />
          <Route  path="/devops" component={DevOps} />
        </Switch>
      </HashRouter>
    </ConfigProvider>
  </Provider>
);

export default App;
