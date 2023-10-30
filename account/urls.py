from django.urls import path
from .views import signup_api



urlpatterns = [
    # ... your other URL patterns
    path('signup/', signup_api, name='signup'),
    #path()
       
]