from rest_framework import routers
from .viewsets import PersonaViewSet

router = routers.SimpleRouter()
router.register('personas', PersonaViewSet)

urlpatterns = router.urls
