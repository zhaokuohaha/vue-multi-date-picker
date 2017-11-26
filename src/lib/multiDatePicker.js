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
        let day = new Date(this.seleYear, this.seleMonth, i, 8)
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
    selectIndex: function (item) {
      if (!this.multi || !this.selected) {
        return -1
      }
      for(let i = 0; i<this.selected.length; i++){
        if(this.selected[i].getTime() == item.date.getTime()){
          return i
        }
      }
      return -1
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
        this.submitSelect(item.date)
      } else {
        let index = this.selectIndex(item)
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