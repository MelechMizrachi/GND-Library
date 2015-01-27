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
 *      @property                           gnd.string.compare()
 *      @property                           gnd.string.compareInsensitive()
 *
\**=================================================================================**/

/**
 * @class
 */
gnd.string = {};

    /**
     * @method
     *
     * Convert parameter to a string
     *
     * @params
     *********
     * @param value {*}
     *  The string to make safe
     *********
     *
     * @returns {string}
     */
    gnd.string.makeSafe = function ( value )
    {
        return ( !value )
            ? ''
            : String( value )
        ;
    };

    /**
     * @class
     */
    gnd.string.is = {};

        /**
         * @method
         *
         * Determine if a variable is a string
         *
         * @params
         *********
         * @param toTest {*}
         *  The variable to test
         *********
         *
         * @returns {boolean}
         */
        gnd.string.is.string = function ( toTest )
        {
            return gnd.isTypeOf( toTest, 'string' );
        };

        /**
         * @method
         *
         * Determine if a variable is a number
         *
         * @params
         *********
         * @param toTest {*}
         *  The variable to test
         *********
         *
         * @returns {boolean}
         */
        gnd.string.is.numeric = function ( toTest )
        {
            return ( toTest - parseFloat( toTest ) >= 0 );
        };

        /**
         * @method
         *
         * Determine if a string is empty
         *
         * @params
         *********
         * @param toTest {*}
         *  The variable to test
         *********
         *
         * @returns {boolean}
         */
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
     * Does a string contain a value
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
     * @returns {boolean}
     */
    gnd.string.contains = function ( toTest, value )
    {
        if ( !toTest || !value ) {
            return false;
        }

        return String.prototype.indexOf.call( toTest, value ) !== -1;
    };

    /**
     * @method
     *
     * Case insensitive of
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
     * @returns {boolean}
     */
    gnd.string.containsInsensitive = function ( toTest, value )
    {
        if ( !toTest || !value ) {
            return false;
        }

        return gnd.string.contains( toTest.toLowerCase(), value.toLowerCase() );
    };

    /**
     * @method
     *
     * Compare to strings to see if they match
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
     * @returns {boolean}
     */
    gnd.string.compare = function ( toTest, value )
    {
        return toTest === value;
    };

    /**
     * @method
     *
     * Case insensitive of
     *  @link gnd.string.compare
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
     * @returns {boolean}
     */
    gnd.string.compareInsensitive = function ( toTest, value )
    {
        if ( !toTest || !value ) {
            return false;
        }

        return toTest.toLowerCase() === value.toLowerCase();
    };