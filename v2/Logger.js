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
 * @desc
 *  GND Library Logger Class
 */
var Logger = {};

(function ()
{
    /**
     * @method
     *
     * @author
     *  MelechMizrachi
     *
     * @desc
     *  Log variables to the console
     **/
    Logger.log = function ()
    {
        if ( gnd.DEBUG ) {
            console.log.apply( console, arguments );
        }
    };

    /**
     * @method
     *
     * @author
     *  MelechMizrachi
     *
     * @desc
     *  Set some info to the console
     *
     * @params  {...} {*}
     *
     * @return void
     **/
    Logger.info = function ()
    {
        if ( gnd.DEBUG ) {
            console.info.apply( console, arguments );
        }
    };

    /**
     * @method
     *
     * @author
     *  MelechMizrachi
     *
     * @desc
     *  Console a warning
     *
     * @params
     *********
     * @params  {...} {*}
     *********
     *
     * @return void
     **/
    Logger.warn = function ()
    {
        if ( gnd.DEBUG ) {
            console.warn.apply( console, arguments );
        }
    };

    /**
     * @method
     *
     * @author
     *  MelechMizrachi
     *
     * @desc
     *  Debug variables to the console
     *
     * @params  {...} {*}
     *
     * @return void
     **/
    Logger.debug = function ()
    {
        if ( gnd.DEBUG ) {
            console.debug.apply( console, arguments );
        }
    };

    /**
     * @method
     *
     * @author
     *  MelechMizrachi
     *
     * @desc
     *  Console errors
     *
     * @params  {...} {*}
     *
     * @return void
     **/
    Logger.error = function ()
    {
        if ( gnd.DEBUG ) {
            console.error.apply( console, arguments );
        }
    };

    /**
     * @method
     *
     * @author
     *  MelechMizrachi
     *
     * @desc
     *  Console time
     *
     * @params  {...} {*}
     *
     * @return void
     **/
    Logger.time = function ()
    {
        if ( gnd.DEBUG ) {
            console.time.apply( console, arguments );
        }
    };

    /**
     * @method
     *
     * @author
     *  MelechMizrachi
     *
     * @desc
     *  Console timeEnd
     *
     * @params  {...} {*}
     *
     * @return void
     **/
    Logger.timeEnd = function ()
    {
        if ( gnd.DEBUG ) {
            console.timeEnd.apply( console, arguments );
        }
    };
})();