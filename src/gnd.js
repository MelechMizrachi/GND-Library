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
 **/
var gnd = gnd || {};

/**
 * @namespace
 *
 * Ensure we have a namespace set for GND Globals
 * In the case one does not exist
 **/
window.GND_GLOBALS = window.GND_GLOBALS || {};

    /**
     * @constant
     *
     * @desc
     *  The version number for this copy of the gnd library
     *
     * @type {string}
     **/
    gnd.VERSION = '1.2. alpha';

    /**
     * @constant
     *
     * @desc
     *  Whether to run debug unit testing on the library or not
     *
     * @type {boolean}
     **/
    gnd.DEBUG = false;

    /**
     * @namespace
     *
     * @desc
     *  The gnd parent (window)
     *
     * @type {object}
     **/
    gnd.global = window;

    /**
     * @method
     *
     * @author
     *  MelechMizrachi
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
     * @return {boolean}
     **/
    gnd.isTypeOf = function ( toTest, type )
    {
        return typeof toTest === type;
    };

    /**
     * @method
     * TODO: Update this functionality for simplicity.
     *       See _.extend()
     *
     * @author
     *  MelechMizrachi
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
     * @return {object}
     *  The extended object
     **/
    gnd.extend = function ()
    {
        var
                options
            ,   source
            ,   copy
            ,   copyIsArray
            ,   clone
            ,   target                                  = arguments[ 0 ] || {}
            ,   i                                       = 1
            ,   length                                  = arguments.length
            ,   deep                                    = false
            ,   functionToUse
        ;

        // Handle a deep copy situation
        if ( gnd.is.bool( target ) ) {
            deep                                        = target;

            // skip the boolean and the target
            target                                      = arguments[ i ] || {};
            i++;
        }

        // Handle case when target is a string or something (possible in deep copy)
        if ( !gnd.is.object( target ) && !gnd.is.func( target ) ) {
            target                                      = {};
        }

        // extend jQuery itself if only one argument is passed
        if ( i === length ) {
            target                                      = this;
            i--;
        }

        functionToUse = function ( index, item )
        {
            source                                      = target[ index ];
            copy                                        = item;

            if ( target !== copy ) {
                if ( deep && copy && ( gnd.is.plainObject( copy ) || ( copyIsArray = gnd.is.array( copy ) ) ) ) {
                    if ( copyIsArray ) {
                        copyIsArray                     = false;
                        clone                           = ( source && gnd.is.array( source ) )
                            ? source
                            : []
                        ;

                    } else {
                        clone                           = ( source && gnd.is.plainObject( source ) )
                            ? source
                            : {}
                        ;
                    }

                    target[ index ]                     = gnd.extend( deep, clone, copy );

                } else if ( !gnd.is.undefined( copy ) ) {
                    target[ index ]                     = copy;
                }
            }
        };

        for ( ; i < length; i++ ) {
            // Only deal with non-null/undefined values
            if ( ( options = arguments[ i ] ) != null ) {
                // Iterate through options
                gnd.utils.each(
                    options
                ,   functionToUse
                );
            }
        }

        // Return the modified object
        return target;
    };