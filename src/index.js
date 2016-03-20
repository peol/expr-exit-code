import commander from "commander";
import compile from "expression-parser/func";

const program = commander
	.option( "-e, --expression <expr>", "The expression to evaluate", "" )
	.option( "-t, --true-message <message>", "The message to log into stdout if the expression is truthy" )
	.option( "-f, --false-message <message>", "The message to log into stdout if the expression is falsy" )
	.option( "-d, --debug", "Whether to log debug messages", false )
	.parse( process.argv );

function log() {
	if ( program.debug ) {
		console.log.apply( console, arguments );
	}
}

try {
	log( `Args is: ${program.expression}` );
	const value = compile ( program.expression )();
	log( `Value is: ${value}` );
	const msg = value ? program.trueMessage : program.falseMessage;
	if ( msg )  {
		console.log( msg );
	}
	process.exit( value ? 0 : 1 );
} catch ( err ) {
	log( `Expression failed: ${err}` );
	process.exit( 1 );
}
