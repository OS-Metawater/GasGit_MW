"use strict";
/**
 * SET THIS STUFF TO WHATEVER YOU NEED
 */
var SETTINGS = {
  EXTRACT: { // where to put the sources to
    TO: "/GAS????/GAS Work/GasGit/Extraction"
  },
  PARENT: {  // where to start looking for scripts
    SCRIPTS:[
      "/GAS????/GAS Work/GasGit"
    ]
  },
  GIT: {
    COMMITTER: {
      "name": "OS-Metawater",
      "email": "silkovskaya-olga@metawater.co.jp"
    },
    USERAGENT: "metawater",
    LIBRARIES: "libraries/",
    SCRIPTS: "",
    ALL: false                   // overrides committed dates to do all found items - this'll take ages
  }
};




