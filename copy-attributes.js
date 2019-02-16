const writeJsonFile = require('write-json-file');
const package = require('./package.json');
const libraryPackage = require('./projects/kibibit/kb-components/package.json');

(async () => {
  const version = package.version;
  const license = package.license;
  const repository = package.repository;
  const homepage = package.homepage;
  await writeJsonFile('./projects/kibibit/kb-components/package.json',
    Object.assign(libraryPackage, { version, license, repository, homepage }));
})();
