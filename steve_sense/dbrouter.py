class DbRouter(object):
    route_app_labels = {'atmospheric_data','steve_sense'}

    def db_for_read(self, model, **hints):
        if model._meta.app_label in self.route_app_labels:
            return 'steveDB'
        return 'default'

    def db_for_write(self, model, **hints):
        if model._meta.app_label in self.route_app_labels:
            return 'steveDB'

        return 'default'

    def allow_migrate(self, db, app_label, model_name=None, **hints):
        if db == 'steveDB':            
            if app_label in self.route_app_labels:
                return True            
        return None