from django.urls import path
from .views import tasks_list

urlpatterns = [
    # ... your other URL patterns
    path('uncompleted/tasks/', tasks_list, name='tasks-list'),#API----------------------------------
    
]
