// Function to fetch data from the API
function fetchData() {
    fetch('http://127.0.0.1:8000/task/uncompleted/tasks/')
      .then(response => response.json())
      .then(data => displayData(data))
      .catch(error => console.error('Error:', error));
  }
  
  // Function to display the data in the task_Box div
  function displayData(data) {
    console.log(data)
    const taskBox = document.getElementById('task_Box');
  
    // Clear any existing content
    taskBox.innerHTML = '';
  
    // Loop through the data and create elements to display it
    data.forEach(task => {
      const taskElement = document.createElement('div');
      taskElement.classList.add('flex','gap-2','justify-between', 'mt-4',  'class3');
      taskElement.innerHTML = `<a class="text-2xl font-semibold" >${task.title}</a> 
                                <div>
                                    O
                                </div>`;
      taskBox.appendChild(taskElement);
    });
  }
  
  // Call the fetchData function to get and display the data
  fetchData();
  