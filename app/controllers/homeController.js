"use strict"
app.controller('homeCtrl', ['$scope',
    function($scope) {

        $scope.items = [];

        for (var i = 1; i <= 1; i++) {
            $scope.items.push({
                id: i,
                title: 'item ' + i,
                isShow: i % 2 == 1
            });
        }

        $scope.watchCount = 0;

        $scope.$watch(
            function watchCountExpression() {
                return (getWatchCount());
            },
            function handleWatchCountChange(newValue) {
                $scope.watchCount = newValue;
            }
        );

        function getWatchCount() {
            var total = 0;
            angular.element(".ng-scope").each(
                function ngScopeIterator() {
                    var scope = $(this).scope();
                    total += scope.$$watchers ? scope.$$watchers.length : 0;
                }
            );
            return (total);
        }

    }
]);
