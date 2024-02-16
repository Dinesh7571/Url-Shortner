import URL from "../modals/url.js"
import shortid from "shortid";
 async function GenerateShortUrl(req,res){
    const url=req.body.url;
    if(!url) return res.status(400).json({error:"url is required"})
    const shortID=shortid()
    await URL.create({
        shortID:shortID,
        redirectURL:url,
    });
    return res.json({id:shortID});
}
export default GenerateShortUrl;