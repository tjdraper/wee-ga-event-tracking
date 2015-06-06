/* global ga */

Wee.fn.make('gaTracking', {
	_construct: function() {
		var scope = this;

		$('ref:gaTrackEvent').each(function(el) {
			scope.init(el);
		});
	},
	init: function(sel) {
		this.$private('track', sel);

		return Wee.$extend({}, this);
	}
}, {
	_construct: function() {
		if (typeof ga === 'undefined') {
			window.ga = function(type, hitType, category, action, label) {
				console.log({
					type: type,
					hitType: hitType,
					category: category,
					action: action,
					label: label
				});
			};
		}
	},
	track: function(sel) {
		var scope = this,
			$sel = $(sel),
			eventType = $sel[0].tagName == 'FORM' ? 'submit' : 'click';

		$sel.on(eventType, function() {
			scope.sendGaTracking($sel);
		});
	},
	sendGaTracking: function($sel) {
		var category = $sel.data('category'),
			action = $sel.data('action'),
			label = $sel.data('label');

		if (category && action && label) {
			ga('send', 'event', category, action, label);
		}
	}
});

// Create Wee Tabs chainable function
Wee.$chain('gaTracking', function() {
	return Wee.gaTracking.init(this);
});