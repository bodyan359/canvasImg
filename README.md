# React + Vite

Main:
Create a React app that:
- has an input that receives a URL to a video or an image (later in the text - "asset");
- has a button that adds the asset from the input to the "canvas". The canvas is not necessarily a <canvas/> element, it can be anything. Note: videos on canvas should be playable of course;
- allows users to move the assets freely around the canvas with their mouse. The assets can be stacked on top of each other;
- allows users to resize the assets freely with their mouse;
- has another button that logs the information about each asset that includes their current x, y, width, height (pixels or %). Alternatively, the information can be display in the UI all the time;
Note: all assets should keep their original aspect ratio including after resize

Additionally:
- URL validation
- deletion of the assets from the canvas
- global playback to play/pause all videos on the canvas simultaneously.

Assets for testing:
- https://s3.us-east-2.amazonaws.com/vb-dev-media/moments/ads/reupload/avatar2-trailer-short.mp4
- https://sjc1.vultrobjects.com/moments/demo/retail/1.jpg
- https://sjc1.vultrobjects.com/moments/ads/square-emoji.png
- https://ewr1.vultrobjects.com/moments/videos/car-parts.mp4
- https://s3.us-east-2.amazonaws.com/vb-dev-media/moments/ads/reupload/vbqr.png
- https://s3.us-east-2.amazonaws.com/vb-dev-media/moments/ads/reupload/coca-cola-short.mp4
- https://s3.us-east-2.amazonaws.com/vb-dev-media/moments/ads/reupload/coca-cola-banner-right.jpg
