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
    Cache.get = function ( key )
    {
        return JSON.parse( localStorage.getItem( key ) );
    };
    Cache.set = function ( key, value )
    {
        return localStorage.setItem( key, JSON.stringify( value ) );
    };
    Cache.len = function ()
    {
        return localStorage.length;
    };
    Cache.del = function ( key )
    {
        return localStorage.removeItem( key );
    };
    Cache.clear = function ()
    {
        return localStorage.clear();
    };
})();