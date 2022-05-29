import {Platform} from "react-native";
import * as ImagePicker from "react-native-image-picker";
import ImageCropPicker from 'react-native-image-crop-picker';

export class Uploader {
    public openImagePicker(callback: ((file: any) => void) | undefined = undefined): void {
        try {
            /*ImagePicker.launchImageLibrary(
                {
                    mediaType: 'photo',
                    includeBase64: false,
                    maxHeight: 1920,
                    maxWidth: 1920,
                    selectionLimit: 1,
                },
                (response) => {
                    const targetFile: any = response;

                    try {
                        const [file] = targetFile.assets;
                        const __file = {
                            name: file.fileName,
                            type: file.type,
                            duration: file.duration,
                            uri: Platform.OS === 'android' ? file.uri : file.uri.replace('file://', ''),
                            size: file.fileSize
                        };

                        if (callback) {
                            callback(__file);
                        }
                    } catch (e) {

                    }

                },
            );*/

            ImageCropPicker.openPicker({
                cropping: true,
            }).then(image => {

                const file = {
                    name: "Image.jpg",
                    uri: image.path,
                    size: image.size,
                    type: image.mime,
                };

                if (callback) {
                    callback(file);
                }
            });
        } catch (e) {

        }
    }

    public openVideoPicker(callback: ((file: any) => void) | undefined = undefined): void {
        try {
            ImagePicker.launchImageLibrary(
                {
                    mediaType: 'video',
                    videoQuality: 'medium',
                    quality: 1,
                    selectionLimit: 1,
                },
                (response) => {
                    const targetFile: any = response;

                    try {
                        const [file] = targetFile.assets;
                        const __file = {
                            name: file.fileName,
                            type: 'video/mp4',
                            duration: file.duration,
                            uri: Platform.OS === 'android' ? file.uri : file.uri.replace('file://', ''),
                            size: file.fileSize
                        };

                        if (callback) {
                            callback(__file);
                        }
                    } catch (e) {

                    }
                },
            );
        } catch (e) {

        }
    }
}
