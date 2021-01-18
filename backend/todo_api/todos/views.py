from django.shortcuts import render

# Create your views here.
from .models import Todo
from .serializers import TodoSerializer
from rest_framework import generics

class ListTodo(generics.ListCreateAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer


class DetailTodo(generics.RetrieveUpdateDestroyAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer