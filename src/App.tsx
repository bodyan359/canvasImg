import './App.css'
import {Canvas} from "./components/Canvas/Canvas";
import React, {useState} from "react";
import {AssetInput} from "./components/AssetInput/AssetInput";

function App() {
    const [assets, setAssets] = useState<any[]>([]);

    const addAsset = (asset: any) => {
        setAssets([...assets, asset]);
    };

    const moveAsset = (index: number, x: number, y: number) => {
        const updatedAssets = [...assets];
        updatedAssets[index] = { ...updatedAssets[index], x, y };
        setAssets(updatedAssets);
    };

    const resizeAsset = (index: number, width: number, height: number) => {
        const updatedAssets = [...assets];
        updatedAssets[index] = { ...updatedAssets[index], width, height };
        setAssets(updatedAssets);
    };

    const deleteAsset = (index: number) => {
        const updatedAssets = [...assets];
        updatedAssets.splice(index, 1);
        setAssets(updatedAssets);
    };

    const printLogs = () => {
        console.table(assets);
        console.log(assets);
    }

  return (
    <>
        <AssetInput onAddAsset={addAsset} />
        <Canvas
            assets={assets}
            onAssetMove={moveAsset}
            onAssetResize={resizeAsset}
            onDeleteAsset={deleteAsset}
        />
        <button onClick={printLogs}>Logs (console)</button>
    </>
  )
}

export default App
