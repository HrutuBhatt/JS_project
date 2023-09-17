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

        const flag=0;
        // Function to calculate and format time left
        function getTimeLeft(reminder) {
            const now = new Date();
            const timeDifference = reminder.time - now;

            
            if (timeDifference <= 0) {
                if(flag==0)
                {
                    alert(`${reminder.text} : ${reminder.time}`);
                }

                return 'Time is up!';
                
            }

            const hours = Math.floor(timeDifference / 3600000);
            const minutes = Math.floor((timeDifference % 3600000) / 60000);
            const seconds = Math.floor((timeDifference % 60000) / 1000);

            return `${hours}h ${minutes}m ${seconds}s`;
        }

        // Function to render reminders
        function renderReminders() {
            const reminderList = document.getElementById('reminder-list');
            reminderList.innerHTML = '';

            reminders.forEach((reminder, index) => {
                const reminderItem = document.createElement('div');
                reminderItem.classList.add('reminder-item');

                const timeLeft = document.createElement('span');
                timeLeft.setAttribute('id', 'time-left');
                timeLeft.textContent = getTimeLeft(reminder);
                if(timeLeft.textContent=='Time is up!'){
                    reminders.splice(index,1);
                    
                }
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.addEventListener('click', () => {
                    reminders.splice(index, 1);
                    renderReminders();
                });

                reminderItem.textContent = reminder.text;
                reminderItem.appendChild(timeLeft);
                reminderItem.appendChild(deleteButton);

                reminderList.appendChild(reminderItem);
            });
        }

        // Set up a timer to update time left every second
        setInterval(() => {
            renderReminders();
        }, 1000);

        // Add reminder button click event
        document.getElementById('add-reminder').addEventListener('click', addReminder);
