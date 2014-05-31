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
 **/
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
     * @return {*}
     *  The cookie value
     **/
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
     * @return {boolean}
     *  Whether the cookie was set or not
     **/
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
     * @return {boolean}
     *  Whether the cookie was removed or not
     **/
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
     * @return {boolean}
     *  Whether the cookie exists or not
     **/
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
     * @return {array}
     *  The keys
     **/
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
     * @author
     *  MelechMizrachi
     *
     * @desc
     *  Get a list of the cookies
     *
     * @params
     *********
     *
     * @return {object}
     *  The cookies
     **/
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