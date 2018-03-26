/**
 * SomeCronJob
 */
const Cronjobs = {
    BaseCronJob: {}
};
const BaseCronJob = Cronjobs.BaseCronJob;

module.exports = BaseCronJob.extend({},
    {
        disabled: false,
        time: {
            hour: '0-23',
            minute: '0-59',
            second: '20',
            dayOfMonth: '0-31',
            dayOfWeek: '0-7',
            month: '0-12',
            timezone: 'CET'
        },
        isSuspended: false,
        debugOutput: false,
        allowedHosts: [],
        maxInstanceNumberTotal: 1,
        maxInstanceNumberPerServer: 1,
        identity: 'SomeCronJob',
        worker: function () {
        },
        created: '2016-11-28T11:00:00',
        modified: '2017-08-31T12:00:00'
    }
);
