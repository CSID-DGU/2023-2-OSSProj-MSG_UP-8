# Generated by Django 4.2.7 on 2023-11-16 22:13

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('eclass', '0008_userclasslist_delete_csvfile_alter_classlist_id_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userclasslist',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='eclass.userprofile'),
        ),
    ]