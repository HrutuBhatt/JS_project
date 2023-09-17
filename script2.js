const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask() {
    if (inputBox.value === '') {
        alert("You have not added the task");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        let span = document.createElement("span");
        span.innerHTML = "x";
        li.appendChild(span);
        listContainer.appendChild(li);

    }
    inputBox.value = "";
    saveData();
}
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

const reminders = [];
        
        function addReminder() {
            const reminderText = document.getElementById('reminder').value;
            const datetime = new Date(document.getElementById('datetime').value);

            if (!reminderText || isNaN(datetime)) {
                alert('Please enter a valid reminder and date/time.');
                return;
            }

            const reminder = {
                text: reminderText,
                time: datetime
            };

            reminders.push(reminder);

            // Clear the input fields
            document.getElementById('reminder').value = '';
            document.getElementById('datetime').value = '';

            // Render the reminders
            renderReminders();
        }

        // Function to calculate and format time left
        function getTimeLeft(reminder) {
            const now = new Date();
            const timeDifference = reminder.time - now;

            if (timeDifference <= 0) {
                return 'Time is up!';
            }

            const hours = Math.floor(timeDifference / 3600000);
            const minutes = Math.floor((timeDifference % 3600000) / 60000);
            const seconds = Math.floor((timeDifference % 60000) / 1000);

            return `${hours}h ${minutes}m ${seconds}s`;
        }

        // Function to render reminders
        // function renderReminders() {
        //     const reminderList = document.getElementById('reminder-list');
        //     reminderList.innerHTML = '';

        //     reminders.forEach((reminder, index) => {
        //         const reminderItem = document.createElement('div');
        //         reminderItem.classList.add('reminder-item');

        //         const timeLeft = document.createElement('span');
        //         timeLeft.setAttribute('id', 'time-left');
        //         timeLeft.textContent = getTimeLeft(reminder);

        //         const deleteButton = document.createElement('button');
        //         deleteButton.textContent = 'Delete';
        //         deleteButton.addEventListener('click', () => {
        //             reminders.splice(index, 1);
        //             renderReminders();
        //         });

        //         reminderItem.textContent = reminder.text;
        //         reminderItem.appendChild(timeLeft);
        //         reminderItem.appendChild(deleteButton);

        //         reminderList.appendChild(reminderItem);
        //     });
        // }

        // // Set up a timer to update time left every second
        // setInterval(() => {
        //     renderReminders();
        // }, 1000);

        // // Add reminder button click event
        // document.getElementById('add-reminder').addEventListener('click', addReminder);

    


// const remContainer = document.getElementById("rem-container");

// document.getElementById('reminder-form').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const reminderText = document.getElementById('reminder-text').value;
//     const reminderDate = new Date(document.getElementById('reminder-date').value).getTime();
//     const currentDate = new Date().getTime();
//     const timeUntilReminder = reminderDate - currentDate;

//     if (timeUntilReminder <= 0) {
//         alert('Please select a future date and time.');
//         return;
//     }

//     setTimeout(function() {
//         alert(`Reminder: ${reminderText}`);
//     }, timeUntilReminder);
//     let li = document.createElement("li");
//     li.innerHTML= timeUntilReminder.getHour() + " "+ timeUntilReminder.getMinute();
//     remContainer.appendChild(li);
//     reminderText="";
//     reminderDate=NULL;
//     function saveData() {
//         localStorage.setItem("data", remContainer.innerHTML);
//     }
    
//     function showTask() {
//         remContainer.innerHTML = localStorage.getItem("data");
//     }
    
// });




