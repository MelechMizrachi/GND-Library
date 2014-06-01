/**=================================================================================**\
 *
 *  @author                             VGND Team
 *  @desc                               gnd Library Is Functions
 *
 *  @Table_of_Contents
 *
 *  @property                           gnd.is
 *      @property                           gnd.is.plainObject()
 *      @property                           gnd.is.array()
 *      @property                           gnd.is.window()
 *      @property                           gnd.is.document()
 *      @property                           gnd.is.numeric()
 *      @property                           gnd.is.object()
 *      @property                           gnd.is.string()
 *      @property                           gnd.is.domElement()
 *      @property                           gnd.is.nodeList()
 *      @property                           gnd.is.htmlCollection()
 *      @property                           gnd.is.$()
 *      @property                           gnd.is.bool()
 *      @property                           gnd.is.func()
 *      @property                           gnd.is.invalid()
 *      @property                           gnd.is.undefined()
 *      @property                           gnd.is.empty
 *          @property                           gnd.is.empty.array()
 *          @property                           gnd.is.empty.object()
 *          @property                           gnd.is.empty.string()
 *      @property                           gnd.is.browser
 *          @property                           gnd.is.browser.IE()
 *          @property                           gnd.is.browser.FIREFOX()
 *          @property                           gnd.is.browser.CHROME()
 *          @property                           gnd.is.browser.SAFARI()
 *      @property                           gnd.is.os
 *          @property                           gnd.is.os.WINDOWS()
 *          @property                           gnd.is.os.MAC()
 *          @property                           gnd.is.os.LINUX()
 *          @property                           gnd.is.os.ANDROID()
 *          @property                           gnd.is.os.IOS()
 *          @property                           gnd.is.os.WP()
 *      @property                           gnd.is.device
 *          @property                           gnd.is.device.WP()
 *          @property                           gnd.is.device.DESKTOP()
 *          @property                           gnd.is.device.MOBILE()
 *          @property                           gnd.is.device.ANDROID()
 *          @property                           gnd.is.device.IPHONE()
 *          @property                           gnd.is.device.IPAD()
 *
\**=================================================================================**/

/**
 * @class 
 **/
gnd.is = {};

    /**
     * @method
     *
     * @author
     *  MelechMizrachi
     *
     * @desc
     *  Determine if an object is plain, or an HTML Element
     *
     * @params
     *********
     * @param toTest {*}
     *  The object to test
     *********
     *
     * @return {boolean}
     **/
    gnd.is.plainObject = function ( toTest )
    {
        if ( !gnd.is.object( toTest ) || gnd.is.window( toTest ) || gnd.is.domElement( toTest ) || gnd.is.array( toTest ) ) {
            return false;
        }

        if ( gnd.is.$( toTest ) || gnd.is.domElement( toTest.elem ) || gnd.is.domElement( toTest[0] ) ) {
            return false;
        }

        // Always assume the object is a valid object
        return true;
    };

    /**
     * @method
     *
     * @author
     *  MelechMizrachi
     *
     * @borrows Array.isArray
     **/
    gnd.is.array = gnd.array.is.array;

    /**
     * @method
     *
     * @author
     *  MelechMizrachi
     **/
    gnd.is.window = gnd.object.is.window;

    /**
     * @method
     *
     * @author
     *  MelechMizrachi
     **/
    gnd.is.document = gnd.object.is.document;

    /**
     * @method
     *
     * @author
     *  MelechMizrachi
     **/
    gnd.is.numeric = gnd.string.is.numeric;

    /**
     * @method
     *
     * @author
     *  MelechMizrachi
     **/
    gnd.is.object = gnd.object.is.object;

    /**
     * @method
     *
     * @author
     *  MelechMizrachi
     *
     * @see gnd.string.is.string
     *
     * @type {Function}
     **/
    gnd.is.string = gnd.string.is.string;

    /**
     * @method
     *
     * @author
     *  MelechMizrachi
     **/
    gnd.is.domElement = gnd.object.is.domElement;

    /**
     * @method
     *
     * @author
     *  MelechMizrachi
     **/
    gnd.is.nodeList = gnd.object.is.nodeList;

    /**
     * @method
     *
     * @author
     *  MelechMizrachi
     **/
    gnd.is.htmlCollection = gnd.object.is.htmlCollection;

    /**
     * @method
     *
     * @author
     *  MelechMizrachi
     **/
    gnd.is.htmlList = gnd.object.is.htmlList;

    /**
     * @method
     *
     * @author
     *  MelechMizrachi
     *
     * @desc
     *  Determine if a variable is an instance of gnd.dom.$
     *
     * @params
     *********
     * @param toTest {*}
     *  The variable to test
     *********
     *
     * @return {boolean}
     **/
    gnd.is.$ = function ( toTest )
    {
        return toTest instanceof gnd.$;
    };

    /**
     * @method
     *
     * @author
     *  MelechMizrachi
     *
     * @desc
     *  Determine if a variable is a boolean
     *
     * @params
     *********
     * @param toTest {*}
     *  The variable to test
     *********
     *
     * @return {boolean}
     **/
    gnd.is.bool = function ( toTest )
    {
        return gnd.isTypeOf( toTest, 'boolean' );
    };

    /**
     * @method
     *
     * @author
     *  MelechMizrachi
     *
     * @desc
     *  Determine if a variable is a function
     *
     * @params
     *********
     * @param toTest {*}
     *  The variable to test
     *********
     *
     * @return {boolean}
     **/
    gnd.is.func = function ( toTest )
    {
        return gnd.isTypeOf( toTest, 'function' );
    };

    /**
     * @method
     *
     * @author
     *  MelechMizrachi
     *
     * @desc
     *  Determine if a variable is null/undefined/etc
     *
     * @params
     *********
     * @param toTest {*}
     *  The variable to test
     *********
     *
     * @return {boolean}
     **/
    gnd.is.invalid = function ( toTest )
    {
        return gnd.is.undefined( toTest )
            || toTest === null
            || !toTest
        ;
    };

    /**
     * @method
     *
     * @author
     *  MelechMizrachi
     *
     * @desc
     *  Determine if a variable is undefined
     *
     * @params
     *********
     * @param toTest {*}
     *  The variable to test
     *********
     *
     * @return {boolean}
     **/
    gnd.is.undefined = function ( toTest )
    {
        return gnd.isTypeOf( toTest, 'undefined' );
    };

    /**
     * @class
     **/
    gnd.is.empty = {};

        /**
         * @method
         *
         * @author
         *  MelechMizrachi
         **/
        gnd.is.empty.array = gnd.array.is.empty;

        /**
         * @method
         *
         * @author
         *  MelechMizrachi
         **/
        gnd.is.empty.object = gnd.object.is.empty;

        /**
         * @method
         *
         * @author
         *  MelechMizrachi
         **/
        gnd.is.empty.string = gnd.string.is.empty;

    /**
     * @class
     **/
    gnd.is.browser = {};

        /**
         * @constant
         *
         * @author
         *  MelechMizrachi
         *
         * @borrows gnd.userAgent.IE
         **/
        gnd.is.browser.IE = gnd.userAgent.IE;

        /**
         * @constant
         *
         * @author
         *  MelechMizrachi
         *
         * @borrows gnd.userAgent.FIREFOX
         **/
        gnd.is.browser.FIREFOX = gnd.userAgent.FIREFOX;

        /**
         * @constant
         *
         * @author
         *  MelechMizrachi
         *
         * @borrows gnd.userAgent.CHROME
         **/
        gnd.is.browser.CHROME = gnd.userAgent.CHROME;

        /**
         * @constant
         *
         * @author
         *  MelechMizrachi
         *
         * @borrows gnd.userAgent.SAFARI
         **/
        gnd.is.browser.SAFARI = gnd.userAgent.SAFARI;

    /**
     * @class
     **/
    gnd.is.os = {};

        /**
         * @constant
         *
         * @author
         *  MelechMizrachi
         *
         * @borrows gnd.userAgent.WINDOWS
         **/
        gnd.is.os.WINDOWS = gnd.userAgent.WINDOWS;

        /**
         * @constant
         *
         * @author
         *  MelechMizrachi
         *
         * @borrows gnd.userAgent.MAC
         **/
        gnd.is.os.MAC = gnd.userAgent.MAC;

        /**
         * @constant
         *
         * @author
         *  MelechMizrachi
         *
         * @borrows gnd.userAgent.LINUX
         **/
        gnd.is.os.LINUX = gnd.userAgent.LINUX;

        /**
         * @constant
         *
         * @author
         *  MelechMizrachi
         *
         * @borrows gnd.userAgent.ANDROID
         **/
        gnd.is.os.ANDROID = gnd.userAgent.ANDROID;

        /**
         * @constant
         *
         * @author
         *  MelechMizrachi
         *
         * @borrows gnd.userAgent.IOS
         **/
        gnd.is.os.IOS = gnd.userAgent.IOS;

        /**
         * @constant
         *
         * @author
         *  MelechMizrachi
         *
         * @borrows gnd.userAgent.WINDOWS_PHONE
         **/
        gnd.is.os.WP = gnd.userAgent.WINDOWS_PHONE;

    /**
     * @class
     **/
    gnd.is.device = {};

        /**
         * @constant
         *
         * @author
         *  MelechMizrachi
         *
         * @borrows gnd.userAgent.WINDOWS_PHONE
         **/
        gnd.is.device.WP = gnd.userAgent.WINDOWS_PHONE;

        /**
         * @constant
         *
         * @author
         *  MelechMizrachi
         *
         * @borrows gnd.userAgent.DESKTOP
         **/
        gnd.is.device.DESKTOP = gnd.userAgent.DESKTOP;

        /**
         * @constant
         *
         * @author
         *  MelechMizrachi
         *
         * @borrows gnd.userAgent.MOBILE
         **/
        gnd.is.device.MOBILE = gnd.userAgent.MOBILE;

        /**
         * @constant
         *
         * @author
         *  MelechMizrachi
         *
         * @borrows gnd.userAgent.ANDROID
         **/
        gnd.is.device.ANDROID = gnd.userAgent.ANDROID;

        /**
         * @constant
         *
         * @author
         *  MelechMizrachi
         *
         * @borrows gnd.userAgent.IPHONE
         **/
        gnd.is.device.IPHONE = gnd.userAgent.IPHONE;

        /**
         * @constant
         *
         * @author
         *  MelechMizrachi
         *
         * @borrows gnd.userAgent.IPAD
         **/
        gnd.is.device.IPAD = gnd.userAgent.IPAD;