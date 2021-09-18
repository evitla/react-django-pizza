from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.filters import SearchFilter, OrderingFilter

from .models import Pizza
from .serializers import PizzaSerializer


class PizzaViewSet(viewsets.ModelViewSet):
    queryset = Pizza.objects.all()
    serializer_class = PizzaSerializer
    filter_backends = (SearchFilter, OrderingFilter)
    search_fields = ['category']
    ordering_fields = ['name', 'price', 'rating']

    def list(self, request):
        pizzas = Pizza.objects.all()
        pizzas = self.filter_queryset(pizzas)
        serializer = PizzaSerializer(pizzas, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = PizzaSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def retrieve(self, request, pk=None):
        pizza = Pizza.objects.get(id=pk)
        serializer = PizzaSerializer(pizza)
        return Response(serializer.data)

    def update(self, request, pk=None):
        pizza = Pizza.objects.get(id=pk)
        serializer = PizzaSerializer(instance=pizza, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_202_ACCEPTED)

    def destroy(self, request, pk=None):
        pizza = Pizza.objects.get(id=pk)
        pizza.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
