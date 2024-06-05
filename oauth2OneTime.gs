"use strict";
/**
 * USE YOUR OWN CREDENTIALS THEN DELETE AFTER RUNNING ONCE
 * DONT PUT ON PUBLIC WITH REAL CREDENTIALS 
 *
 * setting your user properties, one time, with your credentials
 * running this will provoke an oauth dialog, since any refresh tokens will be cleared out
 * once you have run this once, you can delete it from this file.
 * @return {void}
 */

// function oneTimeSetProperties () {
//   const clientId = ''
//   const clientSecret = ''
//    // used by all using this script
//   let propertyStore = PropertiesService.getUserProperties();

//   cGoa.GoaApp.setPackage (propertyStore , { 
//     clientId,
//     clientSecret,
//     scopes : [
//       'gist',
//       'repo'
//     ],
//     service: 'github',
//     packageName: 'gasgit'
//   });
// }

/**
 * Github token is already stored in Properties
 * Do not push a project with token exposed - it will lead to token auto kill
 */

// function getToken() {
//   let propertyStore = PropertiesService.getUserProperties();
//   let token = propertyStore.getProperty('gitToken');
//   return token;
// }

// function checkProp() {
//   let props = PropertiesService.getUserProperties().getProperties(); //'gasgit', 'clientId'
//   console.log(props);
//   let packageName = 'gasgit';
//   let goa = cGoa.GoaApp.createGoa(packageName, getPropertyService()).execute();
//   console.log(goa.needsConsent());
//   let aaa = goa.getConsent();
//   console.log(aaa);
//   console.log(goa.getToken());
//   let propertyStore = PropertiesService.getUserProperties();
//   propertyStore.setProperty('gitToken', goa.getToken());
// }



