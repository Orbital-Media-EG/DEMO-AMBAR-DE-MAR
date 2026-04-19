(function(){
    var script = {
 "start": "this.init()",
 "paddingBottom": 0,
 "children": [
  "this.IconButton_806B4BCF_98BB_A6E7_41D7_AC9E65E0AA4D",
  "this.MainViewer",
  "this.IconButton_8154DD90_9859_6378_41E2_591F83DFA336",
  "this.IconButton_81C9293A_9856_A3A8_41BC_085BBC37D3A0",
  "this.Label_A9175841_A4B5_CCFF_41E3_1644B51B686F",
  "this.Label_A9FCC0E8_A4C6_EFFB_41E4_2A5BB6362428",
  "this.Label_AADC4687_A4D2_F94A_41A8_5207F6BAEEFC",
  "this.Image_A9514B71_A4EB_E78B_41DA_5389827C8F14"
 ],
 "id": "rootPlayer",
 "buttonToggleMute": "this.IconButton_8154DD90_9859_6378_41E2_591F83DFA336",
 "desktopMipmappingEnabled": false,
 "layout": "absolute",
 "propagateClick": false,
 "verticalAlign": "top",
 "defaultVRPointer": "laser",
 "contentOpaque": false,
 "class": "Player",
 "width": "100%",
 "vrPolyfillScale": 0.5,
 "mobileMipmappingEnabled": false,
 "minHeight": 20,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 20,
 "height": "100%",
 "scrollBarOpacity": 0.5,
 "backgroundPreloadEnabled": true,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "borderRadius": 0,
 "downloadEnabled": false,
 "mouseWheelEnabled": true,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "scripts": {
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "unregisterKey": function(key){  delete window[key]; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "registerKey": function(key, value){  window[key] = value; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "existsKey": function(key){  return key in window; },
  "getKey": function(key){  return window[key]; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; }
 },
 "gap": 10,
 "definitions": [{
 "duration": 7000,
 "label": "IMG_20260416_144214370",
 "id": "album_8FCB624B_98AE_A1E8_41DE_EF1A9A8B482F_0",
 "width": 3072,
 "image": {
  "levels": [
   {
    "url": "media/album_8FCB624B_98AE_A1E8_41DE_EF1A9A8B482F_0.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "thumbnailUrl": "media/album_8FCB624B_98AE_A1E8_41DE_EF1A9A8B482F_0_t.jpg",
 "class": "Photo",
 "height": 4080
},
{
 "initialPosition": {
  "yaw": 155.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_AB709246_A4EE_A189_41C0_C3EC916981C4",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -6.59,
  "class": "PanoramaCameraPosition",
  "pitch": -12.13
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_9235B00F_9856_A168_41C5_AE0190458C7E_camera",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "begin": "this.MainViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_8B4C6731_987A_EFB8_41B0_91CFB0AD1650",
   "player": "this.MainViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_AA32C1B7_A4EE_A2F7_41AA_E83A22936900",
 "class": "PlayList"
},
{
 "items": [
  {
   "media": "this.panorama_93DEAB71_9857_67B8_41D2_958B1F65256E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_camera"
  },
  {
   "media": "this.panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_camera"
  },
  {
   "media": "this.panorama_92367A33_9857_61B8_41E1_2B431717D4D7",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_92367A33_9857_61B8_41E1_2B431717D4D7_camera"
  },
  {
   "media": "this.panorama_9236519C_9856_A368_41E3_09A0668DADF8",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9236519C_9856_A368_41E3_09A0668DADF8_camera"
  },
  {
   "media": "this.panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_camera"
  },
  {
   "media": "this.panorama_9235B00F_9856_A168_41C5_AE0190458C7E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9235B00F_9856_A168_41C5_AE0190458C7E_camera"
  },
  {
   "media": "this.panorama_9235B759_9856_AFE8_41B2_7E3C413BC607",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "width": 3072,
 "fieldOfViewOverlayOutsideOpacity": 0,
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "label": "IMG_20260416_144233280",
 "id": "map_8B1BFAAA_987A_E6A8_41DB_3F0861E5A7FC",
 "initialZoomFactor": 1,
 "scaleMode": "fit_inside",
 "fieldOfViewOverlayRadiusScale": 0.3,
 "image": {
  "levels": [
   {
    "url": "media/map_8B1BFAAA_987A_E6A8_41DB_3F0861E5A7FC.jpeg",
    "width": 2409,
    "class": "ImageResourceLevel",
    "height": 3200
   },
   {
    "url": "media/map_8B1BFAAA_987A_E6A8_41DB_3F0861E5A7FC_lq.jpeg",
    "width": 222,
    "class": "ImageResourceLevel",
    "height": 295,
    "tags": "preload"
   }
  ],
  "class": "ImageResource"
 },
 "thumbnailUrl": "media/map_8B1BFAAA_987A_E6A8_41DB_3F0861E5A7FC_t.jpg",
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "class": "Map",
 "maximumZoomFactor": 1.2,
 "height": 4080,
 "minimumZoomFactor": 0.5
},
{
 "initialPosition": {
  "yaw": 14.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_AA10F1C7_A4EE_A297_41DE_52DAC4EF6222",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "label": "1 (1)",
 "id": "panorama_93DEAB71_9857_67B8_41D2_958B1F65256E",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": -104.79,
   "yaw": -14.84,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_95616918_985A_E368_41B5_8AF3ACDC8ED2",
  "this.panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_tcap0"
 ],
 "thumbnailUrl": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360
},
{
 "initialPosition": {
  "yaw": 92.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_AB468255_A4EE_A18A_41DC_5FC67665478D",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -14.82,
  "class": "PanoramaCameraPosition",
  "pitch": -36.07
 },
 "class": "PanoramaCamera",
 "id": "panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_camera",
 "automaticZoomSpeed": 10
},
{
 "width": 3072,
 "fieldOfViewOverlayOutsideOpacity": 0,
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "label": "IMG_20260416_144214370",
 "id": "map_8B4C6731_987A_EFB8_41B0_91CFB0AD1650",
 "initialZoomFactor": 1,
 "scaleMode": "fit_inside",
 "fieldOfViewOverlayRadiusScale": 0.3,
 "image": {
  "levels": [
   {
    "url": "media/map_8B4C6731_987A_EFB8_41B0_91CFB0AD1650.jpeg",
    "width": 2409,
    "class": "ImageResourceLevel",
    "height": 3200
   },
   {
    "url": "media/map_8B4C6731_987A_EFB8_41B0_91CFB0AD1650_lq.jpeg",
    "width": 222,
    "class": "ImageResourceLevel",
    "height": 295,
    "tags": "preload"
   }
  ],
  "class": "ImageResource"
 },
 "thumbnailUrl": "media/map_8B4C6731_987A_EFB8_41B0_91CFB0AD1650_t.jpg",
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "class": "Map",
 "maximumZoomFactor": 1.2,
 "height": 4080,
 "minimumZoomFactor": 0.5
},
{
 "loop": true,
 "class": "MediaAudio",
 "audio": {
  "mp3Url": "media/audio_816D5103_985E_E358_41E2_E981D2B04C43.mp3",
  "oggUrl": "media/audio_816D5103_985E_E358_41E2_E981D2B04C43.ogg",
  "class": "AudioResource"
 },
 "autoplay": true,
 "id": "audio_816D5103_985E_E358_41E2_E981D2B04C43",
 "data": {
  "label": "iced coffee \u2615\ufe0f jazz lofi vibes (no copyright music  vlog music  royalty free music)"
 }
},
{
 "duration": 7000,
 "label": "IMG_20260416_144246429",
 "id": "album_8FCB624B_98AE_A1E8_41DE_EF1A9A8B482F_2",
 "width": 3072,
 "image": {
  "levels": [
   {
    "url": "media/album_8FCB624B_98AE_A1E8_41DE_EF1A9A8B482F_2.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "thumbnailUrl": "media/album_8FCB624B_98AE_A1E8_41DE_EF1A9A8B482F_2_t.jpg",
 "class": "Photo",
 "height": 4080
},
{
 "initialPosition": {
  "yaw": -157.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_ABAEA206_A4EE_A196_41D0_C743544BFE8A",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -178.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_AB247265_A4EE_A18A_41C0_A6EDCA4721ED",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0.66,
  "class": "PanoramaCameraPosition",
  "pitch": 9.92
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_92367A33_9857_61B8_41E1_2B431717D4D7_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -160.1,
  "class": "PanoramaCameraPosition",
  "pitch": 3.54
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_camera",
 "automaticZoomSpeed": 10
},
{
 "duration": 7000,
 "label": "IMG_20260416_144233280",
 "id": "album_8FCB624B_98AE_A1E8_41DE_EF1A9A8B482F_1",
 "width": 3072,
 "image": {
  "levels": [
   {
    "url": "media/album_8FCB624B_98AE_A1E8_41DE_EF1A9A8B482F_1.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "thumbnailUrl": "media/album_8FCB624B_98AE_A1E8_41DE_EF1A9A8B482F_1_t.jpg",
 "class": "Photo",
 "height": 4080
},
{
 "duration": 5000,
 "label": "IMG_20260416_144233280",
 "id": "photo_8EC0F5D5_98D6_A2F8_41CA_CEA4BC4C9579",
 "width": 3072,
 "image": {
  "levels": [
   {
    "url": "media/photo_8EC0F5D5_98D6_A2F8_41CA_CEA4BC4C9579.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "thumbnailUrl": "media/photo_8EC0F5D5_98D6_A2F8_41CA_CEA4BC4C9579_t.jpg",
 "class": "Photo",
 "height": 4080
},
{
 "initialPosition": {
  "yaw": 165.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_AA09E1C7_A4EE_A297_41D5_B3CFF1948777",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "begin": "this.MainViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_8B1BFAAA_987A_E6A8_41DB_3F0861E5A7FC",
   "player": "this.MainViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_AA3D61B7_A4EE_A2F7_41D3_6807BB8AD07B",
 "class": "PlayList"
},
{
 "hfovMax": 130,
 "label": "2",
 "id": "panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": -14.84,
   "yaw": -104.79,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_93DEAB71_9857_67B8_41D2_958B1F65256E"
  },
  {
   "backwardYaw": -165.41,
   "yaw": 106.95,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_92367A33_9857_61B8_41E1_2B431717D4D7"
  },
  {
   "backwardYaw": 74.88,
   "yaw": 63.87,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_9236519C_9856_A368_41E3_09A0668DADF8"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_963C92C6_9859_E6D8_4163_68B7CE5DE0FC",
  "this.overlay_966E1B14_985F_6778_41B4_1634FF645B06",
  "this.overlay_97404C7F_985E_A1A8_41C0_3813D925224F",
  "this.panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_tcap0"
 ],
 "thumbnailUrl": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360
},
{
 "initialPosition": {
  "yaw": -73.05,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_AB8C5226_A4EE_A189_41E1_74FA789B1D63",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -129.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_AB924236_A4EE_A189_4195_ACB4D23A3FE4",
 "automaticZoomSpeed": 10
},
{
 "label": "Album de Fotos IMG_20260416_144214370",
 "id": "album_8FCB624B_98AE_A1E8_41DE_EF1A9A8B482F",
 "playList": "this.album_8FCB624B_98AE_A1E8_41DE_EF1A9A8B482F_AlbumPlayList",
 "thumbnailUrl": "media/album_8FCB624B_98AE_A1E8_41DE_EF1A9A8B482F_t.png",
 "class": "PhotoAlbum"
},
{
 "initialPosition": {
  "yaw": -116.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_ABF431D6_A4EE_A2B6_4167_7CEB7B848B4F",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "label": "6",
 "id": "panorama_9235B00F_9856_A168_41C5_AE0190458C7E",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": 76.57,
   "yaw": 179.21,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F"
  },
  {
   "backwardYaw": 22.7,
   "yaw": 1.38,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_9235B759_9856_AFE8_41B2_7E3C413BC607"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_8925C23B_986F_A1A8_41DC_2A07E7A4B39F",
  "this.overlay_89277927_986E_A358_41DD_7A0785FA88F2",
  "this.panorama_9235B00F_9856_A168_41C5_AE0190458C7E_tcap0"
 ],
 "thumbnailUrl": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360
},
{
 "width": 3072,
 "fieldOfViewOverlayOutsideOpacity": 0,
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "label": "IMG_20260416_144246429",
 "id": "map_8B712E1E_987A_E169_41E1_9CE189ED0511",
 "initialZoomFactor": 1,
 "scaleMode": "fit_inside",
 "fieldOfViewOverlayRadiusScale": 0.3,
 "image": {
  "levels": [
   {
    "url": "media/map_8B712E1E_987A_E169_41E1_9CE189ED0511.jpeg",
    "width": 2409,
    "class": "ImageResourceLevel",
    "height": 3200
   },
   {
    "url": "media/map_8B712E1E_987A_E169_41E1_9CE189ED0511_lq.jpeg",
    "width": 222,
    "class": "ImageResourceLevel",
    "height": 295,
    "tags": "preload"
   }
  ],
  "class": "ImageResource"
 },
 "thumbnailUrl": "media/map_8B712E1E_987A_E169_41E1_9CE189ED0511_t.jpg",
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "class": "Map",
 "maximumZoomFactor": 1.2,
 "height": 4080,
 "minimumZoomFactor": 0.5
},
{
 "duration": 5000,
 "label": "IMG_20260416_144246429",
 "id": "photo_8E8DB973_98D6_A3B8_41DF_288C886002F7",
 "width": 3072,
 "image": {
  "levels": [
   {
    "url": "media/photo_8E8DB973_98D6_A3B8_41DF_288C886002F7.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "thumbnailUrl": "media/photo_8E8DB973_98D6_A3B8_41DF_288C886002F7_t.jpg",
 "class": "Photo",
 "height": 4080
},
{
 "items": [
  {
   "begin": "this.MainViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_8B4C6731_987A_EFB8_41B0_91CFB0AD1650",
   "player": "this.MainViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_AA3D51B7_A4EE_A2F7_41C1_DEC585F5F5D0",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 56.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_ABC861F7_A4EE_A277_41B9_D3E2C591AFEA",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "label": "5",
 "id": "panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -24.94,
   "yaw": -123.44,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_9236519C_9856_A368_41E3_09A0668DADF8"
  },
  {
   "backwardYaw": -87.66,
   "yaw": 170.23,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_92367A33_9857_61B8_41E1_2B431717D4D7"
  },
  {
   "backwardYaw": 179.21,
   "yaw": 76.57,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_9235B00F_9856_A168_41C5_AE0190458C7E"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_882A0C28_9856_E1A8_41D1_CDE6C0DF4DE0",
  "this.overlay_88AAC558_9856_A3E8_41DC_E054B52E3C39",
  "this.overlay_880239E1_9869_A2D8_41B2_4BA78610103A",
  "this.overlay_888127AC_9869_AEA8_41C9_F0F003A5F7C3",
  "this.panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_tcap0",
  "this.overlay_8281D401_9869_A158_41E1_D0EAC30480C2"
 ],
 "thumbnailUrl": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360
},
{
 "items": [
  {
   "begin": "this.MainViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_8B712E1E_987A_E169_41E1_9CE189ED0511",
   "player": "this.MainViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_AA3D21B7_A4EE_A2F7_41D7_34BD88673B68",
 "class": "PlayList"
},
{
 "items": [
  {
   "media": "this.album_8FCB624B_98AE_A1E8_41DE_EF1A9A8B482F",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "playList_AA3371B7_A4EE_A2F7_41A6_340D34A9FAD1",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 75.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_ABBC8216_A4EE_A189_41C6_1468AEBB1210",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 29.79,
  "class": "PanoramaCameraPosition",
  "pitch": 11.38
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -52.28,
  "class": "PanoramaCameraPosition",
  "pitch": 10.05
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_9236519C_9856_A368_41E3_09A0668DADF8_camera",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "begin": "this.MainViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_8B1BFAAA_987A_E6A8_41DB_3F0861E5A7FC",
   "player": "this.MainViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_AA32F1B7_A4EE_A2F7_41DC_6FBB1970C9DD",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": -0.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_AB560265_A4EE_A18A_41C0_2E0F2B42C8F2",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -103.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_ABDEC206_A4EE_A196_41D5_5EFA9500AE15",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -105.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_ABE4B1D6_A4EE_A2B6_41DB_44B508096293",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -9.77,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_AB60423B_A4EE_A1FF_41D4_C8057E6F55CF",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 121.24,
  "class": "PanoramaCameraPosition",
  "pitch": -3.57
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_camera",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "label": "4",
 "id": "panorama_9236519C_9856_A368_41E3_09A0668DADF8",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": 63.87,
   "yaw": 74.88,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0"
  },
  {
   "backwardYaw": -124.76,
   "yaw": 50.35,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_92367A33_9857_61B8_41E1_2B431717D4D7"
  },
  {
   "backwardYaw": -123.44,
   "yaw": -24.94,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F"
  },
  {
   "panorama": "this.panorama_9235B00F_9856_A168_41C5_AE0190458C7E",
   "class": "AdjacentPanorama"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_978F588E_9859_A168_41DA_D1657CFF2B04",
  "this.overlay_88D5861D_9859_A168_41DC_9C7B0CCC8748",
  "this.overlay_97B051D3_9856_A2F8_41D3_B3D87483988F",
  "this.overlay_979D34E9_9857_62A8_41D0_B27F4B676AE7",
  "this.panorama_9236519C_9856_A368_41E3_09A0668DADF8_tcap0"
 ],
 "thumbnailUrl": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360
},
{
 "movementMode": "constrained",
 "id": "MainViewerMapPlayer",
 "class": "MapPlayer",
 "viewerArea": "this.MainViewer"
},
{
 "mouseControlMode": "drag_acceleration",
 "class": "PanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true
},
{
 "id": "MainViewerPhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer",
 "viewerArea": "this.MainViewer"
},
{
 "hfovMax": 130,
 "label": "3",
 "id": "panorama_92367A33_9857_61B8_41E1_2B431717D4D7",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "backwardYaw": 106.95,
   "yaw": -165.41,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0"
  },
  {
   "backwardYaw": 50.35,
   "yaw": -124.76,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_9236519C_9856_A368_41E3_09A0668DADF8"
  },
  {
   "backwardYaw": 170.23,
   "yaw": -87.66,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_96C81136_9859_A3B8_41D1_5CF781483956",
  "this.overlay_97703BFC_9859_66A8_41BA_66290630F09E",
  "this.overlay_96A403ED_985B_A6A8_41BD_4FB04F2E458F",
  "this.panorama_92367A33_9857_61B8_41E1_2B431717D4D7_tcap0"
 ],
 "thumbnailUrl": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360
},
{
 "initialPosition": {
  "yaw": 55.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_ABFA31E7_A4EE_A297_41D1_6192EB7DC61A",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "label": "7",
 "id": "panorama_9235B759_9856_AFE8_41B2_7E3C413BC607",
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 1.38,
   "yaw": 22.7,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_9235B00F_9856_A168_41C5_AE0190458C7E"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_8A77AFC0_9869_BED8_41C4_D065417C9DE2",
  "this.overlay_8A2964CD_9869_A2E8_41D7_777617D23E56",
  "this.panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_tcap0"
 ],
 "thumbnailUrl": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360
},
{
 "items": [
  {
   "begin": "this.MainViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_8B712E1E_987A_E169_41E1_9CE189ED0511",
   "player": "this.MainViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_AA3DB1B7_A4EE_A2F7_41D8_123E050A9D6E",
 "class": "PlayList"
},
{
 "paddingBottom": 0,
 "id": "IconButton_806B4BCF_98BB_A6E7_41D7_AC9E65E0AA4D",
 "transparencyActive": false,
 "width": 38,
 "propagateClick": false,
 "verticalAlign": "middle",
 "right": "2.03%",
 "iconURL": "skin/IconButton_806B4BCF_98BB_A6E7_41D7_AC9E65E0AA4D.png",
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_806B4BCF_98BB_A6E7_41D7_AC9E65E0AA4D_rollover.png",
 "minHeight": 0,
 "paddingLeft": 0,
 "bottom": "0%",
 "height": 38,
 "mode": "push",
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_806B4BCF_98BB_A6E7_41D7_AC9E65E0AA4D_pressed.png",
 "paddingTop": 0,
 "minWidth": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "Button4076"
 },
 "show": "this.playGlobalAudio(this.audio_816D5103_985E_E358_41E2_E981D2B04C43)",
 "cursor": "hand",
 "paddingRight": 0
},
{
 "playbackBarHeadShadowColor": "#000000",
 "paddingBottom": 0,
 "transitionDuration": 500,
 "id": "MainViewer",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "propagateClick": false,
 "toolTipPaddingTop": 4,
 "progressRight": 0,
 "toolTipPaddingRight": 6,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowColor": "#333333",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "class": "ViewerArea",
 "toolTipFontColor": "#606060",
 "width": "100%",
 "progressOpacity": 1,
 "toolTipBorderSize": 1,
 "vrPointerSelectionColor": "#FF6600",
 "paddingLeft": 0,
 "transitionMode": "blending",
 "progressBackgroundColorRatios": [
  0
 ],
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadBorderSize": 0,
 "borderSize": 0,
 "playbackBarHeadShadow": true,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarLeft": 0,
 "toolTipBorderColor": "#767676",
 "height": "100%",
 "toolTipFontWeight": "normal",
 "vrPointerSelectionTime": 2000,
 "toolTipTextShadowColor": "#000000",
 "progressBackgroundOpacity": 1,
 "firstTransitionDuration": 0,
 "progressBottom": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadHeight": 15,
 "toolTipFontFamily": "Arial",
 "playbackBarBottom": 5,
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "progressBorderColor": "#000000",
 "toolTipShadowSpread": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "toolTipTextShadowOpacity": 0,
 "vrPointerColor": "#FFFFFF",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "progressBarOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBorderSize": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressLeft": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "toolTipDisplayTime": 600,
 "playbackBarBackgroundOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeight": 10,
 "progressBorderRadius": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadWidth": 6,
 "minHeight": 50,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipFontStyle": "normal",
 "toolTipPaddingBottom": 4,
 "progressBarBorderColor": "#000000",
 "playbackBarBorderColor": "#FFFFFF",
 "shadow": false,
 "displayTooltipInTouchScreens": true,
 "paddingTop": 0,
 "minWidth": 100,
 "playbackBarProgressBorderSize": 0,
 "toolTipFontSize": "1.11vmin",
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "borderRadius": 0,
 "playbackBarRight": 0,
 "progressBarBorderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Main Viewer"
 }
},
{
 "paddingBottom": 0,
 "id": "IconButton_8154DD90_9859_6378_41E2_591F83DFA336",
 "transparencyActive": true,
 "width": 40,
 "propagateClick": false,
 "verticalAlign": "middle",
 "right": "7.63%",
 "iconURL": "skin/IconButton_8154DD90_9859_6378_41E2_591F83DFA336.png",
 "class": "IconButton",
 "minHeight": 0,
 "paddingLeft": 0,
 "top": "4.46%",
 "mode": "toggle",
 "shadow": false,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_8154DD90_9859_6378_41E2_591F83DFA336_pressed.png",
 "paddingTop": 0,
 "minWidth": 0,
 "height": 40,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "Button49930"
 },
 "cursor": "hand",
 "paddingRight": 0
},
{
 "paddingBottom": 0,
 "maxWidth": 53,
 "id": "IconButton_81C9293A_9856_A3A8_41BC_085BBC37D3A0",
 "transparencyActive": true,
 "maxHeight": 52,
 "propagateClick": false,
 "verticalAlign": "middle",
 "right": "12.15%",
 "width": 53,
 "iconURL": "skin/IconButton_81C9293A_9856_A3A8_41BC_085BBC37D3A0.png",
 "class": "IconButton",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "3.68%",
 "mode": "push",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": 52,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "click": "this.openLink('https://www.facebook.com/ambardelmarchetumal#', '_blank')",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton8401"
 },
 "cursor": "hand",
 "paddingRight": 0
},
{
 "fontFamily": "Arial",
 "paddingBottom": 0,
 "id": "Label_A9175841_A4B5_CCFF_41E3_1644B51B686F",
 "left": "40.17%",
 "propagateClick": false,
 "verticalAlign": "middle",
 "fontColor": "#000000",
 "class": "Label",
 "text": "DEMO ",
 "textShadowVerticalLength": 1,
 "width": "15.137%",
 "borderColor": "#FFFFFF",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "2.74%",
 "shadow": false,
 "borderSize": 8,
 "paddingTop": 0,
 "minWidth": 1,
 "textShadowBlurRadius": 5,
 "backgroundOpacity": 0,
 "textShadowColor": "#000000",
 "fontSize": "4vmin",
 "fontStyle": "normal",
 "borderRadius": 8,
 "height": "7.67%",
 "textShadowOpacity": 0.45,
 "horizontalAlign": "center",
 "data": {
  "name": "Label1571"
 },
 "textShadowHorizontalLength": -2,
 "textDecoration": "none",
 "fontWeight": "bold",
 "paddingRight": 0
},
{
 "fontFamily": "Arial",
 "paddingBottom": 0,
 "id": "Label_A9FCC0E8_A4C6_EFFB_41E4_2A5BB6362428",
 "left": "26.31%",
 "propagateClick": false,
 "verticalAlign": "middle",
 "fontColor": "#000000",
 "class": "Label",
 "text": "Contacto:",
 "textShadowVerticalLength": 1,
 "width": "42.7%",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "12.19%",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "textShadowBlurRadius": 3,
 "backgroundOpacity": 0,
 "textShadowColor": "#000000",
 "fontSize": "5vmin",
 "fontStyle": "normal",
 "borderRadius": 0,
 "height": "8.509%",
 "textShadowOpacity": 0.7,
 "horizontalAlign": "center",
 "data": {
  "name": "Label2037"
 },
 "textShadowHorizontalLength": 1,
 "textDecoration": "none",
 "fontWeight": "normal",
 "paddingRight": 0
},
{
 "fontFamily": "Arial",
 "paddingBottom": 0,
 "id": "Label_AADC4687_A4D2_F94A_41A8_5207F6BAEEFC",
 "left": "26.39%",
 "propagateClick": false,
 "verticalAlign": "middle",
 "fontColor": "#000000",
 "class": "Label",
 "text": "9811415821",
 "textShadowVerticalLength": 1,
 "width": "42.7%",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "19.71%",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "textShadowBlurRadius": 3,
 "backgroundOpacity": 0,
 "textShadowColor": "#000000",
 "fontSize": "5vmin",
 "fontStyle": "normal",
 "borderRadius": 0,
 "height": "8.509%",
 "textShadowOpacity": 0.7,
 "horizontalAlign": "center",
 "data": {
  "name": "Label2037"
 },
 "textShadowHorizontalLength": 1,
 "textDecoration": "none",
 "fontWeight": "normal",
 "paddingRight": 0
},
{
 "paddingBottom": 0,
 "maxWidth": 1080,
 "id": "Image_A9514B71_A4EB_E78B_41DA_5389827C8F14",
 "left": "28.77%",
 "maxHeight": 1080,
 "propagateClick": false,
 "verticalAlign": "middle",
 "class": "Image",
 "url": "skin/Image_A9514B71_A4EB_E78B_41DA_5389827C8F14.png",
 "width": "42.088%",
 "minHeight": 1,
 "paddingLeft": 0,
 "bottom": "8.36%",
 "height": "74.674%",
 "shadow": false,
 "borderSize": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "click": "this.openLink('http://wa.me/qr/N6NDZNGFHQ56G1', '_blank')",
 "horizontalAlign": "center",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image2950"
 },
 "cursor": "hand",
 "paddingRight": 0
},
{
 "maps": [
  {
   "hfov": 6.74,
   "yaw": -14.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_1_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.29
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_894B0987_986B_6358_41D5_47C720FF49CB",
   "pitch": -4.29,
   "yaw": -14.84,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.74,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0, this.camera_ABBC8216_A4EE_A189_41C6_1468AEBB1210); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_95616918_985A_E368_41B5_8AF3ACDC8ED2",
 "data": {
  "label": "Circle 02b"
 }
},
{
 "hfov": 19.5,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_tcap0.png",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_tcap0",
 "distance": 50
},
{
 "maps": [
  {
   "hfov": 14.83,
   "yaw": 106.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.64
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_894A4988_986B_6368_41CB_250DEDDCA8FE",
   "pitch": -16.64,
   "yaw": 106.95,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.83,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_92367A33_9857_61B8_41E1_2B431717D4D7, this.camera_AA10F1C7_A4EE_A297_41DE_52DAC4EF6222); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_963C92C6_9859_E6D8_4163_68B7CE5DE0FC",
 "data": {
  "label": "Circle 01b"
 }
},
{
 "maps": [
  {
   "hfov": 15.15,
   "yaw": -104.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.84
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_894A8989_986B_6368_41D6_8CD0EEEEA003",
   "pitch": -11.84,
   "yaw": -104.79,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.15,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_93DEAB71_9857_67B8_41D2_958B1F65256E, this.camera_AA09E1C7_A4EE_A297_41D5_B3CFF1948777); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_966E1B14_985F_6778_41B4_1634FF645B06",
 "data": {
  "label": "Circle 01b"
 }
},
{
 "maps": [
  {
   "hfov": 10.16,
   "yaw": 63.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.15
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_894AF989_986B_6368_41E0_3A9D1C73EA2E",
   "pitch": 9.15,
   "yaw": 63.87,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.16,
   "distance": 50
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9236519C_9856_A368_41E3_09A0668DADF8, this.camera_ABE4B1D6_A4EE_A2B6_41DB_44B508096293); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_97404C7F_985E_A1A8_41C0_3813D925224F",
 "data": {
  "label": "Arrow 02 Left"
 }
},
{
 "hfov": 19.5,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_tcap0.png",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_tcap0",
 "distance": 50
},
{
 "items": [
  {
   "media": "this.album_8FCB624B_98AE_A1E8_41DE_EF1A9A8B482F_0",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 7000,
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.40",
     "zoomFactor": 1
    },
    "easing": "linear",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_to_height"
   }
  },
  {
   "media": "this.album_8FCB624B_98AE_A1E8_41DE_EF1A9A8B482F_1",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 7000,
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.46",
     "class": "PhotoCameraPosition",
     "y": "0.29",
     "zoomFactor": 1
    },
    "easing": "linear",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_to_height"
   }
  },
  {
   "media": "this.album_8FCB624B_98AE_A1E8_41DE_EF1A9A8B482F_2",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 7000,
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.47",
     "class": "PhotoCameraPosition",
     "y": "0.39",
     "zoomFactor": 1
    },
    "easing": "linear",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "scaleMode": "fit_to_height"
   }
  }
 ],
 "id": "album_8FCB624B_98AE_A1E8_41DE_EF1A9A8B482F_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "maps": [
  {
   "hfov": 13.79,
   "yaw": 179.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_1_HS_0_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.81
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_8957C98C_986B_6368_41E2_236475CBCD9F",
   "pitch": -1.81,
   "yaw": 179.21,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.79,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F, this.camera_ABDEC206_A4EE_A196_41D5_5EFA9500AE15); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_8925C23B_986F_A1A8_41DC_2A07E7A4B39F",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "maps": [
  {
   "hfov": 5.54,
   "yaw": 1.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.02
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_8956398D_986B_6368_41D7_5B8DC793FD82",
   "pitch": -10.02,
   "yaw": 1.38,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.54,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9235B759_9856_AFE8_41B2_7E3C413BC607, this.camera_ABAEA206_A4EE_A196_41D0_C743544BFE8A); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_89277927_986E_A358_41DD_7A0785FA88F2",
 "data": {
  "label": "Circle Arrow 02"
 }
},
{
 "hfov": 19.5,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_tcap0.png",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_9235B00F_9856_A168_41C5_AE0190458C7E_tcap0",
 "distance": 50
},
{
 "maps": [
  {
   "hfov": 11.03,
   "yaw": 76.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_1_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.7
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_8957B98A_986B_6368_41BE_7D4FCD8332F1",
   "pitch": -11.7,
   "yaw": 76.57,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.03,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9235B00F_9856_A168_41C5_AE0190458C7E, this.camera_AB560265_A4EE_A18A_41C0_2E0F2B42C8F2); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_882A0C28_9856_E1A8_41D1_CDE6C0DF4DE0",
 "data": {
  "label": "Circle 02b"
 }
},
{
 "maps": [
  {
   "hfov": 13.99,
   "yaw": -123.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_1_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.51
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_8957F98B_986B_6368_41C3_6226E6C1E5FE",
   "pitch": -19.51,
   "yaw": -123.44,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.99,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9236519C_9856_A368_41E3_09A0668DADF8, this.camera_AB709246_A4EE_A189_41C0_C3EC916981C4); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_88AAC558_9856_A3E8_41DC_E054B52E3C39",
 "data": {
  "label": "Circle 02b"
 }
},
{
 "maps": [
  {
   "hfov": 6.93,
   "yaw": 170.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_1_HS_2_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.89
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_8956398B_986B_6368_41C2_62176F154FF8",
   "pitch": -0.89,
   "yaw": 170.23,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.93,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_92367A33_9857_61B8_41E1_2B431717D4D7, this.camera_AB468255_A4EE_A18A_41DC_5FC67665478D); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_880239E1_9869_A2D8_41B2_4BA78610103A",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "maps": [
  {
   "hfov": 8.1,
   "yaw": -161.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.09
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_8956798B_986B_6368_41CC_2E6AD33C97E5",
   "pitch": 0.09,
   "yaw": -161.26,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.1,
   "distance": 50
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_888127AC_9869_AEA8_41C9_F0F003A5F7C3",
 "data": {
  "label": "Arrow 02 Right"
 }
},
{
 "hfov": 19.5,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_tcap0.png",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_tcap0",
 "distance": 50
},
{
 "maps": [
  {
   "hfov": 33.77,
   "yaw": 7.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0_HS_6_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -40.34
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_86F7FEBE_9869_BEA8_41B9_4963C61ED2B5",
   "pitch": -40.34,
   "yaw": 7.14,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 33.77,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.setMediaBehaviour(this.playList_AA3371B7_A4EE_A2F7_41A6_340D34A9FAD1, 0, this.panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_8281D401_9869_A158_41E1_D0EAC30480C2",
 "data": {
  "label": "Circle Arrow 03a Left-Up"
 }
},
{
 "maps": [
  {
   "hfov": 19.05,
   "yaw": -24.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_1_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.17
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_8954698A_986B_6368_41E0_1FF96EB537C4",
   "pitch": -18.17,
   "yaw": -24.94,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.05,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F, this.camera_ABC861F7_A4EE_A277_41B9_D3E2C591AFEA); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_978F588E_9859_A168_41DA_D1657CFF2B04",
 "data": {
  "label": "Circle 02b"
 }
},
{
 "maps": [
  {
   "hfov": 13.3,
   "yaw": 50.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_1_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.94
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_8954D98A_986B_6368_41E1_679C521BE9E9",
   "pitch": -8.94,
   "yaw": 50.35,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.3,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_92367A33_9857_61B8_41E1_2B431717D4D7, this.camera_ABFA31E7_A4EE_A297_41D1_6192EB7DC61A); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_88D5861D_9859_A168_41DC_9C7B0CCC8748",
 "data": {
  "label": "Circle 02b"
 }
},
{
 "maps": [
  {
   "hfov": 4.49,
   "yaw": -18.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_1_HS_2_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.81
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_8957198A_986B_6368_41B2_04721754FF81",
   "pitch": -5.81,
   "yaw": -18.5,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.49,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_97B051D3_9856_A2F8_41D3_B3D87483988F",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "maps": [
  {
   "hfov": 7.92,
   "yaw": 74.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.46
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_8957498A_986B_6368_41D7_7CEA2FDD51D3",
   "pitch": 6.46,
   "yaw": 74.88,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.92,
   "distance": 50
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0, this.camera_ABF431D6_A4EE_A2B6_4167_7CEB7B848B4F); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_979D34E9_9857_62A8_41D0_B27F4B676AE7",
 "data": {
  "label": "Arrow 02 Right"
 }
},
{
 "hfov": 19.5,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_tcap0.png",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_9236519C_9856_A368_41E3_09A0668DADF8_tcap0",
 "distance": 50
},
{
 "maps": [
  {
   "hfov": 12.62,
   "yaw": -124.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.02
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_8955A989_986B_6368_41DC_AC3098CA5259",
   "pitch": -14.02,
   "yaw": -124.76,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.62,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9236519C_9856_A368_41E3_09A0668DADF8, this.camera_AB924236_A4EE_A189_4195_ACB4D23A3FE4); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_96C81136_9859_A3B8_41D1_5CF781483956",
 "data": {
  "label": "Circle 01b"
 }
},
{
 "maps": [
  {
   "hfov": 9.47,
   "yaw": -165.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.8
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_8955F989_986B_6368_41A2_70F9FC293F13",
   "pitch": -13.8,
   "yaw": -165.41,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.47,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0, this.camera_AB8C5226_A4EE_A189_41E1_74FA789B1D63); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_97703BFC_9859_66A8_41BA_66290630F09E",
 "data": {
  "label": "Circle 01b"
 }
},
{
 "maps": [
  {
   "hfov": 4.83,
   "yaw": -87.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_1_HS_2_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.32
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_8954298A_986B_6368_41D2_FCB09002ADC5",
   "pitch": -3.32,
   "yaw": -87.66,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.83,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F, this.camera_AB60423B_A4EE_A1FF_41D4_C8057E6F55CF); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_96A403ED_985B_A6A8_41BD_4FB04F2E458F",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "hfov": 19.5,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_tcap0.png",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_92367A33_9857_61B8_41E1_2B431717D4D7_tcap0",
 "distance": 50
},
{
 "maps": [
  {
   "hfov": 6.87,
   "yaw": 22.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.11
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_8E20C308_9877_6768_41C4_44BA43F0F32E",
   "pitch": -4.11,
   "yaw": 22.7,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.87,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9235B00F_9856_A168_41C5_AE0190458C7E, this.camera_AB247265_A4EE_A18A_41C0_A6EDCA4721ED); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_8A77AFC0_9869_BED8_41C4_D065417C9DE2",
 "data": {
  "label": "Circle 02b"
 }
},
{
 "maps": [
  {
   "hfov": 2.97,
   "yaw": 22.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0_HS_1_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.41
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_8E203308_9877_6768_41C7_9CC0FB202394",
   "pitch": 0.41,
   "yaw": 22.44,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.97,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_8A2964CD_9869_A2E8_41D7_777617D23E56",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "hfov": 19.5,
 "inertia": false,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_tcap0.png",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_tcap0",
 "distance": 50
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_894B0987_986B_6358_41D5_47C720FF49CB",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "levels": [
  {
   "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_894A4988_986B_6368_41CB_250DEDDCA8FE",
 "frameCount": 20,
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "levels": [
  {
   "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_894A8989_986B_6368_41D6_8CD0EEEEA003",
 "frameCount": 20,
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_1_HS_2_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 570
  }
 ],
 "id": "AnimatedImageResource_894AF989_986B_6368_41E0_3A9D1C73EA2E",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_1_HS_0_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_8957C98C_986B_6368_41E2_236475CBCD9F",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_8956398D_986B_6368_41D7_5B8DC793FD82",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_8957B98A_986B_6368_41BE_7D4FCD8332F1",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_8957F98B_986B_6368_41C3_6226E6C1E5FE",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_1_HS_2_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_8956398B_986B_6368_41C2_62176F154FF8",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_1_HS_3_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 570
  }
 ],
 "id": "AnimatedImageResource_8956798B_986B_6368_41CC_2E6AD33C97E5",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0_HS_6_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "id": "AnimatedImageResource_86F7FEBE_9869_BEA8_41B9_4963C61ED2B5",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_8954698A_986B_6368_41E0_1FF96EB537C4",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_8954D98A_986B_6368_41E1_679C521BE9E9",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_1_HS_2_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_8957198A_986B_6368_41B2_04721754FF81",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_1_HS_3_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 570
  }
 ],
 "id": "AnimatedImageResource_8957498A_986B_6368_41D7_7CEA2FDD51D3",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "levels": [
  {
   "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_8955A989_986B_6368_41DC_AC3098CA5259",
 "frameCount": 20,
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "levels": [
  {
   "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_8955F989_986B_6368_41A2_70F9FC293F13",
 "frameCount": 20,
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_1_HS_2_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_8954298A_986B_6368_41D2_FCB09002ADC5",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_8E20C308_9877_6768_41C4_44BA43F0F32E",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0_HS_1_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_8E203308_9877_6768_41C7_9CC0FB202394",
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41
}],
 "paddingRight": 0,
 "data": {
  "name": "Player470"
 }
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
