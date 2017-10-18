/**
 * Created by zdluoa on 2017/10/16.
 */
import angular from  'angular';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';

import './components/index';


angular.module('angular1.x.app', ['angular1.x.components'])
    .controller('mainController', ['$scope', function ($scope) {
        $scope.title = "dropDown"

        $scope.menus = [{
            title : 'Action'
        },{
            title : 'Action2'
        }]

        $scope.clickFn = function(){
            $scope.showMenu = true;
        }

        $scope.blurFn = function(){
            $scope.showMenu = false;
        }


    }]);


angular.bootstrap($('html'), ['angular1.x.app']);
