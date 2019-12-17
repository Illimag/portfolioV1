angular.module('app', []);

(function () {
    'use strict';

    angular
        .module('app')
        .directive('tabShell', TabShell);

    TabShell.$inject = [];

    function TabShell() {
        var directive = {
            'scope': {},
            'template': '<div class="tab-shell-container">'+
			        '<nav class="tabs">'+
				      '<div ng-repeat="tab in TabShellController.tabs" class="tab" ng-class="{\'tab-active\': tab.active}" ng-style="{\'width\':TabShellController.sectionWidth + \'%\' }">'+
					    '<div class="tab-header" ng-class="tab.icon" ng-click="TabShellController.select(tab)">{{tab.heading}}</div>'+
				      '</div>'+
				      '<div class="tab-slider" ng-style="{\'width\':TabShellController.sectionWidth + \'%\', \'transform\': \'translate3d(\' + (100*TabShellController.position) + \'%,0,0)\'}"></div>'+
			        '</nav>'+
			        '<div class="tabs-content" ng-style="{\'width\':TabShellController.sectionOffset + \'%\',\'transform\': \'translate3d(-\' + (100*TabShellController.position) / TabShellController.tabs.length + \'%,0,0)\'}"  ng-transclude>'+
			        '</div>'+
		          '</div>',
            'transclude': true,
            'bindToController': true,
            'controllerAs': 'TabShellController',
            'controller': TabShellController
        };
        return directive;

        function TabShellController() {
            var self = this;
            self.tabs = [];             // collection of tabs which also allow access to their isolate scope
            self.position = 0;          // tracking the current location (which tab is selected)
            self.sectionOffset = 0;     // calculates a percent based on the number of tabs
            self.sectionWidth = 100;    // calculates a percent based on the number of tabs

            /* function to initialize a new tab */
            self.addTab = function addTab(tab) {

                /* tell the tab its number so it can align itself properly in order
                * we want this value to be zero based, since the first tab will translate 0%
                * */
                tab.tabNumber = self.tabs.length;

                /* push the tab onto the array, if its the first one, make it the active tab */
                self.tabs.push(tab);
                if( self.tabs.length === 1 ) {
                    tab.active = true;
                }

                /* calculate sectionWidth and sectionOffset */
                self.sectionWidth = 100 / self.tabs.length;
                self.sectionOffset = 100 * self.tabs.length;

                /* recalculate all tab widths */
                angular.forEach(self.tabs, function(tab) {
                    tab.tabWidth = self.sectionWidth;
                });

            };

            /* function to select a tab */
            self.select = function(selectedTab) {

                /* loop through all the tabs, set them be inactive except the one that was selected */
                angular.forEach(self.tabs, function(tab, index) {
                    if( tab.active && tab !== selectedTab ){
                        tab.active = false;
                    }
                    if ( tab === selectedTab ) {
                        self.position = index;
                    }
                });
                selectedTab.active = true;

            };

        }

    }

})();


(function () {
    'use strict';

    angular
        .module('app')
        .directive('tab', tab);

    function tab() {
        var directive = {
            'scope': {
                'heading': '@',
                'icon': '@?'
            },
            'link': link,
            'template': '<div class="section" ng-style="{\'width\':tabWidth + \'%\',\'transform\': \'translate3d(\' + (100*tabNumber) + \'%,0,0)\'}" ng-class="{\'section-active\':active}" ng-transclude></div>',
            'transclude': true,
            'require': '^tabShell'
        };
        return directive;

        function link(scope, element, attrs, TabShellController) {
            scope.active = false;
            scope.tabNumber = 0;
            scope.tabWidth = 0;
            TabShellController.addTab(scope);
        }

    }

})();