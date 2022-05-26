import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { checkUpdate } from '@tauri-apps/api/updater';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import store from './common/store';
import Plugins from './common/plugins';
import { Home, NotFound, InstanceSplash } from './pages';

import './localization';
import '/voxeliface/src/index.css';
await Plugins.init();
const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/instance-splash" element={<InstanceSplash/>}/>
                    <Route path="/*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
setInterval(() => checkUpdate(), 5 * 60000)