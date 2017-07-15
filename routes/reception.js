const props = require('../common').props


module.exports = {

    homepage: (req, res) => res.render('index', props.viewProps()),

}
