const fs = require('fs');
const path = require('path');

const getAllFiles = dir =>
    fs.readdirSync(dir).reduce((files, file) => {
			const name = path.join(dir, file);
			if (!name.includes('node_modules')) {
				const isDirectory = fs.statSync(name).isDirectory();
				if (isDirectory) {
					return [...files, ...getAllFiles(name)]
				}
				if (name.includes('package.json')) {
					return [...files, name];
				}
				return [...files];
			}
			return files;
		}, []);
	
module.exports = getAllFiles(process.cwd());