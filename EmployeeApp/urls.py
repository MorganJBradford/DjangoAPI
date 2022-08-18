from ssl import VERIFY_ALLOW_PROXY_CERTS
from django.urls import re_path
from EmployeeApp import views

urlpatterns = [
  re_path(r'^department/$',views.departmentApi),
  re_path(r'department/([0-9]+)$',views.departmentApi)
]