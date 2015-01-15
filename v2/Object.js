/**********************************************************************************************************************\
 *
 *  @author                             VGND Team
 *  @desc                               GND Library Object Extensions
 *
 *  @Table_of_Contents
 *
 *  @property                           Object.validate()
 *  @property                           Object.clone()
 *  @property                           Object.each()
 *  @property                           Object.extend()
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
     *  Validate a given object
     *
     * @param toTest {object}
     *  The object to validate
     *
     * @return {object}
     **/
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
          , 'validate' : {
                value : function ()
                {
                    return Object.validate( this );
                }
            }
        }
    );
})();