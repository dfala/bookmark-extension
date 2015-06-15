var iframeRoot = 'https://pelican.firebaseapp.com/#/bookmark/?=';

chrome.tabs.getSelected(null,function(tab) {
    console.log(tab);
    var tablink = tab.url;

    $('#main-iframe').attr('src', iframeRoot + tablink);
});
