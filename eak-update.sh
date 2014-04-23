#!/bin/bash
# Ember app kit version update
APPDIR="/Users/wcweb/documents/developer/nodejs/Kashikoi"
PATCHDIR="/Users/wcweb/documents/developer/nodejs/Kashikoi/tmp/eakpatch"
EAKDIR="/Users/wcweb/documents/developer/nodejs/Kashikoi/tmp/ember-app-kit"

cd ${EAKDIR}
git pull
cd ${APPDIR}

# first generate patches of important files
FILES="bower.json package.json Gruntfile.js testem.json .jshintrc .bowerrc" # app/app.js app/adapters/application.js"

echo "Patching application code with updates"
mkdir -p ${PATCHDIR}

for i in ${FILES}
do
  mkdir -p ${PATCHDIR}/$(dirname ${i})
  diff -Nau ${APPDIR}/${i} ${EAKDIR}/${i} > ${PATCHDIR}/${i}
  patch ${APPDIR}/${i} ${PATCHDIR}/${i}
done

echo "updating tasks directory"
rm -rf ${APPDIR}/tasks/*
cp -r ${EAKDIR}/tasks/* ${APPDIR}/tasks/

# API-stub directory
mkdir -p ${APPDIR}/api-stub

cd ${APPDIR}
echo "running npm update"
npm update

echo "running bower update"
bower update
