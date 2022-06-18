
         'use strict'

      if (process.env.NODE_ENV === 'production') {
        module.exports = require('./simple-zustand-devtools.cjs.production.js')
      } else {
        module.exports = require('./simple-zustand-devtools.cjs.development.js')
      }