import React from "react";
import {HashRouter, Route, Switch } from "react-router-dom";
import DataCollect from "./DataCollect/index";
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
        </Switch>
      </HashRouter>
    </ConfigProvider>
  </Provider>
);

export default App;
