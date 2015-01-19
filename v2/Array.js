/**********************************************************************************************************************\
 *
 *  @author                             VGND Team
 *  @desc                               GND Library Array Extensions
 *
 *  @Table_of_Contents
 *
 *  @property                           Array.clone()
 *  @property                           Array.contains()
 *  @property                           Array.insert()
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
     *  Clone a given array
     *
     * @param toClone {array}
     *  The array to clone
     *
     * @return {array}
     **/
    Array.clone = function ( toClone )
    {
        return Utils.clone( toClone, true );
    };

    /**
     * @method
     *
     * @author
     *  MelechMizrachi
     *
     * @desc
     *  Does an array contain a value
     *
     * @param arr {array}
     *  The array to test
     * @param value {string}
     *  The value to test for
     *
     * @return {boolean}
     **/
    Array.contains = function ( arr, value )
    {
        return Array.prototype.indexOf.call( arr, value ) != -1;
    };

    /**
     * @method
     *
     * @author
     *  MelechMizrachi
     *
     * @desc
     *  Does an array contain a value
     *
     * @param arr {Array}
     *  The array to test
     * @param value {string}
     *  The value to test for
     *
     * @return void
     **/
    Array.insert = function ( arr, value )
    {
        if ( !Array.contains( arr, value ) ) {
            arr.push( value );
        }
    };

    Object.defineProperties(
        Array.prototype
      , {
            'clone' : {
                value : function ()
                {
                    return Array.clone( this );
                }
            }
          , 'contains' : {
                value : function ( value )
                {
                    return Array.contains( this, value );
                }
            }
          , 'insert' : {
                value : function ( value )
                {
                    return Array.insert( this, value );
                }
            }
        }
    );
})();