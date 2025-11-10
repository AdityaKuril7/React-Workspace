from django.db import models

# Create your models here.
class userPost(models.Model):
    Id = models.AutoField(primary_key=True)
    Username = models.CharField(max_length=50)
    Image = models.ImageField(upload_to="media")
    Caption = models.CharField(max_length=255)

    def __str__(self):
        return self.Username