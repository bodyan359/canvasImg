import React from "react";

import {Asset} from '../Asset/Asset'
interface CanvasProps {
    assets: any;
    onAssetMove: (index: number, x: number, y: number) => void;
    onAssetResize: (index: number, width: number, height: number) => void;
    onDeleteAsset: (index: number) => void;
}

export const Canvas: React.FC<CanvasProps> = ({ assets, onAssetMove, onAssetResize, onDeleteAsset }) => {

    const playAllVideos = () => {
        const videoElements = document.querySelectorAll("video");
        videoElements.forEach((video) => {
            video.play();
        });
    };

    const pauseAllVideos = () => {
        const videoElements = document.querySelectorAll("video");
        videoElements.forEach((video) => {
            video.pause();
        });
    };
    return (
        <div className="canvas">
            <button style={{margin: '15px'}} onClick={playAllVideos}>Start playing all videos</button>
            <button onClick={pauseAllVideos}>Pause playing all videos</button>
            {assets.map((asset, index) => (
                <Asset
                    key={index}
                    asset={asset}
                    onMove={(x, y) => onAssetMove(index, x, y)}
                    onResize={(width, height) => onAssetResize(index, width, height)}
                    onDelete={() => onDeleteAsset(index)}
                />
            ))}
        </div>
    );
};