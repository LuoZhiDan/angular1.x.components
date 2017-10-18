import angular from 'angular';

import './tpls/dropdown.tpl';

angular.module('ui.zdluo.dropdown', ['uib/template/dropdown.html']).
    directive('uiDropdown', function(){
        return {
            restrict : 'E',
            replace : true,
            scope : {
                title : '=?',
                menus : '=?'
            },
            templateUrl : 'uib/template/dropdown.html',
            link : function(scope, element, attrs ){
                scope.showMenu = false;

                scope.clickFn = function(){
                    scope.showMenu = !scope.showMenu;
                }
                
            }
        }
    });