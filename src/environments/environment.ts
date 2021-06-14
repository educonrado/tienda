// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url_api: 'https://platzi-store.herokuapp.com/products/',
  firebase: {
    apiKey: 'AIzaSyDg03x05OUl4DflOP99zeLBw9CqR6_1gpo',
    authDomain: 'tienda-70a63.firebaseapp.com',
    projectId: 'tienda-70a63',
    storageBucket: 'tienda-70a63.appspot.com',
    messagingSenderId: '109437604583',
    appId: '1:109437604583:web:72a5bfae4904eb29f3c842',
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
