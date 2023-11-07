import React, {useEffect, useState} from "react";
import {DeleteButton, DragBorder} from "./Asset.styled";

interface AssetProps {
    asset: any;
    onMove: (x: number, y: number) => void;
    onResize: (width: number, height: number) => void;
    onDelete: () => void;
}

export const Asset: React.FC<AssetProps> = ({ asset, onMove, onResize, onDelete }) => {
    const [width, setWidth] = useState(asset.width);
    const [height, setHeight] = useState(asset.height);

    const isVideo = asset.url.endsWith('.mp4') || asset.url.endsWith('.webm');

    let isResizing = false;

    const handleResize = (e: React.MouseEvent) => {
        isResizing = true;

        function handleDrag(e: MouseEvent) {
            if (isDragging) {
                const newWidth :number = e.clientX;
                const newHeight :number = newWidth / asset.aspectRatio;
                setWidth(()=> newWidth);
                setHeight(()=> newHeight);
                onResize(newWidth, newHeight);
            }
        }

        function handleDragEnd() {
            isResizing = false;
            document.removeEventListener('mousemove', handleDrag);
            document.removeEventListener('mouseup', handleDragEnd);
        }

        document.addEventListener('mousemove', handleDrag);
        document.addEventListener('mouseup', handleDragEnd);

    };

    let isDragging = false;

    const handleDragStart = (e: React.MouseEvent) => {
        isDragging = true;
        const offsetX = e.clientX - e.currentTarget.getBoundingClientRect().left;
        const offsetY = e.clientY - e.currentTarget.getBoundingClientRect().top;
        function handleDrag(e: MouseEvent) {
            if (isDragging) {
                const newX = e.clientX - offsetX;
                const newY = e.clientY - offsetY;
                onMove(newX, newY);
            }
        }

        function handleDragEnd() {
            isDragging = false;
            document.removeEventListener('mousemove', handleDrag);
            document.removeEventListener('mouseup', handleDragEnd);
        }

        document.addEventListener('mousemove', handleDrag);
        document.addEventListener('mouseup', handleDragEnd);
    };

    return (
        <div className="asset">
            <div className="asset-content"  onMouseDown={handleDragStart}
                 style={{position:'absolute', left: asset.x, top: asset.y, width:width + 'px', height: height + 'px'}}>
                <DeleteButton onClick={onDelete}>Remove</DeleteButton>
                {isVideo ? (
                    <video src={asset.url} muted controls width={width + 'px'}
                           height={height + 'px'}>
                    </video>
                ) : (
                    <img src={asset.url} alt="Asset" width={width + 'px'}
                         height={height + 'px'} />
                )}
                <DragBorder onMouseDown={handleResize}/>
            </div>
        </div>
    );
};