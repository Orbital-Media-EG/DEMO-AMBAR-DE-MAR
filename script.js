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
  "this.IconButton_81C9293A_9856_A3A8_41BC_085BBC37D3A0",
  "this.Label_A9175841_A4B5_CCFF_41E3_1644B51B686F",
  "this.Label_A990B6A6_A4BC_4582_41E0_7FB1240809A6",
  "this.Image_A97C9467_A4BC_C483_41C2_741EE149978F"
 ],
 "id": "rootPlayer",
 "width": "100%",
 "minHeight": 20,
 "defaultVRPointer": "laser",
 "paddingLeft": 0,
 "definitions": [{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -73.05,
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_AAADFE7C_A4B4_4486_41D1_91630E89A024",
 "automaticZoomSpeed": 10
},
{
 "gyroscopeVerticalDraggingEnabled": true,
 "mouseControlMode": "drag_acceleration",
 "touchControlMode": "drag_rotation",
 "class": "PanoramaPlayer",
 "id": "MainViewerPanoramaPlayer",
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true
},
{
 "width": 3072,
 "fieldOfViewOverlayOutsideOpacity": 0,
 "initialZoomFactor": 1,
 "label": "IMG_20260416_144233280",
 "id": "map_8B1BFAAA_987A_E6A8_41DB_3F0861E5A7FC",
 "thumbnailUrl": "media/map_8B1BFAAA_987A_E6A8_41DB_3F0861E5A7FC_t.jpg",
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "scaleMode": "fit_inside",
 "fieldOfViewOverlayRadiusScale": 0.3,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_8B1BFAAA_987A_E6A8_41DB_3F0861E5A7FC.jpeg",
    "class": "ImageResourceLevel",
    "width": 2409,
    "height": 3200
   },
   {
    "url": "media/map_8B1BFAAA_987A_E6A8_41DB_3F0861E5A7FC_lq.jpeg",
    "class": "ImageResourceLevel",
    "width": 222,
    "height": 295,
    "tags": "preload"
   }
  ]
 },
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "class": "Map",
 "maximumZoomFactor": 1.2,
 "height": 4080,
 "minimumZoomFactor": 0.5
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -157.3,
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_A941AE6D_A4B4_4487_41E0_6A743B3E5C61",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -14.82,
  "pitch": -36.07
 },
 "class": "PanoramaCamera",
 "id": "panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 121.24,
  "pitch": -3.57
 },
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 92.34,
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_AA8CCE9C_A4B4_4585_4192_50E2A0A2EEAC",
 "automaticZoomSpeed": 10
},
{
 "class": "PlayList",
 "items": [
  {
   "media": "this.panorama_93DEAB71_9857_67B8_41D2_958B1F65256E",
   "camera": "this.panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0",
   "camera": "this.panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_92367A33_9857_61B8_41E1_2B431717D4D7",
   "camera": "this.panorama_92367A33_9857_61B8_41E1_2B431717D4D7_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_9236519C_9856_A368_41E3_09A0668DADF8",
   "camera": "this.panorama_9236519C_9856_A368_41E3_09A0668DADF8_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F",
   "camera": "this.panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_9235B00F_9856_A168_41C5_AE0190458C7E",
   "camera": "this.panorama_9235B00F_9856_A168_41C5_AE0190458C7E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_9235B759_9856_AFE8_41B2_7E3C413BC607",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 0)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "mainPlayList"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 155.06,
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_AA83DEAC_A4B4_4585_41B4_7E3D97501624",
 "automaticZoomSpeed": 10
},
{
 "loop": true,
 "audio": {
  "mp3Url": "media/audio_816D5103_985E_E358_41E2_E981D2B04C43.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_816D5103_985E_E358_41E2_E981D2B04C43.ogg"
 },
 "autoplay": true,
 "class": "MediaAudio",
 "id": "audio_816D5103_985E_E358_41E2_E981D2B04C43",
 "data": {
  "label": "iced coffee \u2615\ufe0f jazz lofi vibes (no copyright music  vlog music  royalty free music)"
 }
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -105.12,
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_A96F0E4D_A4B4_4487_418F_6F011BCC50BD",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 75.21,
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_AAB44E7C_A4B4_4486_41D3_D6707C9325C7",
 "automaticZoomSpeed": 10
},
{
 "thumbnailUrl": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_t.jpg",
 "label": "1 (1)",
 "id": "panorama_93DEAB71_9857_67B8_41D2_958B1F65256E",
 "vfov": 180,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
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
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
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
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "pitch": 0,
 "overlays": [
  "this.overlay_95616918_985A_E368_41B5_8AF3ACDC8ED2",
  "this.panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_tcap0"
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -14.84,
   "backwardYaw": -104.79,
   "panorama": "this.panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0",
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "hfovMax": 130,
 "class": "Panorama",
 "partial": false,
 "hfov": 360
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -0.79,
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_AAF70EAC_A4B4_4585_41D4_E689E0F4F5F1",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 14.59,
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_B5FD5E0E_A4B4_4485_41C5_D13589619F1B",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -160.1,
  "pitch": 3.54
 },
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "MapPlayer",
 "movementMode": "constrained",
 "id": "MainViewerMapPlayer",
 "viewerArea": "this.MainViewer"
},
{
 "thumbnailUrl": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_t.jpg",
 "label": "2",
 "id": "panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0",
 "vfov": 180,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
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
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
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
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "pitch": 0,
 "overlays": [
  "this.overlay_963C92C6_9859_E6D8_4163_68B7CE5DE0FC",
  "this.overlay_966E1B14_985F_6778_41B4_1634FF645B06",
  "this.overlay_97404C7F_985E_A1A8_41C0_3813D925224F",
  "this.panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_tcap0"
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 106.95,
   "backwardYaw": -165.41,
   "panorama": "this.panorama_92367A33_9857_61B8_41E1_2B431717D4D7",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 63.87,
   "backwardYaw": 74.88,
   "panorama": "this.panorama_9236519C_9856_A368_41E3_09A0668DADF8",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -104.79,
   "backwardYaw": -14.84,
   "panorama": "this.panorama_93DEAB71_9857_67B8_41D2_958B1F65256E",
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "hfovMax": 130,
 "class": "Panorama",
 "partial": false,
 "hfov": 360
},
{
 "thumbnailUrl": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_t.jpg",
 "label": "5",
 "id": "panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F",
 "vfov": 180,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
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
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
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
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "pitch": 0,
 "overlays": [
  "this.overlay_882A0C28_9856_E1A8_41D1_CDE6C0DF4DE0",
  "this.overlay_88AAC558_9856_A3E8_41DC_E054B52E3C39",
  "this.overlay_880239E1_9869_A2D8_41B2_4BA78610103A",
  "this.overlay_888127AC_9869_AEA8_41C9_F0F003A5F7C3",
  "this.panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_tcap0",
  "this.overlay_8281D401_9869_A158_41E1_D0EAC30480C2"
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 170.23,
   "backwardYaw": -87.66,
   "panorama": "this.panorama_92367A33_9857_61B8_41E1_2B431717D4D7",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -123.44,
   "backwardYaw": -24.94,
   "panorama": "this.panorama_9236519C_9856_A368_41E3_09A0668DADF8",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 76.57,
   "backwardYaw": 179.21,
   "panorama": "this.panorama_9235B00F_9856_A168_41C5_AE0190458C7E",
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "hfovMax": 130,
 "class": "Panorama",
 "partial": false,
 "hfov": 360
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -103.43,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_A9482E6D_A4B4_4487_41B9_10F6DDC2048A",
 "automaticZoomSpeed": 10
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.MainViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "class": "MapPlayListItem",
   "media": "this.map_8B712E1E_987A_E169_41E1_9CE189ED0511",
   "player": "this.MainViewerMapPlayer"
  }
 ],
 "id": "playList_B5908E00_A4B4_447D_41E1_F06DEEE2D025"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -9.77,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_AA974E91_A4B4_459F_41B9_F3A91675DB12",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -178.62,
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_AAED2EBC_A4B4_4585_419B_59296BDB7E2B",
 "automaticZoomSpeed": 10
},
{
 "width": 3072,
 "fieldOfViewOverlayOutsideOpacity": 0,
 "initialZoomFactor": 1,
 "label": "IMG_20260416_144214370",
 "id": "map_8B4C6731_987A_EFB8_41B0_91CFB0AD1650",
 "thumbnailUrl": "media/map_8B4C6731_987A_EFB8_41B0_91CFB0AD1650_t.jpg",
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "scaleMode": "fit_inside",
 "fieldOfViewOverlayRadiusScale": 0.3,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_8B4C6731_987A_EFB8_41B0_91CFB0AD1650.jpeg",
    "class": "ImageResourceLevel",
    "width": 2409,
    "height": 3200
   },
   {
    "url": "media/map_8B4C6731_987A_EFB8_41B0_91CFB0AD1650_lq.jpeg",
    "class": "ImageResourceLevel",
    "width": 222,
    "height": 295,
    "tags": "preload"
   }
  ]
 },
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "class": "Map",
 "maximumZoomFactor": 1.2,
 "height": 4080,
 "minimumZoomFactor": 0.5
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.MainViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "class": "MapPlayListItem",
   "media": "this.map_8B1BFAAA_987A_E6A8_41DB_3F0861E5A7FC",
   "player": "this.MainViewerMapPlayer"
  }
 ],
 "id": "playList_B5912E00_A4B4_447D_41D1_B19B4B6018BA"
},
{
 "thumbnailUrl": "media/album_8FCB624B_98AE_A1E8_41DE_EF1A9A8B482F_t.png",
 "label": "Album de Fotos IMG_20260416_144214370",
 "id": "album_8FCB624B_98AE_A1E8_41DE_EF1A9A8B482F",
 "playList": "this.album_8FCB624B_98AE_A1E8_41DE_EF1A9A8B482F_AlbumPlayList",
 "class": "PhotoAlbum"
},
{
 "thumbnailUrl": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_t.jpg",
 "label": "7",
 "id": "panorama_9235B759_9856_AFE8_41B2_7E3C413BC607",
 "vfov": 180,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
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
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
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
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "pitch": 0,
 "overlays": [
  "this.overlay_8A77AFC0_9869_BED8_41C4_D065417C9DE2",
  "this.overlay_8A2964CD_9869_A2E8_41D7_777617D23E56",
  "this.panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_tcap0"
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 22.7,
   "backwardYaw": 1.38,
   "panorama": "this.panorama_9235B00F_9856_A168_41C5_AE0190458C7E",
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "hfovMax": 130,
 "class": "Panorama",
 "partial": false,
 "hfov": 360
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 29.79,
  "pitch": 11.38
 },
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_camera",
 "automaticZoomSpeed": 10
},
{
 "thumbnailUrl": "media/photo_8E8DB973_98D6_A3B8_41DF_288C886002F7_t.jpg",
 "label": "IMG_20260416_144246429",
 "id": "photo_8E8DB973_98D6_A3B8_41DF_288C886002F7",
 "duration": 5000,
 "width": 3072,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_8E8DB973_98D6_A3B8_41DF_288C886002F7.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "class": "Photo",
 "height": 4080
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 55.24,
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_A9652E5D_A4B4_4487_419A_2DE69FE440DD",
 "automaticZoomSpeed": 10
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.MainViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "class": "MapPlayListItem",
   "media": "this.map_8B4C6731_987A_EFB8_41B0_91CFB0AD1650",
   "player": "this.MainViewerMapPlayer"
  }
 ],
 "id": "playList_B5907E00_A4B4_447D_41D0_6FF549E0130C"
},
{
 "class": "PhotoAlbumPlayer",
 "id": "MainViewerPhotoAlbumPlayer",
 "viewerArea": "this.MainViewer"
},
{
 "thumbnailUrl": "media/album_8FCB624B_98AE_A1E8_41DE_EF1A9A8B482F_0_t.jpg",
 "label": "IMG_20260416_144214370",
 "id": "album_8FCB624B_98AE_A1E8_41DE_EF1A9A8B482F_0",
 "duration": 7000,
 "width": 3072,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_8FCB624B_98AE_A1E8_41DE_EF1A9A8B482F_0.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "class": "Photo",
 "height": 4080
},
{
 "thumbnailUrl": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_t.jpg",
 "label": "6",
 "id": "panorama_9235B00F_9856_A168_41C5_AE0190458C7E",
 "vfov": 180,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
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
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
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
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "pitch": 0,
 "overlays": [
  "this.overlay_8925C23B_986F_A1A8_41DC_2A07E7A4B39F",
  "this.overlay_89277927_986E_A358_41DD_7A0785FA88F2",
  "this.panorama_9235B00F_9856_A168_41C5_AE0190458C7E_tcap0"
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 179.21,
   "backwardYaw": 76.57,
   "panorama": "this.panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 1.38,
   "backwardYaw": 22.7,
   "panorama": "this.panorama_9235B759_9856_AFE8_41B2_7E3C413BC607",
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "hfovMax": 130,
 "class": "Panorama",
 "partial": false,
 "hfov": 360
},
{
 "class": "PlayList",
 "items": [
  {
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem",
   "media": "this.album_8FCB624B_98AE_A1E8_41DE_EF1A9A8B482F"
  }
 ],
 "id": "playList_B592FE00_A4B4_447D_41D0_EFBE41002A35"
},
{
 "thumbnailUrl": "media/album_8FCB624B_98AE_A1E8_41DE_EF1A9A8B482F_2_t.jpg",
 "label": "IMG_20260416_144246429",
 "id": "album_8FCB624B_98AE_A1E8_41DE_EF1A9A8B482F_2",
 "duration": 7000,
 "width": 3072,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_8FCB624B_98AE_A1E8_41DE_EF1A9A8B482F_2.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "class": "Photo",
 "height": 4080
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.MainViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "class": "MapPlayListItem",
   "media": "this.map_8B4C6731_987A_EFB8_41B0_91CFB0AD1650",
   "player": "this.MainViewerMapPlayer"
  }
 ],
 "id": "playList_B590EE00_A4B4_447D_41E2_11DA0EEE473B"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -116.13,
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_A95CCE5D_A4B4_4487_41DF_5215C91AF79B",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -129.65,
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_AAA0DE91_A4B4_459F_41E2_006C9EA9D328",
 "automaticZoomSpeed": 10
},
{
 "thumbnailUrl": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_t.jpg",
 "label": "4",
 "id": "panorama_9236519C_9856_A368_41E3_09A0668DADF8",
 "vfov": 180,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
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
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
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
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "pitch": 0,
 "overlays": [
  "this.overlay_978F588E_9859_A168_41DA_D1657CFF2B04",
  "this.overlay_88D5861D_9859_A168_41DC_9C7B0CCC8748",
  "this.overlay_97B051D3_9856_A2F8_41D3_B3D87483988F",
  "this.overlay_979D34E9_9857_62A8_41D0_B27F4B676AE7",
  "this.panorama_9236519C_9856_A368_41E3_09A0668DADF8_tcap0"
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 50.35,
   "backwardYaw": -124.76,
   "panorama": "this.panorama_92367A33_9857_61B8_41E1_2B431717D4D7",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 74.88,
   "backwardYaw": 63.87,
   "panorama": "this.panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -24.94,
   "backwardYaw": -123.44,
   "panorama": "this.panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9235B00F_9856_A168_41C5_AE0190458C7E"
  }
 ],
 "hfovMin": "135%",
 "hfovMax": 130,
 "class": "Panorama",
 "partial": false,
 "hfov": 360
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -52.28,
  "pitch": 10.05
 },
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_9236519C_9856_A368_41E3_09A0668DADF8_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 56.56,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_A9523E6D_A4B4_4487_41DF_7D832A4A883C",
 "automaticZoomSpeed": 10
},
{
 "thumbnailUrl": "media/photo_8EC0F5D5_98D6_A2F8_41CA_CEA4BC4C9579_t.jpg",
 "label": "IMG_20260416_144233280",
 "id": "photo_8EC0F5D5_98D6_A2F8_41CA_CEA4BC4C9579",
 "duration": 5000,
 "width": 3072,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_8EC0F5D5_98D6_A2F8_41CA_CEA4BC4C9579.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "class": "Photo",
 "height": 4080
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -6.59,
  "pitch": -12.13
 },
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_9235B00F_9856_A168_41C5_AE0190458C7E_camera",
 "automaticZoomSpeed": 10
},
{
 "thumbnailUrl": "media/album_8FCB624B_98AE_A1E8_41DE_EF1A9A8B482F_1_t.jpg",
 "label": "IMG_20260416_144233280",
 "id": "album_8FCB624B_98AE_A1E8_41DE_EF1A9A8B482F_1",
 "duration": 7000,
 "width": 3072,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_8FCB624B_98AE_A1E8_41DE_EF1A9A8B482F_1.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "class": "Photo",
 "height": 4080
},
{
 "width": 3072,
 "fieldOfViewOverlayOutsideOpacity": 0,
 "initialZoomFactor": 1,
 "label": "IMG_20260416_144246429",
 "id": "map_8B712E1E_987A_E169_41E1_9CE189ED0511",
 "thumbnailUrl": "media/map_8B712E1E_987A_E169_41E1_9CE189ED0511_t.jpg",
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "scaleMode": "fit_inside",
 "fieldOfViewOverlayRadiusScale": 0.3,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_8B712E1E_987A_E169_41E1_9CE189ED0511.jpeg",
    "class": "ImageResourceLevel",
    "width": 2409,
    "height": 3200
   },
   {
    "url": "media/map_8B712E1E_987A_E169_41E1_9CE189ED0511_lq.jpeg",
    "class": "ImageResourceLevel",
    "width": 222,
    "height": 295,
    "tags": "preload"
   }
  ]
 },
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "class": "Map",
 "maximumZoomFactor": 1.2,
 "height": 4080,
 "minimumZoomFactor": 0.5
},
{
 "thumbnailUrl": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_t.jpg",
 "label": "3",
 "id": "panorama_92367A33_9857_61B8_41E1_2B431717D4D7",
 "vfov": 180,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
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
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_t.jpg",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
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
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560,
      "colCount": 5
     },
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "pitch": 0,
 "overlays": [
  "this.overlay_96C81136_9859_A3B8_41D1_5CF781483956",
  "this.overlay_97703BFC_9859_66A8_41BA_66290630F09E",
  "this.overlay_96A403ED_985B_A6A8_41BD_4FB04F2E458F",
  "this.panorama_92367A33_9857_61B8_41E1_2B431717D4D7_tcap0"
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -165.41,
   "backwardYaw": 106.95,
   "panorama": "this.panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -124.76,
   "backwardYaw": 50.35,
   "panorama": "this.panorama_9236519C_9856_A368_41E3_09A0668DADF8",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -87.66,
   "backwardYaw": 170.23,
   "panorama": "this.panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F",
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "hfovMax": 130,
 "class": "Panorama",
 "partial": false,
 "hfov": 360
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.MainViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "class": "MapPlayListItem",
   "media": "this.map_8B1BFAAA_987A_E6A8_41DB_3F0861E5A7FC",
   "player": "this.MainViewerMapPlayer"
  }
 ],
 "id": "playList_B5905E00_A4B4_447D_41DA_280EF383DF17"
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.MainViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "class": "MapPlayListItem",
   "media": "this.map_8B712E1E_987A_E169_41E1_9CE189ED0511",
   "player": "this.MainViewerMapPlayer"
  }
 ],
 "id": "playList_B5913E00_A4B4_447D_4199_4BD65F671D40"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 165.16,
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_A96BAE4D_A4B4_4487_41C6_BB4A5D539D92",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0.66,
  "pitch": 9.92
 },
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_92367A33_9857_61B8_41E1_2B431717D4D7_camera",
 "automaticZoomSpeed": 10
},
{
 "paddingBottom": 0,
 "id": "IconButton_8154DD90_9859_6378_41E2_591F83DFA336",
 "width": 40,
 "minHeight": 0,
 "cursor": "hand",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "right": "7.63%",
 "minWidth": 0,
 "shadow": false,
 "top": "4.46%",
 "class": "IconButton",
 "height": 40,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_8154DD90_9859_6378_41E2_591F83DFA336_pressed.png",
 "paddingTop": 0,
 "borderRadius": 0,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "Button49930"
 },
 "transparencyActive": true,
 "iconURL": "skin/IconButton_8154DD90_9859_6378_41E2_591F83DFA336.png"
},
{
 "paddingBottom": 0,
 "show": "this.playGlobalAudio(this.audio_816D5103_985E_E358_41E2_E981D2B04C43)",
 "id": "IconButton_806B4BCF_98BB_A6E7_41D7_AC9E65E0AA4D",
 "width": 38,
 "minHeight": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_806B4BCF_98BB_A6E7_41D7_AC9E65E0AA4D_rollover.png",
 "right": "2.03%",
 "cursor": "hand",
 "minWidth": 0,
 "shadow": false,
 "class": "IconButton",
 "bottom": "0%",
 "height": 38,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_806B4BCF_98BB_A6E7_41D7_AC9E65E0AA4D_pressed.png",
 "paddingTop": 0,
 "borderRadius": 0,
 "mode": "push",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "Button4076"
 },
 "transparencyActive": false,
 "iconURL": "skin/IconButton_806B4BCF_98BB_A6E7_41D7_AC9E65E0AA4D.png"
},
{
 "toolTipShadowVerticalLength": 0,
 "toolTipFontStyle": "normal",
 "paddingBottom": 0,
 "toolTipTextShadowBlurRadius": 3,
 "id": "MainViewer",
 "transitionMode": "blending",
 "width": "100%",
 "toolTipPaddingTop": 4,
 "toolTipTextShadowColor": "#000000",
 "progressBarBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "playbackBarHeadShadow": true,
 "progressBorderColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadHeight": 15,
 "vrPointerSelectionTime": 2000,
 "firstTransitionDuration": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "class": "ViewerArea",
 "toolTipPaddingRight": 6,
 "progressBackgroundOpacity": 1,
 "toolTipBackgroundColor": "#F6F6F6",
 "height": "100%",
 "progressBottom": 0,
 "borderSize": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarOpacity": 1,
 "toolTipShadowSpread": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressHeight": 10,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "progressBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipShadowColor": "#333333",
 "toolTipOpacity": 1,
 "progressBorderSize": 0,
 "paddingRight": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipPaddingLeft": 6,
 "progressLeft": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipDisplayTime": 600,
 "playbackBarHeight": 10,
 "progressBorderRadius": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontColor": "#606060",
 "playbackBarBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipFontSize": "1.11vmin",
 "progressBarBorderColor": "#000000",
 "toolTipBorderRadius": 3,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarRight": 0,
 "minHeight": 50,
 "displayTooltipInTouchScreens": true,
 "toolTipTextShadowOpacity": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarBorderColor": "#FFFFFF",
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "playbackBarHeadShadowColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadOpacity": 1,
 "minWidth": 100,
 "shadow": false,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "paddingTop": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "borderRadius": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingBottom": 4,
 "progressRight": 0,
 "progressBackgroundColorDirection": "vertical",
 "toolTipFontFamily": "Arial",
 "transitionDuration": 500,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBottom": 5,
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": false,
 "playbackBarBorderRadius": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Main Viewer"
 },
 "toolTipBorderColor": "#767676",
 "playbackBarHeadBorderColor": "#000000",
 "progressOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeadBorderSize": 0,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowHorizontalLength": 0
},
{
 "maxHeight": 52,
 "paddingBottom": 0,
 "id": "IconButton_81C9293A_9856_A3A8_41BC_085BBC37D3A0",
 "width": 53,
 "minHeight": 1,
 "cursor": "hand",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "right": "12.15%",
 "minWidth": 1,
 "shadow": false,
 "top": "3.68%",
 "class": "IconButton",
 "height": 52,
 "borderSize": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "mode": "push",
 "click": "this.openLink('https://www.facebook.com/ambardelmarchetumal#', '_blank')",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "maxWidth": 53,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton8401"
 },
 "transparencyActive": true,
 "iconURL": "skin/IconButton_81C9293A_9856_A3A8_41BC_085BBC37D3A0.png"
},
{
 "fontFamily": "Arial",
 "paddingBottom": 0,
 "id": "Label_A9175841_A4B5_CCFF_41E3_1644B51B686F",
 "width": "15.137%",
 "minHeight": 1,
 "fontColor": "#000000",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "right": "41.08%",
 "text": "DEMO ",
 "minWidth": 1,
 "borderColor": "#FFFFFF",
 "shadow": false,
 "textShadowBlurRadius": 5,
 "top": "8.53%",
 "class": "Label",
 "height": "7.67%",
 "borderSize": 8,
 "paddingTop": 0,
 "borderRadius": 8,
 "backgroundOpacity": 0,
 "textShadowHorizontalLength": -2,
 "fontSize": "4vmin",
 "textShadowOpacity": 0.45,
 "propagateClick": false,
 "textShadowColor": "#000000",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "Label1571"
 },
 "fontWeight": "bold",
 "fontStyle": "normal",
 "textDecoration": "none",
 "textShadowVerticalLength": 1
},
{
 "fontFamily": "Arial",
 "paddingBottom": 0,
 "id": "Label_A990B6A6_A4BC_4582_41E0_7FB1240809A6",
 "width": "42.7%",
 "minHeight": 1,
 "fontColor": "#000000",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "right": "17.25%",
 "text": "Contacto: 9811415821",
 "minWidth": 1,
 "shadow": false,
 "textShadowBlurRadius": 3,
 "top": "15.66%",
 "class": "Label",
 "height": "8.509%",
 "borderSize": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "textShadowHorizontalLength": 1,
 "fontSize": "5vmin",
 "textShadowOpacity": 0.7,
 "propagateClick": false,
 "textShadowColor": "#000000",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "Label2037"
 },
 "fontWeight": "normal",
 "fontStyle": "normal",
 "textDecoration": "none",
 "textShadowVerticalLength": 1
},
{
 "maxHeight": 1080,
 "paddingBottom": 0,
 "id": "Image_A97C9467_A4BC_C483_41C2_741EE149978F",
 "left": "0.06%",
 "width": "47.488%",
 "minHeight": 1,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "url": "skin/Image_A97C9467_A4BC_C483_41C2_741EE149978F.png",
 "minWidth": 1,
 "shadow": false,
 "class": "Image",
 "bottom": "6.84%",
 "height": "84.92%",
 "borderSize": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "maxWidth": 1080,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image2295"
 }
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0, this.camera_AAB44E7C_A4B4_4486_41D3_D6707C9325C7); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -14.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -4.29,
   "hfov": 6.74
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_894B0987_986B_6358_41D5_47C720FF49CB",
   "yaw": -14.84,
   "pitch": -4.29,
   "distance": 100,
   "hfov": 6.74,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_95616918_985A_E368_41B5_8AF3ACDC8ED2",
 "data": {
  "label": "Circle 02b"
 }
},
{
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 1080,
    "height": 1080
   }
  ]
 },
 "hfov": 19.5,
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_92367A33_9857_61B8_41E1_2B431717D4D7, this.camera_B5FD5E0E_A4B4_4485_41C5_D13589619F1B); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 106.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -16.64,
   "hfov": 14.83
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_894A4988_986B_6368_41CB_250DEDDCA8FE",
   "yaw": 106.95,
   "pitch": -16.64,
   "distance": 100,
   "hfov": 14.83,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_963C92C6_9859_E6D8_4163_68B7CE5DE0FC",
 "data": {
  "label": "Circle 01b"
 }
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_93DEAB71_9857_67B8_41D2_958B1F65256E, this.camera_A96BAE4D_A4B4_4487_41C6_BB4A5D539D92); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -104.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -11.84,
   "hfov": 15.15
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_894A8989_986B_6368_41D6_8CD0EEEEA003",
   "yaw": -104.79,
   "pitch": -11.84,
   "distance": 100,
   "hfov": 15.15,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_966E1B14_985F_6778_41B4_1634FF645B06",
 "data": {
  "label": "Circle 01b"
 }
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9236519C_9856_A368_41E3_09A0668DADF8, this.camera_A96F0E4D_A4B4_4487_418F_6F011BCC50BD); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 63.87,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 9.15,
   "hfov": 10.16
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_894AF989_986B_6368_41E0_3A9D1C73EA2E",
   "yaw": 63.87,
   "pitch": 9.15,
   "distance": 50,
   "hfov": 10.16,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_97404C7F_985E_A1A8_41C0_3813D925224F",
 "data": {
  "label": "Arrow 02 Left"
 }
},
{
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 1080,
    "height": 1080
   }
  ]
 },
 "hfov": 19.5,
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9235B00F_9856_A168_41C5_AE0190458C7E, this.camera_AAF70EAC_A4B4_4585_41D4_E689E0F4F5F1); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 76.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -11.7,
   "hfov": 11.03
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_8957B98A_986B_6368_41BE_7D4FCD8332F1",
   "yaw": 76.57,
   "pitch": -11.7,
   "distance": 100,
   "hfov": 11.03,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_882A0C28_9856_E1A8_41D1_CDE6C0DF4DE0",
 "data": {
  "label": "Circle 02b"
 }
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9236519C_9856_A368_41E3_09A0668DADF8, this.camera_AA83DEAC_A4B4_4585_41B4_7E3D97501624); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -123.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -19.51,
   "hfov": 13.99
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_8957F98B_986B_6368_41C3_6226E6C1E5FE",
   "yaw": -123.44,
   "pitch": -19.51,
   "distance": 100,
   "hfov": 13.99,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_88AAC558_9856_A3E8_41DC_E054B52E3C39",
 "data": {
  "label": "Circle 02b"
 }
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_92367A33_9857_61B8_41E1_2B431717D4D7, this.camera_AA8CCE9C_A4B4_4585_4192_50E2A0A2EEAC); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 170.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": -0.89,
   "hfov": 6.93
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_8956398B_986B_6368_41C2_62176F154FF8",
   "yaw": 170.23,
   "pitch": -0.89,
   "distance": 100,
   "hfov": 6.93,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_880239E1_9869_A2D8_41B2_4BA78610103A",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -161.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 0.09,
   "hfov": 8.1
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_8956798B_986B_6368_41CC_2E6AD33C97E5",
   "yaw": -161.26,
   "pitch": 0.09,
   "distance": 50,
   "hfov": 8.1,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_888127AC_9869_AEA8_41C9_F0F003A5F7C3",
 "data": {
  "label": "Arrow 02 Right"
 }
},
{
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 1080,
    "height": 1080
   }
  ]
 },
 "hfov": 19.5,
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.setMediaBehaviour(this.playList_B592FE00_A4B4_447D_41D0_EFBE41002A35, 0, this.panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 7.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0_HS_6_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -40.34,
   "hfov": 33.77
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_86F7FEBE_9869_BEA8_41B9_4963C61ED2B5",
   "yaw": 7.14,
   "pitch": -40.34,
   "distance": 50,
   "hfov": 33.77,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8281D401_9869_A158_41E1_D0EAC30480C2",
 "data": {
  "label": "Circle Arrow 03a Left-Up"
 }
},
{
 "class": "PhotoPlayList",
 "items": [
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_8FCB624B_98AE_A1E8_41DE_EF1A9A8B482F_0",
   "camera": {
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_to_height",
    "easing": "linear",
    "duration": 7000,
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "y": "0.40",
     "zoomFactor": 1
    }
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_8FCB624B_98AE_A1E8_41DE_EF1A9A8B482F_1",
   "camera": {
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_to_height",
    "easing": "linear",
    "duration": 7000,
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.46",
     "y": "0.29",
     "zoomFactor": 1
    }
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_8FCB624B_98AE_A1E8_41DE_EF1A9A8B482F_2",
   "camera": {
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_to_height",
    "easing": "linear",
    "duration": 7000,
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.47",
     "y": "0.39",
     "zoomFactor": 1
    }
   }
  }
 ],
 "id": "album_8FCB624B_98AE_A1E8_41DE_EF1A9A8B482F_AlbumPlayList"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9235B00F_9856_A168_41C5_AE0190458C7E, this.camera_AAED2EBC_A4B4_4585_419B_59296BDB7E2B); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 22.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -4.11,
   "hfov": 6.87
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_8E20C308_9877_6768_41C4_44BA43F0F32E",
   "yaw": 22.7,
   "pitch": -4.11,
   "distance": 100,
   "hfov": 6.87,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8A77AFC0_9869_BED8_41C4_D065417C9DE2",
 "data": {
  "label": "Circle 02b"
 }
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 22.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": 0.41,
   "hfov": 2.97
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_8E203308_9877_6768_41C7_9CC0FB202394",
   "yaw": 22.44,
   "pitch": 0.41,
   "distance": 100,
   "hfov": 2.97,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8A2964CD_9869_A2E8_41D7_777617D23E56",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 1080,
    "height": 1080
   }
  ]
 },
 "hfov": 19.5,
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F, this.camera_A9482E6D_A4B4_4487_41B9_10F6DDC2048A); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": -1.81,
   "hfov": 13.79
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_8957C98C_986B_6368_41E2_236475CBCD9F",
   "yaw": 179.21,
   "pitch": -1.81,
   "distance": 100,
   "hfov": 13.79,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8925C23B_986F_A1A8_41DC_2A07E7A4B39F",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9235B759_9856_AFE8_41B2_7E3C413BC607, this.camera_A941AE6D_A4B4_4487_41E0_6A743B3E5C61); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 1.38,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -10.02,
   "hfov": 5.54
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_8956398D_986B_6368_41D7_5B8DC793FD82",
   "yaw": 1.38,
   "pitch": -10.02,
   "distance": 100,
   "hfov": 5.54,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_89277927_986E_A358_41DD_7A0785FA88F2",
 "data": {
  "label": "Circle Arrow 02"
 }
},
{
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 1080,
    "height": 1080
   }
  ]
 },
 "hfov": 19.5,
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_9235B00F_9856_A168_41C5_AE0190458C7E_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F, this.camera_A9523E6D_A4B4_4487_41DF_7D832A4A883C); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -24.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -18.17,
   "hfov": 19.05
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_8954698A_986B_6368_41E0_1FF96EB537C4",
   "yaw": -24.94,
   "pitch": -18.17,
   "distance": 100,
   "hfov": 19.05,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_978F588E_9859_A168_41DA_D1657CFF2B04",
 "data": {
  "label": "Circle 02b"
 }
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_92367A33_9857_61B8_41E1_2B431717D4D7, this.camera_A9652E5D_A4B4_4487_419A_2DE69FE440DD); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 50.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -8.94,
   "hfov": 13.3
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_8954D98A_986B_6368_41E1_679C521BE9E9",
   "yaw": 50.35,
   "pitch": -8.94,
   "distance": 100,
   "hfov": 13.3,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_88D5861D_9859_A168_41DC_9C7B0CCC8748",
 "data": {
  "label": "Circle 02b"
 }
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -18.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": -5.81,
   "hfov": 4.49
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_8957198A_986B_6368_41B2_04721754FF81",
   "yaw": -18.5,
   "pitch": -5.81,
   "distance": 100,
   "hfov": 4.49,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_97B051D3_9856_A2F8_41D3_B3D87483988F",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0, this.camera_A95CCE5D_A4B4_4487_41DF_5215C91AF79B); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 74.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 6.46,
   "hfov": 7.92
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_8957498A_986B_6368_41D7_7CEA2FDD51D3",
   "yaw": 74.88,
   "pitch": 6.46,
   "distance": 50,
   "hfov": 7.92,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_979D34E9_9857_62A8_41D0_B27F4B676AE7",
 "data": {
  "label": "Arrow 02 Right"
 }
},
{
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 1080,
    "height": 1080
   }
  ]
 },
 "hfov": 19.5,
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_9236519C_9856_A368_41E3_09A0668DADF8_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9236519C_9856_A368_41E3_09A0668DADF8, this.camera_AAA0DE91_A4B4_459F_41E2_006C9EA9D328); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -124.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -14.02,
   "hfov": 12.62
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_8955A989_986B_6368_41DC_AC3098CA5259",
   "yaw": -124.76,
   "pitch": -14.02,
   "distance": 100,
   "hfov": 12.62,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_96C81136_9859_A3B8_41D1_5CF781483956",
 "data": {
  "label": "Circle 01b"
 }
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0, this.camera_AAADFE7C_A4B4_4486_41D1_91630E89A024); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -165.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -13.8,
   "hfov": 9.47
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_8955F989_986B_6368_41A2_70F9FC293F13",
   "yaw": -165.41,
   "pitch": -13.8,
   "distance": 100,
   "hfov": 9.47,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_97703BFC_9859_66A8_41BA_66290630F09E",
 "data": {
  "label": "Circle 01b"
 }
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F, this.camera_AA974E91_A4B4_459F_41B9_F3A91675DB12); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -87.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": -3.32,
   "hfov": 4.83
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_8954298A_986B_6368_41D2_FCB09002ADC5",
   "yaw": -87.66,
   "pitch": -3.32,
   "distance": 100,
   "hfov": 4.83,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_96A403ED_985B_A6A8_41BD_4FB04F2E458F",
 "data": {
  "label": "Arrow 02"
 }
},
{
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 1080,
    "height": 1080
   }
  ]
 },
 "hfov": 19.5,
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_92367A33_9857_61B8_41E1_2B431717D4D7_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "levels": [
  {
   "url": "media/panorama_93DEAB71_9857_67B8_41D2_958B1F65256E_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 690
  }
 ],
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_894B0987_986B_6358_41D5_47C720FF49CB",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_894A4988_986B_6368_41CB_250DEDDCA8FE",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_894A8989_986B_6368_41D6_8CD0EEEEA003",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_923F12E1_9857_66D8_4189_C2D9646E1FC0_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 570
  }
 ],
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_894AF989_986B_6368_41E0_3A9D1C73EA2E",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 690
  }
 ],
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_8957B98A_986B_6368_41BE_7D4FCD8332F1",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 690
  }
 ],
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_8957F98B_986B_6368_41C3_6226E6C1E5FE",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_8956398B_986B_6368_41C2_62176F154FF8",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 570
  }
 ],
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_8956798B_986B_6368_41CC_2E6AD33C97E5",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_9235A8C5_9856_A2D8_41CD_CDAA8660838F_0_HS_6_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 1050
  }
 ],
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_86F7FEBE_9869_BEA8_41B9_4963C61ED2B5",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 690
  }
 ],
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_8E20C308_9877_6768_41C4_44BA43F0F32E",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_9235B759_9856_AFE8_41B2_7E3C413BC607_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_8E203308_9877_6768_41C7_9CC0FB202394",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_8957C98C_986B_6368_41E2_236475CBCD9F",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_9235B00F_9856_A168_41C5_AE0190458C7E_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_8956398D_986B_6368_41D7_5B8DC793FD82",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 690
  }
 ],
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_8954698A_986B_6368_41E0_1FF96EB537C4",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 690
  }
 ],
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_8954D98A_986B_6368_41E1_679C521BE9E9",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_8957198A_986B_6368_41B2_04721754FF81",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_9236519C_9856_A368_41E3_09A0668DADF8_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 570
  }
 ],
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_8957498A_986B_6368_41D7_7CEA2FDD51D3",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_8955A989_986B_6368_41DC_AC3098CA5259",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ],
 "frameCount": 20,
 "frameDuration": 41,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_8955F989_986B_6368_41A2_70F9FC293F13",
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_92367A33_9857_61B8_41E1_2B431717D4D7_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 380,
   "height": 480
  }
 ],
 "frameCount": 24,
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_8954298A_986B_6368_41D2_FCB09002ADC5",
 "colCount": 4
}],
 "desktopMipmappingEnabled": false,
 "contentOpaque": false,
 "verticalAlign": "top",
 "minWidth": 20,
 "vrPolyfillScale": 0.5,
 "shadow": false,
 "scrollBarMargin": 2,
 "class": "Player",
 "scrollBarWidth": 10,
 "mobileMipmappingEnabled": false,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "backgroundPreloadEnabled": true,
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "mouseWheelEnabled": true,
 "propagateClick": false,
 "scripts": {
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "existsKey": function(key){  return key in window; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getKey": function(key){  return window[key]; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "registerKey": function(key, value){  window[key] = value; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "unregisterKey": function(key){  delete window[key]; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } }
 },
 "paddingRight": 0,
 "horizontalAlign": "left",
 "downloadEnabled": false,
 "data": {
  "name": "Player470"
 },
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
