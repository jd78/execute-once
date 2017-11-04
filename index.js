function ExecuteOnceMain(){

    let _hasBeenExecuted
    let _result

    class ExecuteOnce {

        execute(f) {
            if(_hasBeenExecuted) return _result;
            _result = f()
            _hasBeenExecuted = true
            return _result
        }
    }

    return new ExecuteOnce()
}

module.exports = ExecuteOnceMain