from django.contrib import admin
from django.urls import path
from rest_framework import routers
from creativepay.views import EmployeeAPIView, TimePunchAPIView

router = routers.DefaultRouter()
router.register(r'employees', EmployeeAPIView)
router.register(r'timepunch', TimePunchAPIView)

urlpatterns = [
    *router.urls,
    path('admin/', admin.site.urls),
]