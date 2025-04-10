class PDFEmbed extends HTMLElement {
  constructor () {
    super();
    const shadow = this.attachShadow( { mode: 'open' } );
    const pdfUrl = this.getAttribute( 'src' );

    const height = this.getAttribute( 'height' ) || '100%';
    const width = this.getAttribute( 'width' ) || '100%';

    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isAndroidChrome = /Android/.test( userAgent ) && /Chrome/.test( userAgent );

    const viewerUrl = isAndroidChrome
      ? `https://drive.google.com/viewerng/viewer?embedded=true&url=${ encodeURIComponent( pdfUrl ) }`
      : pdfUrl;

    const iframe = document.createElement( 'iframe' );
    iframe.src = viewerUrl;
    iframe.width = width;
    iframe.height = height;
    iframe.style.border = 'none';
    iframe.style.borderRadius = '4px';
    iframe.style.overflow = 'hidden';

    shadow.appendChild( iframe );
  }
}

customElements.define( 'meine-pdf', PDFEmbed );