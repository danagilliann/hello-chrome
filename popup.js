// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Get the current URL.
 *
 * @param {function(string)} callback - called when the URL of the current tab
 *   is found.
 */

//document.addEventListener('DOMContentLoaded', function() {
//  getCurrentTabUrl(function(url) {
//    // Put the image URL in Google search.
//    renderStatus('Performing Google Image search for ' + url);
//
//    getImageUrl(url, function(imageUrl, width, height) {
//
//      renderStatus('Search term: ' + url + '\n' +
//          'Google image search result: ' + imageUrl);
//      var imageResult = document.getElementById('image-result');
//      // Explicitly set the width/height to minimize the number of reflows. For
//      // a single image, this does not matter, but if you're going to embed
//      // multiple external images in your page, then the absence of width/height
//      // attributes causes the popup to resize multiple times.
//      imageResult.width = width;
//      imageResult.height = height;
//      imageResult.src = imageUrl;
//      imageResult.hidden = false;
//
//    }, function(errorMessage) {
//      renderStatus('Cannot display image. ' + errorMessage);
//    });
//  });
//});
