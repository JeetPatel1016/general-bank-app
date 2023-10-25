from django.db import models
from users.models import Users
import random


class Accounts(models.Model):

    class AccountTypes(models.TextChoices):
        CHEQUING = 'Chequing'
        SAVINGS = 'Savings'

    accountNumber = models.CharField(max_length=10, blank=False, editable=False, unique=True)
    accountType = models.CharField(choices=AccountTypes.choices, default=AccountTypes.CHEQUING)
    balance = models.DecimalField(max_digits=12, decimal_places=2)
    interestRate = models.FloatField()
    dateOpened = models.DateField(auto_created=True)
    dateClosed = models.DateField()
    objects = models.Manager()

    # Creating Self-Association via a junction table to keep records of the transaction history between accounts.
    transactions = models.ManyToManyField(
        'self',
        symmetrical=False,
        related_name='transaction',
        through="Transactions"
    )

    # Defining 1:N relation between users and accounts
    userId = models.ForeignKey(Users, on_delete=models.CASCADE)

    # Custom save method to assign a randomly generated account number to the account
    def save(self, *args, **kwargs):
        if not self.accountNumber:
            self.accountNumber = self.generate_unique_account_number()
        super(Accounts, self).save(*args, **kwargs)

    # Generates a unique 10-digit account number randomly
    @staticmethod
    def generate_unique_account_number():
        while True:
            unique_acc = random.randint(1000000000, 9999999999)
            if not Accounts.objects.filter(account_number=unique_acc).exists():
                return str(unique_acc)



class Transactions(models.Model):
    senderId = models.ForeignKey(Accounts, on_delete=models.CASCADE, related_name='+')
    receiverId = models.ForeignKey(Accounts, on_delete=models.CASCADE, related_name='+')
    amount = models.DecimalField(max_digits=12, decimal_places=2)
    timestamp = models.DateField(auto_now_add=True)

