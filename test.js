
const assert = require('assert')
const sinon = require('sinon')
const executeOnce = require('./index')

describe('execute once', () => {
    it('should execute the function if never executed', () => {
      let execOnce = new executeOnce()
      let fn = sinon.spy()
      execOnce.execute(() => fn())
      assert(fn.calledOnce)
    })

    it('should execute function only once if executed multiple time', () => {
        let execOnce = new executeOnce()
        let fn = sinon.spy()
        execOnce.execute(() => fn())
        execOnce.execute(() => fn())
        assert(fn.calledOnce)
    })

    it('should execute function only once if executed multiple time and return always the previous result', () => {
        let execOnce = new executeOnce()
        let fn = sinon.stub().returns(1)
        
        let result = execOnce.execute(() => fn())
        assert.equal(result, 1)

        let result2 = execOnce.execute(() => fn())
        assert.equal(result2, 1)
        
        assert(fn.calledOnce)
    })

    it('should execute function only once if executed multiple time and return always the previous result (additional test)', () => {
        let sumOnce = new executeOnce()
        let sum = (a,b) => a+b
        let result = sumOnce.execute(() => sum(1,2))
        assert.equal(result, 3)
        let result2 = sumOnce.execute(() => sum(2,3))
        assert.equal(result2, 3)
    })
})