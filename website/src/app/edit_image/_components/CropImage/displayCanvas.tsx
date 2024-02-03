// import { DownloadOutlined } from "@ant-design/icons";
// import { IoIosReturnLeft } from "react-icons/io";
// import { GoZoomIn } from "react-icons/go";
// import { GoZoomOut } from "react-icons/go";
// import { useImageContext } from "@/context/imageContext";
// import { MdOutlineDone, MdOutlineClose } from "react-icons/md";
// import FeedbackForm from "@/components/FeedbackForm";
// import { Button, Card, Flex, FloatButton, Grid, Space } from "antd";
// import React, { useState, useRef } from "react";
// import ReactCrop, { Crop, PixelCrop, centerCrop, makeAspectCrop } from "react-image-crop";
// import { useDebounceEffect } from "./useDebounceEffect";
// import { canvasPreview } from "./canvasPreview";
// const { useBreakpoint } = Grid;
// export default function DisplayCanvas({
//   aspect,
//   imgRef,
//   previewCanvasRef,
//   rotate,

// }) {
//   const screens = useBreakpoint();
//   const [crop, setCrop] = useState<Crop>();
//   const [scale, setScale] = useState(1);
//   const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
//   const [imgSrc, setImgSrc] = useImageContext();
//   const blobUrlRef = useRef("");
//   const [isCroppedSave, setIsCroppedSave] = useState<boolean>(false);
//   const [openFeedbackForm, setOpenFeedbackForm] = useState(false);
//   const hiddenAnchorRef = useRef<HTMLAnchorElement>(null);
//   useDebounceEffect(getCanvasPreview, 100, [completedCrop, scale, rotate]);
//   async function onDownloadCropClick() {
//     // blobUrlRef.current = imgSrc.latest;
//     hiddenAnchorRef.current!.href = imgSrc.latest;
//     hiddenAnchorRef.current!.click();
//   }

//   async function getCanvasPreview() {
//     if (
//       completedCrop?.width &&
//       completedCrop?.height &&
//       imgRef.current &&
//       previewCanvasRef.current
//     ) {
//       // We use canvasPreview as it's much faster than imgPreview.
//       canvasPreview(
//         imgRef.current,
//         previewCanvasRef.current,
//         completedCrop,
//         scale,
//         rotate
//       );
//     }
//   }

//   function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
//     if (aspect) {
//       const { width, height } = e.currentTarget;
//       setCrop(centerAspectCrop(width, height, aspect));
//     }
//   }

//   async function onSaveImage() {
//     const image = imgRef.current;
//     const previewCanvas = previewCanvasRef.current;
//     if (!image || !previewCanvas || !completedCrop) {
//       throw new Error("Crop canvas does not exist");
//     }
//     // This will size relative to the uploaded image
//     // size. If you want to size according to what they
//     // are looking at on screen, remove scaleX + scaleY
//     const scaleX = image.naturalWidth / image.width;
//     const scaleY = image.naturalHeight / image.height;

//     const offscreen = new OffscreenCanvas(
//       completedCrop.width * scaleX,
//       completedCrop.height * scaleY
//     );
//     const ctx = offscreen.getContext("2d");
//     if (!ctx) {
//       throw new Error("No 2d context");
//     }

//     ctx.drawImage(
//       previewCanvas,
//       0,
//       0,
//       previewCanvas.width,
//       previewCanvas.height,
//       0,
//       0,
//       offscreen.width,
//       offscreen.height
//     );
//     // You might want { type: "image/jpeg", quality: <0 to 1> } to
//     // reduce image size
//     const blob = await offscreen.convertToBlob({
//       type: "image/png",
//     });

//     if (blobUrlRef.current) {
//       URL.revokeObjectURL(blobUrlRef.current);
//     }
//     setImgSrc({
//       ...imgSrc,
//       latest: URL.createObjectURL(blob),
//     });
//     blobUrlRef.current = URL.createObjectURL(blob);
//     setIsCroppedSave(true);
//   }

//   return (
//     <>
//       <Card
//         extra={
//           <Flex justify="space-between">
//             {!isCroppedSave ? (
//               <Space>
//                 {" "}
//                 <Button
//                   type="primary"
//                   danger
//                   shape="circle"
//                   onClick={() => {
//                     setImgSrc({
//                       original: null,
//                       latest: null,
//                     });
//                   }}
//                   icon={<MdOutlineClose />}
//                 />
//                 <Button
//                   shape="circle"
//                   style={{ backgroundColor: "#00BF00" }}
//                   type="primary"
//                   onClick={onSaveImage}
//                   icon={<MdOutlineDone />}
//                 />
//               </Space>
//             ) : (
//               <Space>
//                 <Button
//                   icon={<IoIosReturnLeft />}
//                   onClick={() => {
//                     setIsCroppedSave(false);
//                     setImgSrc({ ...imgSrc, latest: null });
//                   }}
//                 />

//                 <Button
//                   type="primary"
//                   icon={<DownloadOutlined />}
//                   onClick={() => setOpenFeedbackForm(true)}
//                 >
//                   Download
//                   <a
//                     href="#hidden"
//                     ref={hiddenAnchorRef}
//                     download
//                     style={{
//                       position: "absolute",
//                       // top: "-200vh",
//                       visibility: "hidden",
//                     }}
//                   >
//                     Hidden download
//                   </a>
//                 </Button>
//               </Space>
//             )}
//           </Flex>
//         }
//         hoverable
//         style={{
//           backgroundColor: "gray",
//           width: `${screens.md ? "70%" : "100%"}`,
//           height: 500,
//         }}
//       >
//         <Flex justify="center" align="center">
//           {!imgSrc.latest && (
//             <FloatButton
//               icon={<GoZoomIn />}
//               onClick={() => {
//                 if (scale <= 5) {
//                   setScale((prevVal) => prevVal + 1);
//                 }
//               }}
//               type="primary"
//               style={{
//                 right: 24,
//                 position: "absolute",
//               }}
//             />
//           )}
//           {!imgSrc.latest && (
//             <FloatButton
//               icon={<GoZoomOut />}
//               onClick={() => {
//                 if (scale >= 2) {
//                   setScale((prevVal) => prevVal - 1);
//                 }
//               }}
//               type="default"
//               style={{
//                 left: 24,
//                 position: "absolute",
//               }}
//             />
//           )}

//           {imgSrc.latest ? (
//             <img
//               // ref={imgRef}
//               alt="Cropped Image"
//               src={imgSrc.latest}
//               className="select-none m-0  "
//               // style={{ transform: `scale(${scale}) rotate(${rotate}deg)` }}
//               onLoad={onImageLoad}
//             />
//           ) : (
//             <ReactCrop
//               crop={crop}
//               onChange={(_, percentCrop) => setCrop(percentCrop)}
//               onComplete={(c) => setCompletedCrop(c)}
//               aspect={aspect}
//               minWidth={100}
//               minHeight={100}
//               ruleOfThirds
//               circularCrop={false}
//             >
//               <img
//                 ref={imgRef}
//                 alt="To be Cropped Image"
//                 src={imgSrc.original}
//                 className="select-none  "
//                 style={{
//                   width: 400,
//                   transform: `scale(${scale}) rotate(${rotate}deg)`,
//                 }}
//                 onLoad={onImageLoad}
//               />
//             </ReactCrop>
//           )}
//         </Flex>
//       </Card>
//       <FeedbackForm
//         isOpen={openFeedbackForm}
//         handleOk={() => {
//           onDownloadCropClick();
//           setOpenFeedbackForm(false);
//         }}
//         handleCancel={() => setOpenFeedbackForm(false)}
//       />
//       <CropedImagePreview
//         completedCrop={completedCrop}
//         previewCanvasRef={previewCanvasRef}
//       />
//     </>
//   );
// }

// //@ts-ignore
// function CropedImagePreview({ completedCrop, previewCanvasRef }) {
//   return (
//     <div>
//       {!!completedCrop && (
//         <div className="hidden">
//           <div>
//             <canvas
//               ref={previewCanvasRef}
//               style={{
//                 border: "1px solid black",
//                 objectFit: "contain",
//                 width: completedCrop.width,
//                 height: completedCrop.height,
//               }}
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// function centerAspectCrop(
//   mediaWidth: number,
//   mediaHeight: number,
//   aspect: number
// ) {
//   return centerCrop(
//     makeAspectCrop(
//       {
//         unit: "%",
//         width: 50,
//       },
//       aspect,
//       mediaWidth,
//       mediaHeight
//     ),
//     mediaWidth,
//     mediaHeight
//   );
// }
