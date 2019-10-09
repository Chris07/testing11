# 使用FFmpeg合成动图

Pxer具有自动抓取动图参数的功能，开启后会在输出页生成一段可以调用[FFmpeg](https://ffmpeg.org)生成动图mp4/gif的脚本（根据系统环境自动选择DOS(.bat)或bash(.sh/.command)格式）。 和网上很多固定间隔的动图生成方式相比，Pxer使用了FFmpeg的[ConcatDemuxer](https://trac.ffmpeg.org/wiki/Slideshow#Concatdemuxer)功能，可以准确的还原动图原本的每帧时长。

## 关于FFmpeg

[ffmpeg](https://ffmpeg.org/ffmpeg.html)是[FFmpeg团队](https://ffmpeg.org)开发的一款处理图像和视频流的命令行工具，采用[GNU GPLv3](http://www.gnu.org/licenses/)协议开源,Pxer并没有内置ffmpeg或使用ffmpeg中的任何代码，仅仅提供一个方便的调用ffmpeg生成动图的途径。

## 使用方法

### 下载ffmpeg

你可以在[这里](https://ffmpeg.org/download.html)下载到ffmpeg的官方build，下载后请将压缩包bin文件夹下的ffmpeg可执行文件复制到PATH中，如果你不知道PATH是什么，复制到工作目录(动图压缩包的下载目录)中也可以。

### 下载动图压缩包并解压

使用第三方下载工具下载动图之后（不要更改文件名），请使用解压工具将zip`"提取到*/"`（以7z为例，其它压缩软件相仿，即每个压缩文件解压到各自文件名对应的文件夹中) 解压后工作目录下文件结构应类似这样：
```
│  57532237_ugoira1920x1080.zip
│  57532250_ugoira1920x1080.zip
│  ffmpeg.exe
│
├─57532237_ugoira1920x1080
│      000000.jpg
│      000001.jpg
│
├─57532250_ugoira1920x1080
│      000000.jpg
│      000001.jpg
```

### 准备批处理文件

请将Pxer生成的批处理复制到工作目录下新建的一个文本文件中，后缀名改为.bat(Windows) .sh(Linux) .command(Mac)

### 运行批处理

- 对于Windows 双击运行bat文件，输入你希望输出的文件扩展名，执行完成后生成的动图会存放在对应的文件夹中。

- 对于Linux和Mac 请先赋予批处理可执行权限 之后双击运行批处理，输入你希望输出的文件扩展名，执行完成后生成的动图会存放在对应的文件夹中。