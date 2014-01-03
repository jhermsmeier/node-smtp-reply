# SMTP Reply
[![build status](https://secure.travis-ci.org/jhermsmeier/node-smtp-reply.png)](http://travis-ci.org/jhermsmeier/node-smtp-reply)
[![NPM version](https://badge.fury.io/js/smtp-reply.png)](https://npmjs.org/smtp-reply)

## Install via [npm](https://npmjs.org)

```sh
$ npm install smtp-reply
```

## Usage

```javascript
var SMTPReply = require( 'smtp-reply' )
```

#### Utilize the standard messages, only specifying a status code:

```javascript
var reply = new SMTPReply( 220 )
// .toString() -> 
```
```
220 Service ready<CRLF>
```

#### Declaring a custom message:

```javascript
var reply = new SMTPReply( 220, 'mx.domain.tld ESMTP' )
// .toString() ->
```
```
220 mx.domain.tld ESMTP<CRLF>
```

#### Enhancing the status code with [RFC 1893](http://www.faqs.org/rfcs/rfc1893.html) (Enhanced Mail System Status Codes):

```javascript
var reply = new SMTPReply( 250, 1, 5, 'Flushed' )
// .toString() ->
```
```
250 2.1.5 Flushed<CRLF>
```

#### Multiline replies and everything else together:

```javascript
var reply = new SMTPReply( 530, 5, 1, [
  'Authentication Required. Learn more at',
  'http://support.google.com/mail/bin/answer.py?answer=14257 ',
])
// .toString() ->
```
```
530-5.5.1 Authentication Required. Learn more at<CRLF>
530 5.5.1 http://support.google.com/mail/bin/answer.py?answer=14257<CRLF>
```


## API

### Reply.parse( input ) -> Reply

> *String* __input__  

### Reply.getMessage( code, subject, detail ) -> String

> *Number* __code__  
> *Number* __subject__ (optional)  
> *Number* __detail__ (optional)

### new Reply( code, subject, detail, message )

> *Number* __code__  
> *Number* __subject__ (optional)  
> *Number* __detail__ (optional)  
> *String* __message__ (optional)

#### Properties:

- __code__: *Number*, defauts to `0`
- __subject__: *Number*, defauts to `0`
- __detail__: *Number*, defauts to `0`
- __lines__: *Array*, defauts to `[]`

#### Getters/Setters:

- get/set __message__: *String*, defauts to `""`
- get/set __enhancement__: *String*, defauts to `"0.0.0"`

#### Methods:

- __parse__( str ): *Reply*
  - *String* __str__
- __toString__( legacy ): *String*
  - *Boolean* __legacy__ (optional), defauts to `false`
- __set__( code, subject, detail, message )
  - *Number* __code__  
  - *Number* __subject__ (optional)  
  - *Number* __detail__ (optional)  
  - *String* __message__ (optional)
