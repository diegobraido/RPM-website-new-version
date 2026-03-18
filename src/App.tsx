import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import ServiceSupport from './pages/ServiceSupport';
import Contact from './pages/Contact';
import Showcase from './pages/Showcase';
import ProDog from './pages/ProDog';
import ProCanter from './pages/ProCanter';
import ProCenter from './pages/ProCenter';
import DynamicLinebar from './pages/DynamicLinebar';
import ScanBelt from './pages/ScanBelt';
import ProSaw from './pages/ProSaw';
import CantOutfeedSweep from './pages/CantOutfeedSweep';
import SlatTable from './pages/SlatTable';
import ProQ from './pages/ProQ';
import ProLube from './pages/ProLube';
import HPU from './pages/HPU';
import ProOiler from './pages/ProOiler';
import MotionControl from './pages/MotionControl';
import ForceControl from './pages/ForceControl';
import SystemUpgrades from './pages/SystemUpgrades';
import PanelDesign from './pages/PanelDesign';
import PowerManagementSystems from './pages/PowerManagementSystems';
import CantClassifier from './pages/CantClassifier';
import SpeciesDetection from './pages/SpeciesDetection';
import CantDealer from './pages/CantDealer';
import LumberBacklogControl from './pages/LumberBacklogControl';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/prodog" element={<ProDog />} />
          <Route path="products/procanter" element={<ProCanter />} />
          <Route path="products/procenter" element={<ProCenter />} />
          <Route path="products/prosaw" element={<ProSaw />} />
          <Route path="products/cant-outfeed-sweep" element={<CantOutfeedSweep />} />
          <Route path="products/slat-table" element={<SlatTable />} />
          <Route path="products/proq" element={<ProQ />} />
          <Route path="products/dynamic-linebar" element={<DynamicLinebar />} />
          <Route path="products/precision-scan-belt" element={<ScanBelt />} />
          <Route path="products/prolube" element={<ProLube />} />
          <Route path="products/hydraulic-power-units" element={<HPU />} />
          <Route path="products/prooiler" element={<ProOiler />} />
          <Route path="products/motion-control" element={<MotionControl />} />
          <Route path="products/force-control" element={<ForceControl />} />
          <Route path="products/system-upgrades" element={<SystemUpgrades />} />
          <Route path="products/panel-design-&-build" element={<PanelDesign />} />
          <Route path="products/power-management-system" element={<PowerManagementSystems />} />
          <Route path="products/cant-classifier" element={<CantClassifier />} />
          <Route path="products/species-detection" element={<SpeciesDetection />} />
          <Route path="products/cant-dealer" element={<CantDealer />} />
          <Route path="products/lumber-backlog-control" element={<LumberBacklogControl />} />
          <Route path="about" element={<About />} />
          <Route path="service-support" element={<ServiceSupport />} />
          <Route path="contact" element={<Contact />} />
          <Route path="showcase" element={<Showcase />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
