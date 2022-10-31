from steve_sense.models import Attached_Devices

def heartbeat(request, space_name):
    attached_devices = Attached_Devices.objects.filter(space__space_name=space_name)
    payload = {}
    for i in attached_devices:
        payload['device'] = i
    return payload