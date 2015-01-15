/**********************************************************************************************************************\
 *
 *  @author                             VGND Team
 *  @desc                               GND Library String Extensions
 *
 *  @Table_of_Contents
 *
 *  @property                           String.makeSafe()
 *  @property                           String.contains()
 *  @property                           String.containsInsensitive()
 *  @property                           String.compare()
 *  @property                           String.compareInsensitive()
 *
\**********************************************************************************************************************/

(function ()
{
    /**
     * @method
     *
     * @author
     *  MelechMizrachi
     *
     * @desc
     *  Convert parameter to a string
     *
     * @param value {*}
     *  The string to make safe
     *
     * @return {string}
     **/
    String.makeSafe = function ( value )
    {
        return ( !value )
            ? ''
            : String( value )
        ;
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
     * @param toTest {string}
     *  The string to test
     * @param value {string}
     *  The value to test for
     *
     * @return {boolean}
     **/
    String.contains = function ( toTest, value )
    {
        if ( !toTest || !value ) {
            return false;
        }

        return String.prototype.indexOf.call( toTest, value ) !== -1;
    };

    /**
     * @method
     *
     * @author
     *  MelechMizrachi
     *
     * @desc
     *  Case insensitive of
     *
     * @link String.contains
     *
     * @param toTest {string}
     *  The string to test
     * @param value {string}
     *  The value to test for
     *
     * @return {boolean}
     **/
    String.containsInsensitive = function ( toTest, value )
    {
        if ( !toTest || !value ) {
            return false;
        }

        return String.contains( toTest.toLowerCase(), value.toLowerCase() );
    };

    /**
     * @method
     *
     * @author
     *  MelechMizrachi
     *
     * @desc
     *  Compare to strings to see if they match
     *
     * @param toTest {string}
     *  The string to test
     * @param value {string}
     *  The value to test for
     *
     * @return {boolean}
     **/
    String.compare = function ( toTest, value )
    {
        return toTest === value;
    };

    /**
     * @method
     *
     * @author
     *  MelechMizrachi
     *
     * @desc
     *  Case insensitive of
     *
     * @link String.compare
     *
     * @param toTest {string}
     *  The string to test
     * @param value {string}
     *  The value to test for
     *
     * @return {boolean}
     **/
    String.compareInsensitive = function ( toTest, value )
    {
        if ( !toTest || !value ) {
            return false;
        }

        return toTest.toLowerCase() === value.toLowerCase();
    };
})();