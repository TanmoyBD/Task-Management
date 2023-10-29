from django.db import models

# Create your models here.


class Tasks(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=255)
    is_completed = models.BooleanField(default=False)
    description = models.TextField()
    class Meta:
        verbose_name = "Task"
        verbose_name_plural = "Tasks"

    def __str__(self):
        return self.title


class Demo(models.Model):
    name =models.CharField(max_length=20)