/**=================================================================================**\
 *
 *  @author                             VGND Team
 *  @desc                               gnd Library Console Logging
 *
 *  @Table_of_Contents
 *
 *  @property                           gnd.log
 *      @property                           gnd.log.log()
 *      @property                           gnd.log.info()
 *      @property                           gnd.log.warn()
 *      @property                           gnd.log.error()
 *      @property                           gnd.log.debug()
 *      @property                           gnd.log.time()
 *      @property                           gnd.log.timeEnd()
 *
\**=================================================================================**/

/**
 * @class
 */
gnd.log = {};

    /**
     * @method
     *
     * Log variables to the console
     */
    gnd.log.log = function ()
    {
        if ( gnd.DEBUG ) {
            console.log.apply( console, arguments );
        }
    };

    /**
     * @method
     *
     * Set some info to the console
     *
     * @params
     *********
     * @params  {...} {*}
     *********
     *
     * @returns void
     */
    gnd.log.info = function ()
    {
        if ( gnd.DEBUG ) {
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
    gnd.log.warn = function ()
    {
        if ( gnd.DEBUG ) {
            console.warn.apply( console, arguments );
        }
    };

    /**
     * @method
     *
     * Debug variables to the console
     *
     * @params
     *********
     * @params  {...} {*}
     *********
     *
     * @returns void
     */
    gnd.log.debug = function ()
    {
        if ( gnd.DEBUG ) {
            console.debug.apply( console, arguments );
        }
    };

    /**
     * @method
     *
     * Console errors
     *
     * @params
     *********
     * @params  {...} {*}
     *********
     *
     * @returns void
     */
    gnd.log.error = function ()
    {
        if ( gnd.DEBUG ) {
            console.error.apply( console, arguments );
        }
    };

    /**
     * @method
     *
     * Console time
     *
     * @params
     *********
     * @params  {...} {*}
     *********
     *
     * @returns void
     */
    gnd.log.time = function ()
    {
        if ( gnd.DEBUG ) {
            console.time.apply( console, arguments );
        }
    };

    /**
     * @method
     *
     * Console timeEnd
     *
     * @params
     *********
     * @params  {...} {*}
     *********
     *
     * @returns void
     */
    gnd.log.timeEnd = function ()
    {
        if ( gnd.DEBUG ) {
            console.timeEnd.apply( console, arguments );
        }
    };