module.exports = ClozeCard;

function ClozeCard(text, cloze){
	this.cloze = cloze;
	this.fullText = text;
	this.partial = getPartial();

function getPartial(){
	return text.replace(cloze, "...");
	

	}

	if (!text.includes(cloze)){
		console.log("Sorry, '" + cloze + "'' does not appear in '" + text + "'.");
	}

}
