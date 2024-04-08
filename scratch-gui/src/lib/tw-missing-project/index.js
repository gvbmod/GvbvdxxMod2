/* eslint-disable import/no-unresolved */
import asset1 from '!raw-loader!./real/38b1374bdf8cf1b105c406161a56f1f7.png';
import asset2 from '!raw-loader!./real/3339a2953a3bf62bb80e54ff575dbced.svg';
import asset3 from '!raw-loader!./real/b1d3ca29a18dfcae10a509dab7c182ba.svg';
/* eslint-enable import/no-unresolved */

import projectData from './project-data';
import {TextEncoder} from '../tw-text-encoder';

export const MISSING_PROJECT_ID = '__missing__';

const missingProject = () => {
    const encoder = new TextEncoder();

    const projectJson = projectData();
    return [{
        id: MISSING_PROJECT_ID,
        assetType: 'Project',
        dataFormat: 'JSON',
        data: JSON.stringify(projectJson)
    }, {
        id: "38b1374bdf8cf1b105c406161a56f1f7",
        assetType: 'ImageBitmap',
        dataFormat: 'PNG',
        data: encoder.encode(asset1)
    }, {
        id: "3339a2953a3bf62bb80e54ff575dbced",
        assetType: 'ImageVector',
        dataFormat: 'SVG',
        data: encoder.encode(asset2)
    }, {
        id: "b1d3ca29a18dfcae10a509dab7c182ba",
        assetType: 'ImageVector',
        dataFormat: 'SVG',
        data: encoder.encode(asset3)
    }];
};

export default missingProject;
