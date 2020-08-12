const {Router} = require('express');
const Link = require('../models/Link');
const router = Router();

router.get('/:code', async(req, resp) => {
	try {
		const link = await Link.figOne({code:  req.params.code})

		if(link) {
			link.clicks++
			await link.save();
			return resp.redirect(link.from)
		}
		res.status(404).json('Link is undefined')
	} catch (e) {
		res.status(500).json({message: 'Something wrong!'})
	}
})

module.export = router;