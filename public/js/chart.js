angular.module('angularChart', []).directive('uiChart', function() {
    return {
        restrict: 'EA',
        link: function(scope, elem, attrs) {

            var chart = null,
                opts  = { 
                   chart: {
                       renderTo: attrs.id,
//                       type: 'bar'
                   },
                   title: {
                       text: 'Mailgun Stats'
                   },
                   yAxis: {
                       title: {
                           text: 'Count'
                       }
                   },                       
                   xAxis: {
                       title: {
                           text: 'Date'
                       },
                       type: 'datetime',
                       dateTimeLabelFormats: { // don't display the dummy year
                           month: '%b %e',
                           year: '%b'
                       }
                   }
                };
            
            var data = scope[attrs.ngModel];

//            element.css('display', 'inline');
//            element.css('position', 'relative');
            
            scope.$watch(attrs.ngModel, function(v){
                opts.series = v;
                chart = new Highcharts.Chart(opts);
            });
        }
    };
});
