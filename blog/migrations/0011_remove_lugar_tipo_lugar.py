# Generated by Django 2.2.3 on 2019-07-09 21:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0010_auto_20190709_1714'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='lugar',
            name='tipo_lugar',
        ),
    ]
