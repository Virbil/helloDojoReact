'use strict';

function add_title(){
    const title = React.createElement("h1", null, `Hello Dojo`);
    ReactDOM.render(title, document.getElementById("title"));
    
    const header = React.createElement("h2", null, `Things I need to do:`)
    ReactDOM.render(header, document.getElementById("header"));
    
    let list = ["*Learn React", "*Climb Mt. Everest", "*Run a marthon", "*Feed the dogs"];
    // function list_items() {
    //     return list.map((toDO) => <li key={toDo}>{toDO}</li>)
    // };
    // list_items();
    
    const theList = React.createElement("ul", null, `${list}`);
    ReactDOM.render(theList, document.getElementById("to-do-list"));
}

add_title()
