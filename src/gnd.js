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
 *      @property                           gnd.isModernBrowser
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
    gnd.VERSION = '3.8.5. alpha';

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
     * @namespace
     *
     * @desc
     *  Is this a modern browser
     *
     * @type {boolean}
     **/
    gnd.isModernBrowser = (
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