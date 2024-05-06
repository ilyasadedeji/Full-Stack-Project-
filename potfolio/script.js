// Add active class to navigation links on click
document.querySelectorAll('.nav-link').forEach(link => {
	link.addEventListener('click', () => {
		link.classList.add('active');
	});
});