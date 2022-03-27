import * as uuid from 'uuid';
import * as path from 'path';
import sharp from 'sharp'
import { writeFileSync } from 'fs';

class FileService {
    async saveFile(files) {
        const fileList = []
        const fileOutputFormats = ['.png', '.webp', ".avif"]
        const extensionsList = ['image/png', 'image/webp', 'image/avif', 'image/jpg', 'image/jpeg'];

        for (const index in files) {
            if (extensionsList.indexOf(files[index].mimetype) !== -1 && files[index].size < 150000000) {
                try {
                    const inputsImage = files[index].data
                    const fileName = uuid.v4();
                    const filePath = path.resolve('static/img', fileName);
                    fileOutputFormats.forEach(async format => {
                        switch (format) {
                            case '.webp': writeFileSync(filePath + format, await sharp(inputsImage)
                                .webp({ quality: 80 })
                                .toBuffer())
                            case '.avif': writeFileSync(filePath + format, await sharp(inputsImage)
                                .png({ quality: 80 })
                                .toBuffer())
                            case '.png': writeFileSync(filePath + format, await sharp(inputsImage)
                                .avif({ lossless: true })
                                .toBuffer())
                        }
                    });
                } catch (error) {
                    throw new Error(error)
                }
                fileList.push(fileName)
            }
        } return fileList;
    }
}

export default new FileService();
