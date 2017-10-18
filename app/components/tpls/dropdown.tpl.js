import angular from 'angular';

angular.module('uib/template/dropdown.html', []).run(['$templateCache', function ($templateCache) {

    $templateCache.put('uib/template/dropdown.html', 

    `<div class="dropdown">
        <button class="btn btn-default" type="button" ng-click="clickFn()" >
            {{title}} <span class="caret"></span>
        </button>
        <ul class="dropdown-menu" ng-class="{show : showMenu}">
            <li ng-repeat="x in menus"><a href="#">{{x.title}}</a></li>
        </ul>
    </div>`);
}])