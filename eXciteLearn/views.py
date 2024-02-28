from django.shortcuts import render,HttpResponse


def index(request):
    return render(request, 'page1.html')

def login_view(request):
    return render(request, 'page1.1.html')

def contact_us(request):
    return render(request, 'page1.4.html')

def about(request):
    return render(request, 'page1.2.html')

def get_started(request):
    return render(request, 'page1.1.2.html')
