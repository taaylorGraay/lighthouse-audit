import fs from 'fs';
import puppeteer from 'puppeteer';
import { startFlow } from 'lighthouse/lighthouse-core/fraggle-rock/api.js';

async function captureReport() {



  for (let i = 1; i <= 10; i++) {
    const Browser = await puppeteer.launch({ headless: false });
    const Page = await Browser.newPage();

    //Angular Audit

    const aTestUrl = 'https://bwm-next-generation-new.herokuapp.com/';
    const aFlow = await startFlow(Page, { name: 'Cold and warm navigations' });
    await aFlow.navigate(aTestUrl, {
      stepName: 'Cold navigation'
    });

    await aFlow.navigate(aTestUrl, {
      stepName: 'Warm navigation ' + i + '',
      configContext: {
        settingsOverrides: { disableStorageReset: true },
      },
    });

    const aReport = await aFlow.generateReport();
    fs.writeFileSync('angular-reports/angular.report' + i + '.html', aReport);

    //React Audit  

    const rTestUrl = 'https://bwm-react-redux-new.herokuapp.com/';
    const rFlow = await startFlow(Page, { name: 'Cold and warm navigations' });
    await rFlow.navigate(rTestUrl, {
      stepName: 'Cold navigation'
    });


    await rFlow.navigate(rTestUrl, {
      stepName: 'Warm navigation ' + i + '',
      configContext: {
        settingsOverrides: { disableStorageReset: true },
      },
    });

    const rReport = await rFlow.generateReport();
    fs.writeFileSync('react-reports/react.report' + i + '.html', rReport);

    await Browser.close();
  }

}

captureReport();