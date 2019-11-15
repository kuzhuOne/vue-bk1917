import LoadingView from "./index.vue";
import Vue from "vue";
class JSLoading {
    constructor() {
        let LoadingFn = Vue.extend(LoadingView);
        this.loadingVm = new LoadingFn({
            el: document.createElement("div")
        })
    }
    static type = "class";
    loadingMount() {
        document.body.appendChild(this.loadingVm.$mount().$el)
    }
    loadingDestroy() {
        document.body.removeChild(this.loadingVm.$mount().$el)
    }

}





export default new JSLoading();


/*
    vue.extend实现继承

*/