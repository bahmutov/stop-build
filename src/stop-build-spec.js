'use strict'

/* global describe, it */
describe('bin script', () => {
  it('stops the build', (done) => {
    console.log('run the test only after committing the files or on CI')
    setTimeout(done, 200)
    require('..')
  })
})
