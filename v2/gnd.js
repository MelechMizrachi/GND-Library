/**********************************************************************************************************************\
 *
 *  @author                             VGND Team
 *  @desc                               GND Library
 *
 *  @Table_of_Contents
 *
 *  @property                           gnd
 *  @property                           gnd.VERSION
 *  @property                           gnd.DEBUG
 *  @property                           gnd.global
 *
\**********************************************************************************************************************/

/**
 * @class gnd
 *
 * @desc
 *  GND Library namespace
 */
var gnd = gnd || {};

(function ()
{
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
    gnd.VERSION = '2.0.0. alpha';

    /**
     * @constant
     *
     * @desc
     *  Whether to run debug unit testing on the library or not
     *
     * @type {boolean}
     **/
    gnd.DEBUG = GND_GLOBALS.IS_DEV || false;

    /**
     * @namespace
     *
     * @desc
     *  The gnd parent (window)
     *
     * @type {object}
     **/
    gnd.global = window;
})();