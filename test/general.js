var assert = require( 'assert' )
var Reply = require( '../' )

const CRLF = '\r\n'

describe( 'General', function() {
  
  it( 'should expose enhancement status', function() {
    var reply = new Reply( 530, 7, 0, 'STARTTLS required' )
    assert.equal( reply.enhancement, '5.7.0' )
  })
  
  it( 'should be able to set enhancement', function() {
    var reply = new Reply( 530, 7, 0, 'STARTTLS required' )
    assert.equal( reply.enhancement, '5.7.0' )
    reply.enhancement = '0.1.2'
    assert.equal( reply.enhancement, '5.1.2' )
    assert.equal( reply.subject, 1 )
    assert.equal( reply.detail, 2 )
  })
  
})