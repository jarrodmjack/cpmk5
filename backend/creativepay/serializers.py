from rest_framework import serializers
from .models import Employee, TimePunch

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ('id', 'name', 'pay_rate', 'created_at')

class TimePunchSerializer(serializers.ModelSerializer):
    class Meta:
        model = TimePunch
        fields = ('id','start_time', 'end_time', 'hours_worked', 'date', 'location', 'hours_worked', 'total_earned', 'paid', 'employee_name', 'employee_id')