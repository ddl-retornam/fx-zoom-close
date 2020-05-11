setTimeout(function() {
  browser.runtime.sendMessage({}, function() {});
}, 6000);
