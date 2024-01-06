import React, { useState } from "react";
import Jimp from "jimp";

const PhotoEditor = () => {
  const [image, setImage] = useImageContext();
  const [editedPhoto, setEditedPhoto] = useState(null);

  const handleDownload = async () => {
    const imageTobeEdited = await Jimp.read(image);

    imageTobeEdited.resize(300, Jimp.AUTO);

    const buffer = await imageTobeEdited.getBufferAsync(Jimp.MIME_JPEG);
    const blob = new Blob([buffer], { type: Jimp.MIME_JPEG });

    setEditedPhoto(URL.createObjectURL(blob));
  };

  const handleClear = () => {
    setEditedPhoto(null);
  };

  return (
    <div>
      <h1>Photo Editor</h1>
      <button onClick={handleDownload}>Download Edited Photo</button>
      {editedPhoto && (
        <div>
          <img src={editedPhoto} alt="Edited Photo" />
          <button onClick={handleClear}>Clear Edited Photo</button>
        </div>
      )}
    </div>
  );
};

export default PhotoEditor;
