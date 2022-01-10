# 简介
Cocos Creator 工程，使用 v3.5.0 正在开发的版本，用以构建输出 OpenHarmony 平台

# 模块剔除
目前有很多模块还没接起来，如果需要接入对应模块，请在项目偏好设置里，把对应模块勾起来，再构建项目，输出 cc.js

# 已知问题
- 构建时不要勾选 Md5Cache
- 构建后已知的几个文件需要手动修改引用路径
    - local.properties
    - gradle.properties
    - build.gradle
- 文件接口还没接起来，settings.json 目前使用硬编码的 settings.js
- application.js、game.ts 也不是使用的构建模板，而是直接拷贝现成的