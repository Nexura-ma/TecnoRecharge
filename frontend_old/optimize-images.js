import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, 'public');

const processDirectory = async (dir) => {
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            await processDirectory(filePath);
        } else {
            const ext = path.extname(file).toLowerCase();
            if (['.jpg', '.jpeg', '.png'].includes(ext)) {
                const fileName = path.basename(file, ext);
                const webpPath = path.join(dir, `${fileName}.webp`);

                console.log(`Converting ${file} to WebP...`);
                
                try {
                    await sharp(filePath)
                        .webp({ quality: 80 }) // Good balance of quality and size
                        .toFile(webpPath);
                    console.log(`Generated ${webpPath}`);
                } catch (error) {
                    console.error(`Error converting ${file}:`, error);
                }
            }
        }
    }
};

processDirectory(publicDir);
