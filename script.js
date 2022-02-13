window.addEventListener('load', function () {
    const form = document.querySelector("#form");
    const input = document.querySelector("#input");
    const list = document.querySelector("#reality");
    const btn = document.querySelector("#btn-todo-list");

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const task = input.value;
        input.value ="";

        const task_el = document.createElement("div");
        task_el.classList.add("task");
        const task_content_el = document.createElement("div");
        task_content_el.classList.add("todo-item");
        task_content_el.innerText=task;

        task_el.appendChild(task_content_el);

        list.appendChild(task_el);
        task_el.addEventListener('click', function () {
            list.removeChild(task_el);
        });

    });
});