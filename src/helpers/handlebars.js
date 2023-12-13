const Handlebars = require('handlebars')

module.exports = {
    sum: (a, b) => a + b,
    sortable: (field, sort) => {
        const sortType = field === sort.column ? sort.type : 'default';

        const icons = {
            default: 'fa fa-sort',
            asc: 'fas fa-sort-amount-down-alt',
            desc: 'fas fa-sort-amount-down',
        }
        const types = {
            default: 'desc',
            asc: 'desc',
            desc: 'asc',
        }

        const icon = icons[sortType]
        const type = types[sortType]

        const href = Handlebars.escapeExpression(`/me/stored/course?_sort&column=${field}&type=${type}`)
        const output = `<a href="${href}">
            <i class="${icon}"></i>
        </a>`

        return new Handlebars.SafeString(output);
    }
}