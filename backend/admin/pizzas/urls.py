from django.urls import path

from .views import PizzaViewSet

urlpatterns = [
    path('pizzas/', PizzaViewSet.as_view({
        'get': 'list',
        'post': 'create',
    })),
    path('pizzas/<str:pk>/', PizzaViewSet.as_view({
        'get': 'retrieve',
        'put': 'update',
        'delete': 'destroy'
    }))
]