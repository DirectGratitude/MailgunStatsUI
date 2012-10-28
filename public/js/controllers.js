var mailgunApp = angular.module('MailgunApp', ['ui', 'angularChart']);

mailgunApp.controller('MailgunStatsCtrl', function($scope, $http) {

    var sd = new Date();
    sd.setDate(sd.getDate()-60);
    $scope.mailgunConfig = {
        startDate : sd,
        numDays : 60
    };

    $scope.mailgunStats = [];

    var config = {
        method : 'GET',
        url : 'mailgun/v2/mail.empleolisto.com.mx/stats',
        params : {
            'start-date' : $scope.mailgunConfig.startDate,
            'limit' : 5 * $scope.mailgunConfig.numDays
        }
    };

    $scope.refreshChart = function() {

        var sd = $scope.mailgunConfig.startDate;
        config.params['start-date'] = "" + sd.toISOString().split('T')[0];
        config.params['limit'] = 5 * $scope.mailgunConfig.numDays;

        $http(config).success(function(data) {
        
            var series = {
            };

            function seriesBuilder(e, index, array) {
                if (!(e.event in series)) {
                    series[e.event] = {name: e.event, data: []};
                }
                series[e.event].data.push([new Date(e.created_at).getTime(), e.total_count]);
            }

            data.items.forEach(seriesBuilder);

            seriesArray = $.map(series, function(value, key) { return value; });
            $scope.mailgunStats = seriesArray;
        });
    };

    $scope.refreshChart();
});
