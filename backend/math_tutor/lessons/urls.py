from django.conf.urls import url, include
from rest_framework import routers
from .views import LessonViewSet

router = routers.DefaultRouter()
router.register(r'lessons', LessonViewSet)

urlpatterns = [
    url(r'^', include(router.urls))
]
