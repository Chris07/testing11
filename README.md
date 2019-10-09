# pxer-homepage <img src="https://api.travis-ci.org/pea3nut/pxer-homepage.svg?branch=master" />

[Pxer's homepage](http://pxer.pea3nut.org)

## 如何增加一个文档

直接在 `src/md/` 目录新建一个 `.md` 文件，文件名会自动挂在到 `/md/[不带".md"的文件名]` 的URL。

当然，增加文档的同时也最好加入文档的入口（从哪来可以点进这个的文档？），目前有3种途径：

1. 在已有的 `.md` 文档增加链接到你文档的链接（最佳实践！推荐过一遍已有文档，见缝插针！）
1. 在 `src/md/_other-link.md` 增加链接（除非你的文档非常不通用，比如某个特定情况的疑难解答，否则建议都在这里加入文档链接）
1. 在导航栏增加链接

