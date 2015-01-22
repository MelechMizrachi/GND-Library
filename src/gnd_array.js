/**=================================================================================**\
 *
 *  @author                             VGND Team
 *  @desc                               gnd Library Array Specific Functions
 *
 *  @Table_of_Contents
 *
 *  @property                            gnd.array
 *      @property                           gnd.array.is
 *          @property                           gnd.array.is.array
 *          @property                           gnd.array.is.empty
 *      @property                           gnd.array.contains
 *      @property                           gnd.array.insert
 *
\**=================================================================================**/

/**
 * @class
 */
gnd.array = {};

    /**
     * @class
     */
    gnd.array.is = {};

        /**
         * @method
         *
         * @author MelechMizrachi
         *
         * @borrows Array.isArray
         */
        gnd.array.is.array = Array.isArray;

        /**
         * @method
         *
         * @author MelechMizrachi
         *
         * @desc
         *  Determine if an array is empty
         *
         * @params
         *********
         * @param arr {*}
         *  The variable to test
         *********
         *
         * @returns {boolean}
         */
        gnd.array.is.empty = function ( arr )
        {
            return ( arr.length == 0 );
        };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Does an array contain a value
     *
     * @params
     *********
     * @param arr {array}
     *  The array to test
     **
     * @param value {string}
     *  The value to test for
     *********
     *
     * @returns {boolean}
     */
    gnd.array.contains = function ( arr, value )
    {
        return Array.prototype.indexOf.call( arr, value ) != -1;
    };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Does an array contain a value
     *
     * @params
     *********
     * @param arr {Array}
     *  The array to test
     **
     * @param value {string}
     *  The value to test for
     *********
     *
     * @returns void
     */
    gnd.array.insert = function ( arr, value )
    {
        if ( !gnd.array.contains( arr, value ) ) {
            arr.push( value );
        }
    };