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
     * @return {boolean|Object.prototype.hasOwnProperty}
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
         * @return {boolean}
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
         * @return {boolean}
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
         * @return {boolean}
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
         * @return {boolean}
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
         * @return {boolean}
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
         * @return {boolean}
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
         * @return {boolean}
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
         * @return {boolean}
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
         * @return {*}
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
         * @return {*}
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
         * @return {*}
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
     * @return {*}
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