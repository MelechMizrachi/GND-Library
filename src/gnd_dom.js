/**=================================================================================**\
 *
 *  @author                             VGND Team
 *  @desc                               gnd Library DOM utilities
 *
 *  @Table_of_Contents
 *
 *  @property                           gnd.dom
 *      @property                           gnd.dom.$
 *      @property                           gnd.dom.elems
 *          @property                           gnd.dom.elems.document
 *          @property                           gnd.dom.elems.window
 *          @property                           gnd.dom.elems.html
 *          @property                           gnd.dom.elems.body
 *          @property                           gnd.dom.elems.header
 *          @property                           gnd.dom.elems.main
 *          @property                           gnd.dom.elems.footer
 *      @property                           gnd.dom.getDocument()
 *      @property                           gnd.dom.getWindow()
 *      @property                           gnd.dom.windowWidth()
 *      @property                           gnd.dom.windowHeight()
 *      @property                           gnd.dom.scrollTop()
 *      @property                           gnd.dom.documentWidth()
 *      @property                           gnd.dom.documentHeight()
 *      @property                           gnd.dom.parseHTML()
 *
\**=================================================================================**/


/**
 * @class
 */
gnd.dom = {};

    /**
     * @class
     *
     * @extends {gnd.$}
     */
    gnd.dom.$ = GND_GLOBALS['gnd.dom.$'] || gnd.$;

    /**
     * @namespace
     *
     * Global elements
     *
     * @type {object}
     */
    gnd.elems = gnd.dom.elems = {};

        /**
         * @namespace
         *
         * Create a new instance of gnd.$ for document
         *
         * @type {gnd.$}
         */
        gnd.dom.elems.document = gnd.$( document );

        /**
         * @namespace
         *
         * Create a new instance of gnd.$ for window
         *
         * @type {gnd.$}
         */
        gnd.dom.elems.window = gnd.$( window );

        /**
         * @namespace
         *
         * Create new instance of gnd.$ for html
         *
         * @type {gnd.$}
         */
        gnd.dom.elems.html = gnd.$( 'html' );

        /**
         * @namespace
         *
         * Create new instance of gnd.$ for body
         *
         * @type {gnd.$}
         */
        gnd.dom.elems.body = gnd.$( 'body' );

        /**
         * @namespace
         *
         * Create new instance of gnd.$ for #header
         *
         * @type {gnd.$}
         */
        gnd.dom.elems.header = gnd.$( '#header' );

        /**
         * @namespace
         *
         * Create new instance of gnd.$ for #main
         *
         * @type {gnd.$}
         */
        gnd.dom.elems.main = gnd.$( '#main' );

        /**
         * @namespace
         *
         * Create new instance of gnd.$ for #footer
         *
         * @type {gnd.$}
         */
        gnd.dom.elems.footer = gnd.$( '#footer' );

    /**
     * @method
     *
     * Get the document variable
     *
     * @params
     *
     * @returns {object}
     */
    gnd.dom.getDocument = function ()
    {
        return document;
    };

    /**
     * @method
     *
     * Get the window variable
     *
     * @params
     *
     * @returns {object}
     */
    gnd.dom.getWindow = function ()
    {
        return window;
    };

    /**
     * @method
     *
     * Get the window width
     *
     * @params
     *
     * @returns {number}
     */
    gnd.dom.windowWidth = function ()
    {
        return window.innerWidth;
    };

    /**
     * @method
     *
     * Get the window height
     *
     * @params
     *
     * @returns {number}
     */
    gnd.dom.windowHeight = function ()
    {
        return window.innerHeight;
    };

    /**
     * @method
     *
     * Get the amount scrolled
     *
     * @params
     *
     * @returns {number}
     */
    gnd.dom.scrollTop = function ()
    {
        return document.body.scrollTop;
    };

    /**
     * @method
     *
     * Get the document's total width
     *
     * @params
     *
     * @returns {number}
     */
    gnd.dom.documentWidth = function ()
    {
        return document.documentElement.scrollWidth;
    };

    /**
     * @method
     *
     * Get the document's total height
     *
     * @params
     *
     * @returns {number}
     */
    gnd.dom.documentHeight = function ()
    {
        return document.documentElement.scrollHeight;
    };

    /**
     * @method
     *
     * Get the document's total height
     *
     * @params
     *********
     * @param html {string}
     *  The HTML string to parse
     *********
     *
     * @returns {HTMLDocument}
     */
    gnd.dom.parseHTML = function ( html )
    {
        var
                doc     = document.implementation.createDocument( 'http://www.w3.org/1999/xhtml', 'html', null )
            ,   body    = document.createElementNS( 'http://www.w3.org/1999/xhtml', 'body' )
            ,   div     = document.createElement( 'div' )
            ,   i       = 0
            ,   node
            ,   len
        ;

        // Append the created body to the created document
        doc.documentElement.appendChild( body );
        // Set the div's innerHTML to the provided html
        div.innerHTML = html;
        // Set the length for the for loop
        len = div.childNodes.length;

        // Iterate through all the children of the div
        for ( ; i < len; i++ ) {
            // Create a quick reference for the node
            node = div.childNodes[ i ].cloneNode( true );
            // Append the div's first child (the provided html) to the document body
            body.appendChild( node );
        }

        // Return the created document
        return doc;
    };