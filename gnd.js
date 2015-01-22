/**=================================================================================**\
 *
 *  @author                             VGND Team
 *  @desc                               gnd Library
 *
 *  @Table_of_Contents
 *
 *  @property                           gnd
 *      @property                           gnd.VERSION
 *      @property                           gnd.DEBUG
 *      @property                           gnd.global
 *      @property                           gnd.isTypeOf()
 *      @property                           gnd.extend()
 *
\**=================================================================================**/

/**
 * @class
 */
var gnd = gnd || {};

/**
 * @namespace
 *
 * Ensure we have a namespace set for GND Globals
 * In the case one does not exist
 */
window.GND_GLOBALS = window.GND_GLOBALS || {};

    /**
     * @constant
     *
     * @desc
     *  The version number for this copy of the gnd library
     *
     * @type {string}
     */
    gnd.VERSION = '0.4.1.4. alpha';

    /**
     * @constant
     *
     * @desc
     *  Whether to run debug unit testing on the library or not
     *
     * @type {boolean}
     */
    gnd.DEBUG = GND_GLOBALS.IS_DEV || false;

    /**
     * @namespace
     *
     * @desc
     *  The gnd parent (window)
     *
     * @type {object}
     */
    gnd.global = window;

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Determine if a variable is of a type
     *
     * @params
     *********
     * @param toTest
     *  The variable to test
     * @type    {*}
     **
     * @param type
     *  The type to test
     * @type    {string}
     *********
     *
     * @returns {boolean}
     */
    gnd.isTypeOf = function ( toTest, type )
    {
        return typeof toTest === type;
    };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Extend object
     *
     * @params
     *********
     * @params  {...}
     * @type    {...}
     *********
     *
     * @returns {object}
     *  The extended object
     */
    gnd.extend = function ( obj, source )
    {
        if ( source ) {
            for ( var prop in source ) {
                if ( gnd.object.hasOwn( source, prop ) ) {
                    obj[prop] = source[prop];
                }
            }
        }

        return obj;
    };
/**=================================================================================**\
 *
 *  @author                             VGND Team
 *  @desc                               gnd Library Array Specific Functions
 *
 *  @Table_of_Contents
 *
 *  @property                            gnd.array
 *      @property                           gnd.array.is
 *          @property                           gnd.array.is.array
 *          @property                           gnd.array.is.empty
 *      @property                           gnd.array.contains
 *      @property                           gnd.array.insert
 *
\**=================================================================================**/

/**
 * @class
 */
gnd.array = {};

    /**
     * @class
     */
    gnd.array.is = {};

        /**
         * @method
         *
         * @author MelechMizrachi
         *
         * @borrows Array.isArray
         */
        gnd.array.is.array = Array.isArray;

        /**
         * @method
         *
         * @author MelechMizrachi
         *
         * @desc
         *  Determine if an array is empty
         *
         * @params
         *********
         * @param arr {*}
         *  The variable to test
         *********
         *
         * @returns {boolean}
         */
        gnd.array.is.empty = function ( arr )
        {
            return ( arr.length == 0 );
        };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Does an array contain a value
     *
     * @params
     *********
     * @param arr {array}
     *  The array to test
     **
     * @param value {string}
     *  The value to test for
     *********
     *
     * @returns {boolean}
     */
    gnd.array.contains = function ( arr, value )
    {
        return Array.prototype.indexOf.call( arr, value ) != -1;
    };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Does an array contain a value
     *
     * @params
     *********
     * @param arr {Array}
     *  The array to test
     **
     * @param value {string}
     *  The value to test for
     *********
     *
     * @returns void
     */
    gnd.array.insert = function ( arr, value )
    {
        if ( !gnd.array.contains( arr, value ) ) {
            arr.push( value );
        }
    };
/**=================================================================================**\
 *
 *  @author                             VGND Team
 *  @desc                               gnd Library Object Specific Functions
 *
 *  @Table_of_Contents
 *
 *  @property                           gnd.object
 *      @property                           gnd.object.hasOwn
 *      @property                           gnd.object.is
 *          @property                           gnd.object.object
 *          @property                           gnd.object.domElement
 *          @property                           gnd.object.nodeList
 *          @property                           gnd.object.htmlCollection
 *          @property                           gnd.object.window
 *          @property                           gnd.object.document
 *          @property                           gnd.object.empty
 *      @property                           gnd.object.get
 *          @property                           gnd.object.get.byPath()
 *          @property                           gnd.object.get.firstProp()
 *      @property                           gnd.object.set
 *          @property                           gnd.object.set.byPath()
 *          @property                           gnd.object.handlePath()
 *
\**=================================================================================**/

/**
 * @class
 */
gnd.object = {};

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Does an object have this property as its own
     *
     * @params
     *********
     * @param obj {object}
     *  The object to test
     **
     * @param key {string}
     *  The key to test for
     *********
     *
     * @returns {boolean|Object.prototype.hasOwnProperty}
     */
    gnd.object.hasOwn = function ( obj, key )
    {
        return Object.prototype.hasOwnProperty.call( obj, key );
    };

    /**
     * @class
     */
    gnd.object.is = {};

        /**
         * @method
         *
         * @author MelechMizrachi
         *
         * @desc
         *  Determine if a variable is a object
         *
         * @params
         *********
         * @param obj {*}
         *  The variable to test
         *********
         *
         * @returns {boolean}
         */
        gnd.object.is.object = function ( obj )
        {
            return gnd.isTypeOf( obj, 'object' );
        };

        /**
         * @method
         *
         * @author MelechMizrachi
         *
         * @desc
         *  Determine if a param is an HTML Element
         *
         * @params
         *********
         * @param elem {*}
         *  The variable to test
         *********
         *
         * @returns {boolean}
         */
        gnd.object.is.domElement = function ( elem )
        {
            return ( elem instanceof HTMLElement );
        };

        /**
         * @method
         *
         * @author MelechMizrachi
         *
         * @desc
         *  Determine if a variable is a node list
         *
         * @params
         *********
         * @param nodeList {*}
         *  The variable to test
         *********
         *
         * @returns {boolean}
         */
        gnd.object.is.nodeList = function ( nodeList )
        {
            return Object.prototype.toString.call( nodeList ) === '[object NodeList]';
        };

        /**
         * @method
         *
         * @author MelechMizrachi
         *
         * @desc
         *  Determine if a variable is an HTML collection
         *
         * @params
         *********
         * @param htmlCollection {*}
         *  The variable to test
         *********
         *
         * @returns {boolean}
         */
        gnd.object.is.htmlCollection = function ( htmlCollection )
        {
            return Object.prototype.toString.call( htmlCollection ) === '[object HTMLCollection]';
        };

        /**
         * @method
         *
         * @author MelechMizrachi
         *
         * @desc
         *  Determine if a variable is a node list or an HTML collection
         *
         * @params
         *********
         * @param htmlList {*}
         *  The variable to test
         *********
         *
         * @returns {boolean}
         */
        gnd.object.is.htmlList = function ( htmlList )
        {
            return ( gnd.object.is.nodeList( htmlList ) || gnd.object.is.htmlCollection( htmlList ) );
        };

        /**
         * @method
         *
         * @author MelechMizrachi
         *
         * @desc
         *  Determine if a variable is a the window variable to avoid endless loops
         *
         * @params
         *********
         * @param win {*}
         *  The variable to test
         *********
         *
         * @returns {boolean}
         */
        gnd.object.is.window = function ( win )
        {
            return win === win.window;
        };

        /**
         * @method
         *
         * @author MelechMizrachi
         *
         * @desc
         *  Determine if a variable is the document
         *
         * @params
         *********
         * @param doc {*}
         *  The variable to test
         *********
         *
         * @returns {boolean}
         */
        gnd.object.is.document = function ( doc )
        {
            return doc === document;
        };

        /**
         * @method
         *
         * @author MelechMizrachi
         *
         * @desc
         *  Determine if an object is empty
         *
         * @params
         *********
         * @param obj {*}
         *  The variable to test
         *********
         *
         * @returns {boolean}
         */
        gnd.object.is.empty = function ( obj )
        {
            // Iterate through the object
            for ( var index in obj ) {
                // Ensure this is a property of the object
                if ( Object.prototype.hasOwnProperty.call( obj, index ) ) {
                    // If all is true return false since this is a filled object
                    return false;
                }
            }

            // Always assume the object is empty
            return true;
        };

    /**
     * @class
     */
    gnd.object.get = {};

        /**
         * @method
         *
         * @author MelechMizrachi
         *
         * @desc
         *  Get a nested item from an object/array via path
         *
         * @params
         *********
         * @param obj {object|array}
         *  The object/array to find in
         **
         * @param [path] {string}
         *  The path dot delimited
         **
         * @param [def] {*}
         *  The default if undefined
         *********
         *
         * @returns {*}
         */
        gnd.object.get.byPath = function ( obj, path, def )
        {
            return gnd.object.handlePath( 'get', obj, path, def );
        };

        /**
         * @method
         *
         * @author MelechMizrachi
         *
         * @desc
         *  Get the first property in a given object
         *
         * @params
         *********
         * @param obj {object|array}
         *  The object
         *********
         *
         * @returns {*}
         */
        gnd.object.get.firstProp = function ( obj )
        {
            for ( var prop in obj ) {
                if ( obj.hasOwnProperty( prop ) ) {
                    return obj[ prop ];
                }
            }
        };

    /**
     * @class
     */
    gnd.object.set = {};

        /**
         * @method
         *
         * @author MelechMizrachi
         *
         * @desc
         *  Set a nested item's value from an object/array via path
         *
         * @params
         *********
         * @param obj {object|array}
         *  The object/array to find in
         **
         * @param [path] {string}
         *  The path dot delimited
         **
         * @param [value] {*}
         *  The default if undefined
         **
         * @param [def] {*}
         *  The default if undefined
         *********
         *
         * @returns {*}
         */
        gnd.object.set.byPath = function ( obj, path, value, def )
        {
            return gnd.object.handlePath( 'set', obj, path, value, def );
        };

    /**
     * @method
     *
     * @author
     *  TheZver
     *  MelechMizrachi
     *
     * @url
     *  http://stackoverflow.com/a/16190716
     *
     * @desc
     *  Set a nested item's value from an object/array via path
     *
     * @params
     *********
     * @param type {string}
     *  The typeof of path [get/set]
     **
     * @param obj {object|array}
     *  The object/array to find in
     **
     * @param [path] {string}
     *  The path dot delimited
     **
     * @param [value] {*}
     *  The default if undefined
     **
     * @param [def] {*}
     *  The default if undefined
     *********
     *
     * @returns {*}
     */
    gnd.object.handlePath = function ( type, obj, path, value, def )
    {
        // If this is a set and the value is not present
        // Then only two params were defined (path and value)
        // Assuming that the window was the parent obj
        if ( !value && type === 'set' ) {
            // Set value as arguments[ 1 ]
            value           = path;
            // Set path as arguments[ 0 ]
            path            = obj;
            // Set obj as window
            obj             = window;
        }

        // If the type was get
        if ( type === 'get' ) {
            // If no path is set
            // Then only one param was defined
            // Assuming that the window was the parent obj
            if ( !path ) {
                // Set value as arguments[ 0 ]
                path        = obj;
                // Set obj as window
                obj         = window;
            }

            // Set def as arguments[ 1 ] since get only has 3 params
            def             = value;
        }

        // Split the path by period
        path = path.split('.');

        var
                i   = 0
            ,   len = path.length
        ;

        // Iterate over the path length
        for ( ; i < len; i++ ) {
            // Ensure we have an item
            if( !obj || !gnd.is.object( obj ) ) {
                // Nothing found, return def
                return def;
            }

            // If this is the last item and the type is set
            if ( i === len - 1 && type === 'set' ) {
                // Set the item with the value
                obj = obj[ path[ i ] ] = value;
            }

            // Set the obj as the current item
            obj = obj[ path[ i ] ];
        }

        // If obj is undefined, something went wrong and we didn't find the right item
        if ( gnd.is.undefined( obj ) ) {
            // Return def
            return def;
        }

        // Return the found/set item value
        return obj;
    };
/**=================================================================================**\
 *
 *  @author                             VGND Team
 *  @desc                               gnd Library String Specific Functions
 *
 *  @Table_of_Contents
 *
 *  @property                           gnd.string
 *      @property                           gnd.string.makeSafe()
 *      @property                           gnd.string.is
 *          @property                           gnd.string.is.string()
 *          @property                           gnd.string.is.numeric()
 *          @property                           gnd.string.is.empty()
 *      @property                           gnd.string.contains()
 *      @property                           gnd.string.containsInsensitive()
 *      @property                           gnd.string.compare()
 *      @property                           gnd.string.compareInsensitive()
 *
\**=================================================================================**/

/**
 * @class
 */
gnd.string = {};

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Convert parameter to a string
     *
     * @params
     *********
     * @param value {*}
     *  The string to make safe
     *********
     *
     * @returns {string}
     */
    gnd.string.makeSafe = function ( value )
    {
        return ( !value )
            ? ''
            : String( value )
        ;
    };

    /**
     * @class
     */
    gnd.string.is = {};

        /**
         * @method
         *
         * @author MelechMizrachi
         *
         * @desc
         *  Determine if a variable is a string
         *
         * @params
         *********
         * @param toTest {*}
         *  The variable to test
         *********
         *
         * @returns {boolean}
         */
        gnd.string.is.string = function ( toTest )
        {
            return gnd.isTypeOf( toTest, 'string' );
        };

        /**
         * @method
         *
         * @author MelechMizrachi
         *
         * @desc
         *  Determine if a variable is a number
         *
         * @params
         *********
         * @param toTest {*}
         *  The variable to test
         *********
         *
         * @returns {boolean}
         */
        gnd.string.is.numeric = function ( toTest )
        {
            return ( toTest - parseFloat( toTest ) >= 0 );
        };

        /**
         * @method
         *
         * @author MelechMizrachi
         *
         * @desc
         *  Determine if a string is empty
         *
         * @params
         *********
         * @param toTest {*}
         *  The variable to test
         *********
         *
         * @returns {boolean}
         */
        gnd.string.is.empty = function ( toTest )
        {
            return !(
                // The string to test has a value
                toTest
                &&
                // AND String to test is a string
                gnd.string.is.string( toTest )
            );
        };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Does a string contain a value
     *
     * @params
     *********
     * @param toTest {string}
     *  The string to test
     **
     * @param value {string}
     *  The value to test for
     *********
     *
     * @returns {boolean}
     */
    gnd.string.contains = function ( toTest, value )
    {
        if ( !toTest || !value ) {
            return false;
        }

        return String.prototype.indexOf.call( toTest, value ) !== -1;
    };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Case insensitive of
     *  @link gnd.string.contains
     *
     * @params
     *********
     * @param toTest {string}
     *  The string to test
     **
     * @param value {string}
     *  The value to test for
     *********
     *
     * @returns {boolean}
     */
    gnd.string.containsInsensitive = function ( toTest, value )
    {
        if ( !toTest || !value ) {
            return false;
        }

        return gnd.string.contains( toTest.toLowerCase(), value.toLowerCase() );
    };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Compare to strings to see if they match
     *
     * @params
     *********
     * @param toTest {string}
     *  The string to test
     **
     * @param value {string}
     *  The value to test for
     *********
     *
     * @returns {boolean}
     */
    gnd.string.compare = function ( toTest, value )
    {
        return toTest === value;
    };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Case insensitive of
     *  @link gnd.string.compare
     *
     * @params
     *********
     * @param toTest {string}
     *  The string to test
     **
     * @param value {string}
     *  The value to test for
     *********
     *
     * @returns {boolean}
     */
    gnd.string.compareInsensitive = function ( toTest, value )
    {
        if ( !toTest || !value ) {
            return false;
        }

        return toTest.toLowerCase() === value.toLowerCase();
    };
/**=================================================================================**\
 *
 *  @author                             VGND Team
 *  @desc                               gnd Library Cookies
 *  @uri                                https://developer.mozilla.org/en-US/docs/Web/API/document.cookie
 *
 *  @Table_of_Contents
 *
 *  @property                           gnd.cookies
 *      @property                           gnd.cookies.get()
 *      @property                           gnd.cookies.set()
 *      @property                           gnd.cookies.remove()
 *      @property                           gnd.cookies.has()
 *      @property                           gnd.cookies.keys()
 *      @property                           gnd.cookies.getAll()
 *
\**=================================================================================**/


/**
 * @class
 */
gnd.cookies = {};

    /**
     * @method 
     *
     * @author
     *  Mozilla Developers
     *  MelechMizrachi
     *
     * @desc
     *  Get a cookie
     *
     * @params
     *********
     * @param key {string}
     *  The cookie key
     *********
     *
     * @returns {*}
     *  The cookie value
     */
    gnd.cookies.get = function ( key )
    {
        return decodeURIComponent(
                document.cookie.replace(
                    new RegExp(
                        "(?:(?:^|.*;)\\s*"
                        + encodeURIComponent( key ).replace( /[\-\.\+\*]/g, "\\$&" )
                        + "\\s*\\=\\s*([^;]*).*$)|^.*$"
                    )
                ,   "$1"
                )
            )
            ||
            null
        ;
    };

    /**
     * @method
     *
     * @author
     *  Mozilla Developers
     *  MelechMizrachi
     *
     * @desc
     *  Set a cookie
     *
     * @params
     *********
     * @param key {string}
     *  The cookie key
     **
     * @param value {string}
     *  The cookie key
     **
     * @param [expires] {string}
     *  The cookie key
     **
     * @param [path] {string}
     *  The cookie key
     **
     * @param [domain] {string}
     *  The cookie key
     **
     * @param [isSecure] {string}
     *  The cookie key
     *********
     *
     * @returns {boolean}
     *  Whether the cookie was set or not
     */
    gnd.cookies.set = function ( key, value, expires, path, domain, isSecure )
    {
        if (
                !key
                ||
                /^(?:expires|max\-age|path|domain|secure)$/i.test( key )
            )
        {
            return false;
        }

        var expiration = '';

        if ( expires ) {
            switch ( expires.constructor )
            {
                // Constructor is a number
                case Number:
                    // Set the expiration
                    expiration = ( expires === Infinity )
                    ? '; expires=Fri, 31 Dec 9999 23:59:59 GMT'
                    : '; max-age=' + expires
                    ;

                    // Break as we've found our case
                    break;
                // Constructor is a string
                case String:
                    expiration = '; expires=' + expires;

                    // Break as we've found our case
                    break;
                // Constructor is a date
                case Date:
                    expiration = '; expires=' + expires.toUTCString();

                    // Break as we've found our case
                    break;
            }
        }

        // Set the cookie
        document.cookie = encodeURIComponent( key )
            +   "="
            +   encodeURIComponent( value )
            +   expiration
            +   ( domain
                    ? '; domain=' + domain
                    : ''
                )
            +   ( path
                    ? '; path=' + path
                    : ''
                )
            +   ( isSecure
                    ? '; secure'
                    : ''
                )
        ;

        // Return true
        return true;
    };

    /**
     * @method
     *
     * @author
     *  Mozilla Developers
     *  MelechMizrachi
     *
     * @desc
     *  Remove a cookie
     *
     * @params
     *********
     * @param key {string}
     *  The cookie key
     **
     * @param [path] {string}
     *  The cookie path
     **
     * @param [domain] {string}
     *  The cookie domain
     *********
     *
     * @returns {boolean}
     *  Whether the cookie was removed or not
     */
    gnd.cookies.remove = function ( key, path, domain )
    {
        // Sanity checks
        if ( !key || !gnd.cookies.has( key ) ) {
            // Return false since there is either no key or the cookie doesn't exist
            return false;
        }

        // Remove the requested cookie by setting the expiration to the past
        document.cookie = encodeURIComponent( key )
            +   '=; expires=Thu, 01 Jan 1970 00:00:00 GMT'
            +   ( domain
                    ? '; domain=' + domain
                    : ''
                )
            +   ( path
                    ? '; path=' + path
                    : ''
                )
        ;

        // Return true
        return true;
    };

    /**
     * @method
     *
     * @author
     *  Mozilla Developers
     *  MelechMizrachi
     *
     * @desc
     *  Determine if a cookie exists
     *
     * @params
     *********
     * @param key {string}
     *  The cookie key
     *********
     *
     * @returns {boolean}
     *  Whether the cookie exists or not
     */
    gnd.cookies.has = function ( key )
    {
        return (
            new RegExp(
                "(?:^|;\\s*)"
                + encodeURIComponent( key ).replace( /[\-\.\+\*]/g, "\\$&" )
                + "\\s*\\="
            )
        ).test( document.cookie );
    };

    /**
     * @method
     *
     * @author
     *  Mozilla Developers
     *  MelechMizrachi
     *
     * @desc
     *  Get a list of the cookie keys
     *
     * @params
     *********
     *
     * @returns {array}
     *  The keys
     */
    gnd.cookies.keys = function ()
    {
        var
                // The keys
                keys = document.cookie.replace(
                    /((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, ""
                ).split( /\s*(?:\=[^;]*)?;\s*/ )

                // Index to use for iteration
            ,   index = 0
        ;

        // Iterate through all the keys
        for ( ; index < keys.length; index++ ) {
            // Decode the keys
            keys[ index ] = decodeURIComponent( keys[ index ] );
        }

        // Return the keys
        return keys;
    };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Get a list of the cookies
     *
     * @params
     *********
     *
     * @returns {object}
     *  The cookies
     */
    gnd.cookies.getAll = function ()
    {
        var
                // Split the cookies string into an array
                cookies         = document.cookie.split( ';' )
                // The returned object
            ,   cookiesObject   = {}
                // The for loop index
            ,   i               = 0
                // How many cookies are there
            ,   length          = cookies.length
                // Quick cookie reference inside of for loop
            ,   cookie
                // Quick cookie index reference inside for loop
            ,   cookieIndex
                // Quick cookie value reference inside for loop
            ,   cookieVal
        ;

        // Iterate through the cookies
        for( ; i < length; i++ ) {
            // Set the cookie; split the cookie into [index, value]
            cookie              = cookies[ i ].split( '=' );
            // Set the index
            cookieIndex         = decodeURIComponent( cookie[ 0 ].trim() );
            // Set the value
            cookieVal           = decodeURIComponent( cookie[1] );

            // Set the return object
            cookiesObject[ cookieIndex ] = cookieVal;
        }

        // Return the cookies
        return cookiesObject;
    };
/**=================================================================================**\
 *
 *  @author                             VGND Team
 *  @desc                               gnd Library User Agent Checks
 *
 *  @Table_of_Contents
 *
 *  @property                           gnd.userAgent
 *      @property                           gnd.userAgent.UA
 *      @property                           gnd.userAgent.contains
 *      @property                           gnd.userAgent.IE
 *      @property                           gnd.userAgent.FIREFOX
 *      @property                           gnd.userAgent.CHROME
 *      @property                           gnd.userAgent.SAFARI
 *      @property                           gnd.userAgent.IPHONE
 *      @property                           gnd.userAgent.IPAD
 *      @property                           gnd.userAgent.ANDROID
 *      @property                           gnd.userAgent.IOS
 *      @property                           gnd.userAgent.WINDOWS_PHONE
 *      @property                           gnd.userAgent.MOBILE
 *      @property                           gnd.userAgent.WINDOWS
 *      @property                           gnd.userAgent.MAC
 *      @property                           gnd.userAgent.LINUX
 *      @property                           gnd.userAgent.DESKTOP
 *
\**=================================================================================**/

/**
 * @class
 */
gnd.userAgent = {};

/**=================================================================================**\
 *
 *  § 1.                                Variables
 *
\**=================================================================================**/

    /**
     * @constant
     *
     * @author MelechMizrachi
     *
     * @desc
     *  User Agent string
     *
     * @type {string}
     */
    gnd.userAgent.UA = navigator.userAgent;

/**=================================================================================**\
 *
 *  § 2.                                Methods
 *
\**=================================================================================**/

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Determine if the user agent has a value
     *
     * @params
     *********
     * @param value {string}
     *  The value to test if userAgent contains it
     *********
     *
     * @returns {boolean}
     */
    gnd.userAgent.contains = function ( value )
    {
        return gnd.string.contains( gnd.userAgent.UA, value );
    };

/**=================================================================================**\
 *
 *  § 3.                                Static Booleans
 *
\**=================================================================================**/

    /**
     * @constant
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Determine if the user's browser is IE
     *
     * @type {boolean}
     */
    gnd.userAgent.IE = (function ()
    {
        return gnd.userAgent.contains( 'MSIE' );
    })();

    /**
     * @constant
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Determine if the user's browser is FireFox
     *
     * @type {boolean}
     */
    gnd.userAgent.FIREFOX = (function ()
    {
        return gnd.userAgent.contains( 'Firefox' );
    })();

    /**
     * @constant
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Determine if the user's browser is Chrome
     *
     * @type {boolean}
     */
    gnd.userAgent.CHROME = (function ()
    {
        return gnd.userAgent.contains( 'Chrome' );
    })();

    /**
     * @constant
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Determine if the user's browser is Safari
     *
     * @type {boolean}
     */
    gnd.userAgent.SAFARI = (function ()
    {
        return gnd.userAgent.contains( 'Safari' ) && !gnd.userAgent.CHROME;
    })();

    /**
     * @constant
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Determine if the user's device is iPhone
     *
     * @type {boolean}
     */
    gnd.userAgent.IPHONE = (function ()
    {
        return gnd.userAgent.contains( 'iPhone' );
    })();

    /**
     * @constant
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Determine if the user's device is iPad
     *
     * @type {boolean}
     */
    gnd.userAgent.IPAD = (function ()
    {
        return gnd.userAgent.contains( 'iPad' );
    })();

    /**
     * @constant
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Determine if the user's OS is Android
     *
     * @type {boolean}
     */
    gnd.userAgent.ANDROID = (function ()
    {
        return gnd.userAgent.contains( 'Android' );
    })();

    /**
     * @constant
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Determine if the user's OS is iOS
     *
     * @type {boolean}
     */
    gnd.userAgent.IOS = gnd.userAgent.IPHONE || gnd.userAgent.IPAD;

    /**
     * @constant
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Determine if the user's OS is Windows Phone
     *
     * @type {boolean}
     */
    gnd.userAgent.WINDOWS_PHONE = (function ()
    {
        return gnd.userAgent.contains( 'Windows Phone' );
    })();

    /**
     * @constant
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Determine if the user's device is a mobile device
     *
     * @type {boolean}
     */
    gnd.userAgent.MOBILE = gnd.userAgent.IOS || gnd.userAgent.WINDOWS_PHONE || gnd.userAgent.ANDROID;

    /**
     * @constant
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Determine if the user's OS is Windows
     *
     * @type {boolean}
     */
    gnd.userAgent.WINDOWS = (function ()
    {
        return gnd.userAgent.contains( 'Windows NT' );
    })();

    /**
     * @constant
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Determine if the user's OS is Mac
     *
     * @type {boolean}
     */
    gnd.userAgent.MAC = (function ()
    {
        return gnd.userAgent.contains( 'Macintosh' );
    })();

    /**
     * @constant
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Determine if the user's OS is Linux
     *
     * @type {boolean}
     */
    gnd.userAgent.LINUX = (function ()
    {
        return gnd.userAgent.contains( 'Linux' );
    })();

    /**
     * @constant
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Determine if the user's device is a desktop
     *
     * @type {boolean}
     */
    gnd.userAgent.DESKTOP = !gnd.userAgent.MOBILE;
/**=================================================================================**\
 *
 *  @author                             VGND Team
 *  @desc                               gnd Library Is Functions
 *
 *  @Table_of_Contents
 *
 *  @property                           gnd.is
 *      @property                           gnd.is.modernBrowser()
 *      @property                           gnd.is.array()
 *      @property                           gnd.is.window()
 *      @property                           gnd.is.document()
 *      @property                           gnd.is.numeric()
 *      @property                           gnd.is.object()
 *      @property                           gnd.is.string()
 *      @property                           gnd.is.domElement()
 *      @property                           gnd.is.nodeList()
 *      @property                           gnd.is.htmlCollection()
 *      @property                           gnd.is.$()
 *      @property                           gnd.is.bool()
 *      @property                           gnd.is.func()
 *      @property                           gnd.is.invalid()
 *      @property                           gnd.is.undefined()
 *      @property                           gnd.is.empty
 *          @property                           gnd.is.empty.array()
 *          @property                           gnd.is.empty.object()
 *          @property                           gnd.is.empty.string()
 *      @property                           gnd.is.browser
 *          @property                           gnd.is.browser.IE()
 *          @property                           gnd.is.browser.FIREFOX()
 *          @property                           gnd.is.browser.CHROME()
 *          @property                           gnd.is.browser.SAFARI()
 *      @property                           gnd.is.os
 *          @property                           gnd.is.os.WINDOWS()
 *          @property                           gnd.is.os.MAC()
 *          @property                           gnd.is.os.LINUX()
 *          @property                           gnd.is.os.ANDROID()
 *          @property                           gnd.is.os.IOS()
 *          @property                           gnd.is.os.WP()
 *      @property                           gnd.is.device
 *          @property                           gnd.is.device.WP()
 *          @property                           gnd.is.device.DESKTOP()
 *          @property                           gnd.is.device.MOBILE()
 *          @property                           gnd.is.device.ANDROID()
 *          @property                           gnd.is.device.IPHONE()
 *          @property                           gnd.is.device.IPAD()
 *
\**=================================================================================**/

/**
 * @class 
 */
gnd.is = {};

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Is this a modern browser
     *
     * @type {boolean}
     */
    gnd.is.modernBrowser = (
        'querySelector' in document
        && 'addEventListener' in window
        && 'localStorage' in window
        && 'sessionStorage' in window
        && 'bind' in Function
        && (
            ('XMLHttpRequest' in window && 'withCredentials' in new XMLHttpRequest())
            || 'XDomainRequest' in window
        )
    );

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @borrows Array.isArray
     */
    gnd.is.array = gnd.array.is.array;

    /**
     * @method
     *
     * @author MelechMizrachi
     */
    gnd.is.window = gnd.object.is.window;

    /**
     * @method
     *
     * @author MelechMizrachi
     */
    gnd.is.document = gnd.object.is.document;

    /**
     * @method
     *
     * @author MelechMizrachi
     */
    gnd.is.numeric = gnd.string.is.numeric;

    /**
     * @method
     *
     * @author MelechMizrachi
     */
    gnd.is.object = gnd.object.is.object;

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @see gnd.string.is.string
     *
     * @type {Function}
     */
    gnd.is.string = gnd.string.is.string;

    /**
     * @method
     *
     * @author MelechMizrachi
     */
    gnd.is.domElement = gnd.object.is.domElement;

    /**
     * @method
     *
     * @author MelechMizrachi
     */
    gnd.is.nodeList = gnd.object.is.nodeList;

    /**
     * @method
     *
     * @author MelechMizrachi
     */
    gnd.is.htmlCollection = gnd.object.is.htmlCollection;

    /**
     * @method
     *
     * @author MelechMizrachi
     */
    gnd.is.htmlList = gnd.object.is.htmlList;

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Determine if a variable is an instance of gnd.dom.$
     *
     * @params
     *********
     * @param toTest {*}
     *  The variable to test
     *********
     *
     * @returns {boolean}
     */
    gnd.is.$ = function ( toTest )
    {
        return toTest instanceof gnd.$;
    };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Determine if a variable is a boolean
     *
     * @params
     *********
     * @param toTest {*}
     *  The variable to test
     *********
     *
     * @returns {boolean}
     */
    gnd.is.bool = function ( toTest )
    {
        return gnd.isTypeOf( toTest, 'boolean' );
    };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Determine if a variable is a function
     *
     * @params
     *********
     * @param toTest {*}
     *  The variable to test
     *********
     *
     * @returns {boolean}
     */
    gnd.is.func = function ( toTest )
    {
        return gnd.isTypeOf( toTest, 'function' );
    };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Determine if a variable is null/undefined/etc
     *
     * @params
     *********
     * @param toTest {*}
     *  The variable to test
     *********
     *
     * @returns {boolean}
     */
    gnd.is.invalid = function ( toTest )
    {
        return gnd.is.undefined( toTest )
            || toTest === null
            || !toTest
        ;
    };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Determine if a variable is undefined
     *
     * @params
     *********
     * @param toTest {*}
     *  The variable to test
     *********
     *
     * @returns {boolean}
     */
    gnd.is.undefined = function ( toTest )
    {
        return gnd.isTypeOf( toTest, 'undefined' );
    };

    /**
     * @class
     */
    gnd.is.empty = {};

        /**
         * @method
         *
         * @author MelechMizrachi
         */
        gnd.is.empty.array = gnd.array.is.empty;

        /**
         * @method
         *
         * @author MelechMizrachi
         */
        gnd.is.empty.object = gnd.object.is.empty;

        /**
         * @method
         *
         * @author MelechMizrachi
         */
        gnd.is.empty.string = gnd.string.is.empty;

    /**
     * @class
     */
    gnd.is.browser = {};

        /**
         * @constant
         *
         * @author MelechMizrachi
         *
         * @borrows gnd.userAgent.IE
         */
        gnd.is.browser.IE = gnd.userAgent.IE;

        /**
         * @constant
         *
         * @author MelechMizrachi
         *
         * @borrows gnd.userAgent.FIREFOX
         */
        gnd.is.browser.FIREFOX = gnd.userAgent.FIREFOX;

        /**
         * @constant
         *
         * @author MelechMizrachi
         *
         * @borrows gnd.userAgent.CHROME
         */
        gnd.is.browser.CHROME = gnd.userAgent.CHROME;

        /**
         * @constant
         *
         * @author MelechMizrachi
         *
         * @borrows gnd.userAgent.SAFARI
         */
        gnd.is.browser.SAFARI = gnd.userAgent.SAFARI;

    /**
     * @class
     */
    gnd.is.os = {};

        /**
         * @constant
         *
         * @author MelechMizrachi
         *
         * @borrows gnd.userAgent.WINDOWS
         */
        gnd.is.os.WINDOWS = gnd.userAgent.WINDOWS;

        /**
         * @constant
         *
         * @author MelechMizrachi
         *
         * @borrows gnd.userAgent.MAC
         */
        gnd.is.os.MAC = gnd.userAgent.MAC;

        /**
         * @constant
         *
         * @author MelechMizrachi
         *
         * @borrows gnd.userAgent.LINUX
         */
        gnd.is.os.LINUX = gnd.userAgent.LINUX;

        /**
         * @constant
         *
         * @author MelechMizrachi
         *
         * @borrows gnd.userAgent.ANDROID
         */
        gnd.is.os.ANDROID = gnd.userAgent.ANDROID;

        /**
         * @constant
         *
         * @author MelechMizrachi
         *
         * @borrows gnd.userAgent.IOS
         */
        gnd.is.os.IOS = gnd.userAgent.IOS;

        /**
         * @constant
         *
         * @author MelechMizrachi
         *
         * @borrows gnd.userAgent.WINDOWS_PHONE
         */
        gnd.is.os.WP = gnd.userAgent.WINDOWS_PHONE;

    /**
     * @class
     */
    gnd.is.device = {};

        /**
         * @constant
         *
         * @author MelechMizrachi
         *
         * @borrows gnd.userAgent.WINDOWS_PHONE
         */
        gnd.is.device.WP = gnd.userAgent.WINDOWS_PHONE;

        /**
         * @constant
         *
         * @author MelechMizrachi
         *
         * @borrows gnd.userAgent.DESKTOP
         */
        gnd.is.device.DESKTOP = gnd.userAgent.DESKTOP;

        /**
         * @constant
         *
         * @author MelechMizrachi
         *
         * @borrows gnd.userAgent.MOBILE
         */
        gnd.is.device.MOBILE = gnd.userAgent.MOBILE;

        /**
         * @constant
         *
         * @author MelechMizrachi
         *
         * @borrows gnd.userAgent.ANDROID
         */
        gnd.is.device.ANDROID = gnd.userAgent.ANDROID;

        /**
         * @constant
         *
         * @author MelechMizrachi
         *
         * @borrows gnd.userAgent.IPHONE
         */
        gnd.is.device.IPHONE = gnd.userAgent.IPHONE;

        /**
         * @constant
         *
         * @author MelechMizrachi
         *
         * @borrows gnd.userAgent.IPAD
         */
        gnd.is.device.IPAD = gnd.userAgent.IPAD;
/**=================================================================================**\
 *
 *  @author                             VGND Team
 *  @desc                               gnd Library Console Logging
 *
 *  @Table_of_Contents
 *
 *  @property                           gnd.log
 *      @property                           gnd.log.log()
 *      @property                           gnd.log.info()
 *      @property                           gnd.log.warn()
 *      @property                           gnd.log.error()
 *      @property                           gnd.log.debug()
 *      @property                           gnd.log.time()
 *      @property                           gnd.log.timeEnd()
 *
\**=================================================================================**/

/**
 * @class
 */
gnd.log = {};

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Log variables to the console
     */
    gnd.log.log = function ()
    {
        if ( gnd.DEBUG ) {
            console.log.apply( console, arguments );
        }
    };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Set some info to the console
     *
     * @params
     *********
     * @params  {...} {*}
     *********
     *
     * @returns void
     */
    gnd.log.info = function ()
    {
        if ( gnd.DEBUG ) {
            console.info.apply( console, arguments );
        }
    };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Console a warning
     *
     * @params
     *********
     * @params  {...} {*}
     *********
     *
     * @returns void
     */
    gnd.log.warn = function ()
    {
        if ( gnd.DEBUG ) {
            console.warn.apply( console, arguments );
        }
    };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Debug variables to the console
     *
     * @params
     *********
     * @params  {...} {*}
     *********
     *
     * @returns void
     */
    gnd.log.debug = function ()
    {
        if ( gnd.DEBUG ) {
            console.debug.apply( console, arguments );
        }
    };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Console errors
     *
     * @params
     *********
     * @params  {...} {*}
     *********
     *
     * @returns void
     */
    gnd.log.error = function ()
    {
        if ( gnd.DEBUG ) {
            console.error.apply( console, arguments );
        }
    };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Console time
     *
     * @params
     *********
     * @params  {...} {*}
     *********
     *
     * @returns void
     */
    gnd.log.time = function ()
    {
        if ( gnd.DEBUG ) {
            console.time.apply( console, arguments );
        }
    };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Console timeEnd
     *
     * @params
     *********
     * @params  {...} {*}
     *********
     *
     * @returns void
     */
    gnd.log.timeEnd = function ()
    {
        if ( gnd.DEBUG ) {
            console.timeEnd.apply( console, arguments );
        }
    };
/**=================================================================================**\
 *
 *  @author                             VGND Team
 *  @desc                               gnd Library Utilities
 *
 *  @Table_of_Contents
 *
 *  @property                           gnd.utils
 *      @property                           gnd.utils.extend()
 *      @property                           gnd.utils.each()
 *      @property                           gnd.utils.merge()
 *      @property                           gnd.utils.cloneObject()
 *      @property                           gnd.utils.validateObject()
 *
\**=================================================================================**/

/**
 * @class
 */
gnd.utils = {};

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @borrows gnd.extend
     */
    gnd.utils.extend = gnd.extend;

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Iterate through an object || array
     *
     * @params
     *********
     * @param items {object|array}
     *  The items to loop through
     **
     * @param callback {function}
     *  The callback for each item
     *********
     *
     * @returns void
     */
    gnd.utils.each = function ( items, callback )
    {
        // Sanity checks
        if ( ( gnd.is.object( items ) || !gnd.is.empty.array( items ) ) && gnd.is.func( callback ) ) {
            var index;

            // Iterate through the items
            for ( index in items ) {
                // Check that items has this index as a property
                if ( Object.prototype.hasOwnProperty.call( items, index ) ) {
                    // Call the callback function
                    callback(
                        // @type string
                        // @param index
                        index
                        // @type object/array/string/etc
                        // @param items
                    ,   items[ index ]
                    );
                }
            }
        }
    };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Merge two objects
     *
     * @params
     *********
     * @param mergeInto {object}
     *  The object to merge into
     * @param mergeThis {object}
     *  The object to merge into
     *********
     *
     * @returns {object}
     */
    gnd.utils.merge = function ( mergeInto, mergeThis )
    {
        // TODO: Work on this
        return mergeInto && mergeThis;
    };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Clone a given object
     *
     * @params
     *********
     * @param toClone {object}
     *  The object to clone
     *********
     *
     * @returns {object}
     */
    gnd.utils.cloneObject = function ( toClone )
    {
        // Is the object valid?
        if ( !gnd.is.empty.object( toClone ) ) {
            // It is a valid object so return the cloned object
            return gnd.utils.extend(
                {}
            ,   toClone
            );
        }

        // Always assume object is invalid so return new empty object
        return {};
    };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Validate a given object
     *
     * @params
     *********
     * @param toTest {object}
     *  The object to validate
     *********
     *
     * @returns {object}
     */
    gnd.utils.validateObject = function ( toTest )
    {
        // Is the object valid?
        if ( !gnd.is.empty.object( toTest ) ) {
            // It is a valid object so return it
            return toTest;
        }

        // Always assume object is invalid so return new empty object
        return {};
    };
/**=================================================================================**\
 *
 *  @author                             VGND Team
 *  @desc                               gnd Library Utilities
 *
 *  @Table_of_Contents
 *
 *  @property                           gnd.xhr
 *      @property                           gnd.xhr.URL
 *      @property                           gnd.xhr.ajax()
 *
\**=================================================================================**/

/**
 * @class
 */
gnd.xhr = {};

    /**
     * @constant
     *
     * @desc
     *  Default ajax request url
     *
     * @type {string}
     */
    gnd.xhr.URL = '/service/api/';

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Ajax/XHR request
     *
     * @params
     *********
     * @param url {string|object}
     *  The xhr url
     **
     * @param [options] {object}
     *  The options for the ajax request
     *********
     *
     * @returns {object}
     *  The xhr call
     */
    gnd.xhr.ajax = function ( url, options )
    {
        // If the url is not valid
        if ( gnd.is.empty.string( url ) ) {
            //  If 'url' is an object
            if ( gnd.is.object( url ) ) {
                // Then only the options were sent
                // To use the default ajax url
                // So set options to url
                options = url;
            }

            if ( gnd.is.empty.string( options.url ) ) {
                url = options.url;
            } else {
                return false;
            }

//            // Set the url to the default url
//            url = gnd.xhr.URL;
        }

        /**
         * @name    options
         */
        /**     @name   options#accept
         *      @propertyOf options
         *      @type   {string}
         */
        /**     @name   options#async
         *      @propertyOf options
         *      @type   {boolean}
         */
        /**     @name   options#contentType
         *      @propertyOf options
         *      @type   {string}
         */
        /**     @name   options#data
         *      @propertyOf options
         *      @type   {object}
         */
        /**     @name   options#headers
         *      @propertyOf options
         *      @type   {object}
         */
        /**     @name   options#dataString
         *      @propertyOf options
         *      @type   {string}
         */
        /**     @name   options#method
         *      @propertyOf options
         *      @type   {string}
         */
        /**     @name   options#success
         *      @propertyOf options
         *      @type   {function}
         */
        /**     @name   options#error
         *      @propertyOf options
         *      @type   {function}
         */
        /**     @name   options#complete
         *      @propertyOf options
         *      @type   {function}
        */
        options = options || {};

        var
                XHR                                     = new XMLHttpRequest()
            ,   method                                  = ( !gnd.is.empty.string( options.method ) )
                    ? options.method
                    : 'POST'
            ,   accept                                  = ( !gnd.is.empty.string( options.accept ) )
                    ? options.accept
                    : 'application/json, text/javascript, */*'
            ,   async                                   = ( typeof options.async === 'boolean' )
                    ? options.async
                    : true
            ,   contentType                             = ( !gnd.is.empty.string( options.contentType ) )
                    ? options.contentType
                    : 'application/x-www-form-urlencoded; charset=UTF-8'
            ,   data                                    = ( !gnd.is.empty.object( options.data ) )
                    ? options.data
                    : {}
            ,   headers                                 = ( !gnd.is.empty.object( options.headers ) )
                    ? options.headers
                    : {}
            ,   dataString                              = ( !gnd.is.empty.string( options.dataString ) )
                    ? options.dataString
                    : ''
            ,   dataIndex                               = 0
            ,   header
            ,   onreadystatechange
            ,   response
        ;

        // Open the XHR connection
        XHR.open(
            method
        ,   url
        ,   async
        );

        // Set the Accept header
        XHR.setRequestHeader(
            'Accept'
        ,   accept
        );

        // Set the content type header
        XHR.setRequestHeader(
            'Content-Type'
        ,   contentType
        );

        // Set the requested with header
        XHR.setRequestHeader(
            'X-Requested-With'
        ,   'XMLHttpRequest'
        );

        // Iterate through all the headers provided
        for ( header in headers ) {
            // Ensure they are properties of headers
            if ( headers.hasOwnProperty( header )) {
                // Set these headers
                XHR.setRequestHeader(
                    header
                ,   headers[ header ]
                );
            }
        }

        // On ready state change
        onreadystatechange = function ()
        {
            // When the XHR call is done
            if ( XHR.readyState === 4 || async === false ) {
                // Response from XHR call
                response = XHR.responseText;

                // On Failure
                if ( XHR.status != 200 ) {
                    // Console the error
                    gnd.log.error( 'XHR Error: Begin' );
                    gnd.log.error( 'Response: ', response );
                    gnd.log.error( 'status', XHR.status );
                    gnd.log.error( 'XHR Error: End' );

                    // If an error handler was set
                    if ( gnd.is.func( options.error ) ) {
                        // Call error function
                        options.error( response );
                    }
                }
                // On success
                else {
                    // Console the response as info
                    gnd.log.info( 'XHR Success: Begin' );
                    gnd.log.info( response );
                    gnd.log.info( 'XHR Success: End' );

                    // If a success handler was set
                    if ( gnd.is.func( options.success ) ) {
                        // Call success function
                        options.success( response );
                    }
                }

                // On complete (regardless of error)
                if ( gnd.is.func( options.complete ) ) {
                    // Call complete function
                    options.complete( response );
                }
            }
        };

        // If this is an async call
        if ( async === true ) {
            // Set the onreadystatechange xhr function to the above created
            XHR.onreadystatechange = onreadystatechange;
        }

        // Iterate through each data item to create a query string
        gnd.utils.each(
            // The object to iterate through
            data
            // The callback function
        ,   function ( index, item )
            {
                // If this is not the first item
                if ( dataIndex > 0 ) {
                    // Append an ampersand
                    dataString += '&';
                }

                // Append this data value and attribute
                dataString += index + '=' + item;

                // Increment the count
                dataIndex++;
            }
        );

        // Send the XHR Request
        XHR.send( dataString );

        // If this is an sync call
        if ( async === false ) {
            // Call the function with our success/fail logic
            onreadystatechange();
        }

        // Return the executed XHR
        return XHR;
    };
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
 * @author MelechMizrachi
 *
 * @desc
 *  gnd.dom.$ initializer
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
     * @author MelechMizrachi
     *
     * @desc
     *  gnd.dom.$ initializer
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
     * @desc
     *  The HTML element
     *
     * @type {HTMLDocument|HTMLElement|Node|NodeList}
     */
    gnd.$.prototype.elem = null;

    /**
     * @namespace
     *
     * @desc
     *  The context used to get this element
     *
     * @type {HTMLDocument|HTMLElement|Node|NodeList}
     */
    gnd.$.prototype.context = document;

    /**
     * @namespace
     *
     * @desc
     *  The selector used
     *
     * @type {string|HTMLDocument|HTMLElement|Node|NodeList}
     */
    gnd.$.prototype.selector = '';

    /**
     * @constant
     *
     * @desc
     *  How to split the strings within the class
     *
     * @type {string}
     */
    gnd.$.prototype.SPACE_SPLIT = ' ';

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Get an element using a parent and a string selector
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
     * @author MelechMizrachi
     *
     * @desc
     *  Find a child element
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
     * @author MelechMizrachi
     *
     * @desc
     *  Get the elem parent
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
     * @author MelechMizrachi
     *
     * @desc
     *  Find a child element
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
     * @author MelechMizrachi
     *
     * @desc
     *  Find the closest parent with a given selector
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
     * @author MelechMizrachi
     *
     * @desc
     *  Get elem length
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
     * @author MelechMizrachi
     *
     * @desc
     *  Handle event for element
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
     * @author MelechMizrachi
     *
     * @desc
     *  Add an event
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
     * @author MelechMizrachi
     *
     * @desc
     *  Remove an event
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
     * @author MelechMizrachi
     *
     * @desc
     *  Trigger an event
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
     * @author MelechMizrachi
     *
     * @desc
     *  Overwrite, or get, the element's value
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
     * @author MelechMizrachi
     *
     * @desc
     *  Overwrite, or get, the element's text
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
     * @author MelechMizrachi
     *
     * @desc
     *  Overwrite, or get, the element's html
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
     * @author MelechMizrachi
     *
     * @desc
     *  Append html to this element
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
     * @author MelechMizrachi
     *
     * @desc
     *  Prepend html to this element
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
     * @author MelechMizrachi
     *
     * @desc
     *  Prepend html to this element
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
     * @author MelechMizrachi
     *
     * @desc
     *  Prepend html to this element
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
     * @author MelechMizrachi
     *
     * @desc
     *  Remove elem child nodes
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
     * @author MelechMizrachi
     *
     * @desc
     *  Remove elem from the dom
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
     * @author MelechMizrachi
     *
     * @desc
     *  Handle class for element
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
     * @author MelechMizrachi
     *
     * @desc
     *  Add class to element
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
     * @author MelechMizrachi
     *
     * @desc
     *  Remove class from element
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
     * @author MelechMizrachi
     *
     * @desc
     *  Add or remove class or classes depending on whether the
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
     * @author MelechMizrachi
     *
     * @desc
     *  Determines if elem has the class or classes specified
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
     * @author MelechMizrachi
     *
     * @desc
     *  Get an attribute value
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
     * @author MelechMizrachi
     *
     * @desc
     *  Adds attribute to elem
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
     * @author MelechMizrachi
     *
     * @desc
     *  Removes an attribute from elem
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
     * @author MelechMizrachi
     *
     * @desc
     *  Get a data attribute value
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
     * @author MelechMizrachi
     *
     * @desc
     *  Adds a data attribute to elem
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
     * @author MelechMizrachi
     *
     * @desc
     *  Removes a data attribute from elem
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
 * @desc
 *  Set the Init prototype as gnd.$'s prototype
 *
 * @type {Object|Function}
 */
gnd.$.Init.prototype = gnd.$.prototype;
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
     * @returns {object}
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
     * @returns {object}
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
     * @returns {number}
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
     * @returns {number}
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
     * @returns {number}
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
     * @returns {number}
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
     * @returns {number}
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
/**=================================================================================**\
 *
 *  @author                             VGND Team
 *  @desc                               gnd Library Scrollable Element
 *
 *  @Table_of_Contents
 *
 *  § 1.                                Variables
 *  § 2.                                Methods
 *
\**=================================================================================**/

/**
 * @exports gnd.scroller
 */
(function ( root, Factory )
{
    /**
     * @namespace root
     * @extends gnd
     */

    /**
     * @memberOf gnd
     * @namespace scroller
     */
    root.scroller = Factory;

// Call anonymous function
} ( gnd, /** @lends gnd.scroller */{

/**=================================================================================**\
 *
 *  § 1.                                Variables
 *
\**=================================================================================**/



/**=================================================================================**\
 *
 *  § 2.                                Methods
 *
\**=================================================================================**/



}));
// End gnd.scroller
/**=================================================================================**\
 *
 *  @author                             VGND Team
 *  @desc                               gnd Library User Interface
 *
 *  @Table_of_Contents
 *
 *  @property                           gnd.ui
 *      @property                           gnd.ui.$
 *      @property                           gnd.ui.components
 *      @property                           gnd.ui.Topics
 *          @property                           gnd.ui.Topics.topics
 *          @property                           gnd.ui.Topics._topics
 *          @property                           gnd.ui.Topics.Topic()
 *          @property                           gnd.ui.Topics.subscribeToTopic()
 *          @property                           gnd.ui.Topics.unSubscribeFromTopic()
 *          @property                           gnd.ui.Topics.triggerTopic()
 *          @property                           gnd.ui.Topics.unSubscribeAllFromTopic()
 *          @property                           gnd.ui.Topics.handleTopics()
 *          @property                           gnd.ui.Topics.removeTopics()
 *      @property                           gnd.ui.Helpers
 *          @property                           gnd.ui.Helpers.__options
 *          @property                           gnd.ui.Helpers.__setOptions()
 *      @property                           gnd.ui.baseExtend
 *      @property                           gnd.ui.extend()
 *
\**=================================================================================**/

/**
 * @class
 */
gnd.ui = {};

    /**
     * @class
     *
     * @desc
     *  The dom selector function to use
     *
     * @extends {gnd.$}
     */
    gnd.ui.$ = gnd.dom.$;

    /**
     * @namespace
     *
     * @desc
     *  Object of components created that need to be referenced globally
     *
     * @type {object}
     */
    gnd.ui.components = {};

    /**
     * @class
     *
     * @desc
     *  Topics for components
     */
    gnd.ui.Topics = {};

        /**
         * @namespace
         *
         * @desc
         *  The topics to subscribe for this component
         *
         * @type {object}
         *
         * @schema
         * {
         *     'someTopic' : [
         *          { callback, scope }
         *     ,    { callback, scope }
         *     ]
         * }
         */
        gnd.ui.Topics.topics = {};

        /**
         * @namespace
         *
         * @desc
         *  The subscribed topics
         *
         * @type {object}
         */
        gnd.ui.Topics._topics = {};

        /**
         * @class
         *
         * @author MelechMizrachi
         *
         * @desc
         *  Handles topic callbacks for this component
         *
         * @params
         *********
         * @param topicName {string}
         *  The topic name
         *********
         *
         * @returns {object}
         *  The topic
         */
        gnd.ui.Topics.Topic = function ( topicName )
        {
            var
                    topic   = topicName && this._topics[ topicName ]
                ,   self    = this
            ;

            // If there is no topic already created
            if ( !topic ) {
                // Create the topic
                topic           = {
                    // Trigger a topic to fire it's callbacks
                    trigger         : self.triggerTopic
                    // Add a callback to a topic
                ,   subscribe       : self.subscribeToTopic
                    // Remove a callback from a topic
                ,   unSubscribe     : self.unSubscribeFromTopic
                    // Remove all callbacks from a topic
                ,   unSubscribeAll  : self.unSubscribeAllFromTopic
                    // Storage for topic callbacks
                ,   _callbacks      : []
                    // The default scope of things
                ,   scope           : self
                };

                // If the topic name is passed
                if ( !gnd.is.empty.string( topicName ) ) {
                    // Create the topic in the component's topics array
                    this._topics[ topicName ] = topic;
                }
            }

            // Return the topic
            return topic;
        };

        /**
         * @method
         *
         * @author MelechMizrachi
         *
         * @desc
         *  Subscribe a callback method to a topic
         *
         * @params
         *********
         * @param callback {string}
         *  The callback method
         **
         * @param [scope] {object}
         *  The scope
         *********
         *
         * @returns {object}
         *  The topic
         */
        gnd.ui.Topics.subscribeToTopic = function ( callback, scope )
        {
            // Determine if scope is a valid object
            if ( !scope ) {
                // Set it to this topic's scope
                scope = this.scope;
            }

            // Sanity checks
            if ( !gnd.is.func( scope[ callback ] ) )
            {
                // Parameter is incorrect so return false
                return false;
            }

            var
                    i   = 0
                ,   len = this._callbacks.length
            ;

            // Iterate through the callbacks for this topic
            for ( ; i < len; i++ ) {
                // If we match the callback with the topic's callback
                if ( this._callbacks[ i ].callback === callback && this._callbacks[ i ].scope === scope ) {
                    // No need to add it so return false
                    return false;
                }
            }

            // Push this new callback to the topics array
            this._callbacks.push({
                callback    : callback
            ,   scope       : scope
            });

            // Return the topic
            return this;
        };

        /**
         * @method
         *
         * @author MelechMizrachi
         *
         * @desc
         *  Subscribe a callback method to a topic
         *
         * @params
         *********
         * @param callback {string}
         *  The callback method
         **
         * @param [scope] {object}
         *  The scope
         *********
         *
         * @returns {object}
         *  The topic
         */
        gnd.ui.Topics.unSubscribeFromTopic = function ( callback, scope )
        {
            // If the callback is not a string
            if ( !gnd.is.string( callback ) )
            {
                return false;
            }

            var
                    i   = 0
                ,   len = this._callbacks.length
            ;

            // Determine if scope is a valid object
            if ( !scope ) {
                // Set it to this topic's scope
                scope = this.scope;
            }

            // Iterate through the callbacks for this topic
            for ( ; i < len; i++ ) {
                // If we match the callback with the topic's callback
                if ( this._callbacks[ i ].callback === callback && this._callbacks[ i ].scope === scope ) {
                    // Remove this topic callback
                    this._callbacks.splice( i, 1 );

                    // We found the topic to remove so no need to continue
                    break;
                }
            }

            // Return the topic
            return this;
        };

        /**
         * @method
         *
         * @author MelechMizrachi
         *
         * @desc
         *  Trigger a topic's callback methods to fire
         *
         * @params
         *********
         *
         * @returns {object}
         *  The topic
         */
        gnd.ui.Topics.triggerTopic = function ()
        {
            var
                    i   = 0
                ,   len = this._callbacks.length
                ,   callbackItem
            ;

            // Iterate through the callbacks
            for ( ; i < len; i++ ) {
                // Quick reference
                callbackItem = this._callbacks[ i ];

                // Call the callback method
                callbackItem.scope[ callbackItem.callback ]
                    .apply( callbackItem.scope, arguments )
                ;
            }

            // Return the topic
            return this;
        };

        /**
         * @method
         *
         * @author MelechMizrachi
         *
         * @desc
         *  Unsubscribe all callback methods from a topic
         *
         * @params
         *********
         *
         * @returns {object}
         *  The topic
         */
        gnd.ui.Topics.unSubscribeAllFromTopic = function ()
        {
            // Re-set topics to empty array
            this._callbacks = [];

            // Return the topic
            return this;
        };

        /**
         * @method
         *
         * @author MelechMizrachi
         *
         * @desc
         *  Unsubscribe all callback methods from a topic
         *
         * @params
         *********
         * @param topics {object}
         *  The topics to create
         **
         * @param [remove] {boolean}
         *  Whether to remove the topics or not
         *********
         *
         * @returns {object}
         *  The topic
         */
        gnd.ui.Topics.handleTopics = function ( topics, remove )
        {
            // Determine if topics is a valid object
            if ( gnd.is.empty.object( topics ) ) {
                // Topics is not valid
                return false;
            }

            var
                    self        = this
                ,   topic
                ,   topicItem
                    // Subscribe or unsubscribe?
                ,   topicMethod = ( typeof remove === true )
                                  ? 'unsubscribe'
                                  : 'subscribe'
                ,   sTopic
                ,   i           = 0
                ,   len
            ;

            // Iterate through topics
            for ( sTopic in topics ) {

                // If this is a property of the object
                if ( topics.hasOwnProperty( sTopic ) ) {
                    // Easy reference for topic
                    topic = topics[ sTopic ];
                    len = topic.length;

                    // Iterate through topic's items
                    for ( ; i < len; i++ ) {
                        // Easy reference for topic item
                        topicItem = topic[ i ];

                        // If the scope is not an object
                        if ( gnd.is.empty.object( topicItem.scope ) ) {
                            // Set it to this topic's scope
                            topicItem.scope = self;
                        }

                        // Subscribe/Unsubscribe from topic
                        self.Topic( sTopic )[ topicMethod ]( topicItem.callback, topicItem.scope );
                    }
                }
            }

            // Return component
            return this;
        };

        /**
         * @method
         *
         * @author MelechMizrachi
         *
         * @desc
         *  Remove all topics
         *
         * @params
         *********
         *
         * @returns {object}
         *  The topic
         */
        gnd.ui.Topics.removeTopics = function ()
        {
            // Re-set topic objects to empty object
            this._topics       = {};
            this.topics        = {};

            // Return the topic
            return this;
        };

    /**
     * @class
     *
     * @desc
     *  Helpers for components
     */
    gnd.ui.Helpers = {};

        /**
         * @namespace
         *
         * @desc
         *  The accepted options for the model
         *
         * @type {array}
         */
        gnd.ui.Helpers.__options = [];

        /**
         * @method
         *
         * @author MelechMizrachi
         *
         * @desc
         *  Set component options
         *
         * @params
         *********
         * @param options {object}
         *  Options passed for component
         *********
         *
         * @returns {object}
         *  The component
         */
        gnd.ui.Helpers.__setOptions = function ( options )
        {
            // Determine validity of options object
            if ( gnd.is.empty.object( options ) ) {
                // Options object is invalid
                return false;
            }

            var
                    newOptions = {}
                ,   name
            ;

            // Iterate through objects
            for ( name in options ) {

                // Check if this option is one that is accepted
                if ( options.hasOwnProperty( name ) && gnd.array.contains( this.__options, name ) ) {
                    // If it's one of the accepted set it to the new options object
                    newOptions[ name ] = options[ name ];
                }
            }

            // Extend the component with the accepted options
            gnd.extend(
                this
            ,   newOptions
            );

            // Return the component
            return this;
        };

    /**
     * @class
     *
     * @desc
     *  Extend Helpers and Topics to new class
     */
    gnd.ui.baseExtend = gnd.extend(
        gnd.ui.Topics
    ,   gnd.ui.Helpers
    );

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Extend a class
     *
     * @params
     *********
     * @param objectToMerge {object}
     *  The object to merge
     *********
     *
     * @returns {object}
     *  The extended object
     */
    gnd.ui.extend = function ( objectToMerge )
    {
        var
                // The parent to extend off of
                parent      = this
                // The extended class
            ,   extended    = function ()
                {
                    return parent.apply( this, arguments );
                }
        ;

        // Extended prototype is a new copy of parent and new object
        extended.prototype = gnd.utils.extend(
            // New object
            {}
            // Parent prototype
        ,   parent.prototype
        );
        extended.prototype = gnd.utils.extend(
            // The extended prototype
            extended.prototype
            // Object to merge in, overwrite any previous vars
        ,   objectToMerge
        );

        // Keep a record of the old parent prototype
        extended.__parentPrototype__ = parent.prototype;

        // Return the extended class
        return extended;
    };
/**=================================================================================**\
 *
 *  @author                             VGND Team
 *  @desc                               gnd Library UI Model
 *
 *  @Table_of_Contents
 *
 *  @property                           gnd.ui.Model
 *      @property                           gnd.ui.Model.sID
 *      @property                           gnd.ui.Model.idAttribute
 *      @property                           gnd.ui.Model.attributes
 *      @property                           gnd.ui.Model.changed
 *      @property                           gnd.ui.Model._prevAttributes
 *      @property                           gnd.ui.Model.defaults
 *      @property                           gnd.ui.Model.__options
 *      @property                           gnd.ui.Model.init()
 *      @property                           gnd.ui.Model.toJSON()
 *      @property                           gnd.ui.Model.get()
 *      @property                           gnd.ui.Model.set()
 *      @property                           gnd.ui.Model.has()
 *      @property                           gnd.ui.Model.hasChanged()
 *      @property                           gnd.ui.Model.getChangedAttributes()
 *      @property                           gnd.ui.Model.getPrevious()
 *      @property                           gnd.ui.Model.getPreviousAttributes()
 *      @property                           gnd.ui.Model.__setAttributes()
 *      @property                           gnd.ui.Model.extend()
 *
\**=================================================================================**/

/**
 * @class
 *
 * @author MelechMizrachi
 *
 * @desc
 *  The model for a ui component
 *
 * @params
 *********
 * @param attributes {object}
 *  The attributes for this model
 **
 * @param [options] {object}
 *  Any custom options for this model
 *********
 *
 * @extends gnd.ui.Topics
 * @extends gnd.ui.Helpers
 *
 * @returns void
 */
gnd.ui.Model = function ( attributes, options )
{
    // Set options
    this.__setOptions( options );

    // Set the model's attributes
    this.__setAttributes.apply( this, arguments );

    // Initialize Model
    this.init.apply( this, arguments );
};

    /**
     * @namespace
     *
     * @desc
     *  The Model ID
     *
     * @type {string}
     */
    gnd.ui.Model.prototype.sID = '';

    /**
     * @namespace
     *
     * @desc
     *  The attributes id index
     *
     * @type {string}
     */
    gnd.ui.Model.prototype.idAttribute = 'id';

    /**
     * @namespace
     *
     * @desc
     *  Model's attributes
     *
     * @type {object}
     */
    gnd.ui.Model.prototype.attributes = {};

    /**
     * @namespace
     *
     * @desc
     *  Model's changed attributes
     *
     * @type {object}
     */
    gnd.ui.Model.prototype.changed = {};

    /**
     * @namespace
     *
     * @desc
     *  Model's previous attributes
     *
     * @type {object}
     */
    gnd.ui.Model.prototype._prevAttributes = {};

    /**
     * @namespace
     *
     * @desc
     *  Model's default attributes
     *
     * @type {object}
     */
    gnd.ui.Model.prototype.defaults = {};

    /**
     * @namespace
     *
     * @desc
     *  The accepted options for the model
     *
     * @type {array}
     */
    gnd.ui.Model.prototype.__options = [
            'sID'
        ,   'defaults'
        ,   'idAttribute'
    ];
    
    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Initialize Model
     *
     * @params
     *********
     *
     * @returns {object}
     *  The model
     */
    gnd.ui.Model.prototype.init = function ()
    {
        // Overwrite this function for custom initialization of Model

        // Return the model
        return this;
    };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Return a copy of the model data
     *
     * @params
     *********
     *
     * @returns {object}
     *  The model's attributes
     */
    gnd.ui.Model.prototype.toJSON = function ()
    {
        // Return the model's attributes (data)
        return gnd.utils.cloneObject( this.attributes );
    };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Return a requested attribute value
     *
     * @params
     *********
     * @param attribute {string}
     *  The attribute to return
     *********
     *
     * @returns {*}
     *  The requested attribute
     */
    gnd.ui.Model.prototype.get = function ( attribute )
    {
        // Return the requested attribute
        return this.attributes[ attribute ];
    };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Set an attribute value
     *
     * @params
     *********
     * @param attribute
     *  The attribute to set
     * @type    {string}
     **
     * @param attributeValue {*}
     *  The attribute value
     *********
     *
     * @returns {object}
     *  The model
     */
    gnd.ui.Model.prototype.set = function ( attribute, attributeValue )
    {
        // Set the attribute's value
        this.attributes[ attribute ] = attributeValue;

        // Return the updated Model
        return this;
    };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Return a requested attribute value
     *
     * @params
     *********
     * @param attribute {string}
     *  The attribute to test for
     *********
     *
     * @returns {boolean}
     */
    gnd.ui.Model.prototype.has = function ( attribute )
    {
        // If the attribute exists
        if ( attribute && this.attributes[ attribute ] ) {
            // Return true
            return true;
        }

        // Always assume failure
        return false;
    };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Determine whether the model/attribute changed
     *
     * @params
     *********
     * @param [attribute] {string}
     *  The attribute to test for
     *********
     *
     * @returns {boolean}
     */
    gnd.ui.Model.prototype.hasChanged = function ( attribute )
    {
        // If no attribute was passed
        if ( !attribute ) {
            // Return whether the model changed
            return gnd.is.empty.object( this.changed );
        }
        // Else ff the attribute requested changed
        else if ( this.changed[ attribute ] ) {
            // Return true
            return true;
        }

        // Always assume failure
        return false;
    };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Return the changed attributes
     *
     * @params
     *********
     *
     * @returns {object}
     *  The model's changed attributes
     */
    gnd.ui.Model.prototype.getChangedAttributes = function ()
    {
        // Return the changed attributes
        return gnd.utils.cloneObject( this.changed );
    };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Return the requested previous attribute
     *
     * @params
     *********
     * @param attribute {object}
     *  The attribute to test for
     *********
     *
     * @returns {object}
     *  The model's previous attributes
     */
    gnd.ui.Model.prototype.getPrevious = function ( attribute )
    {
        // Return the requested attribute's previous value
        return this._prevAttributes[ attribute ];
    };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Return the previous attributes
     *
     * @params
     *********
     *
     * @returns {object}
     *  The model's attributes
     */
    gnd.ui.Model.prototype.getPreviousAttributes = function ()
    {
        // Return the previous attributes
        return gnd.utils.cloneObject( this._prevAttributes );
    };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Set Model attributes
     *
     * @params
     *********
     * @param attributes {object}
     *  Attributes passed for the model
     *********
     *
     * @returns {object}
     *  The model
     */
    gnd.ui.Model.prototype.__setAttributes = function ( attributes )
    {
        // Are the defaults a valid object?
        this.defaults = gnd.utils.validateObject( this.defaults );

        // Are the attributes a valid object?
        attributes = gnd.utils.validateObject( attributes );

        // Extend the model attributes with incoming attributes and defaults
        this.attributes = gnd.utils.extend(
            // Default attributes
            this.defaults
            // Incoming attributes to overwrite all
        ,   attributes
        );

        // Return the model
        return this;
    };

    // Extend Collection prototype
    gnd.extend(
        gnd.ui.Model.prototype
    ,   gnd.ui.baseExtend
    );

    /**
     * @method
     *
     * @extends gnd.ui.extend
     */
    gnd.ui.Model.extend = (function()
    {
        // Return gnd.ui.extend
        return gnd.ui.extend
    })();
/**=================================================================================**\
 *
 *  @author                             VGND Team
 *  @desc                               gnd Library UI Collection
 *
 *  @Table_of_Contents
 *
 *  @property                           gnd.ui.Collection
 *      @property                           gnd.ui.Collection.sID
 *      @property                           gnd.ui.Collection.$views
 *      @property                           gnd.ui.Collection.Views
 *      @property                           gnd.ui.Collection.viewOptions
 *      @property                           gnd.ui.Collection._indexByModel
 *      @property                           gnd.ui.Collection._indexByCollectionID
 *      @property                           gnd.ui.Collection.__options
 *      @property                           gnd.ui.Collection.View
 *      @property                           gnd.ui.Collection.init()
 *      @property                           gnd.ui.Collection.setViews()
 *      @property                           gnd.ui.Collection.addView()
 *      @property                           gnd.ui.Collection.findViewByModel()
 *      @property                           gnd.ui.Collection.findViewByModelID()
 *      @property                           gnd.ui.Collection.findViewByID()
 *      @property                           gnd.ui.Collection.getNthView()
 *      @property                           gnd.ui.Collection.getLastView()
 *      @property                           gnd.ui.Collection.getNthViewID()
 *      @property                           gnd.ui.Collection.getLastViewID()
 *      @property                           gnd.ui.Collection.getLastCollectionID()
 *      @property                           gnd.ui.Collection.extend()
 *
\**=================================================================================**/

/**
 * @class
 *
 * @author MelechMizrachi
 *
 * @desc
 *  A collection of ui components/elements/nodes
 *
 * @params
 *********
 * @param [options] {object}
 *  Any custom options for this collection
 *********
 *
 * @extends gnd.ui.Topics
 * @extends gnd.ui.Helpers
 *
 * @returns void
 */
gnd.ui.Collection = function ( options )
{
    // Set options
    this.__setOptions.apply( this, arguments );

    // Initialize Collection
    this.init.apply( this, arguments );

    // Set the views to the collection
    this.setViews();
};

    /**
     * @namespace
     *
     * @desc
     *  The collection ID
     *
     * @type {string}
     */
    gnd.ui.Collection.prototype.sID = '';

    /**
     * @namespace
     *
     * @desc
     *  The selector for the DOM elements
     *
     * @type {object}
     */
    gnd.ui.Collection.prototype.$views = {};

    /**
     * @namespace
     *
     * @desc
     *  The views in this collection
     *
     * @type {object}
     */
    gnd.ui.Collection.prototype.Views = {};

    /**
     * @namespace
     *
     * @desc
     *  The options for this collections View
     *
     * @type {object}
     */
    gnd.ui.Collection.prototype.viewOptions = {};

    /**
     * @namespace
     *
     * @desc
     *  Index views by model id
     *
     * @type {object}
     */
    gnd.ui.Collection.prototype._indexByModel = {};

    /**
     * @namespace
     *
     * @desc
     *  Index views by collection id
     *
     * @type {array}
     */
    gnd.ui.Collection.prototype._indexByCollectionID = [];

    /**
     * @namespace
     *
     * @desc
     *  The accepted options for the collection
     *
     * @type {array}
     */
    gnd.ui.Collection.prototype.__options = [
            'Views'
        ,   'sID'
        ,   '$views'
        ,   'View'
        ,   'viewOptions'
    ];

    /**
     * @class
     * @extends gnd.ui.View
     *
     * @desc
     *  The View for the views in this collection
     */
    gnd.ui.Collection.prototype.View = gnd.ui.View;
    
    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Initialize collection
     *
     * @params
     *********
     *
     * @returns {object}
     *  The collection
     */
    gnd.ui.Collection.prototype.init = function ()
    {
        // Overwrite this function for custom initialization of Collection

        // Return the collection
        return this;
    };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Set the views for the collection
     *
     * @params
     *********
     *
     * @returns {object}
     *  The collection
     */
    gnd.ui.Collection.prototype.setViews = function ()
    {
        // Determine whether to use Views or $views
        // - Views     : Object of Views
        // - $views    : Selector to get the correct views from the DOM

        // Default views to Views
        var
                Views   = this.Views
            ,   self    = this
        ;

        // If $views is an object
        if ( !gnd.is.empty.object( this.$views ) ) {
            // Set views to $views
            Views = this.$views;
        }
        // Otherwise if $views is a string
        else if ( !gnd.is.empty.string( this.$views ) ) {
            // Set views using the given selector
            Views = gnd.ui.$( this.$views );
        }

        // Validate views
        if ( !Views ) {
            // Something is wrong; no views or container were specified
            return false;
        }

        // Iterate through each view
        Views.each(
//                Views,
           function ( index, elem )
            {
                // Add the view to the collection
                self.addView( elem );
            }
        );

        // Return the collection
        return this;
    };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Add a view to the collection
     *
     * @params
     *********
     * @param view {object}
     *  The view to add to the collection
     *********
     *
     * @returns {object}
     *  The collection
     */
    gnd.ui.Collection.prototype.addView = function ( view )
    {
        // If this is not a valid view
        if ( !view ) {
            // Return false
            return false;
        }

        // If this element is an element
        if ( gnd.is.domElement( view ) ) {
            // Set view as the jQuery object
            view = gnd.ui.$( view );

            // Set the base view options to a new var
            var viewOptions    = this.viewOptions;

            // Set the view sID
            viewOptions.sID    = view[ 0 ].id;
            // Set the view element
            viewOptions.elem  = view;

            // Create the view
            view = new this.View( viewOptions );

            if ( !view.sID ) {
                view.sID = 'view' + view.Model.get( 'id' );
            }
        }

        // Add the view to this collection's views
        view = this.Views[ view.sID ] = view;

        // Set a custom collection ID
        view.collectionID = this.getLastCollectionID() + 1;

        // Set the DOM position of this view
        view.domPosition = view.collectionID + 1;

        // Index view by collection ID
        this._indexByCollectionID[ view.collectionID ]      =
        // Index view by Model sID
        this._indexByModel[ view.Model.sID ]                = view.sID;

        // Return the collection
        return this;
    };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Find a view in this collection by its model
     *
     * @params
     *********
     * @param model {object}
     *  The model to find by
     *********
     *
     * @returns {object}
     *  The requested view
     */
    gnd.ui.Collection.prototype.findViewByModel = function ( model )
    {
        // If this is not a valid model
        if ( !model ) {
            // Return false
            return false;
        }

        // Return the view
        return this.findViewByModelID( model.sID );
    };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Find a view in this collection by its model id
     *
     * @params
     *********
     * @param sID {string}
     *  The model id to find by
     *********
     *
     * @returns {object}
     *  The requested View
     */
    gnd.ui.Collection.prototype.findViewByModelID = function ( sID )
    {
        // If the id is not valid
        if ( !sID ) {
            // Return false
            return false;
        }

        // Find the view's id
        sID = this._indexByModel[ sID ];

        // Return the view
        return this.findViewByID( sID );
    };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Find a view in this collection by its id
     *
     * @params
     *********
     * @param sID {string}
     *  The id to find by
     *********
     *
     * @returns {object}
     *  The requested view
     */
    gnd.ui.Collection.prototype.findViewByID = function ( sID )
    {
        // If the id is not valid
        if ( !sID ) {
            // Return false
            return false;
        }

        // Return the view
        return this.Views[ sID ];
    };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Get the nth view in the collection
     *
     * @params
     *********
     * @param nthItem {number}
     *  Int of the nth view to get
     *********
     *
     * @returns {object}
     *  The requested view
     */
    gnd.ui.Collection.prototype.getNthView = function ( nthItem )
    {
        // If this is not a valid number
        if ( !gnd.is.numeric( nthItem ) ) {
            // Return false
            return false;
        }

        // Return the view
        return this.Views[ this.getNthViewID( nthItem ) ];
    };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Get the last view in the collection
     *
     * @params
     *********
     *
     * @returns {object}
     *  The requested view
     */
    gnd.ui.Collection.prototype.getLastView = function ()
    {
        // Get the last view's sID
        var collectionID = this.getLastViewID();

        // Return the view
        return this.Views[ collectionID ];
    };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Get the nth view's id in the collection
     *
     * @params
     *********
     * @param nthItem {number}
     *  Int of the nth view to get
     *********
     *
     * @returns {boolean|string}
     *  The view id
     */
    gnd.ui.Collection.prototype.getNthViewID = function ( nthItem )
    {
        // If this is not a valid number
        if ( !gnd.is.numeric( nthItem ) ) {
            // Return false
            return false;
        }

        // Return the view's id
        return this._indexByCollectionID[ nthItem ];
    };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Get the last view's id in the collection
     *
     * @params
     *********
     *
     * @returns {string}
     *  The view id
     */
    gnd.ui.Collection.prototype.getLastViewID = function ()
    {
        // Return the view's id
        return this._indexByCollectionID[ this.getLastCollectionID() ];
    };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Get the nth view's collection id in the collection
     *
     * @params
     *********
     *
     * @returns {number}
     *  The collection id
     */
    gnd.ui.Collection.prototype.getLastCollectionID = function ()
    {
        // Return the last collection id (IE length of index by collection)
        return this._indexByCollectionID.length - 1;
    };

    // Extend Collection prototype
    gnd.extend(
        gnd.ui.Collection.prototype
    ,   gnd.ui.baseExtend
    );

    /**
     * @method
     * @extends gnd.ui.extend
     */
    gnd.ui.Collection.extend = (function()
    {
        // Return gnd.ui.extend
        return gnd.ui.extend
    })();
/**=================================================================================**\
 *
 *  @author                             VGND Team
 *  @desc                               gnd Library UI View
 *
 *  @Table_of_Contents
 *
 *  @property                           gnd.ui.View
 *      @property                           gnd.ui.View.sID
 *      @property                           gnd.ui.View.elem
 *      @property                           gnd.ui.View.tagName
 *      @property                           gnd.ui.View.className
 *      @property                           gnd.ui.View.template
 *      @property                           gnd.ui.View.attributes
 *      @property                           gnd.ui.View.events
 *      @property                           gnd.ui.View.__options
 *      @property                           gnd.ui.View.Model
 *      @property                           gnd.ui.View.Collection
 *      @property                           gnd.ui.View.init()
 *      @property                           gnd.ui.View.$()
 *      @property                           gnd.ui.View.render()
 *      @property                           gnd.ui.View.setElement()
 *      @property                           gnd.ui.View.remove()
 *      @property                           gnd.ui.View.handleEvent()
 *      @property                           gnd.ui.View.triggerEvent()
 *      @property                           gnd.ui.View.handleEvents()
 *      @property                           gnd.ui.View.undelegateEvents()
 *      @property                           gnd.ui.View.__ensureElement()
 *      @property                           gnd.ui.View.extend()
 *
\**=================================================================================**/

/**
 * @class
 *
 * @author MelechMizrachi
 *
 * @desc
 *  The view for a ui component/element/node
 *
 * @params
 *********
 * @param [options] {object}
 *  Any custom options for this view
 *********
 *
 * @extends gnd.ui.Topics
 * @extends gnd.ui.Helpers
 *
 * @returns void
 */
gnd.ui.View = function ( options )
{
    // Set options
    this.__setOptions.apply( this, arguments );

    // Make sure we have a real element
    this.__ensureElement();

    // Initialize View
    this.init.apply( this, arguments );

    // Create Events
    this.handleEvents( this.events );
};

    /**
     * @namespace
     *
     * @desc
     *  The View ID
     *
     * @type {string}
     */
    gnd.ui.View.prototype.sID = '';

    /**
     * @namespace
     *
     * @desc
     *  The View ID
     *
     * @type {gnd.$}
     */
    gnd.ui.View.prototype.elem = '';

    /**
     * @namespace
     *
     * @desc
     *  The element tag name
     *
     * @type {string}
     */
    gnd.ui.View.prototype.tagName = 'div';

    /**
     * @namespace
     *
     * @desc
     *  The element class name
     *
     * @type {string}
     */
    gnd.ui.View.prototype.className = '';

    /**
     * @namespace
     *
     * @desc
     *  The template to use
     *
     * @type {string}
     */
    gnd.ui.View.prototype.template = '';

    /**
     * @namespace
     *
     * @desc
     *  The element attributes
     *
     * @type {object}
     */
    gnd.ui.View.prototype.attributes = {};

    /**
     * @namespace
     *
     * @desc
     *  The events for this view
     *
     * @type {object}
     */
    gnd.ui.View.prototype.events = {};

    /**
     * @namespace
     *
     * @desc
     *  The accepted options for the view
     *
     * @type {array}
     */
    gnd.ui.View.prototype.__options = [
            'Model'
        ,   'Collection'
        ,   'elem'
        ,   'sID'
        ,   'attributes'
        ,   'className'
        ,   'tagName'
        ,   'events'
    ];

    /**
     * @namespace
     *
     * @desc
     *  What to split event strings with
     *
     * @type {string}
     */
    gnd.ui.View.prototype.EVENT_SPLIT = ' ';

    /**
     * @namespace
     * @extends gnd.ui.Model
     *
     * @desc
     *  The view model
     */
    gnd.ui.View.prototype.Model = gnd.ui.Model;

    /**
     * @namespace
     * @extends gnd.ui.Collection
     *
     * @desc
     *  The view collection
     */
    gnd.ui.View.prototype.Collection = gnd.ui.Collection;

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Initialize View
     *
     * @params
     *********
     *
     * @returns {object}
     *  The view
     */
    gnd.ui.View.prototype.init = function ()
    {
        // Overwrite this function for custom initialization of View

        // Return the view
        return this;
    };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Return a dom element under elem
     *
     * @params
     *********
     * @param [selector] {string}
     *  The selector to use to find the elem's child
     *********
     *
     * @returns {object}
     *  The child of elem
     */
    gnd.ui.View.prototype.$ = function ( selector )
    {
        // Make sure the selector is a valid string
        if ( !selector ) {
            // Otherwise simply return elem
            return this.elem;
        }

        // Return the sub element
        return this.elem.find( selector );
    };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Render View
     *
     * @params
     *********
     *
     * @returns {object}
     *  The view
     */
    gnd.ui.View.prototype.render = function ()
    {
        // Render the view
        this.elem.html(  );

        // Return the view
        return this;
    };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Set the View element
     *
     * @params
     *********
     * @param element {object|string}
     *  The element to set
     **
     * @param [delegateEvents] {boolean}
     *  Whether to delegate events
     *  (Default) true
     *********
     *
     * @returns {object}
     *  The view
     */
    gnd.ui.View.prototype.setElement = function ( element, delegateEvents )
    {
        // If an element is already set
        if ( this.elem instanceof gnd.$ ) {
            // Undelegate all event handles for the old element
            this.undelegateEvents();
            // Set the elem
            this.elem = element;
        } else {
            // Set the elem
            this.elem = gnd.$( element );
        }

        // If the optional boolean is not false
        if ( delegateEvents !== false ) {
            // Delegate events for this view
            this.handleEvents( this.events );
        }

        // Return the view
        return this;
    };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Remove View - Remove element from DOM
     *
     * @params
     *********
     *
     * @returns {object}
     *  The view
     */
    gnd.ui.View.prototype.remove = function ()
    {
        // Undelegate all event handlers
        this.undelegateEvents();

        // Remove the element from the dom
        this.elem.remove();

        // Return the view
        return this;
    };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Delegate/Undelegate an event handler
     *
     * @params
     *********
     * @param event {string}
     *  The event string
     **
     * @param callbackMethod {function|string}
     *  The callback method
     **
     * @param [scope] {object}
     *  The callback scope
     **
     * @param [removeEvent] {boolean}
     *  Whether to delete the event or not
     *********
     *
     * @returns {object}
     *  The component
     */
    gnd.ui.View.prototype.handleEvent = function ( event, callbackMethod, scope, removeEvent )
    {
        // Sanity checks
        if ( !event || !callbackMethod ) {
            gnd.log.error( 'event or callback method not specified', event, callbackMethod );
            // The parameters aren't correct
            return false;
        }

        var
                eventSplit              = event.split( this.EVENT_SPLIT )
            ,   eventName               = eventSplit[ 0 ]
            ,   selector                = eventSplit[ 1 ]
            ,   typeOfEvent             = ( removeEvent === true )
                                            ? 'off'
                                            : 'on'
            ,   self                    = this
            ,   elem                    = self.elem
        ;

        // If no scope was provided
        if ( !scope || !scope[ callbackMethod ] ) {
            // Set scope to this
            scope = self;
        }

        // If the callbackMethod is a string
        if ( gnd.is.string( callbackMethod ) ) {
            // Check that this function exists in this view
            if ( !gnd.is.func( scope[ callbackMethod ] ) ) {
                gnd.log.error( 'callback method is not a function', scope[ callbackMethod ] );
                // If not return false, get out of here
                return false;
            }

            // Set the callback method to the function
            callbackMethod              = scope[ callbackMethod ].bind( scope );
        }

        // Create/Delete the event
        elem[ typeOfEvent ](
            eventName
        ,   selector
        ,   callbackMethod
        );

        // Return the view
        return self;
    };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Trigger an event handler
     *
     * @params
     *********
     * @param event {string}
     *  The event to trigger
     *********
     *
     * @returns {object}
     *  The component
     */
    gnd.ui.View.prototype.triggerEvent = function ( event )
    {
        // Make sure the parameter is a string
        if ( !event ) {
            // If it's not a string return false
            return false;
        }

        if ( gnd.string.contains( event, this.EVENT_SPLIT ) ) {

            var
                    eventSplit              = event.split( this.EVENT_SPLIT )
                ,   eventName               = eventSplit[0]
                ,   selector                = eventSplit[1]
            ;

            // Trigger the event
            // [this.$ does the check for this.elem or sub element]
            this.$( selector ).trigger( eventName );
        } else {
            this.elem.trigger( event );
        }

        // Return the view
        return this;
    };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Delegate/Undelegate event handlers given an object of events
     *
     * @params
     *********
     * @param events {object}
     *  The events to create
     **
     * @param [removeEvent] {string}
     *  Whether to add/remove the event
     *********
     *
     * @returns {object}
     *  The view
     */
    gnd.ui.View.prototype.handleEvents = function ( events, removeEvent )
    {
        // Determine validity of events object
        if ( !events ) {
            gnd.log.error( 'no events provided', events );
            // Events object is invalid
            return false;
        }

        // Loop through events object
        for ( var event in events ) {
            // If this is a property of the object
            if ( events.hasOwnProperty( event ) ) {
                // Create event
                this.handleEvent(
                    // The event string
                    event
                    // The callback method
                ,   events[ event ]
                    // Whether to add/remove the event
                ,   removeEvent
                );
            }
        }

        // Return the view
        return this;
    };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Undelegate all event handlers
     *
     * @params
     *********
     *
     * @returns {object}
     */
    gnd.ui.View.prototype.undelegateEvents = function ()
    {
        // Remove all events attached to this element
        this.elem.off( '.viewEvents' + this.sID );

        // Return the view
        return this;
    };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Ensure the view element exists
     *
     * @params
     *********
     *
     * @returns void
     */
    gnd.ui.View.prototype.__ensureElement = function ()
    {
        // Check if element is an element exists
        if ( !this.elem ) {
            // Set the elem to document
            this.elem = gnd.$( document );
        }

        // Set the element
        this.setElement( this.elem, false );
    };

    // Extend View prototype
    gnd.extend(
        gnd.ui.View.prototype
    ,   gnd.ui.baseExtend
    );

    /**
     * @method
     *
     * @extends gnd.ui.extend
     */
    gnd.ui.View.extend = (function()
    {
        // Return gnd.ui.extend
        return gnd.ui.extend
    })();