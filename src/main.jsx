import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css';

// Capture the preloaded bootstrap state injected by functions.php
const initialState = window.rajapagar_data || {
  site_title: 'Rajapagar.id',
  site_tagline: 'Jasa Las &amp; Konstruksi Besi',
  site_url: '/',
  route_path: window.location.pathname || '/',
  type: 'home',
  post: null,
  posts: [],
  menus: [],
  theme_colors: {
    primary: '#DCA54A',
    primary_hover: '#D09A40',
    dark_bg: '#0F172A',
    dark_brand: '#141004',
    light_bg: '#FAF5E5',
    body_text: '#4A4A4A'
  },
  contact: {
    whatsapp: '628982440404',
    whatsapp_formatted: '+62 898-2440-404',
    email: 'ptcahayajayaberkahnusantara@gmail.com',
    address: 'PT Cahaya Jaya Berkah Nusantara, Indonesia'
  }
};

ReactDOM.createRoot(document.getElementById('rajapagar-app')).render(
  <React.StrictMode>
    <App initialState={initialState} />
  </React.StrictMode>
);
