# daily_agenda
The objective of this project is to create a daily planner that a user can add in their daily todo's.  By utilizing this daily planner, the user can insert important todo's or reminders into their schedule to organize their agenda.

When the user first logs onto the webpage, the current date and time will be displayed onto the page.

![The following image is an example of the displayed date and time for the user](https://raw.githubusercontent.com/pazjenni04/daily_agenda/main/images/current-date-time_image.PNG)

Throughout the day, the scheduler will notate what time of the day the user is on - past, present, or future.  For instance, when the user's current time is equaled to the time displayed then the planner will have the time-block for their current time in red.  The schedule will then display any futures time-blocks in green and any past time blocks in grey -- all indicating to the user what part of his scheduler is relevant, is coming up, and what has already passed.

![The following image shows an example of the highlighted time-blocks based off the hour of 7am.  7am is in red, 8am - 12pm is in green, and the remainder of the times surrounding are greyed out](images\past-present-future_image.PNG)

Once the user enters a task into the scheduler, they have the option to save it to local storage in which will time-stamp the time the task was saved and the note the user inserted.  

![The following image shows an example of the task a user can save onto their local storage to be retrieved in the future](images\local-storage_image.PNG)

When the user then reloads the page, the local storage will have saved their saved task and time-stamp.


