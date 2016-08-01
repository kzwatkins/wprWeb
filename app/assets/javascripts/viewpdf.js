PDFJS.getDocument('wpr_capabilities.pdf').then(function(pdf) {
		return pdf.getPage(1);
	}).then(function(page) {
  		// you can now use *page* here

		var scale = 1.5;
		var viewport = page.getViewport(scale);

		var canvas = document.getElementById('pdf');
		var context = canvas.getContext('2d');
		canvas.height = viewport.height;
		canvas.width = viewport.width;

		var renderContext = {
  			canvasContext: context,
  			viewport: viewport
		};

		page.render(renderContext);
	});