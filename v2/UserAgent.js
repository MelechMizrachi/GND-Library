/**********************************************************************************************************************\
 *
 *  @author                             VGND Team
 *  @desc                               GND Library User Agent Detections
 *
 *  @Table_of_Contents
 *
 *  @property                           UserAgent
 *      @property                           UserAgent.UA
 *      @property                           UserAgent.contains
 *      @property                           UserAgent.IE
 *      @property                           UserAgent.FIREFOX
 *      @property                           UserAgent.CHROME
 *      @property                           UserAgent.SAFARI
 *      @property                           UserAgent.IPHONE
 *      @property                           UserAgent.IPAD
 *      @property                           UserAgent.ANDROID
 *      @property                           UserAgent.IOS
 *      @property                           UserAgent.WINDOWS_PHONE
 *      @property                           UserAgent.MOBILE
 *      @property                           UserAgent.WINDOWS
 *      @property                           UserAgent.MAC
 *      @property                           UserAgent.LINUX
 *      @property                           UserAgent.DESKTOP
 *
\**********************************************************************************************************************/

/**
 * @class UserAgent
 *
 * @desc
 *  GND Library User Agent Class
 */
var UserAgent = {};

(function ()
{
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
    UserAgent.UA = navigator.userAgent;

    /**
     * @method
     *
     * @author
     *  MelechMizrachi
     *
     * @desc
     *  Determine if the user agent has a value
     *
     * @param value {string}
     *  The value to test if userAgent contains it
     *
     * @return {boolean}
     **/
    UserAgent.contains = function ( value )
    {
        return gnd.string.contains( UserAgent.UA, value );
    };
    
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
    UserAgent.IE = (
        UserAgent.contains( 'MSIE' )
    );

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
    UserAgent.FIREFOX = (
        UserAgent.contains( 'Firefox' )
    );

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
    UserAgent.CHROME = (
        UserAgent.contains( 'Chrome' )
    );

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
    UserAgent.SAFARI = (
        UserAgent.contains( 'Safari' ) && !UserAgent.CHROME
    );

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
    UserAgent.IPHONE = (
        UserAgent.contains( 'iPhone' )
    );

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
    UserAgent.IPAD = (
        UserAgent.contains( 'iPad' )
    );

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
    UserAgent.ANDROID = (
        UserAgent.contains( 'Android' )
    );

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
    UserAgent.IOS = UserAgent.IPHONE || UserAgent.IPAD;

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
    UserAgent.WINDOWS_PHONE = (
        UserAgent.contains( 'Windows Phone' )
    );

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
    UserAgent.MOBILE = UserAgent.IOS || UserAgent.WINDOWS_PHONE || UserAgent.ANDROID;

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
    UserAgent.WINDOWS = (
        UserAgent.contains( 'Windows NT' )
    );

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
    UserAgent.MAC = (
        UserAgent.contains( 'Macintosh' )
    );

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
    UserAgent.LINUX = (
        UserAgent.contains( 'Linux' )
    );

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
    UserAgent.DESKTOP = !UserAgent.MOBILE;
})();