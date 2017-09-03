<template>
  <div class="container">
    <div class="selected-date" @click="panelShow = !panelShow">
      <div style="display: flex;flex-wrap: wrap;" v-if="multi">
        <div class="sel-values" v-for="(item,index) in selected" :key="index" >
          {{item.toLocaleDateString()}}
        </div>
      </div>
      <div v-else>
        {{selected ? selected.toLocaleDateString() : ''}}
      </div>
    </div>
    <div class="pick-panel" v-show="panelShow">
      <div class="dp-header">
        <div class="btn btn-link last-year" @click="seleYear--"></div>
        <div class="btn btn-link last-month" @click="seleMonth--"></div>
        <div class="btn btn-link sele-year">
          {{seleYear}}年
        </div>
        <div class="btn btn-link sele-month">
          {{seleMonth+1}}月
        </div>
        <div class="btn btn-link next-month" @click="seleMonth++"></div>
        <div class="btn btn-link next-year" @click="seleYear++"></div>
      </div>
      <div class="dp-body">
        <div class="cal-container">
          <div class="cal-item">日</div>
          <div class="cal-item">一</div>
          <div class="cal-item">二</div>
          <div class="cal-item">三</div>
          <div class="cal-item">四</div>
          <div class="cal-item">五</div>
          <div class="cal-item">六</div>
          <div class="cal-item" @click="toggleSelect(item)" v-for="(item,index) in renderCalendar" :key="index" 
          :class="[item.iscur? 'cal-enable' : 'cal-disable', isSelected(item)  ? 'cal-select' : '']">
            {{item.label}}
          </div>
        </div>
      </div>
      <div class="dp-footer" v-show="multi">
        <div class="btn btn-cancel" @click="cancelSelect">Cancel</div>
        <div class="btn btn-ok" @click="submitSelect(selected)">OK</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mDatePicker',
  data () {
    return {
      panelShow: false,
      seleDate: new Date(),
      seleYear: new Date().getFullYear(),
      seleMonth: new Date().getMonth()
    }
  },
  props: {
    multi: Boolean,
    value: [Array, String, Date]
  },
  computed: {
    renderCalendar: function () {
      let firDay = 0 - (new Date(this.seleYear, this.seleMonth, 1).getDay()) + 1
      let res = []
      for (let i = firDay, index = 0; index < 42; i++, index++) {
        let day = new Date(this.seleYear, this.seleMonth, i)
        let calObj = {
          label: day.getDate(),
          date: day,
          iscur: day.getMonth() === this.seleMonth
        }
        res.push(calObj)
      }
      return res
    },
    selected: function () { return this.value }
  },
  methods: {
    isSelected: function (item) {
      if (!this.multi || !this.selected) {
        return false
      }
      return this.selected.indexOf(item.date) >= 0
    },
    cancelSelect: function () {
      if (this.multi) {
        this.selected.splice(0, this.selected.length)
      } else {
        this.selected = null
      }
      this.panelShow = false
    },
    toggleSelect: function (item) {
      if (!this.multi) {
        // this.selected = item.date
        this.submitSelect(item.date)
      } else {
        let index = this.selected.indexOf(item.date)
        if (index < 0) {
          this.selected.push(item.date)
        } else {
          this.selected.splice(index, 1)
        }
      }
    },
    submitSelect: function (value) {
      this.$emit('input', value)
      this.panelShow = false
    }
  }
}
</script>

<style>
.selected-date{
  cursor: pointer;
  min-height: 28px;
  padding: 3px 10px;
  border-radius: 3px;
  border: 1px solid rgb(191, 203, 217);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  min-width: 195px;
  max-width: 230px;
}
.pick-panel{
  width: 280px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #48576a;
  border: 1px solid #d1dbe5;
  box-shadow: 0 2px 6px #ccc;
  background: #fff;
  border-radius: 2px;
  line-height: 20px;
  margin: 5px 0;
  z-index: 10;
}
 
.last-year:before{content: "<<"}
.last-month:before{content: "<"}
.next-month:before{content: ">"}
.next-year:before{content: ">>"}
.btn{cursor: pointer; padding: 3px; margin: 0 8px;}

.btn-link:hover{
  color: #61C3FF
}
.dp-header{
  display: flex;
}
.dp-footer{
  width: 90%;
  display: flex;
  justify-content: flex-end;
  padding: 8px;
  margin: 8px;
  border-top: 1px solid #daa
}

.cal-container{
  width: calc(7*34px);
  display: flex;
  flex-wrap: wrap
}

.cal-item{
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1px;
}
.cal-enable{
  cursor: pointer;
}
.cal-enable:hover{
  background-color: #E4E8F1;
}
.cal-disable{
  color: #d4d8d1;
  cursor: default
}
.cal-select{
  background-color: #61C3FF
}

.btn-ok{
  color: #61C3FF;
  /* font-weight: bold; */
  font-size: 1rem;
}
.sel-values{
  
  background-color: rgba(32,160,255,.1);
  border-color: rgba(32,160,255,.2);
  color: #20a0ff;
  height: 24px;
  line-height: 24px;
  box-sizing: border-box;
  font-size: 12px;
  margin: 3px;
  padding: 0 5px;
  border-radius: 3px;
}
</style>
