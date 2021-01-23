from django.shortcuts import render

# Create your views here.
from django.contrib.auth.models import User
from .models import Todo
from .serializers import TodoSerializer, UserSerializer
from rest_framework import generics, viewsets
class ListTodo(generics.ListCreateAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer


class DetailTodo(generics.RetrieveUpdateDestroyAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
    
class userviewsets(viewsets.ModelViewSet): 
    queryset = User.objects.all() 
    serializer_class = UserSerializer