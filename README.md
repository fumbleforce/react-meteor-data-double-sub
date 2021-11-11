# react-meteor-data-double-sub

With initial load or hard reload (ctrl+shift+r), I am getting and unnecessary sub-unsub-sub cycle.


```
["{\"msg\":\"connect\",\"version\":\"1\",\"support\":[\"1\",\"pre2\",\"pre1\"]}"]	81	
15:36:08.208
a["{\"msg\":\"connected\",\"session\":\"zJtCmdnFg6Ki4YvJd\"}"]	62	
15:36:08.210
["{\"msg\":\"sub\",\"id\":\"eeXqDZFqFYDFAxD4m\",\"name\":\"meteor_autoupdate_clientVersions\",\"params\":[]}"]	110	
15:36:08.225
a["{\"msg\":\"ready\",\"subs\":[\"eeXqDZFqFYDFAxD4m\"]}"]	57	
15:36:08.227
a["{\"msg\":\"added\",\"collection\":\"meteor_autoupdate_clientVersions\",\"id\":\"version\",\"fields\":{\"version\":\"outdated\"}}"]	133	
15:36:08.229
a["{\"msg\":\"added\",\"collection\":\"meteor_autoupdate_clientVersions\",\"id\":\"version-refreshable\",\"fields\":{\"version\":\"outdated\"}}"]	145	
15:36:08.229
a["{\"msg\":\"added\",\"collection\":\"meteor_autoupdate_clientVersions\",\"id\":\"version-cordova\",\"fields\":{\"version\":\"outdated\"}}"]	141	
15:36:08.229
a["{\"msg\":\"added\",\"collection\":\"meteor_autoupdate_clientVersions\",\"id\":\"web.browser\",\"fields\":{\"version\":\"d06cadf26926a094c8699a61dd9fec994b8f6167\",\"versionRefreshable\":\"a580e09175421ec6994fc6da61a0413f3a15d2b1\",\"versionNonRefreshable\":\"75475d82a53d00d3b07777762f9640ed05821005\",\"versionReplaceable\":\"587dadac1063531af72b45e10b7e473f7831f254\",\"versionHmr\":1636641355413,\"assets\":[{\"url\":\"/merged-stylesheets.css?hash=6b1f9f6fb78291ae58da8ec4f36476931155453c\"}]}}"]	502	
15:36:08.231
a["{\"msg\":\"added\",\"collection\":\"meteor_autoupdate_clientVersions\",\"id\":\"web.browser.legacy\",\"fields\":{\"version\":\"7786afdf22c6cc425a9fc6f82b246b8268983c03\",\"versionRefreshable\":\"a580e09175421ec6994fc6da61a0413f3a15d2b1\",\"versionNonRefreshable\":\"837b1bb2a19f2f45166aa1babffc2be4a409440d\",\"versionReplaceable\":\"d2a7e3b2901ed1cd368cf9e73303781b57151bb7\",\"versionHmr\":1636641355433,\"assets\":[{\"url\":\"/merged-stylesheets.css?hash=6b1f9f6fb78291ae58da8ec4f36476931155453c\"}]}}"]	509	
15:36:08.231
["{\"msg\":\"sub\",\"id\":\"MgNsPeM5EMSzRh7LF\",\"name\":\"links\",\"params\":[]}"]	83	
15:36:08.252
["{\"msg\":\"unsub\",\"id\":\"MgNsPeM5EMSzRh7LF\"}"]	52	
15:36:08.259
["{\"msg\":\"sub\",\"id\":\"FzaZwfiFFDDcQ7KGe\",\"name\":\"links\",\"params\":[]}"]	83	
15:36:08.260
a["{\"msg\":\"added\",\"collection\":\"links\",\"id\":\"5o9B6ozKPhp4dALfe\",\"fields\":{\"title\":\"Do the Tutorial\",\"url\":\"https://www.meteor.com/tutorials/react/creating-an-app\",\"userId\":\"QyDkBKZnWy9MKECdc\",\"createdAt\":{\"$date\":1636640717225}}}"]	261	
15:36:08.276
a["{\"msg\":\"added\",\"collection\":\"links\",\"id\":\"YzjvLLc28QNcZHJjc\",\"fields\":{\"title\":\"Follow the Guide\",\"url\":\"http://guide.meteor.com\",\"userId\":\"QyDkBKZnWy9MKECdc\",\"createdAt\":{\"$date\":1636640717230}}}"]	231	
15:36:08.277
a["{\"msg\":\"added\",\"collection\":\"links\",\"id\":\"9DrSkW9ojmASZEnuj\",\"fields\":{\"title\":\"Read the Docs\",\"url\":\"https://docs.meteor.com\",\"userId\":\"QyDkBKZnWy9MKECdc\",\"createdAt\":{\"$date\":1636640717232}}}"]	228	
15:36:08.278
a["{\"msg\":\"added\",\"collection\":\"links\",\"id\":\"hEETovQkjJgRaJCpH\",\"fields\":{\"title\":\"Discussions\",\"url\":\"https://forums.meteor.com\",\"userId\":\"QyDkBKZnWy9MKECdc\",\"createdAt\":{\"$date\":1636640717233}}}"]	228	
15:36:08.289
a["{\"msg\":\"ready\",\"subs\":[\"MgNsPeM5EMSzRh7LF\"]}"]	57	
15:36:08.290
a["{\"msg\":\"removed\",\"collection\":\"links\",\"id\":\"5o9B6ozKPhp4dALfe\"}"]	80	
15:36:08.293
a["{\"msg\":\"removed\",\"collection\":\"links\",\"id\":\"YzjvLLc28QNcZHJjc\"}"]	80	
15:36:08.293
a["{\"msg\":\"removed\",\"collection\":\"links\",\"id\":\"9DrSkW9ojmASZEnuj\"}"]	80	
15:36:08.293
a["{\"msg\":\"removed\",\"collection\":\"links\",\"id\":\"hEETovQkjJgRaJCpH\"}"]	80	
15:36:08.294
a["{\"msg\":\"nosub\",\"id\":\"MgNsPeM5EMSzRh7LF\"}"]	53	
15:36:08.294
a["{\"msg\":\"added\",\"collection\":\"links\",\"id\":\"5o9B6ozKPhp4dALfe\",\"fields\":{\"title\":\"Do the Tutorial\",\"url\":\"https://www.meteor.com/tutorials/react/creating-an-app\",\"userId\":\"QyDkBKZnWy9MKECdc\",\"createdAt\":{\"$date\":1636640717225}}}"]	261	
15:36:08.295
a["{\"msg\":\"added\",\"collection\":\"links\",\"id\":\"YzjvLLc28QNcZHJjc\",\"fields\":{\"title\":\"Follow the Guide\",\"url\":\"http://guide.meteor.com\",\"userId\":\"QyDkBKZnWy9MKECdc\",\"createdAt\":{\"$date\":1636640717230}}}"]	231	
15:36:08.295
a["{\"msg\":\"added\",\"collection\":\"links\",\"id\":\"9DrSkW9ojmASZEnuj\",\"fields\":{\"title\":\"Read the Docs\",\"url\":\"https://docs.meteor.com\",\"userId\":\"QyDkBKZnWy9MKECdc\",\"createdAt\":{\"$date\":1636640717232}}}"]	228	
15:36:08.296
a["{\"msg\":\"added\",\"collection\":\"links\",\"id\":\"hEETovQkjJgRaJCpH\",\"fields\":{\"title\":\"Discussions\",\"url\":\"https://forums.meteor.com\",\"userId\":\"QyDkBKZnWy9MKECdc\",\"createdAt\":{\"$date\":1636640717233}}}"]	228	
15:36:08.296
a["{\"msg\":\"ready\",\"subs\":[\"FzaZwfiFFDDcQ7KGe\"]}"]
```
