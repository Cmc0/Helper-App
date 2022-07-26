import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.less'

import {ConfigProvider} from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import "antd/dist/antd.css"

import moment from 'moment';
import 'moment/dist/locale/zh-cn';

moment.locale('zh-cn');

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ConfigProvider locale={zhCN}>
            <App/>
        </ConfigProvider>
    </React.StrictMode>
)
