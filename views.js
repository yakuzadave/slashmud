const multi_roll_view = {
	"type": "modal",
	"title": {
		"type": "plain_text",
		"text": "Necromunda Bot",
		"emoji": true
	},
	"submit": {
		"type": "plain_text",
		"text": "Submit",
		"emoji": true
	},
	"close": {
		"type": "plain_text",
		"text": "Cancel",
		"emoji": true
	},
	"blocks": [
		{
			"type": "header",
			"text": {
				"type": "plain_text",
				"text": "Multi-Roll",
				"emoji": true
			}
		},
		{
			"type": "input",
			"block_id": "multi_roll_dice_num_block",
			"element": {
				"type": "plain_text_input",
				"action_id": "multi_roll_dice_num_action"
			},
			"label": {
				"type": "plain_text",
				"text": "Number of Dice",
				"emoji": true
			}
		},
		{
			"type": "input",
			"element": {
				"type": "plain_text_input",
				"action_id": "multi_roll_dice_action"
			},
			"label": {
				"type": "plain_text",
				"text": "Dice Roll",
				"emoji": true
			},
			"block_id": "multi_roll_dice_block"
		}
	]
}





module.exports = {
  multi_roll_view: multi_roll_view
}