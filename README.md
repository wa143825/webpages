
# 前言

根据公司需求，要做对SEO友好的网站，SPA页面的痛点就是对搜索引擎不友好，且首屏加载过慢，虽然可以使用SSR，但咱还没学会啊，还是用传统方式开发，所以想写一个多页面的webpack打包，提高开发效率，方便后期维护，
>1.使用热更新功能，省区手动刷新的过程
>2.将页面进行抽离，html组件化开发
>3.使用pug模板引擎，再搭配stylus预处理器

注：借鉴(搬运)了一些大神的源码，根据自己需求改了一点，非原创

## 技术选型

webpack + pug + stylus + es6


## 项目运行

```
git clone https://github.com/wa143825/webpages.git

cd webpages

npm install    推荐用cnpm

npm run dev

```

运行后你会看见一个很烂的页面~


## 注意事项

1.src里面只分了两个文件夹，assets和pages文件夹

2.每一个页面组件，文件夹名，js，pug(html)文件名要相同



# 特别说明(甩锅)

1.webpack不是很熟练，可能还有很多未知的bug，后期使用中会进行维护

2.注释不是特别完善，代码缩进也不统一，eslint在计划中



