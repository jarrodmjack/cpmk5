from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Employee, TimePunch
from .serializers import EmployeeSerializer, TimePunchSerializer


class EmployeeAPIView(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer


class TimePunchAPIView(viewsets.ModelViewSet):
    queryset = TimePunch.objects.all()
    serializer_class = TimePunchSerializer

    def create(self, request):
        print(request.data)
        serializer = TimePunchSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            response = Response(serializer.data)
            return response
        return Response(serializer.errors, status=200)

    def update(self, request, pk):
        timepunch = TimePunch.objects.get(id=pk)
        serializer = TimePunchSerializer(timepunch)
        print('data: ', serializer.data)
