from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import UserSerializer
from django.contrib.auth.models import User


@csrf_exempt
@api_view(['POST'])
def signup_api(request):
    if request.method == 'POST':
        data = request.data
        username = data.get('username')
        password = data.get('password')
        
        if username and password:
            if not User.objects.filter(username=username).exists():
                user = User.objects.create_user(username=username, password=password)
                return Response({'message': 'User created successfully', 'username': username}, status=status.HTTP_201_CREATED)
            else:
                return Response({'message': 'Username already exists'}, status=status.HTTP_400_BAD_REQUEST)
        
        return Response({'message': 'Invalid data. Both username and password are required.'}, status=status.HTTP_400_BAD_REQUEST)
