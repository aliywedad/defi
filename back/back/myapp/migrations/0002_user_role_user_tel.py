# Generated by Django 4.2.7 on 2024-02-18 23:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='role',
            field=models.CharField(default='etudiant', max_length=128),
        ),
        migrations.AddField(
            model_name='user',
            name='tel',
            field=models.IntegerField(default=0, max_length=8),
        ),
    ]