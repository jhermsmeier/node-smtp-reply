module.exports = [
  // X.0.X Other or Undefined Status
  [
    'Other or undefined',
  ],
  // X.1.X Addressing Status
  [
    'Other address status',                                 // X.1.0
    'Bad destination mailbox address',                      // X.1.1
    'Bad destination system address',                       // X.1.2
    'Bad destination mailbox address syntax',               // X.1.3
    'Destination mailbox address ambiguous',                // X.1.4
    'Destination address valid',                            // X.1.5
    'Destination mailbox has moved, No forwarding address', // X.1.6
    'Bad sender\'s mailbox address syntax',                 // X.1.7
    'Bad sender\'s system address',                         // X.1.8
  ],
  // X.2.X Mailbox Status
  [
    'Other or undefined mailbox status',           // X.2.0
    'Mailbox disabled, not accepting messages',    // X.2.1
    'Mailbox full',                                // X.2.2
    'Message length exceeds administrative limit', // X.2.3
    'Mailing list expansion problem',              // X.2.4
  ],
  // X.3.X Mail System Status
  [
    'Other or undefined mail system status',   // X.3.0
    'Mail system full',                        // X.3.1
    'System not accepting network messages',   // X.3.2
    'System not capable of selected features', // X.3.3
    'Message too big for system',              // X.3.4
    'System incorrectly configured',           // X.3.5
  ],
  // X.4.X Network and Routing Status
  [
    'Other or undefined network or routing status', // X.4.0
    'No answer from host',                          // X.4.1
    'Bad connection',                               // X.4.2
    'Directory server failure',                     // X.4.3
    'Unable to route',                              // X.4.4
    'Mail system congestion',                       // X.4.5
    'Routing loop detected',                        // X.4.6
    'Delivery time expired',                        // X.4.7
  ],
  // X.5.X Mail Delivery Protocol Status
  [
    'Other or undefined protocol status', // X.5.0
    'Invalid command',                    // X.5.1
    'Syntax error',                       // X.5.2
    'Too many recipients',                // X.5.3
    'Invalid command arguments',          // X.5.4
    'Wrong protocol version',             // X.5.5
  ],
  // X.6.X Message Content or Media Status
  [
    'Other or undefined media error',        // X.6.0
    'Media not supported',                   // X.6.1
    'Conversion required and prohibited',    // X.6.2
    'Conversion required but not supported', // X.6.3
    'Conversion with loss performed',        // X.6.4
    'Conversion failed',                     // X.6.5
  ],
  // X.7.X Security or Policy Status
  [
    'Other or undefined security status',            // X.7.0
    'Delivery not authorized, message refused',      // X.7.1
    'Mailing list expansion prohibited',             // X.7.2
    'Security conversion required but not possible', // X.7.3
    'Security features not supported',               // X.7.4
    'Cryptographic failure',                         // X.7.5
    'Cryptographic algorithm not supported',         // X.7.6
    'Message integrity failure',                     // X.7.7
  ],
]
