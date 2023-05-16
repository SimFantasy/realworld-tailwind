# realworld-tailwind
技术栈：react + vite + tailwindcss + valtio + axios + @tanstack/react-query + formik

记录下踩坑和问题：
1. 之前使用`mantine`来做的，使用了`mantineform`，都是官方的`form`包了UI库里form那么多组件竟然只支持`input`和`checkbox`，`textarea`都获取不到数据。
2. `mantine`的第二个问题是对样式`props`的支持不足，每次都感觉需要用`style`来补充，虽然有`sx`但是对象的方式来写样式不是很喜欢。写起来也麻烦，增加页面复杂度。
3. 另外就是使用`react-query`的问题了，获取数据的状态和缓存都很棒，甚至没联网也能拿到之前的数据，但是对数据更新让缓存失效引申出来的对`queryKey`的管理也是个问题，看到官方也应该有这个意思，有两个对`queryKey`和`queryFn`管理的包推荐，使用了下`Query Key Factory`，可以比较方便的获取到对应的`queryKey`，但是要带上其他的参数作为`queryKey`会参数无法获取到`undefined`，看到了也有对应的`Issues`没有解决。不过不带参数的话也是能用，会在下个版本中尝试下。
4. 另外，就是对整个项目做下来，才理解到对应的API设计和模块功能，所以在`hooks`和组件这块有很多重复的使用，需要在下个版本中优化掉。
5. 对一些公共的UI组件没有提取成`class`，造成一些组件样式重复度很高，也需要在下个版本优化掉。
