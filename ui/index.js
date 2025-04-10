const webcomponents = [
  'meine-pdf'
];

function load () {
  webcomponents.forEach( cpt => {
    if ( document.querySelector( cpt ) ) {
      console.log( `Loading ${ cpt }` );

      const script = document.createElement( 'script' );
      script.src = `ui/components/${ cpt }.js`;
      document.body.appendChild( script );
    }
  } );
};

setTimeout( load, 100 );