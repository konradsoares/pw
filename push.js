var push = require('web-push');


let vapidKeys = {
    publicKey: 'BPZ_BevDCkLTgpTjDu967m0pAKHqL6qOKbF4k8bMIICV-oVwIv9SP-kq5rqhUxvXo0Y0GPdafRFvZosuK36IIpU',
    privateKey: 'T3R8C3BYgx_Y2Ftk6pqGThnDHClFmVlGlEz_XRs8ImU'
  }

push.setVapidDetails('mailto:konrad.soares@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {
"endpoint":"https://fcm.googleapis.com/fcm/send/eRoeqJuN3uA:APA91bEZ9pVqEeFGOO390tHJWSpIMRz6iECqOT4H_0iaa3FGK_nuPdjEyussTCoUph62nTVQybuVR77vGw6cjOLqYhT2iBUUKZh_L02FxC6iN48l9cSjWrcbMuJ_RyBXK4Mzr71zRk2T",
"expirationTime":null,
"keys":
    {
    "p256dh":"BKhz8igMn4-MEkaSDiwbvRpNhpEM8BRHPOSjPB39u4PkLxKzal8eGjZ0HnRBwpn539F8tGoFaXo-RQiYhzpXVzc",
    "auth":"Udgvd5LsyWBhi_k47MnCEw"
    }
}


push.sendNotification(sub, 'text message')  