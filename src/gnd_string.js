/**=================================================================================**\
 *
 *  @author                             VGND Team
 *  @desc                               gnd Library String Specific Functions
 *
 *  @Table_of_Contents
 *
 *  @property                           gnd.string
 *      @property                           gnd.string.makeSafe()
 *      @property                           gnd.string.is
 *          @property                           gnd.string.is.string()
 *          @property                           gnd.string.is.numeric()
 *          @property                           gnd.string.is.empty()
 *      @property                           gnd.string.contains()
 *      @property                           gnd.string.containsInsensitive()
 *
\**=================================================================================**/

/**
 * @class
 **/
gnd.string = {};

    /**
     * @method
     *
     * @author
     *  MelechMizrachi
     *
     * @desc
     *  Convert parameter to a string
     *
     * @params
     *********
     * @param value {*}
     *  The string to make safe
     *********
     *
     * @return {string}
     **/
    gnd.string.makeSafe = function ( value )
    {
        return ( !value )
            ? ''
            : String( value )
        ;
    };

    /**
     * @class
     **/
    gnd.string.is = {};

        /**
         * @method
         *
         * @author
         *  MelechMizrachi
         *
         * @desc
         *  Determine if a variable is a string
         *
         * @params
         *********
         * @param toTest {*}
         *  The variable to test
         *********
         *
         * @return {boolean}
         **/
        gnd.string.is.string = function ( toTest )
        {
            return gnd.isTypeOf( toTest, 'string' );
        };

        /**
         * @method
         *
         * @author
         *  MelechMizrachi
         *
         * @desc
         *  Determine if a variable is a number
         *
         * @params
         *********
         * @param toTest {*}
         *  The variable to test
         *********
         *
         * @return {boolean}
         **/
        gnd.string.is.numeric = function ( toTest )
        {
            return ( toTest - parseFloat( toTest ) >= 0 );
        };

        /**
         * @method
         *
         * @author
         *  MelechMizrachi
         *
         * @desc
         *  Determine if a string is empty
         *
         * @params
         *********
         * @param toTest {*}
         *  The variable to test
         *********
         *
         * @return {boolean}
         **/
        gnd.string.is.empty = function ( toTest )
        {
            return !(
                // The string to test has a value
                toTest
                &&
                // AND String to test is a string
                gnd.string.is.string( toTest )
            );
        };

    /**
     * @method
     *
     * @author
     *  MelechMizrachi
     *
     * @desc
     *  Does a string contain a value
     *
     * @params
     *********
     * @param toTest {string}
     *  The string to test
     **
     * @param value {string}
     *  The value to test for
     *********
     *
     * @return {boolean}
     **/
    gnd.string.contains = function ( toTest, value )
    {
        return String.prototype.indexOf.call( toTest, value ) != -1;
    };

    /**
     * @method
     *
     * @author
     *  MelechMizrachi
     *
     * @desc
     *  Case insensitive of
     *  @link gnd.string.contains
     *
     * @params
     *********
     * @param toTest {string}
     *  The string to test
     **
     * @param value {string}
     *  The value to test for
     *********
     *
     * @return {boolean}
     **/
    gnd.string.containsInsensitive = function ( toTest, value )
    {
        return gnd.string.contains( toTest.toLowerCase(), value.toLowerCase() );
    };