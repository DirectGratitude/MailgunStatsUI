angular.module('flotChart', []).directive('uiChart', function() {
    return {
        restrict: 'EA',
        link: function(scope, elem, attrs) {

            var chart = null,
                opts  = { };
            
            var data = scope[attrs.ngModel];

//            element.css('display', 'inline');
//            element.css('position', 'relative');
            
            scope.$watch(attrs.ngModel, function(v){
                if(!chart){
                    chart = $.plot(elem, v , opts);
                    elem.show();
                }else{
                    chart.setData(v);
                    chart.setupGrid();
                    chart.draw();
                }
            });
        }
    };
});
