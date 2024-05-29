在CSS中指定自定义字体（例如 `SourceHanMono-Medium.otf`）需要以下几个步骤：

1. **准备字体文件**：确保你的字体文件（例如 `SourceHanMono-Medium.otf`）已经放置在你的项目目录中，通常会放在一个 `fonts` 文件夹中。

2. **使用 `@font-face` 规则**：在你的CSS文件中使用 `@font-face` 规则来定义自定义字体。

3. **应用字体**：在需要的地方应用你定义的字体。

以下是一个完整的示例：

### 1. 准备字体文件
假设你的项目结构如下：
```
/project
  /css
    styles.css
  /fonts
    SourceHanMono-Medium.otf
```

### 2. 使用 `@font-face` 规则
在你的 `styles.css` 文件中添加以下代码：

```css
@font-face {
  font-family: 'SourceHanMono';
  src: url('../fonts/SourceHanMono-Medium.otf') format('opentype');
  font-weight: 500; /* 可选：根据字体的实际权重设置 */
  font-style: normal; /* 可选：根据字体的实际样式设置 */
}
```

### 3. 应用字体
现在你可以在你的CSS中使用这个自定义字体：

```css
body {
  font-family: 'SourceHanMono', sans-serif;
}
```

### 完整示例
以下是一个完整的示例代码：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Custom Font Example</title>
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <h1>这是一个使用自定义字体的示例</h1>
</body>
</html>
```

```css
/* styles.css */
@font-face {
  font-family: 'SourceHanMono';
  src: url('../fonts/SourceHanMono-Medium.otf') format('opentype');
  font-weight: 500; /* 可选 */
  font-style: normal; /* 可选 */
}

body {
  font-family: 'SourceHanMono', sans-serif;
}
```

### 注意事项
1. **字体格式**：`format('opentype')` 是针对 `.otf` 文件的。如果你有其他格式的字体文件（例如 `.woff`, `.woff2`, `.ttf`），可以添加多个 `src` 声明以提高兼容性。
2. **字体权重和样式**：如果你的字体文件有不同的权重和样式（例如粗体、斜体），可以定义多个 `@font-face` 规则来分别处理它们。
3. **浏览器兼容性**：确保你的字体文件格式能够被目标浏览器支持。通常 `.woff` 和 `.woff2` 格式具有更好的兼容性。

通过这些步骤，你就可以在CSS中指定并使用自定义字体了。