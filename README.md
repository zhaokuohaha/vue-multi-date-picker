
<p align="center"><a href="http://123.206.203.65:8000/" target="_blank"><img width="100"src="./src/assets/logo.png"></a></p>

# vue-multi-date-picker

## [Demo](http://demo.oldzeng.com/)
> A date picker for vue2.x support multi selection

## Build Setup

``` bash
# clone
git clone git@github.com:zhaokuohaha/vue-multi-date-picker.git
cd vue-multi-date-picker

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## Property

|property|type|defaults|comment|
|---|---|---|---|
|model|Array (multi = true) , Date (multi = false)|- |the model of date picker|
|multi| Boolean| true |use multi select |
|disp| Array<String>|['日', '一', '二', '三', '四', '五', '六','年', '月', '取消', '确定']| Customize display text. The order of array must strict |
|lang| String | 'zh' | Set to 'en' to translate to english |
|format| Function | `function (date) { return date.toLocaleDateString(); }` | Accepts a function with a date argument and returns a string |
|always-display| Boolean | false | Always display the date picker |

## Usage

> Notice: selected dates are UTC formatted

### Manually
1. Copy `/src/lib/multiDatePicker.vue` to your project

2. Use as component 
```html
<template>
  <div>
    <m-date-picker v-model="date" :multi="multi" :always-display="false" :format="formatDate"></m-date-picker>
  </div>
</template>

<script>
  import mDatePicker from 'path/to/multiDatePicker'
  export default {
    data () {
      return {
        multi: true,
        date: []
      }
    },
    components: {
      'm-date-picker': mDatePicker
    },
    methods: {
      formatDate(date) {
        return data.toLocaleDateString();
      }
    }
  }
</script>
```

### npm

1. Install 
```shell
npm install -S vue-multi-date-picker
```

2. Use plugin
```js
// main.js
import mDatePicker from 'vue-multi-date-picker'
// ...
Vue.use(mDatePicker)
```
```html
<!-- your component -->
<template>
  <div>
    <m-date-picker v-model="date" :multi="multi" :always-display="false" :format="formatDate"></m-date-picker>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        multi: true,
        date: []
      }
    },
    methods: {
      formatDate(date) {
        return data.toLocaleDateString();
      }
    }
  }
</script>
```
For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
