/**********************************************************************************************************************\
 *
 *  @author                             VGND Team
 *  @desc                               GND Library Cache
 *
 *  @Table_of_Contents
 *
 *  @property                           Cache
 *  @property                           Cache.get()
 *  @property                           Cache.set()
 *  @property                           Cache.len()
 *  @property                           Cache.del()
 *  @property                           Cache.clear()
 *
\**********************************************************************************************************************/

/**
 * @class Cache
 *
 * @desc
 *  GND Library Cache Class
 */
var Cache = {};

(function ()
{
    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Get a cached item
     *
     * @param key {string}
     *  The key to retrieve
     *
     * @returns {*}
     */
    Cache.get = function ( key )
    {
        return JSON.parse( localStorage.getItem( key ) );
    };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Set a cached item
     *
     * @param key {string}
     *  The key to set
     * @param value {*}
     *  The value to set
     *
     * @returns {*}
     */
    Cache.set = function ( key, value )
    {
        return localStorage.setItem( key, JSON.stringify( value ) );
    };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Get the amount of items cached
     *
     * @returns {number}
     */
    Cache.len = function ()
    {
        return localStorage.length;
    };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Delete a cached item
     *
     * @param key {string}
     *  The key to delete
     *
     * @returns {*}
     */
    Cache.del = function ( key )
    {
        return localStorage.removeItem( key );
    };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Clear all cached items
     *
     * @returns {*}
     */
    Cache.clear = function ()
    {
        return localStorage.clear();
    };
})();