function MailgunStatsCtrl($scope, $http) {
    var basicAuthKey = "YXBpOmtleS03NGUteHMzZm9pNHFndm8wNHhxdTV0NDFscjNueDM4OQ==";

    var config = {
        method : 'GET',
        url : 'https://api.mailgun.net/v2/mail.empleolisto.com.mx/stats',
        headers : {
            'Authorization' : 'Basic ' + basicAuthKey
        },
        data : {
            event : 'bounced',
            'start-date' : '2012-01-01',
            limit : 1
        }
    };

    $http(config).success(function(data) {
        $scope.stats = data;
    });
}