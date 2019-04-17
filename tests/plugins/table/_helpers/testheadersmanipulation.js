/* exported testHeadersManipulation */

function testHeadersManipulation( input, expected ) {
	'use strict';

	return function() {
		var bot = bender.editorBots.editor;
		bot.setHtmlWithSelection( CKEDITOR.document.findOne( '.' + input ).getValue() );

		bot.dialog( 'tableProperties', function( dialog ) {
			dialog.setValueOf( 'info', 'selHeaders', expected );

			dialog.fire( 'ok' );
			dialog.hide();

			expected = CKEDITOR.document.findOne( '.' + expected ).getValue();

			assert.beautified.html( expected.replace( '^', '' ),
				dialog.getParentEditor().getData(), { fixStyles: true } );
		} );
	};
}
