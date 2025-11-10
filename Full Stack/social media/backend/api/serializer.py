from rest_framework import serializers
from .models import userPost
class PostSerializer(serializers.HyperlinkedModelSerializer):
    Id = serializers.ReadOnlyField()
    class Meta:
        model = userPost
        fields = "__all__"
        filterset_fields = ['Username']
