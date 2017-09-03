# vue-multi-date-picker

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
|property|type|comment|
|---|---|---|
|model| Array (multi = true) , Date (multi = false)| the model of date picker|
|multi| Boolean| use multi select |

## Usage

### Manually
1. Coppy `/src/lib/multiDatePicker.vue` to your project

2. Use as component 
```html
<template>
  <div>
    <m-date-picker v-model="date" :multi="multi"></m-date-picker>
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
    }
    components: {
      'm-date-picker': mDatePicker
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
    <m-date-picker v-model="date" :multi="multi"></m-date-picker>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        multi: true,
        date: []
      }
    }
  }
</script>
```
For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
