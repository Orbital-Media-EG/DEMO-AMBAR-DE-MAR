(function(){
    var script = {
 "layout": "absolute",
 "start": "this.init()",
 "buttonToggleMute": "this.IconButton_8154DD90_9859_6378_41E2_591F83DFA336",
 "paddingBottom": 0,
 "children": [
  "this.IconButton_806B4BCF_98BB_A6E7_41D7_AC9E65E0AA4D",
  "this.MainViewer",
  "this.IconButton_8154DD90_9859_6378_41E2_591F83DFA336",
  "this.IconButton_81C9293A_9856_A3A8_41BC_085BBC37D3A0"
 ],
 "height": "100%",
 "id": "rootPlayer",
 "desktopMipmappingEnabled": false,
 "width": "100%",
 "minHeight": 20,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "definitions": [{
 "items": [
  {
   "begin": "this.MainViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_8B1BFAAA_987A_E6A8_41DB_3F0861E5A7FC",
   "player": "this.MainViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_8491539F_9857_E768_41D9_9E4870304391",
 "class": "PlayList"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -160.1,
  "class": "PanoramaCameraPosition",
  "pitch": 3.54
 },
 "id": "panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_camera",
 "automaticZoomSpeed": 10
},
{
 "mouseControlMode": "drag_acceleration",
 "class": "PanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "gyroscopeVerticalDraggingEnabled": true,
 "displayPlaybackBar": true,
 "id": "MainViewerPanoramaPlayer",
 "viewerArea": "this.MainViewer"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -129.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_826E7482_9857_E158_41CF_B99765FB7AAB",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 29.79,
  "class": "PanoramaCameraPosition",
  "pitch": 11.38
 },
 "id": "panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -105.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8279C46E_9857_E1A8_41D6_E39E43C955B1",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -14.82,
  "class": "PanoramaCameraPosition",
  "pitch": -36.07
 },
 "id": "panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_camera",
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
 "id": "playList_8491339F_9857_E768_41DA_826754272FF3",
 "class": "PlayList"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -52.28,
  "class": "PanoramaCameraPosition",
  "pitch": 10.05
 },
 "id": "panorama_9236519C_9856_A368_41E3_09A0668DADF8_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 75.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_848DB3BB_9857_E6A8_41E1_C253F0C412E5",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "label": "1 (1)",
 "id": "panorama_93DEAB71_9857_67B8_41D2_958B1F65256E",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_95616918_985A_E368_41B5_8AF3ACDC8ED2",
  "this.panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_tcap0"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "distance": 1,
   "yaw": -14.84,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0",
   "backwardYaw": -104.79
  }
 ],
 "hfov": 360,
 "hfovMin": "135%",
 "partial": false
},
{
 "class": "Photo",
 "label": "IMG_20260416_144214370",
 "id": "album_8FCB624B_98AE_A1E8_41DE_EF1A9A8B482F_0",
 "duration": 7000,
 "width": 3072,
 "thumbnailUrl": "media/album_8FCB624B_98AE_A1E8_41DE_EF1A9A8B482F_0_t.jpg",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_8FCB624B_98AE_A1E8_41DE_EF1A9A8B482F_0.jpg"
   }
  ]
 },
 "height": 4080
},
{
 "class": "Photo",
 "label": "IMG_20260416_144246429",
 "id": "album_8FCB624B_98AE_A1E8_41DE_EF1A9A8B482F_2",
 "duration": 7000,
 "width": 3072,
 "thumbnailUrl": "media/album_8FCB624B_98AE_A1E8_41DE_EF1A9A8B482F_2_t.jpg",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_8FCB624B_98AE_A1E8_41DE_EF1A9A8B482F_2.jpg"
   }
  ]
 },
 "height": 4080
},
{
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "class": "Map",
 "fieldOfViewOverlayRadiusScale": 0.3,
 "label": "IMG_20260416_144246429",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "maximumZoomFactor": 1.2,
 "initialZoomFactor": 1,
 "fieldOfViewOverlayOutsideOpacity": 0,
 "thumbnailUrl": "media/map_8B712E1E_987A_E169_41E1_9CE189ED0511_t.jpg",
 "minimumZoomFactor": 0.5,
 "id": "map_8B712E1E_987A_E169_41E1_9CE189ED0511",
 "image": {
  "class": "ImageResource",
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
  ]
 },
 "width": 3072,
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "scaleMode": "fit_inside",
 "height": 4080
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 121.24,
  "class": "PanoramaCameraPosition",
  "pitch": -3.57
 },
 "id": "panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_camera",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "label": "4",
 "id": "panorama_9236519C_9856_A368_41E3_09A0668DADF8",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_978F588E_9859_A168_41DA_D1657CFF2B04",
  "this.overlay_88D5861D_9859_A168_41DC_9C7B0CCC8748",
  "this.overlay_97B051D3_9856_A2F8_41D3_B3D87483988F",
  "this.overlay_979D34E9_9857_62A8_41D0_B27F4B676AE7",
  "this.panorama_9236519C_9856_A368_41E3_09A0668DADF8_tcap0"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "distance": 1,
   "yaw": 50.35,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_92367A33_9857_61B8_41E1_2B431717D4D7",
   "backwardYaw": -124.76
  },
  {
   "distance": 1,
   "yaw": 74.88,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0",
   "backwardYaw": 63.87
  },
  {
   "distance": 1,
   "yaw": -24.94,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F",
   "backwardYaw": -123.44
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9235B00F_9856_A168_41C5_AE0190458C7E"
  }
 ],
 "hfov": 360,
 "hfovMin": "135%",
 "partial": false
},
{
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "class": "Map",
 "fieldOfViewOverlayRadiusScale": 0.3,
 "label": "IMG_20260416_144214370",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "maximumZoomFactor": 1.2,
 "initialZoomFactor": 1,
 "fieldOfViewOverlayOutsideOpacity": 0,
 "thumbnailUrl": "media/map_8B4C6731_987A_EFB8_41B0_91CFB0AD1650_t.jpg",
 "minimumZoomFactor": 0.5,
 "id": "map_8B4C6731_987A_EFB8_41B0_91CFB0AD1650",
 "image": {
  "class": "ImageResource",
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
  ]
 },
 "width": 3072,
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "scaleMode": "fit_inside",
 "height": 4080
},
{
 "hfovMax": 130,
 "label": "3",
 "id": "panorama_92367A33_9857_61B8_41E1_2B431717D4D7",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_96C81136_9859_A3B8_41D1_5CF781483956",
  "this.overlay_97703BFC_9859_66A8_41BA_66290630F09E",
  "this.overlay_96A403ED_985B_A6A8_41BD_4FB04F2E458F",
  "this.panorama_92367A33_9857_61B8_41E1_2B431717D4D7_tcap0"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "distance": 1,
   "yaw": -124.76,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9236519C_9856_A368_41E3_09A0668DADF8",
   "backwardYaw": 50.35
  },
  {
   "distance": 1,
   "yaw": -87.66,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F",
   "backwardYaw": 170.23
  },
  {
   "distance": 1,
   "yaw": -165.41,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0",
   "backwardYaw": 106.95
  }
 ],
 "hfov": 360,
 "hfovMin": "135%",
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -73.05,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_82508494_9857_E178_41C7_4185D78E5574",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 56.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8462C3F0_9857_E6B8_41D9_766D87057AD1",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "label": "2",
 "id": "panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_963C92C6_9859_E6D8_4163_68B7CE5DE0FC",
  "this.overlay_966E1B14_985F_6778_41B4_1634FF645B06",
  "this.overlay_97404C7F_985E_A1A8_41C0_3813D925224F",
  "this.panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_tcap0"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "distance": 1,
   "yaw": -104.79,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_93DEAB71_9857_67B8_41D2_958B1F65256E",
   "backwardYaw": -14.84
  },
  {
   "distance": 1,
   "yaw": 63.87,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9236519C_9856_A368_41E3_09A0668DADF8",
   "backwardYaw": 74.88
  },
  {
   "distance": 1,
   "yaw": 106.95,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_92367A33_9857_61B8_41E1_2B431717D4D7",
   "backwardYaw": -165.41
  }
 ],
 "hfov": 360,
 "hfovMin": "135%",
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -6.59,
  "class": "PanoramaCameraPosition",
  "pitch": -12.13
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
 "id": "playList_8492A39A_9857_E768_41E1_B8D9B1D61CA4",
 "class": "PlayList"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -0.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_84681402_9857_E158_41DC_A8C1D7446E63",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 55.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_847563D0_9857_E6F8_41C0_3E263DB289A6",
 "automaticZoomSpeed": 10
},
{
 "class": "Photo",
 "label": "IMG_20260416_144233280",
 "id": "album_8FCB624B_98AE_A1E8_41DE_EF1A9A8B482F_1",
 "duration": 7000,
 "width": 3072,
 "thumbnailUrl": "media/album_8FCB624B_98AE_A1E8_41DE_EF1A9A8B482F_1_t.jpg",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_8FCB624B_98AE_A1E8_41DE_EF1A9A8B482F_1.jpg"
   }
  ]
 },
 "height": 4080
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 155.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_845C440B_9857_E168_41E1_F242A1D67551",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -157.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_824264A6_9857_E158_41BE_575AF1DA5FED",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -103.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8259A49D_9857_E168_41D9_D2D972200468",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -116.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_847B43E2_9857_E6D8_41E2_BEF5EBBD0461",
 "automaticZoomSpeed": 10
},
{
 "class": "Photo",
 "label": "IMG_20260416_144233280",
 "id": "photo_8EC0F5D5_98D6_A2F8_41CA_CEA4BC4C9579",
 "duration": 5000,
 "width": 3072,
 "thumbnailUrl": "media/photo_8EC0F5D5_98D6_A2F8_41CA_CEA4BC4C9579_t.jpg",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_8EC0F5D5_98D6_A2F8_41CA_CEA4BC4C9579.jpg"
   }
  ]
 },
 "height": 4080
},
{
 "items": [
  {
   "media": "this.album_8FCB624B_98AE_A1E8_41DE_EF1A9A8B482F",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "playList_8493C39A_9857_E768_41DD_C90DECE265EC",
 "class": "PlayList"
},
{
 "hfovMax": 130,
 "label": "6",
 "id": "panorama_9235B00F_9856_A168_41C5_AE0190458C7E",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_8925C23B_986F_A1A8_41DC_2A07E7A4B39F",
  "this.overlay_89277927_986E_A358_41DD_7A0785FA88F2",
  "this.panorama_9235B00F_9856_A168_41C5_AE0190458C7E_tcap0"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "distance": 1,
   "yaw": 179.21,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F",
   "backwardYaw": 76.57
  },
  {
   "distance": 1,
   "yaw": 1.38,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9235B759_9856_AFE8_41B2_7E3C413BC607",
   "backwardYaw": 22.7
  }
 ],
 "hfov": 360,
 "hfovMin": "135%",
 "partial": false
},
{
 "id": "MainViewerMapPlayer",
 "class": "MapPlayer",
 "viewerArea": "this.MainViewer",
 "movementMode": "constrained"
},
{
 "hfovMax": 130,
 "label": "5",
 "id": "panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_882A0C28_9856_E1A8_41D1_CDE6C0DF4DE0",
  "this.overlay_88AAC558_9856_A3E8_41DC_E054B52E3C39",
  "this.overlay_880239E1_9869_A2D8_41B2_4BA78610103A",
  "this.overlay_888127AC_9869_AEA8_41C9_F0F003A5F7C3",
  "this.panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_tcap0",
  "this.overlay_8281D401_9869_A158_41E1_D0EAC30480C2"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "distance": 1,
   "yaw": 76.57,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9235B00F_9856_A168_41C5_AE0190458C7E",
   "backwardYaw": 179.21
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0"
  },
  {
   "distance": 1,
   "yaw": -123.44,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9236519C_9856_A368_41E3_09A0668DADF8",
   "backwardYaw": -24.94
  },
  {
   "distance": 1,
   "yaw": 170.23,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_92367A33_9857_61B8_41E1_2B431717D4D7",
   "backwardYaw": -87.66
  }
 ],
 "hfov": 360,
 "hfovMin": "135%",
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 92.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_82754454_9857_E1F8_41B8_11F938C7BEBB",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "label": "7",
 "id": "panorama_9235B759_9856_AFE8_41B2_7E3C413BC607",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "rowCount": 5,
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_8A77AFC0_9869_BED8_41C4_D065417C9DE2",
  "this.overlay_8A2964CD_9869_A2E8_41D7_777617D23E56",
  "this.panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_tcap0"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F"
  },
  {
   "distance": 1,
   "yaw": 22.7,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9235B00F_9856_A168_41C5_AE0190458C7E",
   "backwardYaw": 1.38
  }
 ],
 "hfov": 360,
 "hfovMin": "135%",
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 14.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_82633478_9857_E1A8_41D0_35EB55BAEBA2",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0.66,
  "class": "PanoramaCameraPosition",
  "pitch": 9.92
 },
 "id": "panorama_92367A33_9857_61B8_41E1_2B431717D4D7_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -9.77,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8268A48B_9857_E168_41D9_AE37284F8ED9",
 "automaticZoomSpeed": 10
},
{
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "class": "Map",
 "fieldOfViewOverlayRadiusScale": 0.3,
 "label": "IMG_20260416_144233280",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "maximumZoomFactor": 1.2,
 "initialZoomFactor": 1,
 "fieldOfViewOverlayOutsideOpacity": 0,
 "thumbnailUrl": "media/map_8B1BFAAA_987A_E6A8_41DB_3F0861E5A7FC_t.jpg",
 "minimumZoomFactor": 0.5,
 "id": "map_8B1BFAAA_987A_E6A8_41DB_3F0861E5A7FC",
 "image": {
  "class": "ImageResource",
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
  ]
 },
 "width": 3072,
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "scaleMode": "fit_inside",
 "height": 4080
},
{
 "class": "PhotoAlbum",
 "label": "Album de Fotos IMG_20260416_144214370",
 "id": "album_8FCB624B_98AE_A1E8_41DE_EF1A9A8B482F",
 "thumbnailUrl": "media/album_8FCB624B_98AE_A1E8_41DE_EF1A9A8B482F_t.png",
 "playList": "this.album_8FCB624B_98AE_A1E8_41DE_EF1A9A8B482F_AlbumPlayList"
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
 "id": "playList_8491E3A0_9857_E758_41E2_51B63F5B6117",
 "class": "PlayList"
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
 "id": "playList_8491039F_9857_E768_41D8_6B0CDBCC8378",
 "class": "PlayList"
},
{
 "autoplay": true,
 "loop": true,
 "class": "MediaAudio",
 "data": {
  "label": "iced coffee \u2615\ufe0f jazz lofi vibes (no copyright music  vlog music  royalty free music)"
 },
 "id": "audio_816D5103_985E_E358_41E2_E981D2B04C43",
 "audio": {
  "mp3Url": "media/audio_816D5103_985E_E358_41E2_E981D2B04C43.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_816D5103_985E_E358_41E2_E981D2B04C43.ogg"
 }
},
{
 "items": [
  {
   "media": "this.panorama_93DEAB71_9857_67B8_41D2_958B1F65256E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_camera"
  },
  {
   "media": "this.panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_camera"
  },
  {
   "media": "this.panorama_92367A33_9857_61B8_41E1_2B431717D4D7",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_92367A33_9857_61B8_41E1_2B431717D4D7_camera"
  },
  {
   "media": "this.panorama_9236519C_9856_A368_41E3_09A0668DADF8",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9236519C_9856_A368_41E3_09A0668DADF8_camera"
  },
  {
   "media": "this.panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_camera"
  },
  {
   "media": "this.panorama_9235B00F_9856_A168_41C5_AE0190458C7E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9235B00F_9856_A168_41C5_AE0190458C7E_camera"
  },
  {
   "media": "this.panorama_9235B759_9856_AFE8_41B2_7E3C413BC607",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 165.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_827D0465_9857_E1D8_41D7_3668B4BD7D14",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -178.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_8272945D_9857_E1E8_41D8_C87C02158CA8",
 "automaticZoomSpeed": 10
},
{
 "id": "MainViewerPhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer",
 "viewerArea": "this.MainViewer"
},
{
 "class": "Photo",
 "label": "IMG_20260416_144246429",
 "id": "photo_8E8DB973_98D6_A3B8_41DF_288C886002F7",
 "duration": 5000,
 "width": 3072,
 "thumbnailUrl": "media/photo_8E8DB973_98D6_A3B8_41DF_288C886002F7_t.jpg",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_8E8DB973_98D6_A3B8_41DF_288C886002F7.jpg"
   }
  ]
 },
 "height": 4080
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
 "id": "playList_8491A3A0_9857_E758_41CC_90E1534501DF",
 "class": "PlayList"
},
{
 "paddingBottom": 0,
 "id": "IconButton_8154DD90_9859_6378_41E2_591F83DFA336",
 "width": 40,
 "minHeight": 0,
 "right": "7.63%",
 "paddingLeft": 0,
 "pressedIconURL": "skin/IconButton_8154DD90_9859_6378_41E2_591F83DFA336_pressed.png",
 "class": "IconButton",
 "verticalAlign": "middle",
 "minWidth": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "top": "4.46%",
 "borderRadius": 0,
 "mode": "toggle",
 "borderSize": 0,
 "paddingTop": 0,
 "height": 40,
 "paddingRight": 0,
 "propagateClick": false,
 "data": {
  "name": "Button49930"
 },
 "horizontalAlign": "center",
 "transparencyActive": true,
 "iconURL": "skin/IconButton_8154DD90_9859_6378_41E2_591F83DFA336.png",
 "cursor": "hand"
},
{
 "paddingBottom": 0,
 "id": "IconButton_806B4BCF_98BB_A6E7_41D7_AC9E65E0AA4D",
 "width": 38,
 "minHeight": 0,
 "right": "2.03%",
 "paddingLeft": 0,
 "pressedIconURL": "skin/IconButton_806B4BCF_98BB_A6E7_41D7_AC9E65E0AA4D_pressed.png",
 "class": "IconButton",
 "verticalAlign": "middle",
 "minWidth": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_806B4BCF_98BB_A6E7_41D7_AC9E65E0AA4D_rollover.png",
 "bottom": "0%",
 "borderRadius": 0,
 "mode": "push",
 "borderSize": 0,
 "paddingTop": 0,
 "height": 38,
 "paddingRight": 0,
 "propagateClick": false,
 "data": {
  "name": "Button4076"
 },
 "horizontalAlign": "center",
 "transparencyActive": false,
 "iconURL": "skin/IconButton_806B4BCF_98BB_A6E7_41D7_AC9E65E0AA4D.png",
 "show": "this.playGlobalAudio(this.audio_816D5103_985E_E358_41E2_E981D2B04C43)",
 "cursor": "hand"
},
{
 "paddingBottom": 0,
 "id": "MainViewer",
 "toolTipBackgroundColor": "#F6F6F6",
 "width": "100%",
 "toolTipFontColor": "#606060",
 "toolTipShadowBlurRadius": 3,
 "transitionMode": "blending",
 "progressBorderColor": "#000000",
 "playbackBarHeadShadow": true,
 "paddingLeft": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadHeight": 15,
 "toolTipTextShadowColor": "#000000",
 "class": "ViewerArea",
 "vrPointerSelectionTime": 2000,
 "vrPointerSelectionColor": "#FF6600",
 "toolTipDisplayTime": 600,
 "playbackBarProgressBorderColor": "#000000",
 "progressBackgroundOpacity": 1,
 "firstTransitionDuration": 0,
 "playbackBarOpacity": 1,
 "toolTipShadowOpacity": 1,
 "progressBottom": 0,
 "toolTipShadowSpread": 0,
 "progressHeight": 10,
 "borderSize": 0,
 "toolTipOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "progressBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipTextShadowOpacity": 0,
 "height": "100%",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "paddingRight": 0,
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBorderSize": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBorderRadius": 0,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBorderSize": 0,
 "playbackBarBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeight": 10,
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadWidth": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarRight": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBarBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "minHeight": 50,
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingLeft": 6,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "progressBarBorderSize": 0,
 "playbackBarHeadOpacity": 1,
 "minWidth": 100,
 "shadow": false,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBarBorderRadius": 0,
 "borderRadius": 0,
 "toolTipPaddingBottom": 4,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "paddingTop": 0,
 "toolTipPaddingRight": 6,
 "toolTipFontStyle": "normal",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "transitionDuration": 500,
 "toolTipBorderSize": 1,
 "toolTipShadowColor": "#333333",
 "progressBackgroundColorDirection": "vertical",
 "propagateClick": false,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "toolTipFontFamily": "Arial",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowVerticalLength": 0,
 "playbackBarBottom": 5,
 "progressOpacity": 1,
 "progressRight": 0,
 "playbackBarLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "data": {
  "name": "Main Viewer"
 },
 "toolTipPaddingTop": 4
},
{
 "paddingBottom": 0,
 "id": "IconButton_81C9293A_9856_A3A8_41BC_085BBC37D3A0",
 "width": 53,
 "minHeight": 1,
 "right": "12.15%",
 "paddingLeft": 0,
 "class": "IconButton",
 "verticalAlign": "middle",
 "minWidth": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "top": "3.68%",
 "borderRadius": 0,
 "mode": "push",
 "borderSize": 0,
 "paddingTop": 0,
 "height": 52,
 "paddingRight": 0,
 "propagateClick": false,
 "maxWidth": 53,
 "data": {
  "name": "IconButton8401"
 },
 "horizontalAlign": "center",
 "maxHeight": 52,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_81C9293A_9856_A3A8_41BC_085BBC37D3A0.png",
 "cursor": "hand",
 "click": "this.openLink('https://www.facebook.com/ambardelmarchetumal#', '_blank')"
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_894B0987_986B_6358_41D5_47C720FF49CB",
   "yaw": -14.84,
   "pitch": -4.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.74
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -14.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_1_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.29,
   "hfov": 6.74
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0, this.camera_848DB3BB_9857_E6A8_41E1_C253F0C412E5); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_95616918_985A_E368_41B5_8AF3ACDC8ED2",
 "data": {
  "label": "Circle 02b"
 }
},
{
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "hfov": 19.5,
 "rotate": false,
 "id": "panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_tcap0.png",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8954698A_986B_6368_41E0_1FF96EB537C4",
   "yaw": -24.94,
   "pitch": -18.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 19.05
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -24.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_1_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.17,
   "hfov": 19.05
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F, this.camera_8462C3F0_9857_E6B8_41D9_766D87057AD1); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_978F588E_9859_A168_41DA_D1657CFF2B04",
 "data": {
  "label": "Circle 02b"
 }
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8954D98A_986B_6368_41E1_679C521BE9E9",
   "yaw": 50.35,
   "pitch": -8.94,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 13.3
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 50.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_1_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.94,
   "hfov": 13.3
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_92367A33_9857_61B8_41E1_2B431717D4D7, this.camera_847563D0_9857_E6F8_41C0_3E263DB289A6); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_88D5861D_9859_A168_41DC_9C7B0CCC8748",
 "data": {
  "label": "Circle 02b"
 }
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8957198A_986B_6368_41B2_04721754FF81",
   "yaw": -18.5,
   "pitch": -5.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 4.49
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -18.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_1_HS_2_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.81,
   "hfov": 4.49
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_97B051D3_9856_A2F8_41D3_B3D87483988F",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8957498A_986B_6368_41D7_7CEA2FDD51D3",
   "yaw": 74.88,
   "pitch": 6.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 7.92
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 74.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 6.46,
   "hfov": 7.92
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0, this.camera_847B43E2_9857_E6D8_41E2_BEF5EBBD0461); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_979D34E9_9857_62A8_41D0_B27F4B676AE7",
 "data": {
  "label": "Arrow 02 Right"
 }
},
{
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "hfov": 19.5,
 "rotate": false,
 "id": "panorama_9236519C_9856_A368_41E3_09A0668DADF8_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_tcap0.png",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8955A989_986B_6368_41DC_AC3098CA5259",
   "yaw": -124.76,
   "pitch": -14.02,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 12.62
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -124.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.02,
   "hfov": 12.62
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9236519C_9856_A368_41E3_09A0668DADF8, this.camera_826E7482_9857_E158_41CF_B99765FB7AAB); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_96C81136_9859_A3B8_41D1_5CF781483956",
 "data": {
  "label": "Circle 01b"
 }
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8955F989_986B_6368_41A2_70F9FC293F13",
   "yaw": -165.41,
   "pitch": -13.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 9.47
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -165.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.8,
   "hfov": 9.47
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0, this.camera_82508494_9857_E178_41C7_4185D78E5574); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_97703BFC_9859_66A8_41BA_66290630F09E",
 "data": {
  "label": "Circle 01b"
 }
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8954298A_986B_6368_41D2_FCB09002ADC5",
   "yaw": -87.66,
   "pitch": -3.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 4.83
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -87.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_1_HS_2_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.32,
   "hfov": 4.83
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F, this.camera_8268A48B_9857_E168_41D9_AE37284F8ED9); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_96A403ED_985B_A6A8_41BD_4FB04F2E458F",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "hfov": 19.5,
 "rotate": false,
 "id": "panorama_92367A33_9857_61B8_41E1_2B431717D4D7_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_tcap0.png",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_894A4988_986B_6368_41CB_250DEDDCA8FE",
   "yaw": 106.95,
   "pitch": -16.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 14.83
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 106.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.64,
   "hfov": 14.83
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_92367A33_9857_61B8_41E1_2B431717D4D7, this.camera_82633478_9857_E1A8_41D0_35EB55BAEBA2); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_963C92C6_9859_E6D8_4163_68B7CE5DE0FC",
 "data": {
  "label": "Circle 01b"
 }
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_894A8989_986B_6368_41D6_8CD0EEEEA003",
   "yaw": -104.79,
   "pitch": -11.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 15.15
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -104.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.84,
   "hfov": 15.15
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_93DEAB71_9857_67B8_41D2_958B1F65256E, this.camera_827D0465_9857_E1D8_41D7_3668B4BD7D14); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_966E1B14_985F_6778_41B4_1634FF645B06",
 "data": {
  "label": "Circle 01b"
 }
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_894AF989_986B_6368_41E0_3A9D1C73EA2E",
   "yaw": 63.87,
   "pitch": 9.15,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 10.16
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 63.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 9.15,
   "hfov": 10.16
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9236519C_9856_A368_41E3_09A0668DADF8, this.camera_8279C46E_9857_E1A8_41D6_E39E43C955B1); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_97404C7F_985E_A1A8_41C0_3813D925224F",
 "data": {
  "label": "Arrow 02 Left"
 }
},
{
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "hfov": 19.5,
 "rotate": false,
 "id": "panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_tcap0.png",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8957C98C_986B_6368_41E2_236475CBCD9F",
   "yaw": 179.21,
   "pitch": -1.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 13.79
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 179.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_1_HS_0_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.81,
   "hfov": 13.79
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F, this.camera_8259A49D_9857_E168_41D9_D2D972200468); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_8925C23B_986F_A1A8_41DC_2A07E7A4B39F",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8956398D_986B_6368_41D7_5B8DC793FD82",
   "yaw": 1.38,
   "pitch": -10.02,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 5.54
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 1.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.02,
   "hfov": 5.54
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9235B759_9856_AFE8_41B2_7E3C413BC607, this.camera_824264A6_9857_E158_41BE_575AF1DA5FED); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_89277927_986E_A358_41DD_7A0785FA88F2",
 "data": {
  "label": "Circle Arrow 02"
 }
},
{
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "hfov": 19.5,
 "rotate": false,
 "id": "panorama_9235B00F_9856_A168_41C5_AE0190458C7E_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_tcap0.png",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8957B98A_986B_6368_41BE_7D4FCD8332F1",
   "yaw": 76.57,
   "pitch": -11.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 11.03
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 76.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_1_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.7,
   "hfov": 11.03
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9235B00F_9856_A168_41C5_AE0190458C7E, this.camera_84681402_9857_E158_41DC_A8C1D7446E63); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_882A0C28_9856_E1A8_41D1_CDE6C0DF4DE0",
 "data": {
  "label": "Circle 02b"
 }
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8957F98B_986B_6368_41C3_6226E6C1E5FE",
   "yaw": -123.44,
   "pitch": -19.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 13.99
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -123.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_1_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.51,
   "hfov": 13.99
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9236519C_9856_A368_41E3_09A0668DADF8, this.camera_845C440B_9857_E168_41E1_F242A1D67551); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_88AAC558_9856_A3E8_41DC_E054B52E3C39",
 "data": {
  "label": "Circle 02b"
 }
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8956398B_986B_6368_41C2_62176F154FF8",
   "yaw": 170.23,
   "pitch": -0.89,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.93
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 170.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_1_HS_2_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.89,
   "hfov": 6.93
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_92367A33_9857_61B8_41E1_2B431717D4D7, this.camera_82754454_9857_E1F8_41B8_11F938C7BEBB); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_880239E1_9869_A2D8_41B2_4BA78610103A",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8956798B_986B_6368_41CC_2E6AD33C97E5",
   "yaw": -161.26,
   "pitch": 0.09,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 8.1
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -161.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.09,
   "hfov": 8.1
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_888127AC_9869_AEA8_41C9_F0F003A5F7C3",
 "data": {
  "label": "Arrow 02 Right"
 }
},
{
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "hfov": 19.5,
 "rotate": false,
 "id": "panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_tcap0.png",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ]
 },
 "inertia": false
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_86F7FEBE_9869_BEA8_41B9_4963C61ED2B5",
   "yaw": 7.14,
   "pitch": -40.34,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 33.77
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 7.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0_HS_6_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -40.34,
   "hfov": 33.77
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.setMediaBehaviour(this.playList_8493C39A_9857_E768_41DD_C90DECE265EC, 0, this.panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_8281D401_9869_A158_41E1_D0EAC30480C2",
 "data": {
  "label": "Circle Arrow 03a Left-Up"
 }
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8E20C308_9877_6768_41C4_44BA43F0F32E",
   "yaw": 22.7,
   "pitch": -4.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.87
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 22.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.11,
   "hfov": 6.87
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9235B00F_9856_A168_41C5_AE0190458C7E, this.camera_8272945D_9857_E1E8_41D8_C87C02158CA8); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_8A77AFC0_9869_BED8_41C4_D065417C9DE2",
 "data": {
  "label": "Circle 02b"
 }
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8E203308_9877_6768_41C7_9CC0FB202394",
   "yaw": 22.44,
   "pitch": 0.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 2.97
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 22.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0_HS_1_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.41,
   "hfov": 2.97
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_8A2964CD_9869_A2E8_41D7_777617D23E56",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "hfov": 19.5,
 "rotate": false,
 "id": "panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_tcap0.png",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ]
 },
 "inertia": false
},
{
 "items": [
  {
   "media": "this.album_8FCB624B_98AE_A1E8_41DE_EF1A9A8B482F_0",
   "class": "PhotoPlayListItem",
   "camera": {
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "easing": "linear",
    "scaleMode": "fit_to_height",
    "duration": 7000,
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.40",
     "zoomFactor": 1
    }
   }
  },
  {
   "media": "this.album_8FCB624B_98AE_A1E8_41DE_EF1A9A8B482F_1",
   "class": "PhotoPlayListItem",
   "camera": {
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "easing": "linear",
    "scaleMode": "fit_to_height",
    "duration": 7000,
    "targetPosition": {
     "x": "0.46",
     "class": "PhotoCameraPosition",
     "y": "0.29",
     "zoomFactor": 1
    }
   }
  },
  {
   "media": "this.album_8FCB624B_98AE_A1E8_41DE_EF1A9A8B482F_2",
   "class": "PhotoPlayListItem",
   "camera": {
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "easing": "linear",
    "scaleMode": "fit_to_height",
    "duration": 7000,
    "targetPosition": {
     "x": "0.47",
     "class": "PhotoCameraPosition",
     "y": "0.39",
     "zoomFactor": 1
    }
   }
  }
 ],
 "id": "album_8FCB624B_98AE_A1E8_41DE_EF1A9A8B482F_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "levels": [
  {
   "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_894B0987_986B_6358_41D5_47C720FF49CB",
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_8954698A_986B_6368_41E0_1FF96EB537C4",
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_8954D98A_986B_6368_41E1_679C521BE9E9",
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_1_HS_2_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_8957198A_986B_6368_41B2_04721754FF81",
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_1_HS_3_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 570
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_8957498A_986B_6368_41D7_7CEA2FDD51D3",
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 5,
 "id": "AnimatedImageResource_8955A989_986B_6368_41DC_AC3098CA5259",
 "frameCount": 20,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 5,
 "id": "AnimatedImageResource_8955F989_986B_6368_41A2_70F9FC293F13",
 "frameCount": 20,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_1_HS_2_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_8954298A_986B_6368_41D2_FCB09002ADC5",
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 5,
 "id": "AnimatedImageResource_894A4988_986B_6368_41CB_250DEDDCA8FE",
 "frameCount": 20,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 5,
 "id": "AnimatedImageResource_894A8989_986B_6368_41D6_8CD0EEEEA003",
 "frameCount": 20,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_1_HS_2_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 570
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_894AF989_986B_6368_41E0_3A9D1C73EA2E",
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_1_HS_0_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_8957C98C_986B_6368_41E2_236475CBCD9F",
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_8956398D_986B_6368_41D7_5B8DC793FD82",
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_8957B98A_986B_6368_41BE_7D4FCD8332F1",
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_8957F98B_986B_6368_41C3_6226E6C1E5FE",
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_1_HS_2_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_8956398B_986B_6368_41C2_62176F154FF8",
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_1_HS_3_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 570
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_8956798B_986B_6368_41CC_2E6AD33C97E5",
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0_HS_6_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1050
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_86F7FEBE_9869_BEA8_41B9_4963C61ED2B5",
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_8E20C308_9877_6768_41C4_44BA43F0F32E",
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0_HS_1_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_8E203308_9877_6768_41C7_9CC0FB202394",
 "frameCount": 24,
 "colCount": 4
}],
 "scrollBarMargin": 2,
 "class": "Player",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "minWidth": 20,
 "vrPolyfillScale": 0.5,
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "borderRadius": 0,
 "mobileMipmappingEnabled": false,
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "propagateClick": false,
 "downloadEnabled": false,
 "mouseWheelEnabled": true,
 "contentOpaque": false,
 "scripts": {
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "unregisterKey": function(key){  delete window[key]; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "existsKey": function(key){  return key in window; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "registerKey": function(key, value){  window[key] = value; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getKey": function(key){  return window[key]; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; }
 },
 "data": {
  "name": "Player470"
 },
 "horizontalAlign": "left",
 "defaultVRPointer": "laser",
 "backgroundPreloadEnabled": true,
 "gap": 10
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
