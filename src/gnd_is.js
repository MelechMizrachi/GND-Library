/**=================================================================================**\
 *
 *  @author                             VGND Team
 *  @desc                               gnd Library Is Functions
 *
 *  @Table_of_Contents
 *
 *  @property                           gnd.is
 *      @property                           gnd.is.modernBrowser()
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
 */
gnd.is = {};

    /**
     * @method
     *
     * Is this a modern browser
     *
     * @type {boolean}
     */
    gnd.is.modernBrowser = (
        'querySelector' in document
        && 'addEventListener' in window
        && 'localStorage' in window
        && 'sessionStorage' in window
        && 'bind' in Function
        && (
            ('XMLHttpRequest' in window && 'withCredentials' in new XMLHttpRequest())
            || 'XDomainRequest' in window
        )
    );

    /**
     * @method
     *
     * @borrows Array.isArray
     */
    gnd.is.array = gnd.array.is.array;

    /**
     * @method
     */
    gnd.is.window = gnd.object.is.window;

    /**
     * @method
     */
    gnd.is.document = gnd.object.is.document;

    /**
     * @method
     */
    gnd.is.numeric = gnd.string.is.numeric;

    /**
     * @method
     */
    gnd.is.object = gnd.object.is.object;

    /**
     * @method
     *
     * @see gnd.string.is.string
     *
     * @type {Function}
     */
    gnd.is.string = gnd.string.is.string;

    /**
     * @method
     */
    gnd.is.domElement = gnd.object.is.domElement;

    /**
     * @method
     */
    gnd.is.nodeList = gnd.object.is.nodeList;

    /**
     * @method
     */
    gnd.is.htmlCollection = gnd.object.is.htmlCollection;

    /**
     * @method
     */
    gnd.is.htmlList = gnd.object.is.htmlList;

    /**
     * @method
     *
     * Determine if a variable is an instance of gnd.dom.$
     *
     * @params
     *********
     * @param toTest {*}
     *  The variable to test
     *********
     *
     * @returns {boolean}
     */
    gnd.is.$ = function ( toTest )
    {
        return toTest instanceof gnd.$;
    };

    /**
     * @method
     *
     * Determine if a variable is a boolean
     *
     * @params
     *********
     * @param toTest {*}
     *  The variable to test
     *********
     *
     * @returns {boolean}
     */
    gnd.is.bool = function ( toTest )
    {
        return gnd.isTypeOf( toTest, 'boolean' );
    };

    /**
     * @method
     *
     * Determine if a variable is a function
     *
     * @params
     *********
     * @param toTest {*}
     *  The variable to test
     *********
     *
     * @returns {boolean}
     */
    gnd.is.func = function ( toTest )
    {
        return gnd.isTypeOf( toTest, 'function' );
    };

    /**
     * @method
     *
     * Determine if a variable is null/undefined/etc
     *
     * @params
     *********
     * @param toTest {*}
     *  The variable to test
     *********
     *
     * @returns {boolean}
     */
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
     * Determine if a variable is undefined
     *
     * @params
     *********
     * @param toTest {*}
     *  The variable to test
     *********
     *
     * @returns {boolean}
     */
    gnd.is.undefined = function ( toTest )
    {
        return gnd.isTypeOf( toTest, 'undefined' );
    };

    /**
     * @class
     */
    gnd.is.empty = {};

        /**
         * @method
         */
        gnd.is.empty.array = gnd.array.is.empty;

        /**
         * @method
         */
        gnd.is.empty.object = gnd.object.is.empty;

        /**
         * @method
         */
        gnd.is.empty.string = gnd.string.is.empty;

    /**
     * @class
     */
    gnd.is.browser = {};

        /**
         * @constant
         *
         * @borrows gnd.userAgent.IE
         */
        gnd.is.browser.IE = gnd.userAgent.IE;

        /**
         * @constant
         *
         * @borrows gnd.userAgent.FIREFOX
         */
        gnd.is.browser.FIREFOX = gnd.userAgent.FIREFOX;

        /**
         * @constant
         *
         * @borrows gnd.userAgent.CHROME
         */
        gnd.is.browser.CHROME = gnd.userAgent.CHROME;

        /**
         * @constant
         *
         * @borrows gnd.userAgent.SAFARI
         */
        gnd.is.browser.SAFARI = gnd.userAgent.SAFARI;

    /**
     * @class
     */
    gnd.is.os = {};

        /**
         * @constant
         *
         * @borrows gnd.userAgent.WINDOWS
         */
        gnd.is.os.WINDOWS = gnd.userAgent.WINDOWS;

        /**
         * @constant
         *
         * @borrows gnd.userAgent.MAC
         */
        gnd.is.os.MAC = gnd.userAgent.MAC;

        /**
         * @constant
         *
         * @borrows gnd.userAgent.LINUX
         */
        gnd.is.os.LINUX = gnd.userAgent.LINUX;

        /**
         * @constant
         *
         * @borrows gnd.userAgent.ANDROID
         */
        gnd.is.os.ANDROID = gnd.userAgent.ANDROID;

        /**
         * @constant
         *
         * @borrows gnd.userAgent.IOS
         */
        gnd.is.os.IOS = gnd.userAgent.IOS;

        /**
         * @constant
         *
         * @borrows gnd.userAgent.WINDOWS_PHONE
         */
        gnd.is.os.WP = gnd.userAgent.WINDOWS_PHONE;

    /**
     * @class
     */
    gnd.is.device = {};

        /**
         * @constant
         *
         * @borrows gnd.userAgent.WINDOWS_PHONE
         */
        gnd.is.device.WP = gnd.userAgent.WINDOWS_PHONE;

        /**
         * @constant
         *
         * @borrows gnd.userAgent.DESKTOP
         */
        gnd.is.device.DESKTOP = gnd.userAgent.DESKTOP;

        /**
         * @constant
         *
         * @borrows gnd.userAgent.MOBILE
         */
        gnd.is.device.MOBILE = gnd.userAgent.MOBILE;

        /**
         * @constant
         *
         * @borrows gnd.userAgent.ANDROID
         */
        gnd.is.device.ANDROID = gnd.userAgent.ANDROID;

        /**
         * @constant
         *
         * @borrows gnd.userAgent.IPHONE
         */
        gnd.is.device.IPHONE = gnd.userAgent.IPHONE;

        /**
         * @constant
         *
         * @borrows gnd.userAgent.IPAD
         */
        gnd.is.device.IPAD = gnd.userAgent.IPAD;