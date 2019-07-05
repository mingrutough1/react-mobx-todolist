
import { observable, action }from 'mobx';
class Store {
    @observable inputText = '';
    @observable todoList = [];

    @action.bound addNewTodo() {
        this.todoList = [{
            finished: false,
            text: this.inputText,
            id: +new Date()
        }, ...this.todoList];
        this.inputChange('');
    }
    @action.bound finishTodo(id) {
        this.todoList = this.todoList.map(item => {
            if (item.id === id) {
                item.finished = true;
            }
            return item;
        })
    }
    @action.bound inputChange(text) {
        this.inputText = text;
    }
}

export default Store;