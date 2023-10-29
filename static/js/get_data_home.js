// Function to fetch data from the API
function fetchData() {
    fetch('http://127.0.0.1:8000/task/uncompleted/tasks/')
        .then(response => response.json())
        .then(data => displayData(data))
        .catch(error => console.error('Error:', error));
}

// Function to display the data in the task_Box div
function displayData(data) {

    const taskBox = document.getElementById('task_Box');

    // Clear any existing content
    taskBox.innerHTML = '';

    // Loop through the data and create elements to display it
    data.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.classList.add('flex', 'gap-2', 'justify-between', 'mt-4', 'class3');
        taskElement.innerHTML = `<a class="text-2xl font-semibold" >${task.title}</a> 
                                <div>
                                    O
                                </div>`;
        taskBox.appendChild(taskElement);
    });
}
// Call the fetchData function to get and display the data
fetchData();







function toggleTaskForm() {
    var taskForm = document.getElementById('task_form');
    if (taskForm.style.visibility === 'hidden') {
        taskForm.style.visibility = 'visible';
    } else {
        taskForm.style.visibility = 'hidden';
    }
}





document.addEventListener('DOMContentLoaded', function () {

    const create_task_form = document.getElementById('create_task_form');
    // console.log(create_task_form)
    create_task_form.addEventListener('submit', function (event) {
        event.preventDefault();

        var title = document.getElementById('title').value;
        var description = document.getElementById('description').value;
        var isComplete = document.getElementById('is_complete').checked;


        // console.log(title)
        // console.log(description)
        // console.log(isComplete)



        var data = {
            title: title,
            description: description,
            is_completed: isComplete
        };

        // console.log(data)

        fetch('http://127.0.0.1:8000/task/create/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken')  // Get CSRF token from cookie
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                console.log(response);
                if (response.ok) {
                    location.reload();
                    console.log("Success");
                }
                else{
                    throw new Error('Network response was not ok');
                }
                
                return response.json();
                
            })
            .then(responsedata => {
            
            })
            .catch(error => console.error('Error:', error));


        // Function to get CSRF token from cookie
        function getCookie(name) {
            let cookieValue = null;
            if (document.cookie && document.cookie !== '') {
                const cookies = document.cookie.split(';');
                for (let i = 0; i < cookies.length; i++) {
                    const cookie = cookies[i].trim();
                    if (cookie.substring(0, name.length + 1) === (name + '=')) {
                        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                        break;
                    }
                }
            }
            return cookieValue;
        }

    });
});

// document.addEventListener('DOMContentLoaded', function() {
//   fetchData();
// });
