exports.config = {

    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    region: 'us-west-1',
    
  
    services: [
        ['sauce', {
            sauceConnect: true
        }]
    ],

   
    capabilities: [{
        platformName: 'iOS',
        'appium:automationName': 'XCUITest',
        'appium:deviceName': 'iPhone 13 Simulator',
        'appium:platformVersion': '15.4',
        'appium:app': 'storage:filename=LojaEBAC-sim.zip', 
        
        'sauce:options': {
            build: 'EBAC Teste iOS (Plano Simulador) - ' + Date.now(),
            name: 'Fluxo de Compa - iOS 15.4 Simulador'
        }
    }],

 
    logLevel: 'info',
    framework: 'mocha',
    reporters: ['spec'],

   
    specs: [
        './test/specs/compra.ios.e2e.js'
    ],
    
   
    mochaOpts: {
        ui: 'bdd',
        timeout: 90000 // 90 segundos de tempo limite
    }
};