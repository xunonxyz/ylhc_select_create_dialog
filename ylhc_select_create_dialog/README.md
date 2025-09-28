# YLHC Select Create Dialog 扩展模块

## 功能概述

这个模块扩展了Odoo原生的`SelectCreateDialog`，增加了以下功能：

1. **看板视图支持**：在对话框中显示看板视图，对有图片展示的场景更友好
2. **搜索面板支持**：在对话框中显示搜索面板，提供更好的筛选体验

## 使用方法

### 1. 启用看板视图

在调用选择对话框时，在context中添加`view_mode: 'kanban'`：

```javascript
// JavaScript中的使用示例
this.env.services.dialog.add(SelectCreateDialog, {
    res_model: "your.model",
    context: {
        view_mode: 'kanban',  // 启用看板视图
        // 其他context参数...
    },
    // 其他参数...
});
```

```python
# Python中的使用示例
return {
    'type': 'ir.actions.act_window',
    'name': '选择记录',
    'res_model': 'your.model',
    'view_mode': 'form',
    'target': 'new',
    'context': {
        'view_mode': 'kanban',  # 启用看板视图
        # 其他context参数...
    }
}
```

### 2. 启用搜索面板

在context中添加`show_search_panel: true`：

```javascript
// JavaScript中的使用示例
this.env.services.dialog.add(SelectCreateDialog, {
    res_model: "your.model",
    context: {
        show_search_panel: true,  // 启用搜索面板
        // 其他context参数...
    },
    // 其他参数...
});
```

```python
# Python中的使用示例
return {
    'type': 'ir.actions.act_window',
    'name': '选择记录',
    'res_model': 'your.model',
    'view_mode': 'form',
    'target': 'new',
    'context': {
        'show_search_panel': True,  # 启用搜索面板
        # 其他context参数...
    }
}
```

### 3. 同时启用两个功能

```javascript
// 同时启用看板视图和搜索面板
this.env.services.dialog.add(SelectCreateDialog, {
    res_model: "your.model",
    context: {
        view_mode: 'kanban',
        show_search_panel: true,
        // 其他context参数...
    },
    // 其他参数...
});
```

## 技术说明

### 看板视图功能
- 当检测到`context.view_mode === 'kanban'`时，将视图类型设置为kanban
- 自动移除`allowSelectors`属性，因为看板视图中的选择机制可能不同

### 搜索面板功能
- 当检测到`context.show_search_panel`为真值时，启用搜索面板
- 确保`props.display`对象存在，避免错误
- 使用`Boolean()`转换确保类型安全

## 兼容性

- 支持Odoo 18.0版本
- 与原生SelectCreateDialog完全兼容
- 不影响其他功能的正常使用

## 安装

1. 将模块放置在Odoo插件目录中
2. 更新应用列表
3. 安装"YLHC Select Create Dialog with Kanban"模块

## 注意事项

1. 确保目标模型有对应的kanban视图定义
2. 搜索面板功能需要模型视图中定义了searchpanel元素
3. 这些功能是可选的，不使用特殊context参数时行为与原生对话框一致