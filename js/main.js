if (typeof chrome !== 'undefined') {
  chrome.runtime.onInstalled.addListener(function(event) {
    init(event);
  });

  chrome.runtime.onStartup.addListener(function(event) {
    init(event)
    .then(function (){
      return artAdder.localGet('disableAutoUpdate')
    })
  });

  // chrome.runtime.onMessage.addListener(function (msg) {
  //   var key = msg.msg.what
  //   if (artAdder[key] && typeof artAdder[key] === 'function') {
  //     artAdder[key](msg.msg[key])
  //   }
  // })
  
}

function init(event) {
  artAdder.fetchSelectorList()
}