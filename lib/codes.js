module.exports = {
  
  ENHANCED: require( './enhanced-codes' ),
  
  211: 'System status, or system help reply',
  214: 'Help message',
  220: 'Service ready',
  221: 'Service closing transmission channel',
  250: 'Requested mail action okay, completed',
  251: 'User not local; will forward to <forward-path>',
  252: 'Cannot VRFY user, but will accept message and attempt delivery',
  
  354: 'Start mail input; end with <CRLF>.<CRLF>',
  
  421: 'Service not available, closing transmission channel',
  450: 'Requested mail action not taken: mailbox unavailable',
  451: 'Requested action aborted: local error in processing',
  452: 'Requested action not taken: insufficient system storage',
  
  500: 'Syntax error, command not recognized or too long',
  501: 'Syntax error in parameters or arguments',
  502: 'Command not implemented',
  503: 'Bad sequence of commands',
  504: 'Command parameter not implemented',
  550: 'Requested action not taken: mailbox not found, no access, or command rejected',
  551: 'User not local; please try <forward-path>',
  552: 'Requested mail action aborted: exceeded storage allocation',
  553: 'Requested action not taken: mailbox name not allowed',
  554: 'Transaction failed',
  
}
