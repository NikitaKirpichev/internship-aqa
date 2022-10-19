const mocha = require('mocha');
const fs = require('fs');
const assert = require('chai').assert;


describe("Test string from txt file", function(){
  let tests = "";
  before(function(done){
    fs.readFile('test-runners/input.txt', 'utf8', function(err, fileContents) {
      if (err) throw err;
      tests = fileContents;
      done();
    });
  });

  beforeEach(function(){
    assert.isString(tests,'Check string')
  })


  it("Test 1", function(){
    let result = 'mikita';
    assert.equal(result, tests)
  })

  it("Test 2", function(){
    let result = 'nikita';
    assert.equal(result, tests)
  })
})

