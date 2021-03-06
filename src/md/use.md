## Pxer使用手册

充分挖掘Pxer的功能。

### 启动

当你在浏览器中安装了Pxer后，打开“Pxer所支持的页面”Pxer面板会自动出现在P站页面中

![](/static/images/pxer-ui-show.png)

页面中没有出现Pxer面板，那么可能有：

- 没有正确安装
- Pxer不支持这个页面
- Pxer支持这个页面，但是出现了Bug

检查Pxer是否安装成功参考[这里](/md/install_2)，其他情况可以加入[Pxer官方群](https://jq.qq.com/?_wv=1027&k=46nvvs6)询问群内dalao。

### 使用

通常Pxer面板上只有一个按钮可以让你点击，结合颜色你可以很容易猜出这个按钮的用途

![](/static/images/pxer-ui-gif.gif)

使用起来几乎没有什么上手难度。

当Pxer抓取完毕，会自动弹出一个包含下载地址的窗口，将下载地址复制到第三方下载工具中即可下载，比如QQ旋风。具体的第三方下载工具的选择可以[参考这个讨论](https://github.com/pea3nut/Pxer/issues/8)。

接下来介绍一些Pxer的高级使用技巧

#### 配置批量抓取参数

这里说明下执行批量任务时确认窗口中的3个配置信息各是什么意思：

- 线程数：同时发起的Ajax请求数，除非你**十分确定自己在做什么**，否则不要设定超过16
- 等待时间：单个请求的等待时间，若网络环境**时延**不稳定可以适当增大
- 重试次数：单个请求失败后可以重新尝试的次数，若网络环境**丢包率**较高可以适当增大

如果不确定自己适合什么样的参数，那么直接选择默认参数就没问题了~

#### 设置批量抓取的停止选项

如果你在P站搜索一个热门关键字，那么可能会有成千上万的作品，除了在抓取过程中手动停止，Pxer还允许你配置“批量抓取的停止选项”。

![](pxer-option-show.png)

##### 仅抓取前x副

仅抓取当前页面的前x副作品。

假如你拥有P站会员，你可以按热门排序并将此项设置为100，这样你就拿到了最热门的前100副作品。

Pxer抓取会自动读取当前页面的作品排序（按热门、按时间等），利用此功能可以很方便定位某种排序的前几幅作品。

##### 仅抓取id为x之前的

当Pxer抓取过程中，遇到作品id为x则停止抓取不再抓取后续作品（也不会抓取x本身）。

这在同步画师新作时格外有用。

假如上一次抓取的画师作品为`111`、`222`、`333`，而画师又投稿了`444`和`555`，那么你就可以在这里填写上一次抓取id最大的作品`333`，则Pxer只会抓取画师最新投稿的`444`和`555`。

##### 抓取动图参数

Pxer具有自动抓取动图参数的功能，开启后会在输出页生成一段可以调用[FFmpeg](https://ffmpeg.org)生成动图mp4/gif的脚本（根据系统环境自动选择DOS(.bat)或bash(.sh/.command)格式）。详细使用方法见[这里](ugoira_concat)
