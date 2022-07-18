// import React, { useRef, useEffect } from "react";
// import SunEditorCore from "suneditor/src/lib/core";
// import dynamic from "next/dynamic";
// import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File

// const SunEditor = dynamic(() => import("suneditor-react"), {
//   ssr: false,
// });

// export const Editor = (props:any) => {
//     const editor = useRef<SunEditorCore>();

//     // The sunEditor parameter will be set to the core suneditor instance when this function is called
//      const getSunEditorInstance = (sunEditor: SunEditorCore) => {
//         editor.current = sunEditor;
//     };
//     const handleImageUploadBefore = (files, info, uploadHandler) => {
//         toBase64(files[0]).then(imageInfo => {
//             if (imageInfo) {
//                 const mime = imageInfo.split(';')[0].split(':')[1];
//                 const rawImage = imageInfo.split(';')[1];
//                 this.props.uploadImageToS3(idArticle, mime, rawImage).then(url => {
//                     const response = {
//                         "result": [
//                             {
//                                 "url": `${url}`,
//                                 "name": files[0].name,
//                                 "size": files[0].size
//                             },
//                         ]
//                     };
//                     uploadHandler(response);
//                 })
//             }
//         });
//     }
//     return (
//         <div>
//             <p> My Other Contents </p>
//             <SunEditor setOptions={{
				  
// 					buttonList: [['font', 'align'], ['image']] // Or Array of button list, eg. [['font', 'align'], ['image']]
//                     // plugins: [font] set plugins, all plugins are set by default
// 					// Other option
// 			}} 
            
            
            
            
            
//              onImageUploadBefore={handleImageUploadBefore} onInput={(e)=>console.log(e)} setAllPlugins={true} getSunEditorInstance={getSunEditorInstance} />
//         </div>
//     );
// };
export const x=()=>{
    
}