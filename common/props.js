module.exports = {
    adminMail: 'admin@sitemail.com',
    production: process.env.NODE_ENV,
    metaTitle: `App Title`,
    metaDescription: `App Description`,
    metaKeywords: `App Keywords`,

    viewProps (newProps = {}) {
        let props = {
            metaTitle: this.metaTitle,
            metaDescription: this.metaDescription,
            metaKeywords: this.metaKeywords
        }
        Object.assign(props, newProps)
        return props
    }
}
