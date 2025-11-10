from django.urls import path,include
from rest_framework import routers
from .views import UserPostView
router = routers.DefaultRouter()
router.register("Userpost",UserPostView)
urlpatterns = [
    path("",include(router.urls))
]
