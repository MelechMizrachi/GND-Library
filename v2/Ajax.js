/**********************************************************************************************************************\
 *
 *  @author                             VGND Team
 *  @desc                               GND Library Ajax Requests
 *
 *  @Table_of_Contents
 *
 *  @property                           Ajax
 *  @property                           Ajax.BASE_URL
 *  @property                           Ajax.Init
 *  @property                           Ajax.Init.prototype
 *  @property                           Ajax.constructor
 *  @property                           Ajax.method
 *  @property                           Ajax.post
 *  @property                           Ajax.update
 *  @property                           Ajax.del
 *
\**********************************************************************************************************************/

/**
 * @class Ajax
 *
 * @author
 *  MelechMizrachi
 *
 * @desc
 *  GND Library Ajax Class
 *
 * @param url {string|object}
 *  The xhr url
 * @param [options] {object}
 *  The options for the ajax request
 *
 * @return {object}
 *  The xhr call
 */
var Ajax = function ( url, options )
{
    return new Ajax.Init( url, options );
};

(function ()
{
    /**
     * @constant
     *
     * @desc
     *  Default ajax request url
     *
     * @type {string}
     **/
    Ajax.BASE_URL = GLOBALS.AJAX_URL || '';

    /**
     * @method
     *
     * @author
     *  MelechMizrachi
     *
     * @desc
     *  Ajax/XHR request
     *
     * @param url {string|object}
     *  The xhr url
     * @param [options] {object}
     *  The options for the ajax request
     *
     * @return {Ajax}
     *  The xhr call
     **/
    Ajax.Init = function ( url, options )
    {
        // If the url is not valid
        if ( is.string.empty( url ) ) {
            //  If 'url' is an object
            if ( is.object( url ) ) {
                // Then only the options were sent
                // To use the default ajax url
                // So set options to url
                options = url;
            }

            // If the url is set in options
            if ( is.string( options.url ) ) {
                // Use it
                url = options.url;
            }
            // Otherwise
            else {
                // Return false because no url was provided at all
                return false;
            }
        }

        /**
         * @name    options
         **/
        /**     @name   options#accept
         *      @propertyOf options
         *      @type   {string}
         **/
        /**     @name   options#async
         *      @propertyOf options
         *      @type   {boolean}
         **/
        /**     @name   options#contentType
         *      @propertyOf options
         *      @type   {string}
         **/
        /**     @name   options#data
         *      @propertyOf options
         *      @type   {object}
         **/
        /**     @name   options#headers
         *      @propertyOf options
         *      @type   {object}
         **/
        /**     @name   options#dataString
         *      @propertyOf options
         *      @type   {string}
         **/
        /**     @name   options#method
         *      @propertyOf options
         *      @type   {string}
         **/
        /**     @name   options#success
         *      @propertyOf options
         *      @type   {function}
         **/
        /**     @name   options#error
         *      @propertyOf options
         *      @type   {function}
         **/
        /**     @name   options#complete
         *      @propertyOf options
         *      @type   {function}
        **/
        options = options || {};

        var
            XHR             = new XMLHttpRequest()
            , method        = ( is.string( options.method ) )
                              ? options.method
                              : 'GET'
            , accept        = ( is.string( options.accept ) )
                              ? options.accept
                              : 'application/json, text/javascript, */*'
            , async         = ( is.bool( options.async ) )
                              ? options.async
                              : true
            , contentType   = ( is.string( options.contentType ) )
                              ? options.contentType
                              : 'application/x-www-form-urlencoded; charset=UTF-8'
            , data          = ( is.object( options.data ) )
                              ? options.data
                              : {}
            , headers       = ( is.object( options.headers ) )
                              ? options.headers
                              : {}
            , dataString    = ( is.string( options.dataString ) )
                              ? options.dataString
                              : ''
            , dataIndex     = 0
            , header
            , onreadystatechange
            , response
        ;

        // Open the XHR connection
        XHR.open(
            method
            , url
            , async
        );

        // Set the Accept header
        XHR.setRequestHeader(
            'Accept'
            , accept
        );

        // Set the content type header
        XHR.setRequestHeader(
            'Content-Type'
            , contentType
        );

        // Set the requested with header
        XHR.setRequestHeader(
            'X-Requested-With'
            , 'XMLHttpRequest'
        );

        // Iterate through all the headers provided
        for ( header in headers ) {
            // Ensure they are properties of headers
            if ( headers.hasOwnProperty( header )) {
                // Set these headers
                XHR.setRequestHeader(
                    header
                    , headers[ header ]
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
                    Logger.error( 'XHR Error: Begin' );
                    Logger.error( 'Response: ', response );
                    Logger.error( 'status', XHR.status );
                    Logger.error( 'XHR Error: End' );

                    // If an error handler was set
                    if ( is.func( options.error ) ) {
                        // Call error function
                        options.error( response );
                    }
                }
                // On success
                else {
                    // Console the response as info
                    Logger.info( 'Ajax Success' );

                    // If a success handler was set
                    if ( is.func( options.success ) ) {
                        // Call success function
                        options.success( response );
                    }
                }

                // On complete (regardless of error)
                if ( is.func( options.complete ) ) {
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
        data.each(
            function ( index, item )
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

    /**
     * @author
     *  MelechMizrachi
     *
     * @desc
     *  Set the Init prototype as Dom's prototype
     *
     * @type {Object|Function}
     */
    Ajax.Init.prototype = Ajax.prototype;

    /**
     * @constructor
     **/
    Ajax.prototype.constructor = Ajax;

    /**
     * @method
     *
     * @author
     *  MelechMizrachi
     *
     * @desc
     *  Easy method for setting options.method for ajax calls
     *
     * @param url {string|object}
     * @param options {object}
     * @param method {string}
     *
     * @returns {Ajax}
     */
    Ajax.method = function ( url, options, method )
    {
        if ( is.object( url ) ) {
            options = url;
        }

        options = options || {};

        options.extend({
            method : method
        });

        return new Ajax.Init( url, options );
    };

    /**
     * @method
     *
     * @author
     *  MelechMizrachi
     *
     * @desc
     *  Ajax post method so as to not have to define options.method
     *
     * @param url {string|object}
     * @param options {object}
     *
     * @returns {Ajax}
     */
    Ajax.post = function ( url, options )
    {
        return Ajax.method( url, options, 'POST' );
    };

    /**
     * @method
     *
     * @author
     *  MelechMizrachi
     *
     * @desc
     *  Ajax update method so as to not have to define options.method
     *
     * @param url {string|object}
     * @param options {object}
     *
     * @returns {Ajax}
     */
    Ajax.update = function ( url, options )
    {
        return Ajax.method( url, options, 'UPDATE' );
    };

    /**
     * @method
     *
     * @author
     *  MelechMizrachi
     *
     * @desc
     *  Ajax delete method so as to not have to define options.method
     *
     * @param url {string|object}
     * @param options {object}
     *
     * @returns {Ajax}
     */
    Ajax.del = function ( url, options )
    {
        return Ajax.method( url, options, 'DELETE' );
    };
})();