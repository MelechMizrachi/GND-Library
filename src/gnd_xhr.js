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
 **/
gnd.xhr = {};

    /**
     * @constant
     *
     * @desc
     *  Default ajax request url
     *
     * @type {string}
     **/
    gnd.xhr.URL = '/Service/Api/';

    /**
     * @method
     *
     * @author
     *  MelechMizrachi
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
     * @return {object}
     *  The xhr call
     **/
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
            ,   dataString                              = ( !gnd.is.empty.string( options.dataString ) )
                    ? options.dataString
                    : ''
            ,   dataIndex                               = 0
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