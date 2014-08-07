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
 **/
gnd.utils = {};

    /**
     * @method
     *
     * @author
     *  MelechMizrachi
     *
     * @borrows gnd.extend
     **/
    gnd.utils.extend = gnd.extend;

    /**
     * @method
     *
     * @author
     *  MelechMizrachi
     *
     * @desc
     *  Iterate through an object || array
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
     * @return void
     **/
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
     * @author
     *  MelechMizrachi
     *
     * @desc
     *  Merge two objects
     *
     * @params
     *********
     * @param mergeInto {object}
     *  The object to merge into
     * @param mergeThis {object}
     *  The object to merge into
     *********
     *
     * @return {object}
     **/
    gnd.utils.merge = function ( mergeInto, mergeThis )
    {
        // TODO: Work on this
        return mergeInto && mergeThis;
    };

    /**
     * @method
     *
     * @author
     *  MelechMizrachi
     *
     * @desc
     *  Clone a given object
     *
     * @params
     *********
     * @param toClone {object}
     *  The object to clone
     *********
     *
     * @return {object}
     **/
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
     * @author
     *  MelechMizrachi
     *
     * @desc
     *  Validate a given object
     *
     * @params
     *********
     * @param toTest {object}
     *  The object to validate
     *********
     *
     * @return {object}
     **/
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