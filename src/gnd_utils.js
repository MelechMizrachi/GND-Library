/**=================================================================================**\
 *
 *  @author                             VGND Team
 *  @desc                               gnd Library Utilities
 *
 *  @Table_of_Contents
 *
 *  @property                           gnd.utils
 *      @property                           gnd.utils.extend()
 *      @property                           gnd.utils.each()
 *      @property                           gnd.utils.merge()
 *      @property                           gnd.utils.cloneObject()
 *      @property                           gnd.utils.validateObject()
 *
\**=================================================================================**/

/**
 * @class
 */
gnd.utils = {};

    /**
     * @method
     *
     * @borrows gnd.extend
     */
    gnd.utils.extend = gnd.extend;

    /**
     * @method
     *
     * Iterate through an object || array
     *
     * @params
     *********
     * @param items {object|array}
     *  The items to loop through
     **
     * @param callback {function}
     *  The callback for each item
     *********
     *
     * @returns void
     */
    gnd.utils.each = function ( items, callback )
    {
        // Sanity checks
        if ( ( gnd.is.object( items ) || !gnd.is.empty.array( items ) ) && gnd.is.func( callback ) ) {
            var index;

            // Iterate through the items
            for ( index in items ) {
                // Check that items has this index as a property
                if ( Object.prototype.hasOwnProperty.call( items, index ) ) {
                    // Call the callback function
                    callback(
                        // @type string
                        // @param index
                        index
                        // @type object/array/string/etc
                        // @param items
                    ,   items[ index ]
                    );
                }
            }
        }
    };

    /**
     * @method
     *
     * Merge two objects
     *
     * @params
     *********
     * @param mergeInto {object}
     *  The object to merge into
     * @param mergeThis {object}
     *  The object to merge into
     *********
     *
     * @returns {object}
     */
    gnd.utils.merge = function ( mergeInto, mergeThis )
    {
        // TODO: Work on this
        return mergeInto && mergeThis;
    };

    /**
     * @method
     *
     * Clone a given object
     *
     * @params
     *********
     * @param toClone {object}
     *  The object to clone
     *********
     *
     * @returns {object}
     */
    gnd.utils.cloneObject = function ( toClone )
    {
        // Is the object valid?
        if ( !gnd.is.empty.object( toClone ) ) {
            // It is a valid object so return the cloned object
            return gnd.utils.extend(
                {}
            ,   toClone
            );
        }

        // Always assume object is invalid so return new empty object
        return {};
    };

    /**
     * @method
     *
     * Validate a given object
     *
     * @params
     *********
     * @param toTest {object}
     *  The object to validate
     *********
     *
     * @returns {object}
     */
    gnd.utils.validateObject = function ( toTest )
    {
        // Is the object valid?
        if ( !gnd.is.empty.object( toTest ) ) {
            // It is a valid object so return it
            return toTest;
        }

        // Always assume object is invalid so return new empty object
        return {};
    };