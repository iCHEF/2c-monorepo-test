const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// 更全面的 Node.js 模組處理
config.resolver.resolveRequest = (context, moduleName, platform) => {
  // 處理所有 Node.js 內建模組
  const nodeModules = [
    'stream',
    'node:stream',
    'util',
    'node:util',
    'crypto',
    'node:crypto',
    'buffer',
    'node:buffer',
    'events',
    'node:events',
    'fs',
    'node:fs',
    'path',
    'node:path',
    'os',
    'node:os',
    'url',
    'node:url',
    'querystring',
    'node:querystring',
    'http',
    'node:http',
    'https',
    'node:https',
    'net',
    'node:net',
    'tls',
    'node:tls',
  ];

  if (nodeModules.includes(moduleName)) {
    return {
      type: 'empty',
    };
  }

  // 確保調用默認解析器
  return context.resolveRequest(context, moduleName, platform);
};

// 禁用 package.json exports 功能（這可能是問題的根源）
config.resolver.unstable_enablePackageExports = false;

module.exports = config;
