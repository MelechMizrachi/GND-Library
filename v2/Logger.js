/**********************************************************************************************************************\
 *
 *  @author                             VGND Team
 *  @desc                               GND Library Console Logging
 *
 *  @Table_of_Contents
 *
 *  @property                           Logger
 *  @property                           Logger.log()
 *  @property                           Logger.info()
 *  @property                           Logger.warn()
 *  @property                           Logger.error()
 *  @property                           Logger.debug()
 *  @property                           Logger.time()
 *  @property                           Logger.timeEnd()
 *
\**********************************************************************************************************************/

/**
 * @class Logger
 *
 * GND Library Logger Class
 */
var Logger = {};

(function ()
{
    /**
     * @method
     *
     * Log variables to the console
     */
    Logger.log = function ()
    {
        if ( Config.DEBUG ) {
            console.log.apply( console, arguments );
        }
    };

    /**
     * @method
     *
     * Set some info to the console
     *
     * @params  {...} {*}
     *
     * @returns void
     */
    Logger.info = function ()
    {
        if ( Config.DEBUG ) {
            console.info.apply( console, arguments );
        }
    };

    /**
     * @method
     *
     * Console a warning
     *
     * @params
     *********
     * @params  {...} {*}
     *********
     *
     * @returns void
     */
    Logger.warn = function ()
    {
        if ( Config.DEBUG ) {
            console.warn.apply( console, arguments );
        }
    };

    /**
     * @method
     *
     * Debug variables to the console
     *
     * @params  {...} {*}
     *
     * @returns void
     */
    Logger.debug = function ()
    {
        if ( Config.DEBUG ) {
            console.debug.apply( console, arguments );
        }
    };

    /**
     * @method
     *
     * Console errors
     *
     * @params  {...} {*}
     *
     * @returns void
     */
    Logger.error = function ()
    {
        if ( Config.DEBUG ) {
            console.error.apply( console, arguments );
        }
    };

    /**
     * @method
     *
     * Console time
     *
     * @params  {...} {*}
     *
     * @returns void
     */
    Logger.time = function ()
    {
        if ( Config.DEBUG ) {
            console.time.apply( console, arguments );
        }
    };

    /**
     * @method
     *
     * Console timeEnd
     *
     * @params  {...} {*}
     *
     * @returns void
     */
    Logger.timeEnd = function ()
    {
        if ( Config.DEBUG ) {
            console.timeEnd.apply( console, arguments );
        }
    };
})();