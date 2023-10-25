from django.db import models


class Users(models.Model):
    firstName = models.CharField()
    lastName = models.CharField()
    dob = models.DateField()
    address = models.TextField()
    email = models.CharField()
    createdAt = models.DateField(auto_now_add=True)

    def __str__(self):
        return f'{0} {1}'.format(self.firstName, self.lastName)
