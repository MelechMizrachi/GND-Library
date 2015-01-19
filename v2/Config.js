/**********************************************************************************************************************\
 *
 *  @author                             VGND Team
 *  @desc                               GND Library Configs
 *
 *  @Table_of_Contents
 *
 *  @property                           Config
 *  @property                           Config.GLOBALS
 *  @property                           Config.VERSION
 *  @property                           Config.DEBUG
 *  @property                           Config.global
 *
\**********************************************************************************************************************/

/**
 * @class Config
 *
 * @desc
 *  GND Library Config Class
 */
var Config = {};

(function ()
{
    /**
     * @namespace
     *
     * Ensure we have a namespace set for Globals
     * In the case one does not exist
     **/
    Config.GLOBALS = window.GLOBALS = window.GLOBALS || {};

    /**
     * @constant
     *
     * @desc
     *  The version of gnd library
     *
     * @type {string}
     **/
    Config.VERSION = '2.0.0. alpha';

    /**
     * @constant
     *
     * @desc
     *  Whether to run debug within the library
     *
     * @type {boolean}
     **/
    Config.DEBUG = Config.GLOBALS.DEBUG || Config.GLOBALS.IS_DEV || false;

    /**
     * @namespace
     *
     * @desc
     *  The parent (window)
     *
     * @type {object}
     **/
    Config.global = window;
})();