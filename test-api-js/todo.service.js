class todoservice{
    todo_data = {
        "todo":[{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T2",
            "description": "D1",
            "done": false
        },{
            "title": "T3",
            "description": "D1",
            "done": false
        }]
    }
    constructor(){
        this.todos=this.todo_data;
    }

    get_todos(){
        return this.todos;
    }

    add_todo(todo){
        // Your code here
        this.todos["todo"].push(todo)
        return this.todos
    }

    delete_todo(id){
        // Your code here
        this.todos["todo"] = this.todos["todo"].filter(x => 
             x["title"] !== id
          )
          return this.todos
    }

    update_todo(id, todo){
        // Your code here
        this.todos["todo"] = this.todos["todo"].map(p =>
            p.title === id
              ? { ...p, ...todo }
              : p
          );
          return this.todos
    }
}


module.exports= todoservice;