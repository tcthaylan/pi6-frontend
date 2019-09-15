import { decorate, action, observable } from 'mobx'

class TestStore {
  list = 'lista'

  getList() {
    console.log(this.list)
  }
}

decorate(TestStore, {
  list: observable,
  getList: action,
})

export default new TestStore();