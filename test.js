async function banana(a){
	const axios = await import("axios")
	const request = {
		method: "get",
		url: `https://reddit.com/${a}/about.json`
	}
	axios.default(request).then((response) =>{
		let redditdet = response.data.data
		if(redditdet.over18 == true) return console.log(`nsfw ${a} subreddit`)
		console.log(`not nsfw ${a} subreddit`)
	})
}
banana("r/gonewild")
banana("r/lego")

async function postcheck(a){
	const request = {
		method: "get",
		url: `https://reddit.com/${a}/random.json`
	}
	const axios = await import('axios')
	axios.default(request).then((response) =>{
		let postdet = response.data[0].data.children[0].data
		if(postdet.over_18 == true) return console.log(`nsfw ${a} post`)
		console.log(`not nsfw ${a} post`)
	})
}

postcheck("r/gonewild")
postcheck("r/lego")
