var assert = require( 'assert' )
var Reply = require( '../' )

const CRLF = '\r\n'

const single = '220 mx.google.com ESMTP' + CRLF
const enhanced = '530 5.7.0 Must issue a STARTTLS command first.' + CRLF
const multi = [
  '250-mx.google.com at your service, [203.109.150.180]',
  '250-SIZE 35882577',
  '250-8BITMIME',
  '250-STARTTLS',
  '250-ENHANCEDSTATUSCODES',
  '250 CHUNKING',
].join( CRLF ) + CRLF

describe( 'Parsing', function() {
  
  it( 'should parse single line replies', function() {
    
    var reply = Reply.parse( single )
    
    assert.equal( reply.code, 220 )
    assert.deepEqual( reply.lines, [ 'mx.google.com ESMTP' ] )
    
  })
  
  it( 'should parse multiline replies', function() {
    
    var reply = Reply.parse( multi )
    
    assert.equal( reply.code, 250 )
    assert.deepEqual( reply.lines, [
      'mx.google.com at your service, [203.109.150.180]',
      'SIZE 35882577',
      '8BITMIME',
      'STARTTLS',
      'ENHANCEDSTATUSCODES',
      'CHUNKING',
    ])
    
  })
  
  it( 'should parse enhanced status code replies', function() {
    
    var reply = Reply.parse( enhanced )
    
    assert.equal( reply.code, 530 )
    assert.deepEqual( reply.lines, [
      'Must issue a STARTTLS command first.'
    ])
    
  })
  
})