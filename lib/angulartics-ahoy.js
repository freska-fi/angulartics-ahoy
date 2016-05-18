(function(window, angular, undefined) {
  'use strict';

  /**
   * @ngdoc overview
   * @name angulartics.ahoy
   * Enables analytics support for Ahoy (https://ankane.github.io/ahoy/)
   */
  angular.module('angulartics.ahoy', ['angulartics'])
    .config(['$analyticsProvider', function ($analyticsProvider) {
      $analyticsProvider.registerPageTrack(function(path) {
        if (window.ahoy) {
          ahoy.trackView();
        }
      });

      $analyticsProvider.registerEventTrack(function(action, properties) {
        properties = properties || {};

        // Only listen same events as Facebook Pixel
        var eventList = [
          'ViewContent',
          'Search',
          'AddToCart',
          'AddToWishlist',
          'InitiateCheckout',
          'AddPaymentInfo',
          'Purchase',
          'Lead',
          'CompleteRegistration'
        ];

        if (window.ahoy && eventList.indexOf(action) !== -1) {
          ahoy.track(action, properties);
        }
      });
    }]);
})(window, window.angular);
