'use strict';

angular.module('fireSense')
	.factory('fire', function (firebaseUrl, firebaseSecret){
		var fire = new Firebase("https://"+ firebaseUrl +".firebaseio.com/temperatures");
	    fire.auth(firebaseSecret);
	    return fire;
});
