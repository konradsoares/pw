self.addEventListener('push', function(e) {
    var options = {
      body: 'Monitoring Message',
      icon: 'images/example.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: '2'
      },
      actions: [
        {action: '', title: '',
          icon: 'images/checkmark.png'},
        {action: 'close', title: 'Close',
          icon: 'images/xmark.png'},

      ]
    };
    e.waitUntil(
      self.registration.showNotification('Fica esperto, que a fila vai estourar!!!', options)
    );
  });
  
