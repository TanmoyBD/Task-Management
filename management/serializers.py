from rest_framework import serializers
from .models import Tasks

class TaskSerializerGet(serializers.ModelSerializer):
    class Meta:
        model = Tasks
        fields = '__all__'
        
        
        
        
class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tasks
        fields = ['id', 'title', 'is_completed', 'description']