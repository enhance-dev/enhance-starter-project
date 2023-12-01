#!/usr/bin/env node

const { resolve } = require('path')
const { lstatSync, readdirSync, writeFileSync } = require('fs')
const cwd = process.cwd()

function readDir(directory) {
  let files = []
  readdirSync(directory).forEach(file => {
    let current = resolve(directory, file)
    if (lstatSync(current).isDirectory()) {
      files.push(...readDir(current))
    } else {
      files.push(current.replace(cwd, '@enhance/starter-project'))
    }
  });
  return files
}

let manifest = {
  fileList: []
}

manifest.fileList.push(...readDir('./app'))
manifest.fileList.push(...readDir('./public'))

writeFileSync('./manifest.json', JSON.stringify(manifest))
