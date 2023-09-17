---
author: holyChan
tags: hash 校验
created: 2022-08-06 20:39:45
modified: 2023-09-11 23:56:12
title: 文件hash值校验
---

# 文件 hash 值校验

## 一、使用 7-zip

7-zip 是一款免费的解压缩工具，其也可以用于 `SHA1`、`SHA256` 校验

在安装 7-zip 之后，只需在资源管理器中选中需要验证的文件，然后右键单击，在弹出的快捷菜单上，选择==CRC SHA== --> `SHA-1` 或 `SHA-256`，7-Zip 就会计算该文件的 SHA1 或 SHA256 值。

![[Pasted image 20220326231851.png]]

## 二、Windows 命令行或 PowerShell 生成 hash

运行如下命令，为指定文件生成 hash

```shell
CertUtil -hashfile FileName [HashAlgorithm]
```

- ==`FileName`==：需要校验的文件路径，如果该文件不在当前工作目录，需要输入完整的文件路径。
  > 对于 PowerShell，文件路径中如果有空格，还需要用引号把路径括起来，并在最前面插入一个&
- ==`[HashAlgorithm]`==：hash 算法，可替换的值有：`MD2`、`MD4`、`MD5`、`SHA1`、`SHA256`、`SHA384`、`SHA512`

CertUtil 是命令行的外部命令，certutil.exe 位于 `C:\Windows\System32` 文件夹中，`-hashfile` 是 CertUtil 众多参数中的一个。更多帮助信息可以在命令行或 PowerShell 中输入 `CertUtil -hashfile /?` 获取。
