/**********************************************************************************************************************\
 *
 *  @author                             VGND Team
 *  @desc                               GND Library Object Extensions
 *
\**********************************************************************************************************************/

(function ()
{
    /**
     * @method
     *
     * Validate a given object
     *
     * @param toTest {object}
     *  The object to validate
     *
     * @returns {object}
     */
    Object.validate = function ( toTest )
    {
        // Is the object valid?
        if ( !is.empty.object( toTest ) ) {
            // It is a valid object so return it
            return toTest;
        }

        // Always assume object is invalid so return new empty object
        return {};
    };

    /**
     * @method
     *
     * Get the first property in a given object
     *
     * @param obj {object|array}
     *  The object
     *
     * @returns {*}
     */
    Object.first = function ( obj )
    {
        for ( var prop in obj ) {
            if ( obj.hasOwnProperty( prop ) ) {
                return obj[ prop ];
            }
        }
    };

    // Define prototype properties
    Object.defineProperties(
        Object
        , {
            'clone' : {
                value : Utils.clone
            }
            , 'each' : {
                value : Utils.each
            }
            , 'extend' : {
                value : Utils.extend
            }
        }
    );

    // Define prototype properties
    Object.defineProperties(
        Object.prototype
        , {
            'clone' : {
                value : function ()
                {
                    return Object.clone( this );
                }
            }
            , 'each' : {
                value : function ( callback )
                {
                    return Object.each( this, callback );
                }
            }
            , 'extend' : {
                value : function ( source )
                {
                    return Object.extend( this, source );
                }
            }
            , 'first' : {
                value : function ()
                {
                    return Object.first( this );
                }
            }
            , 'validate' : {
                value : function ()
                {
                    return Object.validate( this );
                }
            }
        }
    );
})();