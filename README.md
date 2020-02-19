### 1.介绍

命令行天气查询应用
　
### 2.运行
　　　　　　
运行前准备，先注册由高德所提供的天气查询API的开发者，需要经过个人开发者认证．

```bash
npm i
npm run start
```

### 3.从该项目学到的东西

+ 1.typescript项目环境搭建：首先先将typescript，ts-node作为运行时依赖进行引入．其中前者提供了tsc进行编译，后者提供了运行时．
+ 2.tsc --init可以生成一个默认的编译配置文件．如果你的项目找不到tsc命令的话，那么自己配置一个npm script即可．
+ 3.使用tslint来约束代码风格，tslint --init可以生成一个默认的约束规则文件．没用该命令的话配置同上．
+ 4.使用husky进行推送检查，避免不符合规则的代码推送到了远程．具体配置看package.json文件即可．
+ 5.使用commander模块进行命令行开发．
+ 6.如果项目中用到了nodejs的话，那么我们还需要引入node的类型声明文件，使用npm i @types/node即可．