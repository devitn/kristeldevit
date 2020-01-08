// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false
};

export const  firebaseConfig = {
  apiKey: "AIzaSyCXpQTnaQR8f8FU9jmghteHmammVdSPGv0",
  authDomain: "ionic-13ec1.firebaseapp.com",
  databaseURL: "https://ionic-13ec1.firebaseio.com",
  projectId: "ionic-13ec1",
  storageBucket: "ionic-13ec1.appspot.com",
  messagingSenderId: "8428606993",
  appId: "1:8428606993:web:001cc773a76535f54383b0",
  measurementId: "G-JNQRB00EBY"
};

export const snapshotToArray = snapshot => {
  let returnArray = [];
  snapshot.forEach(element => {
      let item = element.val();
      item.key = element.key;
      returnArray.push(item);
  });
  return returnArray;
}