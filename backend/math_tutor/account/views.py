from rest_framework import viewsets
from rest_framework import permissions, status
from .models import User
from .serializers import UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny,)
    queryset = User.objects.all()
    serializer_class = UserSerializer