var iframeRoot = 'https://pelican.firebaseapp.com/#/bookmark/?=';
// var iframeRoot = 'http://localhost:3000/#/bookmark/?=';

chrome.tabs.getSelected(null,function(tab) {
    console.log(tab);
    var tablink = tab.url;

    $('#main-iframe').attr('src', iframeRoot + tablink);
});
