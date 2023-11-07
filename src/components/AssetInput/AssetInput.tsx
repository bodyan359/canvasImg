import { useState} from "react";
interface AssetInputProps {
    onAddAsset: (asset: any) => void;
}

export const AssetInput: React.FC<AssetInputProps> = ({ onAddAsset }) => {
    const [url, setUrl] = useState<string>('');

    const fetchAssetInfo = async (url: string) => {
        try {
            const response = await fetch(url);
            const contentType = response.headers.get("Content-Type");

            if (contentType === "image/jpeg") {
                const img = new Image();
                img.src = url;
                return new Promise((resolve) => {
                    img.onload = () => {
                        const width = img.width;
                        const height = img.height;
                        const aspectRatio = width / height;
                        resolve({width, height, aspectRatio});
                    };
                });
            } else if (contentType === "video/mp4") {
                const video = document.createElement("video");
                video.src = url;

                return new Promise((resolve) => {
                    video.addEventListener("loadedmetadata", () => {
                        const width = video.videoWidth;
                        const height = video.videoHeight;
                        const aspectRatio = width / height;
                        resolve({width, height, aspectRatio});
                    });
                });
            }

            return contentType === "image/jpeg" || contentType === "video/mp4";
        } catch (error) {
            console.error("Error while fetching asset info:", error);
            return false;
        }
    };


    const handleAddAsset = async () => {
        try {
            const isAsset = await fetchAssetInfo(url.replace(/\s+/g, ''));

            if (isAsset) {
                let newWidth = window.innerWidth > isAsset.width ? isAsset.width: window.innerWidth * 0.8;
                let newHeight = window.innerWidth > isAsset.width ? isAsset.height : window.innerWidth * 0.8/isAsset.aspectRatio;
            const asset: any = {
                    url: url.replace(/\s+/g, ''),
                    x: 100,
                    y: 200,
                    width: newWidth,
                    height: newHeight,
                    aspectRatio: isAsset.aspectRatio,
                };
                onAddAsset(asset);
                setUrl('');
            } else {
                alert("URL is not an asset (image or video)");
            }
        } catch (error) {
            console.error("Error in handleAddAsset:", error);
        }
    };


    return (
        <div className="asset-input">
            <input
                type="text"
                placeholder="Enter URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
            />
            <button onClick={handleAddAsset} disabled={url.length < 4}>Add Asset</button>
        </div>
    );
};