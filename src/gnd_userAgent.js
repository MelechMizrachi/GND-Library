/**=================================================================================**\
 *
 *  @author                             VGND Team
 *  @desc                               gnd Library User Agent Checks
 *
 *  @Table_of_Contents
 *
 *  @property                           gnd.userAgent
 *      @property                           gnd.userAgent.UA
 *      @property                           gnd.userAgent.contains
 *      @property                           gnd.userAgent.IE
 *      @property                           gnd.userAgent.FIREFOX
 *      @property                           gnd.userAgent.CHROME
 *      @property                           gnd.userAgent.SAFARI
 *      @property                           gnd.userAgent.IPHONE
 *      @property                           gnd.userAgent.IPAD
 *      @property                           gnd.userAgent.ANDROID
 *      @property                           gnd.userAgent.IOS
 *      @property                           gnd.userAgent.WINDOWS_PHONE
 *      @property                           gnd.userAgent.MOBILE
 *      @property                           gnd.userAgent.WINDOWS
 *      @property                           gnd.userAgent.MAC
 *      @property                           gnd.userAgent.LINUX
 *      @property                           gnd.userAgent.DESKTOP
 *
\**=================================================================================**/

/**
 * @class
 **/
gnd.userAgent = {};

/**=================================================================================**\
 *
 *  § 1.                                Variables
 *
\**=================================================================================**/

    /**
     * @constant
     *
     * @author
     *  MelechMizrachi
     *
     * @desc
     *  User Agent string
     *
     * @type {string}
     **/
    gnd.userAgent.UA = navigator.userAgent;

/**=================================================================================**\
 *
 *  § 2.                                Methods
 *
\**=================================================================================**/

    /**
     * @method
     *
     * @author
     *  MelechMizrachi
     *
     * @desc
     *  Determine if the user agent has a value
     *
     * @params
     *********
     * @param value {string}
     *  The value to test if userAgent contains it
     *********
     *
     * @return {boolean}
     **/
    gnd.userAgent.contains = function ( value )
    {
        return gnd.string.contains( gnd.userAgent.UA, value );
    };

/**=================================================================================**\
 *
 *  § 3.                                Static Booleans
 *
\**=================================================================================**/

    /**
     * @constant
     *
     * @author
     *  MelechMizrachi
     *
     * @desc
     *  Determine if the user's browser is IE
     *
     * @type {boolean}
     **/
    gnd.userAgent.IE = (function ()
    {
        return gnd.userAgent.contains( 'MSIE' );
    })();

    /**
     * @constant
     *
     * @author
     *  MelechMizrachi
     *
     * @desc
     *  Determine if the user's browser is FireFox
     *
     * @type {boolean}
     **/
    gnd.userAgent.FIREFOX = (function ()
    {
        return gnd.userAgent.contains( 'Firefox' );
    })();

    /**
     * @constant
     *
     * @author
     *  MelechMizrachi
     *
     * @desc
     *  Determine if the user's browser is Chrome
     *
     * @type {boolean}
     **/
    gnd.userAgent.CHROME = (function ()
    {
        return gnd.userAgent.contains( 'Chrome' );
    })();

    /**
     * @constant
     *
     * @author
     *  MelechMizrachi
     *
     * @desc
     *  Determine if the user's browser is Safari
     *
     * @type {boolean}
     **/
    gnd.userAgent.SAFARI = (function ()
    {
        return gnd.userAgent.contains( 'Safari' ) && !gnd.userAgent.CHROME;
    })();

    /**
     * @constant
     *
     * @author
     *  MelechMizrachi
     *
     * @desc
     *  Determine if the user's device is iPhone
     *
     * @type {boolean}
     **/
    gnd.userAgent.IPHONE = (function ()
    {
        return gnd.userAgent.contains( 'iPhone' );
    })();

    /**
     * @constant
     *
     * @author
     *  MelechMizrachi
     *
     * @desc
     *  Determine if the user's device is iPad
     *
     * @type {boolean}
     **/
    gnd.userAgent.IPAD = (function ()
    {
        return gnd.userAgent.contains( 'iPad' );
    })();

    /**
     * @constant
     *
     * @author
     *  MelechMizrachi
     *
     * @desc
     *  Determine if the user's OS is Android
     *
     * @type {boolean}
     **/
    gnd.userAgent.ANDROID = (function ()
    {
        return gnd.userAgent.contains( 'Android' );
    })();

    /**
     * @constant
     *
     * @author
     *  MelechMizrachi
     *
     * @desc
     *  Determine if the user's OS is iOS
     *
     * @type {boolean}
     **/
    gnd.userAgent.IOS = gnd.userAgent.IPHONE || gnd.userAgent.IPAD;

    /**
     * @constant
     *
     * @author
     *  MelechMizrachi
     *
     * @desc
     *  Determine if the user's OS is Windows Phone
     *
     * @type {boolean}
     **/
    gnd.userAgent.WINDOWS_PHONE = (function ()
    {
        return gnd.userAgent.contains( 'Windows Phone' );
    })();

    /**
     * @constant
     *
     * @author
     *  MelechMizrachi
     *
     * @desc
     *  Determine if the user's device is a mobile device
     *
     * @type {boolean}
     **/
    gnd.userAgent.MOBILE = gnd.userAgent.IOS || gnd.userAgent.WINDOWS_PHONE || gnd.userAgent.ANDROID;

    /**
     * @constant
     *
     * @author
     *  MelechMizrachi
     *
     * @desc
     *  Determine if the user's OS is Windows
     *
     * @type {boolean}
     **/
    gnd.userAgent.WINDOWS = (function ()
    {
        return gnd.userAgent.contains( 'Windows NT' );
    })();

    /**
     * @constant
     *
     * @author
     *  MelechMizrachi
     *
     * @desc
     *  Determine if the user's OS is Mac
     *
     * @type {boolean}
     **/
    gnd.userAgent.MAC = (function ()
    {
        return gnd.userAgent.contains( 'Macintosh' );
    })();

    /**
     * @constant
     *
     * @author
     *  MelechMizrachi
     *
     * @desc
     *  Determine if the user's OS is Linux
     *
     * @type {boolean}
     **/
    gnd.userAgent.LINUX = (function ()
    {
        return gnd.userAgent.contains( 'Linux' );
    })();

    /**
     * @constant
     *
     * @author
     *  MelechMizrachi
     *
     * @desc
     *  Determine if the user's device is a desktop
     *
     * @type {boolean}
     **/
    gnd.userAgent.DESKTOP = !gnd.userAgent.MOBILE;