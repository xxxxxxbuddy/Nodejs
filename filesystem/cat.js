#!/usr/bin/env node
require('fs').createReadStream(process.argv[2]).pipe(process.stdout);

// 第一行加#!可在linux系统下直接运行
// 需要给cat.js 授权
// chmod +x cat.js