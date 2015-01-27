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
     * The version number for this copy of the gnd library
     *
     * @type {string}
     */
    gnd.VERSION = '0.4.1.4. alpha';

    /**
     * @constant
     *
     * Whether to run debug unit testing on the library or not
     *
     * @type {boolean}
     */
    gnd.DEBUG = GND_GLOBALS.IS_DEV || false;

    /**
     * @namespace
     *
     * The gnd parent (window)
     *
     * @type {object}
     */
    gnd.global = window;

    /**
     * @method
     *
     * Determine if a variable is of a type
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
     * Extend object
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