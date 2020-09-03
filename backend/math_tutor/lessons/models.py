from django.db import models

# Create your models here.
class Lesson(models.Model):
    title = models.CharField(max_length=255)
    formula = models.CharField(max_length=255)
    level = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
