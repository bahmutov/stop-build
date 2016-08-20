#!/usr/bin/env node

'use strict'

const ggit = require('ggit')
ggit.hasChanges()
  .then(function (changed) {
    if (changed) {
      console.error('there are changed files!')
      process.exit(-1)
    }
  })
