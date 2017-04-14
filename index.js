var Myo = require('myo');
Myo.connect('com.stolksdorf.myAwesomeApp', require('ws'));
 
Myo.on("connected", function(data, timestamp) {
    console.log("Myo successfully connected. Data: " + JSON.stringify(data) + ". Timestamp: " + timestamp + ".");
});

Myo.on('fist', function(){
      console.log('Hello Myo!');
          this.vibrate();
});
