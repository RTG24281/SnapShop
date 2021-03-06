﻿(function () {
    'use strict';

    var app = angular.module('app');
    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/',
                            {
                                templateUrl: '/home/topDeals',
                                controller: 'topDealsCtrl'
                            })
                       .when('/about',
                              {
                                  templateUrl: '/home/about',
                                  controller: 'aboutCtrl'
                              })
                      .otherwise('/',
                            {
                                templateUrl: '/home/topDeals',
                                controller: 'topDealsCtrl'
                            })
    }]);


})();