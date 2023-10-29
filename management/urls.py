from django.urls import path
from .views import tasks_list,create_task

urlpatterns = [
    # ... your other URL patterns
    path('uncompleted/tasks/', tasks_list, name='tasks-list'),#API----------------------------------
    path('create/', create_task, name='task-create'),#API---------------------------------
       
]
