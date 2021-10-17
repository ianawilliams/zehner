// Polyfill for .closest() so it works for IE
if (!Element.prototype.closest) {
	Element.prototype.closest = function(s) {
		var el = this;

    	do {
      		if (Element.prototype.matches.call(el, s)) return el;
      		el = el.parentElement || el.parentNode;
    	} while (el !== null && el.nodeType === 1);
    	
    	return null;
  	};
}

/*
	Adds or removes an active class on a button, modal, body
	and any button that has the same modal target

	Param: button element
*/
function buttonToggle( btnElem ) {
	let targetID = btnElem.dataset.targetid;
	let target = document.getElementById( targetID );
	if ( !target ) {
		return false;
	}

	// Modal is active and must be hidden
	if ( target.classList.contains('active') ) {
		/* 
			Query selector used instead of btnElem in case there are 
			multiple buttons to control the same modal 
		*/
		let btns = document.querySelectorAll('.js-toggle.active[data-targetid="' + targetID + '"]');
		btns.forEach((item) => {
			item.classList.remove('active');
		});

		target.classList.remove('active');
		document.body.classList.remove( targetID + '-active' );
	}

	// Modal is hidden and must be made active
	else {
		let btns = document.querySelectorAll('.js-toggle[data-targetid="' + targetID + '"]');
		btns.forEach((item) => {
			item.classList.add('active');
		});

		target.classList.add('active');
		/* 
			Class added to body in case of stlyes needed
			such as for full sized fixed position modals
		*/
		document.body.classList.add( targetID + '-active' );
	}
}


document.addEventListener( 'DOMContentLoaded', () => {
	document.addEventListener( 'click', (e) => {
		let target = e.target.closest('.js-toggle')
		
		if ( target ) {
			buttonToggle(target);
			e.preventDefault();
		}
	});
});