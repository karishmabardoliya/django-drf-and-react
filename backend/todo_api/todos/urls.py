from django.urls import path, include

from . import views
# from todos.views import userviewsets 
from rest_framework import routers 
  
router = routers.DefaultRouter() 
router.register('user', views.userviewsets, basename ='user_api') 

urlpatterns = [
    path('todo', views.ListTodo.as_view()),
    path('todo/<int:pk>/', views.DetailTodo.as_view()),
    path('', include(router.urls)),
]