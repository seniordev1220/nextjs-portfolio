import React, { useRef, useEffect } from "react";
import SunEditorCore from "suneditor/src/lib/core";
import dynamic from "next/dynamic";
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File
import axios from "axios";

const SunEditor = dynamic(() => import("suneditor-react"), {
    ssr: false,
});

export const Editor = (props: any) => {
    const editor = useRef<SunEditorCore>();

    // The sunEditor parameter will be set to the core suneditor instance when this function is called
    const getSunEditorInstance = (sunEditor: SunEditorCore) => {
        editor.current = sunEditor;
    };

    const convertToBase64 = (file: Blob) => {
        return new Promise(resolve => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                resolve(reader.result);
            }
        })
    }
    const handleImageUploadBefore = async (files: any, info: any, uploadHandler: any) => {
        console.log(files, info,)

        // const convertedFile = await convertToBase64(files);
        const formData = new FormData();
        formData.append('image', files);
        // const response = await axios.post('/api/v1/image', formData);
        // return response.data;
        const s3URL = await axios.post(
            'http://localhost:3009/images',
           formData
        );
        return s3URL;

    }
    return (
        <div>
            <p> My Other Contents </p>
            <SunEditor setOptions={{

                buttonList: [['font', 'align'], ['image']] // Or Array of button list, eg. [['font', 'align'], ['image']]
                // plugins: [font] set plugins, all plugins are set by default
                // Other option
            }}





                onImageUploadBefore={handleImageUploadBefore} onInput={(e) => console.log(e)} setAllPlugins={true} getSunEditorInstance={getSunEditorInstance} />
        </div>
    );
};
