# Generated by Django 3.2.7 on 2021-09-12 14:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pizzas', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='pizza',
            name='sizes',
            field=models.CharField(default='[26,30,40]', max_length=20),
        ),
        migrations.AddField(
            model_name='pizza',
            name='types',
            field=models.CharField(default='[0,1]', max_length=20),
        ),
    ]
