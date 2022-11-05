

var todoservice = require('./todo.service.js');
describe('todo test suite', () => {

    test("truth_value", () => {
        expect(true).toBe(true);
    });
    
    let todo_service = new todoservice();

    test("if service instance is created", () => {
        expect(todo_service instanceof todoservice).toBe(true);
    });

    
    // Initial length of the todo list is 3 // 3 default tasks
    test("get_todos", () => {
        expect(todo_service.get_todos().todo.length).toEqual(3);
    });

    

    // Write all your test cases here that corresponds to software requirements
    //test for add functionality
    test("add todo to the list", () =>{
        expect(todo_service.add_todo({
            "title": "T1",
            "description": "D1",
            "done": false
        }).todo.length).toEqual(4)
    })

    test("delete todo to the list", () =>{
        expect(todo_service.delete_todo("T1").todo.length).toEqual(2)
    })

    test("update todo to the list", () =>{
        expect(todo_service.update_todo("T2",{"done":true}).todo.filter(obj =>  obj.title == "T2")[0]).toEqual({"description": "D1", "done": true, "title": "T2"})
    })


});