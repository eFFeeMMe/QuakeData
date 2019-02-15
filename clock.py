from apscheduler.schedulers.blocking import BlockingScheduler
from django.conf import settings
settings.configure()
from django.core import management

sched = BlockingScheduler()

@sched.scheduled_job('interval', seconds=30)
def timed_job():
    print('This job is run every three minutes.')
    management.call_command('ingvpoll')

# @sched.scheduled_job('cron', day_of_week='mon-fri', hour=17)
# def scheduled_job():
#     print('This job is run every weekday at 5pm.')

sched.start()
