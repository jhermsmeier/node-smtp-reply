var assert = require( 'assert' )
var Reply = require( '../' )

const CRLF = '\r\n'

describe( 'Construction', function() {
  
  it( 'should set default message', function() {
    var reply = new Reply( 220 )
    assert.equal( reply.message, Reply.CODES[ 220 ] )
  })
  
  it( 'should set default message if enhanced unknown', function() {
    var reply = new Reply( 220, 10, 10 )
    assert.equal( reply.message, Reply.CODES[220] )
  })
  
  it( 'should set default enhanced message if all unknown', function() {
    var reply = new Reply( 123, 10, 10 )
    assert.equal( reply.message, Reply.CODES.ENHANCED[0][0] )
  })
  
  it( 'should use given message', function() {
    var reply = new Reply( 123, 10, 10, 'A' )
    assert.equal( reply.message, 'A' )
    var reply = new Reply( 123, 10, 'B' )
    assert.equal( reply.message, 'B' )
    var reply = new Reply( 123, 'C' )
    assert.equal( reply.message, 'C' )
  })
  
  it( 'should cast values to string in message', function() {
    var reply = new Reply( 354, [ 'Hey', 0, 'You' ])
    assert.equal( reply.message, 'Hey\r\n0\r\nYou' )
  })
  
  it( 'should use empty message when given empty string', function() {
    var reply = new Reply( 354, '')
    assert.equal( reply.message, '' )
  })
  
})