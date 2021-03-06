/**=================================================================================**\
 *
 *  @author                             VGND Team
 *  @desc                               gnd Library Dom Selection
 *
 *  @Table_of_Contents
 *
 *  @property                           gnd.$
 *      @property                           gnd.$.Init()
 *      @property                           gnd.$.constructor
 *      @property                           gnd.$.elem
 *      @property                           gnd.$.context
 *      @property                           gnd.$.selector
 *      @property                           gnd.$.SPACE_SPLIT
 *      @property                           gnd.$.getElements()
 *      @property                           gnd.$.find()
 *      @property                           gnd.$.parent()
 *      @property                           gnd.$.get()
 *      @property                           gnd.$.closest()
 *      @property                           gnd.$.handleEvent()
 *      @property                           gnd.$.on()
 *      @property                           gnd.$.off()
 *      @property                           gnd.$.trigger()
 *      @property                           gnd.$.val()
 *      @property                           gnd.$.text()
 *      @property                           gnd.$.html()
 *      @property                           gnd.$.append()
 *      @property                           gnd.$.prepend()
 *      @property                           gnd.$.handlePend()
 *      @property                           gnd.$.handleHTML()
 *      @property                           gnd.$.empty()
 *      @property                           gnd.$.remove()
 *      @property                           gnd.$.handleClass()
 *      @property                           gnd.$.addClass()
 *      @property                           gnd.$.removeClass()
 *      @property                           gnd.$.toggleClass()
 *      @property                           gnd.$.hasClass()
 *      @property                           gnd.$.attrGet()
 *      @property                           gnd.$.attrSet()
 *      @property                           gnd.$.attrRemove()
 *      @property                           gnd.$.dataGet()
 *      @property                           gnd.$.dataSet()
 *      @property                           gnd.$.dataRemove()
 *      @property                           gnd.$.Init.prototype
 *
\**=================================================================================**/

/**
 * @class
 *
 * gnd.dom.$ initializer
 *
 * @params
 *********
 * @param selector {string|HTMLDocument|HTMLElement|Node|NodeList}
 *  The event string
 **
 * @param [context] {object}
 *  The context to use
 *********
 *
 * @returns gnd.$.Init
 */
gnd.$ = function ( selector, context )
{
    return new gnd.$.Init( selector, context );
};

    /**
     * @constructor
     *
     * gnd.dom.$ initializer
     *
     * @params
     *********
     * @param selector {string|HTMLDocument|HTMLElement|Node|NodeList}
     *  The event string
     **
     * @param [context] {object}
     *  The context to use
     *********
     *
     * @returns {gnd.$}
     *  The gnd.dom.$ object
     */
    gnd.$.Init = function ( selector, context )
    {
        // If the selector is not a string
        if ( !gnd.is.string( selector ) || !selector ) {
            // Set the elem as the selector
            this.elem           = selector || this.elem;

            // Return this
            return this;
        }

        // Set the selector to what was passed, for future reference
        this.selector           = selector;

        // If the context was set, and it is a dom element
        if ( context ) {
            if ( context.elem ) {
                // Set elem as the context
                this.elem           = context.elem;
                // Set the context to the context elem
                this.context        = context.elem;
            } else {
                // Set elem as the context
                this.elem           = context;
                // Set the context to what was passed, for future reference
                this.context        = context;
            }
        }

        // Get the element
        this.elem = this.getElements( this.elem, selector );

        // If elem is a node list and there is only one element in node list
        if ( gnd.is.nodeList( this.elem ) && this.elem.length === 1 ) {
            // Set elem as the individual element
            this.elem = this.elem[ 0 ];
        }

        // Return the new object
        return this;
    };

    /**
     * @constructor
     */
    gnd.$.prototype.constructor = gnd.$;

    /**
     * @namespace
     *
     * The HTML element
     *
     * @type {HTMLDocument|HTMLElement|Node|NodeList}
     */
    gnd.$.prototype.elem = null;

    /**
     * @namespace
     *
     * The context used to get this element
     *
     * @type {HTMLDocument|HTMLElement|Node|NodeList}
     */
    gnd.$.prototype.context = document;

    /**
     * @namespace
     *
     * The selector used
     *
     * @type {string|HTMLDocument|HTMLElement|Node|NodeList}
     */
    gnd.$.prototype.selector = '';

    /**
     * @constant
     *
     * How to split the strings within the class
     *
     * @type {string}
     */
    gnd.$.prototype.SPACE_SPLIT = ' ';

    /**
     * @method
     *
     * Get an element using a parent and a string selector
     *
     * @params
     *********
     * @param parent {HTMLDocument|HTMLElement|Node|NodeList}
     *  The parent element to use
     **
     * @param selector {string}
     *  The event string
     *********
     *
     * @returns {HTMLDocument|HTMLElement|Node|NodeList|object}
     *  The element
     */
    gnd.$.prototype.getElements = function ( parent, selector )
    {
        // If the parent is invalid
        if ( !parent ) {
            // Use document as the parent
            parent = document;
        }
        // Trim the selector
        selector                = selector.trim();

        // Create local variables
        var
                selectorIndexOf = gnd.string.contains( selector, this.SPACE_SPLIT )
            ,   domGetType      = 'getElementById'
            ,   firstChar       = selector.charAt( 0 )
            ,   isID            = firstChar === '#'
        ;

        // If this is an #id AND there is only one selector
        if ( isID ) {
            // Set the selector to the current item and replace the id hash
            selector = selector.substr( 1 );

            // Set parent to document since it's the alone owns getElementById
            parent = document;

            // Set the method as getElementById
//            domGetType = 'getElementById';
        }
        // If this is a .class AND there is only one selector
        else if ( !selectorIndexOf && firstChar === '.' ) {
            // Set the selector to the current item and replace the class period
            selector = selector.substr( 1 );

            // Set the method as getElementsByClassName
            domGetType = 'getElementsByClassName';
        }
        // If there was only one selector given, and it wasn't an #id or .class
        // Then it must be a tag
        else if ( !selectorIndexOf ) {
            // Set the method as getElementsByTagName
            domGetType = 'getElementsByTagName';
        }
        // Otherwise this was a complex query; let the browser deal with it
        else {
            // Set the method as querySelectorAll
            domGetType = 'querySelectorAll';
        }

        // Get the element
        parent = parent[ domGetType ](
            ( isID && selectorIndexOf )
            ? selector.substr( 0, selector.indexOf( this.SPACE_SPLIT ) )
            : selector
        );

        // If the selector started with an ID and there was more than one elem
        if ( isID && selectorIndexOf ) {
            // Get the element with the new elem and selector
            parent = this.getElements( parent, selector.replace( parent.id, '' ) );
        }

        // Return the elem
        return parent;
    };

    /**
     * @method
     *
     * Find a child element
     *
     * @params
     *********
     * @param selector {string}
     *  The selector to use
     *********
     *
     * @returns {gnd.$}
     *  The requested child
     */
    gnd.$.prototype.find = function ( selector )
    {
        return gnd.$( this.getElements( this.elem, selector ) );
    };

    /**
     * @method
     *
     * Get the elem parent
     *
     * @params
     *********
     *
     * @returns {gnd.$}
     *  The parent
     */
    gnd.$.prototype.parent = function ()
    {
        return gnd.$( this.get( 0 ).parentNode );
    };

    /**
     * @method
     *
     * Find a child element
     *
     * @params
     *********
     * @param index {number}
     *  The elem index to get
     *********
     *
     * @returns {object}
     */
    gnd.$.prototype.get = function ( index )
    {
        // If the elem is a nodeList AND the index is numeric
        if ( this.getLength() > 0 && this.elem[ index ] ) {
            // Return the requested element
            return this.elem[ index ];
        }

        // Return this item
        return this.elem;
    };

    /**
     * @method
     *
     * Find the closest parent with a given selector
     *
     * @params
     *********
     * @param selector {string}
     *  The selector to use
     **
     * @param [element] {HTMLDocument|HTMLElement|Node}
     *  The element to use
     *  The type to use
     *********
     *
     * @returns {object}
     */
    gnd.$.prototype.closest = function ( selector, element )
    {
        // If a selector was provided
        // Find the closest parent element
        if ( selector ) {

            var
                    elem            = ( element ) ? element : this.get( 0 )
                ,   type            = 'className'
                ,   failsFilter     = true
                ,   filter
                ,   stringCompare   = 'contains'
            ;

            // The selector is an ID
            if ( gnd.string.contains( selector, '#' ) ) {
                // Set the type as id
                type                = 'id';
                // Replace the id signifier in the selector
                selector            = selector.substr( 1 );
            }
            // If the selector is a class
            else if ( gnd.string.contains( selector, '.' ) ) {
                // Replace the class signifier in the selector
                selector            = selector.substr( 1 );
            }
            // Otherwise the selector is a tag
            else {
                // Set the type as tagName
                type                = 'tagName';
                stringCompare       = 'compare';
            }

            // Set the filter to use
            filter                  = elem[ type ];

            // If the filter is tagName
            if ( type === 'tagName' ) {
                // Set the filter to lowercase
                filter              = filter.toLowerCase();
            }

            // If the filter failed and the elem is a dom element
            while ( failsFilter === true && gnd.is.domElement( elem ) ) {

                // Set the filter to use
                filter              = elem[ type ];
                // If the filter is tagName
                if ( type === 'tagName' ) {
                    // Set the filter to lowercase
                    filter          = filter.toLowerCase();
                }

                // Test the filter
                failsFilter         = !gnd.string[ stringCompare ]( ' ' + filter + ' ', ' ' + selector + ' ' );
                // If the filter fails
                if ( failsFilter ) {
                    // Set the elem as the parent node to continue testing up the dom
                    elem            = elem.parentNode;
                }
            }

            // If the filter didn't fail
            if ( !failsFilter ) {
                // Return the found closest parent item
                return gnd.$( elem );
            }
        }

        // Return the parent
        return gnd.$( '' );
    };

    /**
     * @method
     *
     * Get elem length
     *
     * @params
     *********
     *
     * @returns {number}
     */
    gnd.$.prototype.getLength = function ()
    {
        // If the elem has a length
        if ( this.elem.length || this.elem.length === 0 ) {
            // Return the elem length
            return this.elem.length;
        }

        // Return 1 or 0
        return this.elem ? 1 : 0;
    };

    /**
     * @method
     *
     * Handle event for element
     *
     * @params
     *********
     * @param type {string}
     *  The type of event to handle
     **
     * @param eventType {string}
     *  The type of event to handle
     **
     * @param selector {string|object}
     *  The child node to attach event to
     **
     * @param [callback] {function}
     *  The callback method
     *********
     *
     * @returns {object}
     */
    gnd.$.prototype.handleEvent = function ( type, eventType, selector, callback )
    {
        // Ensure we have a valid event type
        // Ensure we have a valid callback
        //      Testing for selector because if there are only three params
        //      The third (selector) would be the callback
        if ( !type || !eventType || !( selector || callback ) ) {
            gnd.log.error( 'type, eventType, selector or callback was not provided', arguments );
            // Return this for chaining
            return this;
        }

        var
                elem            = this.elem
            ,   elemI
            ,   i               = 0
            ,   length          = elem.length
            ,   args
            ,   dEvent
            ,   finalCallback   = callback
            ,   self            = this
        ;

        // If the selector is the callback
        if ( gnd.is.func( selector ) ) {
            // Set the callback as the selector
            callback = selector;
            // Set the selector to null
            selector = null;

            finalCallback = callback;
        }
        // There is a selector
        else if ( !gnd.is.empty.string( selector ) ) {

            // Create the callback function
            finalCallback = function ( event )
            {
                // Set a custom target for the selector since target can be a child
                event.selectorTarget = self.closest( selector, event.target ).elem;

                // Check that the target matches the selector
                if ( event.selectorTarget ) {
                    // Set the target to the requested clicked event when delegated
                    event.selector = event.selectorTarget;
                    // If it does apply the event
                    callback.apply( callback, arguments );
                }
            };
        }

        // If this is a trigger
        if ( type === 'dispatchEvent' ) {
            // Create a new event with the event type specified
            dEvent  = new CustomEvent( eventType );
            // Set the arguments to apply
            args    = [ dEvent ];
        // Otherwise we're adding/removing an event
        } else {
            // Set the arguments to apply
            args    = [ eventType, finalCallback, false ]
        }

        // If the elem has the type method
        if ( elem[ type ] ) {
            // Handle the event
            elem[ type ].apply( elem, args );
        }
        // Otherwise it must be a nodeList or HTMLCollection
        else {
            // Iterate through the nodeList
            for ( ; i < length; i++ ) {
                // Set a quick ref var for this elem item
                elemI = elem[ i ];
                // Check to make sure this elem has this function
                if ( elemI && elemI[ type ] ) {
                    // Handle the event
                    elemI[ type ].apply( elemI, args );
                }
            }
        }

        // Return this for chaining
        return this;
    };

    /**
     * @method
     *
     * Add an event
     *
     * @params
     *********
     * @param eventType {string}
     *  The type of event to handle
     **
     * @param selector {string|object}
     *  The child node to attach event to
     **
     * @param [callback] {function}
     *  The callback method
     *********
     *
     * @returns {object}
     */
    gnd.$.prototype.on = function ( eventType, selector, callback )
    {
        return this.handleEvent(
            'addEventListener'
        ,   eventType
        ,   selector
        ,   callback
        );
    };

    /**
     * @method
     *
     * Remove an event
     *
     * @params
     *********
     * @param [eventType] {string}
     *  The type of event to handle
     **
     * @param [selector] {string|object}
     *  The child node to attach event to
     **
     * @param [callback] {function}
     *  The callback method
     *********
     *
     * @returns {object}
     */
    gnd.$.prototype.off = function ( eventType, selector, callback )
    {
        // If no params have been provided
        if ( !eventType ) {
            // Remove all event listeners by
            this.elem.parentNode.replaceChild(
                // Cloning the elem
                this.elem.cloneNode( true )
                // And replacing the elem in the parent
            ,   this.elem
            );

            // Return this for chaining
            return this;
        }

        return this.handleEvent(
            'removeEventListener'
        ,   eventType
        ,   selector
        ,   callback
        );
    };

    /**
     * @method
     *
     * Trigger an event
     *
     * @params
     *********
     * @param eventType {string}
     *  The type of event to handle
     **
     * @param [selector] {string|object}
     *  The child node to attach event to
     *********
     *
     * @returns {object}
     */
    gnd.$.prototype.trigger = function ( eventType, selector )
    {
        return this.handleEvent(
            'dispatchEvent'
        ,   eventType
        ,   selector
        );
    };

    /**
     * @method
     *
     * Overwrite, or get, the element's value
     *
     * @params
     *********
     * @param [value] {string}
     *  The value to overwrite with
     *********
     *
     * @returns {object|string}
     */
    gnd.$.prototype.val = function ( value )
    {
        // If a value was given to override with
        if ( value ) {
            var
                    i       = 0
                ,   len     = this.getLength()
            ;

            // If this elem is a node list
            if ( !this.elem.value ) {
                // Iterate through the node list
                for ( ; i < len; i++ ) {
                    // Build the array
                    this.elem[ i ].value = value;
                }

                // Return this for chaining
                return this;
            }

            // Set the value for the single elem
            this.elem.value = value;

            // Return this for chaining
            return this;
        }

        // Return this for chaining
        return this.html( value, 'value' );
    };

    /**
     * @method
     *
     * Overwrite, or get, the element's text
     *  NOTE: For use with single node elem
     *
     * @params
     *********
     * @param [text] {string}
     *  The text to overwrite with
     *********
     *
     * @returns {object|string}
     */
    gnd.$.prototype.text = function ( text )
    {
        // Return this for chaining
        return this.html( text, 'text' );
    };

    /**
     * @method
     *
     * Overwrite, or get, the element's html
     *  NOTE: For use with single node elem
     *
     * @params
     *********
     * @param [html] {string|Node|NodeList}
     *  The html to overwrite with
     **
     * @param [type] {string}
     *  The type of manipulation [text|html]
     *  (Default) html
     *********
     *
     * @returns {object|html}
     */
    gnd.$.prototype.html = function ( html, type )
    {
        // If no text was given
        if ( !html ) {
            var
                    func        = 'innerHTML'
                ,   i           = 0
                ,   len         = this.getLength()
                ,   retArray    = []
            ;

            // If the type is text
            if ( type === 'text' ) {
                // Set the function to textContent
                func = 'textContent';
            }

            // If the type is value
            if ( type === 'value' ) {
                // Set the function to value
                func = 'value';
            }

            // If the elem is a node list
            if ( !this.elem[ func ] ) {

                // Iterate through the node list
                for ( ; i < len; i++ ) {
                    // Build the array
                    retArray[ i ] = this.elem[ i ][ func ];
                }

                // Return the array
                return retArray;
            }

            // Return the textContent for the elem
            return this.elem[ func ];
        }

        // Html the html
        return this.handleHTML( 'html', html );
    };

    /**
     * @method
     *
     * Append html to this element
     *
     * @params
     *********
     * @param html {string|Node|NodeList}
     *  The html to overwrite with
     *********
     *
     * @returns {object|html}
     */
    gnd.$.prototype.append = function ( html )
    {
        // Prepend the html
        return this.handleHTML( 'append', html );
    };

    /**
     * @method
     *
     * Prepend html to this element
     *
     * @params
     *********
     * @param html {string|Node|NodeList}
     *  The html to overwrite with
     *********
     *
     * @returns {object|html}
     */
    gnd.$.prototype.prepend = function ( html )
    {
        // Prepend the html
        return this.handleHTML( 'prepend', html );
    };

    /**
     * @method
     *
     * Prepend html to this element
     *
     * @params
     *********
     * @param type {string}
     *  The type of pend to use
     *  [append|prepend|html]
     **
     * @param html {string|Node|NodeList}
     *  The html to overwrite with
     *********
     *
     * @returns {object|html}
     */
    gnd.$.prototype.handleHTML = function ( type, html )
    {
        var
                elem    = this.elem
            ,   i       = 0
            ,   len     = elem.length
            ,   tempDiv
        ;

        // If html is a string
        if ( gnd.is.string( html ) ) {

            // Create a temporary div
            tempDiv = document.createElement( 'div' );

            // Set it's html
            tempDiv.innerHTML = html;

            // Set the html as the firstChild of the temp div
            html = tempDiv.childNodes;
        }

        // If the elem is a node list
        if ( !gnd.is.domElement( elem ) ) {
            // Iterate through the node list
            for ( ; i < len; i++ ) {
                // [app/pre]end the child
                this.handlePend( type, html, elem[ i ] );
            }
        }
        else {
            // [app/pre]end the child
            this.handlePend( type, html );
        }

        // Return this for chaining
        return this;
    };

    /**
     * @method
     *
     * Prepend html to this element
     *
     * @params
     *********
     * @param type {string}
     *  The type of pend to use
     *  [append|prepend]
     **
     * @param nodes {NodeList|Node|Array}
     *  The node to [app/pre]pend
     **
     * @param [elem] {HTMLElement|Node|NodeList}
     *  The elem to use
     *********
     *
     * @returns {object|html}
     */
    gnd.$.prototype.handlePend = function ( type, nodes, elem )
    {
        // If no elem is set use this.elem
        elem = elem || this.elem;

        var
                i       = 0
            ,   len
            ,   node
        ;

        // If this is an html
        if ( type === 'html' ) {
            // Empty the element
            this.empty( elem );
        }

        // If this is a single node
        if ( !nodes.length ) {
            // Create an array with the node
            nodes = [ nodes ];
        }

        // Set the length to use in the for loop
        len = nodes.length;

        // Iterate through the node list
        for ( ; i < len; i++ ) {
            // Create a quick reference for the node
            // Clone the node to avoid deleting it from the node list
            node = nodes[ i ].cloneNode( true );

            // Ensure we have a node and an element
            if ( node && elem ) {
                // If the type is prepend
                if ( type === 'prepend' ) {
                    // Prepend the node
                    elem.insertBefore( node, elem.firstChild );
                // Otherwise append the child node
                } else {
                    // Append the node
                    elem.appendChild( node );
                }
            }
        }

        // Return this for chaining
        return this;
    };

    /**
     * @method
     *
     * Remove elem child nodes
     *
     * @params
     *********
     * @param [elem] {HTMLDocument|HTMLElement|Node}
     *  The elem to use
     *********
     *
     * @returns {object}
     */
    gnd.$.prototype.empty = function ( elem )
    {
        // If no elem is set use this.elem
        elem = elem || this.elem;

        // Set the innerHTML to null
        // Thus removing all child nodes
        elem.innerHTML = '';

        // Return this for chaining
        return this;
    };

    /**
     * @method
     *
     * Remove elem from the dom
     *
     * @params
     *********
     * @param [elem] {HTMLDocument}
     *  The elem to use
     *********
     *
     * @returns {object}
     */
    gnd.$.prototype.remove = function ( elem )
    {
        // If no elem is set use this.elem
        elem = elem || this.elem;

        var
                i   = 0
            ,   len = elem.length
        ;

        // If the elem is a node list
        if ( len ) {
            // Iterate through the node list
            for ( ; i < len; i++ ) {
                // Remove the elem
                this.remove( elem[ i ] );
            }
        } else {
            // Remove the element
            elem.parentNode.removeChild( elem );
        }

        // Return this for chaining
        return this;
    };

    /**
     * @method
     *
     * Handle class for element
     *
     * @params
     *********
     * @param className {string}
     *  The class or classes to add
     **
     * @param type {string}
     *  The type of class manipulation to do
     *********
     *
     * @returns {object}
     */
    gnd.$.prototype.handleClass = function ( className, type )
    {
        // Sanity checks
        if ( !className || !type ) {
            // Return this to avoid breaking chains
            return this;
        }

        var
                classes
            ,   length
            ,   len             = this.getLength()
            ,   i               = 0
            ,   j               = 0
            ,   classList       = this.elem.classList
        ;

        // Check if there are more than one classes to add
        if ( gnd.string.contains( className, this.SPACE_SPLIT ) ) {

            // Split the className up by the space splitter
            classes             = className.split( this.SPACE_SPLIT );
            // Set the length of the classes
            length              = classes.length;

            // If the elem is a single node
            if ( gnd.is.domElement( this.elem ) ) {
                // Iterate through the classes
                for ( ; i < length; i++ ) {
                    // Do the type for the class to the elem
                    classList[ type ]( classes[ i ] );
                }
            }
            // This is a node list
            else {
                // Iterate through each item
                for ( ; j < len; j++ ) {
                    // Iterate through the classes
                    for ( ; i < length; i++ ) {
                        // Do the type for the class to each individual element
                        this.elem[ j ].classList[ type ]( classes[ i ] );
                    }
                }
            }
        }
        // There is only one class to add
        else {
            // Check
            if ( gnd.is.domElement( this.elem ) ) {
                // Do the type for the class to the elem
                classList[ type ]( className );
            }
            // This is a node list
            else {
                // Iterate through each item
                for ( ; i < len; i++ ) {
                    // Do the type for the class to each individual element
                    this.elem[ i ].classList[ type ]( className );
                }
            }
        }

        // Return the new object
        return this;
    };

    /**
     * @method
     *
     * Add class to element
     *
     * @params
     *********
     * @param className {string}
     *  The class or classes to add
     *********
     *
     * @returns {object}
     */
    gnd.$.prototype.addClass = function ( className )
    {
        return this.handleClass( className, 'add' );
    };

    /**
     * @method
     *
     * Remove class from element
     *
     * @params
     *********
     * @param className {string}
     *  The class or classes to remove
     *********
     *
     * @returns {object}
     */
    gnd.$.prototype.removeClass = function ( className )
    {
        return this.handleClass( className, 'remove' );
    };

    /**
     * @method
     *
     * Add or remove class or classes depending on whether the
     *  elem has them or not
     *
     * @params
     *********
     * @param className {string}
     *  The class or classes to check for
     *********
     *
     * @returns {object}
     */
    gnd.$.prototype.toggleClass = function ( className )
    {
        return this.handleClass( className, 'toggle' );
    };

    /**
     * @method
     *
     * Determines if elem has the class or classes specified
     *  NOTE: For use with single node elem
     *
     * @params
     *********
     * @param className {string}
     *  The class or classes to check for
     *********
     *
     * @returns {boolean|object}
     */
    gnd.$.prototype.hasClass = function ( className )
    {
        if ( !className ) {
            return this;
        }

        var elem = this.elem;

        if ( !gnd.is.domElement( this.elem ) ) {
            elem = this.get( 0 );
        }

        // If there are more than one classes added
        if ( gnd.string.contains( className, this.SPACE_SPLIT ) ) {
            // Just use the first item
            className = className.split( this.SPACE_SPLIT )[ 0 ];
        }

        // Return the new object
        return elem.classList.contains( className );
    };

    /**
     * @method
     *
     * Get an attribute value
     *
     * @params
     *********
     * @param attr {string}
     *  The attribute to get
     *********
     *
     * @returns {string|boolean}
     */
    gnd.$.prototype.attrGet = function ( attr )
    {
        // If no attribute was provided
        if ( !attr ) {
            // Return false
            return false;
        }

        // Return this for chaining
        return this.get( 0 ).getAttribute( attr );
    };

    /**
     * @method
     *
     * Adds attribute to elem
     *
     * @params
     *********
     * @param attr {string}
     *  The attribute to add to
     **
     * @param value {*}
     *  The attribute to add to
     *********
     *
     * @returns {gnd.$}
     */
    gnd.$.prototype.attrSet = function ( attr, value )
    {
        // If no attribute or value were provided
        if ( !attr || !value ) {
            // Return this for chaining
            return this;
        }

        // If the element is a dom element and not a list
        if ( gnd.is.domElement( this.elem ) ) {
            // Set the element's attribute
            this.elem.setAttribute( attr, value );
        }

        var
                i   = 0
            ,   len = this.getLength()
        ;

        // Iterate through the node list
        for ( ; i < len; i++ ) {
            // Set the attribute to the value specified
            this.elem[ i ].setAttribute( attr, value );
        }

        // Return this for chaining
        return this;
    };

    /**
     * @method
     *
     * Removes an attribute from elem
     *
     * @params
     *********
     * @param attr {string}
     *  The attribute to remove
     *********
     *
     * @returns {gnd.$}
     */
    gnd.$.prototype.attrRemove = function ( attr )
    {
        // If no attribute was provided
        if ( !attr ) {
            // Return this for chaining
            return this;
        }

        // If the element is a dom element and not a list
        if ( gnd.is.domElement( this.elem ) ) {
            // Remove the element's attribute
            this.elem.removeAttribute( attr );
        }

        var
                i   = 0
            ,   len = this.getLength()
        ;

        // Iterate through the node list
        for ( ; i < len; i++ ) {
            // Remove the attribute specified
            this.elem[ i ].removeAttribute( attr );
        }

        // Return this for chaining
        return this;
    };

    /**
     * @method
     *
     * Get a data attribute value
     *
     * @params
     *********
     * @param data {string}
     *  The data attribute to get
     *********
     *
     * @returns {string|boolean}
     */
    gnd.$.prototype.dataGet = function ( data )
    {
        // If no data attribute was provided
        if ( !data ) {
            // Return false
            return false;
        }

        return this.attrGet( 'data-' + data );
    };

    /**
     * @method
     *
     * Adds a data attribute to elem
     *
     * @params
     *********
     * @param data
     *  The data to add to
     * @type    {string}
     **
     * @param value {*}
     *  The attribute to add to
     *********
     *
     * @returns {object}
     */
    gnd.$.prototype.dataSet = function ( data, value )
    {
        // If no data attribute or value were provided
        if ( !data || !value ) {
            // Return this for chaining
            return this;
        }

        return this.attrSet( 'data-' + data, value );
    };

    /**
     * @method
     *
     * Removes a data attribute from elem
     *
     * @params
     *********
     * @param data {string}
     *  The data to remove
     *********
     *
     * @returns {object}
     */
    gnd.$.prototype.dataRemove = function ( data )
    {
        // If no data attribute was provided
        if ( !data ) {
            // Return this for chaining
            return this;
        }

        return this.self.attrRemove( 'data-' + data );
    };

/**
 * @author MelechMizrachi
 *
 * Set the Init prototype as gnd.$'s prototype
 *
 * @type {Object|Function}
 */
gnd.$.Init.prototype = gnd.$.prototype;