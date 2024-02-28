
from django.urls import path
from . import views



urlpatterns = [
   path('',views.index,name='eXciteLearn'),
    path('',views.login_view,name='eXciteLearn')

]

