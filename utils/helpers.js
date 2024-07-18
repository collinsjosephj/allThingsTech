module.exports = {
    formatDates: (date) => {
        if (!date) {
            return '';
        }
        return new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    },
    ifEquals: (arg1, arg2, options) => {
        return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
    }
};
