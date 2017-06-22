#!/usr/bin/env node

'use strict'

const ggit = require('ggit')
const pluralize = require('pluralize')

function notEmpty (x) {
  return Boolean(x)
}

function changedFileInfo (change) {
  return change.diff + ' ' + change.name
}

function changesFiles (changes) {
  // see ggit.changedFiles docs
  const all = [].concat(changes.A).concat(changes.C)
    .concat(changes.M).concat(changes.D).filter(notEmpty)
  return all.map(changedFileInfo)
}

ggit.hasChanges()
  .then(function (changed) {
    if (!changed) {
      return
    }
    return ggit.changedFiles()
      .then(function (changes) {
        const files = changesFiles(changes)
        console.error('⚠️ there are %d changed %s',
          files.length, pluralize('file', files.length))
        console.error(files.join('\n'))
        process.exit(-1)
      })
  })
