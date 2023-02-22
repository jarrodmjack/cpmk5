from django.db import models
from django.utils import timezone

class Employee(models.Model):
    name = models.CharField(max_length=255)
    pay_rate = models.FloatField(default=None)
    created_at = models.DateField(default=timezone.now)
    
    def __str__(self):
        return self.name

class TimePunch(models.Model):
    start_time = models.TimeField(default=None)
    end_time = models.TimeField(default=None)
    hours_worked = models.FloatField(default=None)
    date = models.DateField(default=timezone.now)
    location = models.CharField(max_length=25, default='Office')
    total_earned = models.FloatField(default=None)
    paid = models.BooleanField(default=False)
    employee_name = models.CharField(max_length=25, default='')
    employee_id = models.ForeignKey(Employee, on_delete=models.CASCADE)
    
    
    def __str__(self):
        return self.employee_name