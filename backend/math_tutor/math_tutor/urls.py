from django.conf.urls import include, url
from django.contrib import admin


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^api/', include('account.urls')),
    url(r'^api/', include('lessons.urls')),
]