from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Tasks
from .serializers import TasksSerializer

@api_view(['GET'])
def tasks_list(request):
    tasks = Tasks.objects.all()
    serializer = TasksSerializer(tasks, many=True)
    return Response(serializer.data) 
