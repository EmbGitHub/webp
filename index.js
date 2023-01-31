import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

await imagemin(['src/*.{jpg,png}'], {
	destination: 'build',
	plugins: [
		imageminWebp({
            quality: 75,
            resize: {
                width: 1920,
                height: 1080
            }

        })
	]
});

console.log('Images optimized');