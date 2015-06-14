$("body").append('Test');
console.log('hi');
alert('connected!');


// {
//   "name": "jQuery DOM",
//   "version": "2",
//   "manifest_version": 2,
//   "description": "Manipulate the DOM when the page is done loading",
//   "background_page": "background.html",
//   "browser_action": {
//     "name": "Manipulate DOM",
//     "icons": ["icon.png"],
//     "default_icon": "icon.png"
//   },
//   "permissions": [
//     "tabs"
//   ],
//   "content_scripts": [ {
//     "js": [ "jquery-2.1.0.min.js", "background.js" ],
//     "matches": [ "http://*/*", "https://*/*"]
//   }]
// }