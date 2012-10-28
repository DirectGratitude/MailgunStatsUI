var mailgunApp = angular.module('MailgunApp', ['ui', 'flotChart']);

mailgunApp.controller('MailgunStatsCtrl', function($scope, $http) {
    var basicAuthKey = "YXBpOmtleS03NGUteHMzZm9pNHFndm8wNHhxdTV0NDFscjNueDM4OQ==";

    $scope.testPoints = [[[0, 1], [1, 5], [2, 2]]];

    var config = {
        method : 'GET',
        url : 'mailgun/v2/mail.empleolisto.com.mx/stats',
        headers : {
            'Authorization' : 'Basic ' + basicAuthKey
        },
        params : {
            //'event' : 'bounced',
            'start-date' : '2012-02-01',
            'limit' : 3*5
        }
    };

    $http(config).success(function(data) {
        $scope.mailgunStats = data.items;
    });
});
