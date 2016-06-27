/**
 * @file existsSync
 * @author JoeRay61
 * @email joeray199261@gmail.com
 */

import {statSync} from 'fs';

let existsSync = (filePath) => {
    let isExists;
    try {
        let stat = statSync(filePath);
        isExists = stat.isFile();
    }
    catch (e) {
        isExists = false;
    }
    return isExists;
};

export default existsSync;
