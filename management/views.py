from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Tasks
from .serializers import TaskSerializerGet,TaskSerializer
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json



@api_view(['GET'])
def tasks_list(request):
    tasks = Tasks.objects.all()
    serializer = TaskSerializerGet(tasks, many=True)
    
    return Response(serializer.data) 


@csrf_exempt
@api_view(['POST'])
def create_task(request):
    if request.method == 'POST':
        serializer = TaskSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)



