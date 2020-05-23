var push = require('web-push');


let vapidKeys = {
    publicKey: 'BPZ_BevDCkLTgpTjDu967m0pAKHqL6qOKbF4k8bMIICV-oVwIv9SP-kq5rqhUxvXo0Y0GPdafRFvZosuK36IIpU',
    privateKey: 'T3R8C3BYgx_Y2Ftk6pqGThnDHClFmVlGlEz_XRs8ImU'
  }

push.setVapidDetails('mailto:konrad.soares@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {};

push.sendNotification(sub, 'text message')  