# Generated by Django 4.2.7 on 2023-11-04 17:14

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Schedule',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('out_title', models.CharField(max_length=100)),
                ('out_startdate', models.DateField()),
                ('out_enddate', models.DateField()),
            ],
        ),
    ]