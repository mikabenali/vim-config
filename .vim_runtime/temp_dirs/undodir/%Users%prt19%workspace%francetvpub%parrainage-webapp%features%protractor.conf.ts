Vim�UnDo� b��g�7��u7�����=J��.ۑ�m�Kq�   &                                  Y��    _�                            ����                                                                                                                                                                                                                                                                                                                                                             Y�f�     �         &      )    browser.manage().window().maximize();5�_�                       '    ����                                                                                                                                                                                                                                                                                                                                                             Y�g]     �         &    �         &    5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             Y�g^     �                )    browser.manage().window().maximize();5�_�                           ����                                                                                                                                                                                                                                                                                                                                         '       v   '    Y�ga    �         '      )    browser.manage().window().maximize();5�_�                             ����                                                                                                                                                                                                                                                                                                                               
          
       V   
    Y��     �               '   -import {ProtractorBrowser} from 'protractor';       export let config = {       2  baseUrl: 'http://' + process.env.HOSTNAME + '/',       _  seleniumAddress: 'http://' + process.env.WD_HOSTNAME + ':' + process.env.WD_PORT + '/wd/hub',         capabilities: {       browserName: 'chrome'     },         framework: 'custom',   B  frameworkPath: require.resolve('protractor-cucumber-framework'),       
  specs: [       '../../features/*.feature'     ],         onPrepare: () => {   (    let globals = require('protractor');   5    let browser: ProtractorBrowser = globals.browser;   )    browser.ignoreSynchronization = true;   ,    // browser.manage().window().maximize();   2    browser.manage().window().setSize(1200, 1200);         },     cucumberOpts: {   $    compiler: "ts:ts-node/register",       monochrome: true,       strict: true,       plugin: ["pretty"],   5    require: ['../../features/stepDefinitions/*.ts'],       tags: '~@wip',   ;    allScriptsTimeout: 50000, //This is the overall Timeout   6    getPageTimeout: 50000, //This is the Page timeout,       format  : 'pretty'     }   };5��