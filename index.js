import fs from 'fs';
import open from 'open';
import puppeteer from 'puppeteer';
import { startFlow } from 'lighthouse/lighthouse-core/fraggle-rock/api.js';

async function captureReport() {

  //Angular Audit

  const aBrowser = await puppeteer.launch({ headless: false });
  const aPage = await aBrowser.newPage();

  const aTestUrl = 'https://bwm-next-generation-new.herokuapp.com/';
  const aFlow = await startFlow(aPage, { name: 'Cold and warm navigations' });
  await aFlow.navigate(aTestUrl, {
    stepName: 'Cold navigation'
  });
  await aFlow.navigate(aTestUrl, {
    stepName: 'Warm navigation 1',
    configContext: {
      settingsOverrides: { disableStorageReset: true },
    },
  });
  await aFlow.navigate(aTestUrl, {
    stepName: 'Warm navigation 2',
    configContext: {
      settingsOverrides: { disableStorageReset: true },
    },
  });
  await aFlow.navigate(aTestUrl, {
    stepName: 'Warm navigation 3',
    configContext: {
      settingsOverrides: { disableStorageReset: true },
    },
  });
  await aFlow.navigate(aTestUrl, {
    stepName: 'Warm navigation 4',
    configContext: {
      settingsOverrides: { disableStorageReset: true },
    },
  });
  await aFlow.navigate(aTestUrl, {
    stepName: 'Warm navigation 5',
    configContext: {
      settingsOverrides: { disableStorageReset: true },
    },
  });

  await aBrowser.close();

  const aReport = await aFlow.generateReport();
  fs.writeFileSync('angular.report.html', aReport);
  open('angular.report.html', { wait: false });

//////////////////////////////////////////////////////////////

  //React Audit  

  const rBrowser = await puppeteer.launch({ headless: false });
  const rPage = await rBrowser.newPage();

  const rTestUrl = 'https://bwm-react-redux-new.herokuapp.com/';
  const rFlow = await startFlow(rPage, { name: 'Cold and warm navigations' });
  await rFlow.navigate(rTestUrl, {
    stepName: 'Cold navigation'
  });
  await rFlow.navigate(rTestUrl, {
    stepName: 'Warm navigation 1',
    configContext: {
      settingsOverrides: { disableStorageReset: true },
    },
  });
  await rFlow.navigate(rTestUrl, {
    stepName: 'Warm navigation 2',
    configContext: {
      settingsOverrides: { disableStorageReset: true },
    },
  });
  await rFlow.navigate(rTestUrl, {
    stepName: 'Warm navigation 3',
    configContext: {
      settingsOverrides: { disableStorageReset: true },
    },
  });
  await rFlow.navigate(rTestUrl, {
    stepName: 'Warm navigation 4',
    configContext: {
      settingsOverrides: { disableStorageReset: true },
    },
  });
  await rFlow.navigate(rTestUrl, {
    stepName: 'Warm navigation 5',
    configContext: {
      settingsOverrides: { disableStorageReset: true },
    },
  });

  await rBrowser.close();

  const rReport = await rFlow.generateReport();
  fs.writeFileSync('react.report.html', rReport);
  open('react.report.html', { wait: false });
}

captureReport();