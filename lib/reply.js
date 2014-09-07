const CRLF = '\r\n'

/**
 * SMTP Reply Constructor
 * @param {Number} [code]
 * @param {Number} [subject]
 * @param {Number} [detail]
 * @param {String} [message]
 */
function Reply() {
  
  if( !(this instanceof Reply) ) {
    var reply = new Reply()
    return reply.set.apply( reply, arguments )
  }
  
  this.code    = 0
  this.subject = 0
  this.detail  = 0
  
  this.lines = []
  
  this.set.apply( this, arguments )
  
}

Reply.CODES = require( './codes' )

Reply.parse = function( str ) {
  return new Reply().parse( str )
}

Reply.getMessage = function( code, subject, detail ) {
  
  if( subject > 0 || detail > 0 ) {
    if( Reply.CODES.ENHANCED[ subject ] ) {
      return Reply.CODES.ENHANCED[ subject ][ detail ] ||
        Reply.CODES.ENHANCED[ subject ][0]
    }
  }
  
  return Reply.CODES[ code ] ||
    Reply.CODES.ENHANCED[0][0]
  
}

/**
 * SMTP Reply Prototype
 * @type {Object}
 */
Reply.prototype = {
  
  constructor: Reply,
  
  /**
   * Set Reply data
   * @param {Number} [code]
   * @param {Number} [subject]
   * @param {Number} [detail]
   * @param {String} [message]
   */
  set: function() {
    
    var argv = [].slice.call( arguments )
    var message = argv.pop()
    
    // Clear message if it's a number
    message = typeof message === 'number' ?
      void argv.push( message ) : message
    
    this.code    = parseInt( argv.shift() || 0, 10 )
    this.subject = parseInt( argv.shift() || 0, 10 )
    this.detail  = parseInt( argv.shift() || 0, 10 )
    
    this.message = message
    
    return this
    
  },
  
  get enhancement() {
    return this.code.toString()[0] +
      '.' + this.subject +
      '.' + this.detail
  },
  
  set enhancement( value ) {
    var codes = ( value + '' ).split( '.' )
    this.subject = parseInt( codes[1] || 0, 10 )
    this.detail = parseInt( codes[2] || 0, 10 )
  },
  
  get message() {
    if( this.lines.length ) {
      return this.lines.join( CRLF )
    } else {
      return Reply.getMessage(
        this.code, this.subject, this.detail
      ) || ''
    }
  },
  
  set message( value ) {
    if( value == null ) {
      this.lines.length = 1
      this.lines[0] = Reply.getMessage(
        this.code, this.subject, this.detail
      )
    } else if( Array.isArray( value ) ) {
      this.lines = [].concat( value )
    } else {
      this.lines = ( value + '' )
        .replace( /^\s+|\s+$/, '' )
        .split( /\r\n/g )
    }
  },
  
  parse: function( str ) {
    
    var lines = str
      .replace( /^\s+|\s+$/, '' )
      .split( /\r\n/g )
    
    var pattern = /^(\d{3})(?:\s(\d\.\d+\.\d+))?(?:(?:\s|-)(.*?))?$/
    var line, match
    
    this.lines.length = 0
    
    while( line = lines.shift() ) {
      
      match = line.match( pattern )
      
      this.code = parseInt( match[1], 10 )
      this.enhancement = match[2] || '0.0.0'
      
      match[3] = match[3].replace( /^\s+|\s+$/, '' )
      
      this.lines.push( match[3] )
      
    }
    
    this.message = this.lines
    
    return this
    
  },
  
  toString: function( legacy ) {
    
    var lineCount = this.lines.length
    var string = ''
    
    var isEnhanced = this.subject > 0 || this.detail > 0
        isEnhanced = !legacy && isEnhanced
    
    if( lineCount === 0 ) {
      string += this.code
      string += isEnhanced ?
        ' ' + this.enhancement : ''
      return string + CRLF
    }
    
    for( var i = 0; i < lineCount; i++ ) {
      
      string += this.code
      
      string += ( lineCount > 1 && i < lineCount - 1 ) ?
        '-' : ' '
      
      string += ( isEnhanced ) ?
        this.enhancement + ' ' : ''
      
      string += (( this.lines[i] || '' ) + '' )
        .replace( /^\s+|\s+$/, '' )
      
      string += CRLF
      
    }
    
    return string
    
  }
  
}

// Exports
module.exports = Reply
