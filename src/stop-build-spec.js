'use strict'

/* global describe, it */
describe('bin script', () => {
  it('stops the build', (done) => {
    setTimeout(done, 200)
    require('..')
  })
})
