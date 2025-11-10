from django.shortcuts import render
from rest_framework import viewsets
# Create your views here.
from .models import userPost
from .serializer import PostSerializer

class UserPostView(viewsets.ModelViewSet):
    queryset = userPost.objects.all()
    serializer_class = PostSerializer

    
    def get_queryset(self):
        username = self.request.query_params.get('Username', '')
        return userPost.objects.filter(Username__icontains=username)
