from rest_framework import viewsets
from rest_framework import permissions, status
from .models import Lesson
from .serializers import LessonSerializer


class LessonViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny,)
    queryset = Lesson.objects.all()
    serializer_class = LessonSerializer