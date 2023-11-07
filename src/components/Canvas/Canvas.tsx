import React from "react";

import {Asset} from '../Asset/Asset'
interface CanvasProps {
    assets: any;
    onAssetMove: (index: number, x: number, y: number) => void;
    onAssetResize: (index: number, width: number, height: number) => void;
    onDeleteAsset: (index: number) => void;
}

export const Canvas: React.FC<CanvasProps> = ({ assets, onAssetMove, onAssetResize, onDeleteAsset }) => {
    return (
        <div className="canvas">
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