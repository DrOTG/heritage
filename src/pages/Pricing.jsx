import React from 'react';
import { DataView } from 'primereact/dataview'
import DriveFolders from '../components/DriveFolders';

export default function Home() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Pricing</h1>
      <p>Explore our subscription plans and choose the one that works for you!</p>
      {/* Add pricing details here */}
      <DriveFolders />
    </div>
  );
}
