from rest_framework import serializers
from .models import Lesson

class LessonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lesson
        exclude = ['created_at', 'updated_at']

    def create(self, validated_data):
        lesson = Lesson(**validated_data)
        lesson.save()
        return lesson

    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)
        instance.formula = validated_data.get('title', instance.formula)
        instance.level = validated_data.get('title', instance.level)
        instance.save()
        return instance