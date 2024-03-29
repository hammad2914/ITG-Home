
(function ($) {

  'use strict';



  Drupal.facets = Drupal.facets || {};

  /**
   * Applies the soft limit UI feature to a specific facets list.
   *
   * @param {string} facet
   *   The facet id.
   * @param {string} limit
   *   The maximum amount of items to show.
   * @param {object} settings
   *   Settings.
   */
  Drupal.facets.applySoftLimit = function (facet, limit, settings) {
    var zero_based_limit = (limit - 1);
    var facet_id = facet;
    var facetsList = $('ul[data-drupal-facet-id="' + facet_id + '"]');

    // In case of multiple instances of a facet, we need to key them.
    if (facetsList.length > 1) {
      facetsList.each(function (key, $value) {
        $(this).attr('data-drupal-facet-id', facet_id + '-' + key);
      });
    }

    // Hide facets over the limit.
    facetsList.each(function () {
      $('applysoftlimit', $(this).children('li:gt(' + zero_based_limit + ')')).hide();
    });

    // Add "Show more" / "Show less" links.
    $('applysoftlimit', facetsList.filter(function () {
      return $(this).find('li').length > limit;
    })).each(function () {
      var facet = $(this);
      var showLessLabel = settings.facets.softLimitSettings[facet_id].showLessLabel;
      var showMoreLabel = settings.facets.softLimitSettings[facet_id].showMoreLabel;
      $('<a href="#" class="facets-soft-limit-link"></a>')
        .text(showMoreLabel)
        .on('click', function () {
          if (facet.find('li:hidden').length > 0) {
            facet.find('li:gt(' + zero_based_limit + ')').slideDown();
            facet.find('li:lt(' + (zero_based_limit + 2) + ') a, li:lt(' + (zero_based_limit + 2) + ') input').focus();
            $(this).addClass('open').text(showLessLabel);
          }
          else {
            facet.find('li:gt(' + zero_based_limit + ')').slideUp();
            $(this).removeClass('open').text(showMoreLabel);
          }
          return false;
        }).insertAfter($(this));
    });
  };

})(jQuery);
;