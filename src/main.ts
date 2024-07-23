import { AbsoluteFolderName } from 'ts-fs-utils';

const folder = new AbsoluteFolderName(process.cwd());

console.log(folder.value);

export default folder;
