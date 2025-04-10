const declared_base = window.$docsify[ 'basePath' ] || "";

let actual_base = window.location.pathname;
actual_base = actual_base.split( '/' )[ 1 ];

if ( declared_base !== actual_base ) {
  console.warn( 'Base path mismatch' );
  console.warn( 'Declared base path:', declared_base );
  console.warn( 'Actual base path:', actual_base );
};

const languages = window.$docsify?.code?.languages;
if ( languages?.length ) {
  for ( const lang of languages ) {
    const script = document.createElement( 'script' );
    script.src = `https://cdn.jsdelivr.net/npm/prismjs@1.29.0/components/prism-${ lang }.min.js`;
    document.body.appendChild( script );
    console.log( `Enabled Prism for ${ lang }` );
  }
}