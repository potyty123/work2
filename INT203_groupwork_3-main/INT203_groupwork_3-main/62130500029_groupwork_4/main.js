const app = {
    data() {
        return {
            tasks: [{title: 'Geysers Valley, Russia', image: 'images/geysers_valley.jpg',done: false},
                    {title: 'Khumbu Valley, Nepal', image: 'images/khumbu_valley.jpg',done: false},
                    {title: 'Waipi o Valley, Hawaii', image: 'images/waipio_valley.jpg', done: false},                   
                ],
            done2: false,
            done3: true,
            inputTask: ''
        }
    },
    methods: {
        toggleDone(index){
            this.tasks[index].done = !this.tasks[index].done
        },
        
    },addNewTask(){
        if(this.inputTask.toLowwerCase() == hawaii){
            let newTask = { title: this.inputTask, done: false}
                this.tasks.push(newTask)
                this.inputTask = ''
        }
    },
    computed: {
        countUndone(){
            return this.tasks.filter( t => t.done ).length
        }
    },

    
}
Vue.createApp(app).mount('#app')

