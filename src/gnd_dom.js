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
     * @desc
     *  Global elements
     *
     * @type {object}
     */
    gnd.elems = gnd.dom.elems = {};

        /**
         * @namespace
         *
         * @desc
         *  Create a new instance of gnd.$ for document
         *
         * @type {gnd.$}
         */
        gnd.dom.elems.document = gnd.$( document );

        /**
         * @namespace
         *
         * @desc
         *  Create a new instance of gnd.$ for window
         *
         * @type {gnd.$}
         */
        gnd.dom.elems.window = gnd.$( window );

        /**
         * @namespace
         *
         * @desc
         *  Create new instance of gnd.$ for html
         *
         * @type {gnd.$}
         */
        gnd.dom.elems.html = gnd.$( 'html' );

        /**
         * @namespace
         *
         * @desc
         *  Create new instance of gnd.$ for body
         *
         * @type {gnd.$}
         */
        gnd.dom.elems.body = gnd.$( 'body' );

        /**
         * @namespace
         *
         * @desc
         *  Create new instance of gnd.$ for #header
         *
         * @type {gnd.$}
         */
        gnd.dom.elems.header = gnd.$( '#header' );

        /**
         * @namespace
         *
         * @desc
         *  Create new instance of gnd.$ for #main
         *
         * @type {gnd.$}
         */
        gnd.dom.elems.main = gnd.$( '#main' );

        /**
         * @namespace
         *
         * @desc
         *  Create new instance of gnd.$ for #footer
         *
         * @type {gnd.$}
         */
        gnd.dom.elems.footer = gnd.$( '#footer' );

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Get the document variable
     *
     * @params
     *
     * @return {object}
     */
    gnd.dom.getDocument = function ()
    {
        return document;
    };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Get the window variable
     *
     * @params
     *
     * @return {object}
     */
    gnd.dom.getWindow = function ()
    {
        return window;
    };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Get the window width
     *
     * @params
     *
     * @return {number}
     */
    gnd.dom.windowWidth = function ()
    {
        return window.innerWidth;
    };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Get the window height
     *
     * @params
     *
     * @return {number}
     */
    gnd.dom.windowHeight = function ()
    {
        return window.innerHeight;
    };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Get the amount scrolled
     *
     * @params
     *
     * @return {number}
     */
    gnd.dom.scrollTop = function ()
    {
        return document.body.scrollTop;
    };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Get the document's total width
     *
     * @params
     *
     * @return {number}
     */
    gnd.dom.documentWidth = function ()
    {
        return document.documentElement.scrollWidth;
    };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Get the document's total height
     *
     * @params
     *
     * @return {number}
     */
    gnd.dom.documentHeight = function ()
    {
        return document.documentElement.scrollHeight;
    };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Get the document's total height
     *
     * @params
     *********
     * @param html {string}
     *  The HTML string to parse
     *********
     *
     * @return {HTMLDocument}
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