'use strict';

angular.module('fireSense')
  .controller('MainCtrl', function ($scope, $http, $firebase, $timeout, fire) {
    
    $scope.data = $firebase(fire).$asArray();

    var max = fire.orderByChild("celsius").limitToLast(1).on('child_added', function(item){
       $scope.max = item.val();
    });

    var min = fire.orderByChild("celsius").limitToFirst(1).on('child_added', function(item){
        $scope.min = item.val();
    });

    $scope.options = {
        axes: {
            x: { key: 'point', labelFunction: function(value) { return value; }, type: 'linear', min: 0, max: 20, ticks: 4 },
            y: { type: 'linear', min: 5, max: 40, ticks: 30 },
            y2: { type: 'linear', min: 5, max: 18, ticks: 10 }
        },
        series: [
            { y: 'celsius', color: 'lightgrey', thickness: '2px', type: 'area', striped: true, label: 'Temperature Celsius', drawDots: false },
            { y2: 'outside', axis: 'y2', color: 'red', thickness: '2px', visible: true, drawDots: false, dotSize: 2, label: 'Outside temp' }
        ],
        lineMode: 'linear',
        tension: 0.1,
        tooltip: { mode: 'scrubber', formatter: function(x, y, series) { return x + ':' + y; } },
        drawLegend: true,
        drawDots: true,
        columnsHGap: 5
    };

    var triviaTimeout;
    $scope.data.$watch(function(event) {
      if(triviaTimeout) $timeout.cancel(triviaTimeout);
      triviaTimeout =  $timeout( function(){ 
              $scope.last = $scope.data[$scope.data.length - 1];
              $http.get("http://numbersapi.com/" + parseInt($scope.data[$scope.data.length - 1].celsius))
                .success(function (data,status,event) {
                  $scope.trivia = data;
                });
         }, 250);
    });
  });
