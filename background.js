'use strict'

browser.runtime.onMessage.addListener(
  function(req, sender) {
	browser.tabs.remove(sender.tab.id);
  }
);
