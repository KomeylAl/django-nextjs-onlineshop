from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Product, Category, Cart, Order, OrderItem
from .serializers import ProductSerializer, CategorySerializer, OrderSerializer

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
# Create your views here.

class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

    @action(detail=False, methods=['post'])
    def create_order(self, request):
        cart_id = request.data.get('cart_id')
        session_key = request.data.get('session_key')
        name = request.data.get('name')
        phone = request.data.get('phone')
        address = request.data.get('address')
        cart = Cart.objects.get(id=cart_id)
        total_price = sum(item.product.price * item.quantity for item in cart.items.all())
        order = Order.objects.create(total_price=total_price, name=name, phone=phone, address=address)
        for item in cart.items.all():
            OrderItem.objects.create(order=order, product=item.product, quantity=item.quantity, price=item.product.price)
        cart.delete()
        return Response({'status': 'order created'})
