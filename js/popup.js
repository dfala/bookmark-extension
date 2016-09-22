var iframeRoot = 'http://thepelicanblog.com/bookmark/?=';

chrome.tabs.getSelected(null,function(tab) {
    var tablink = tab.url;
    var urlTitle = encodeURIComponent(tab.title);
    var uri = iframeRoot + tablink + "peli-title" + urlTitle;

    $('#main-iframe').attr('src', uri);
});
