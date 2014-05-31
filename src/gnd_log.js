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
 **/
gnd.log = {};

    /**
     * @method
     *
     * @author
     *  MelechMizrachi
     *
     * @desc
     *  Log variables to the console
     **/
    gnd.log.log = function ()
    {
        console.log.apply( console, arguments );
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
     * @params
     *********
     * @params  {...} {*}
     *********
     *
     * @return void
     **/
    gnd.log.info = function ()
    {
        console.info.apply( console, arguments );
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
    gnd.log.warn = function ()
    {
        console.warn.apply( console, arguments );
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
     * @params
     *********
     * @params  {...} {*}
     *********
     *
     * @return void
     **/
    gnd.log.debug = function ()
    {
        console.debug.apply( console, arguments );
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
     * @params
     *********
     * @params  {...} {*}
     *********
     *
     * @return void
     **/
    gnd.log.error = function ()
    {
        console.error.apply( console, arguments );
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
     * @params
     *********
     * @params  {...} {*}
     *********
     *
     * @return void
     **/
    gnd.log.time = function ()
    {
        console.time.apply( console, arguments );
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
     * @params
     *********
     * @params  {...} {*}
     *********
     *
     * @return void
     **/
    gnd.log.timeEnd = function ()
    {
        console.timeEnd.apply( console, arguments );
    };