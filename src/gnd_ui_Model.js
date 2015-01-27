/**=================================================================================**\
 *
 *  @author                             VGND Team
 *  @desc                               gnd Library UI Model
 *
 *  @Table_of_Contents
 *
 *  @property                           gnd.ui.Model
 *      @property                           gnd.ui.Model.sID
 *      @property                           gnd.ui.Model.idAttribute
 *      @property                           gnd.ui.Model.attributes
 *      @property                           gnd.ui.Model.changed
 *      @property                           gnd.ui.Model._prevAttributes
 *      @property                           gnd.ui.Model.defaults
 *      @property                           gnd.ui.Model.__options
 *      @property                           gnd.ui.Model.init()
 *      @property                           gnd.ui.Model.toJSON()
 *      @property                           gnd.ui.Model.get()
 *      @property                           gnd.ui.Model.set()
 *      @property                           gnd.ui.Model.has()
 *      @property                           gnd.ui.Model.hasChanged()
 *      @property                           gnd.ui.Model.getChangedAttributes()
 *      @property                           gnd.ui.Model.getPrevious()
 *      @property                           gnd.ui.Model.getPreviousAttributes()
 *      @property                           gnd.ui.Model.__setAttributes()
 *      @property                           gnd.ui.Model.extend()
 *
\**=================================================================================**/

/**
 * @class
 *
 * The model for a ui component
 *
 * @params
 *********
 * @param attributes {object}
 *  The attributes for this model
 **
 * @param [options] {object}
 *  Any custom options for this model
 *********
 *
 * @extends gnd.ui.Topics
 * @extends gnd.ui.Helpers
 *
 * @returns void
 */
gnd.ui.Model = function ( attributes, options )
{
    // Set options
    this.__setOptions( options );

    // Set the model's attributes
    this.__setAttributes.apply( this, arguments );

    // Initialize Model
    this.init.apply( this, arguments );
};

    /**
     * @namespace
     *
     * The Model ID
     *
     * @type {string}
     */
    gnd.ui.Model.prototype.sID = '';

    /**
     * @namespace
     *
     * The attributes id index
     *
     * @type {string}
     */
    gnd.ui.Model.prototype.idAttribute = 'id';

    /**
     * @namespace
     *
     * Model's attributes
     *
     * @type {object}
     */
    gnd.ui.Model.prototype.attributes = {};

    /**
     * @namespace
     *
     * Model's changed attributes
     *
     * @type {object}
     */
    gnd.ui.Model.prototype.changed = {};

    /**
     * @namespace
     *
     * Model's previous attributes
     *
     * @type {object}
     */
    gnd.ui.Model.prototype._prevAttributes = {};

    /**
     * @namespace
     *
     * Model's default attributes
     *
     * @type {object}
     */
    gnd.ui.Model.prototype.defaults = {};

    /**
     * @namespace
     *
     * The accepted options for the model
     *
     * @type {array}
     */
    gnd.ui.Model.prototype.__options = [
            'sID'
        ,   'defaults'
        ,   'idAttribute'
    ];
    
    /**
     * @method
     *
     * Initialize Model
     *
     * @params
     *********
     *
     * @returns {object}
     *  The model
     */
    gnd.ui.Model.prototype.init = function ()
    {
        // Overwrite this function for custom initialization of Model

        // Return the model
        return this;
    };

    /**
     * @method
     *
     * Return a copy of the model data
     *
     * @params
     *********
     *
     * @returns {object}
     *  The model's attributes
     */
    gnd.ui.Model.prototype.toJSON = function ()
    {
        // Return the model's attributes (data)
        return gnd.utils.cloneObject( this.attributes );
    };

    /**
     * @method
     *
     * Return a requested attribute value
     *
     * @params
     *********
     * @param attribute {string}
     *  The attribute to return
     *********
     *
     * @returns {*}
     *  The requested attribute
     */
    gnd.ui.Model.prototype.get = function ( attribute )
    {
        // Return the requested attribute
        return this.attributes[ attribute ];
    };

    /**
     * @method
     *
     * Set an attribute value
     *
     * @params
     *********
     * @param attribute
     *  The attribute to set
     * @type    {string}
     **
     * @param attributeValue {*}
     *  The attribute value
     *********
     *
     * @returns {object}
     *  The model
     */
    gnd.ui.Model.prototype.set = function ( attribute, attributeValue )
    {
        // Set the attribute's value
        this.attributes[ attribute ] = attributeValue;

        // Return the updated Model
        return this;
    };

    /**
     * @method
     *
     * Return a requested attribute value
     *
     * @params
     *********
     * @param attribute {string}
     *  The attribute to test for
     *********
     *
     * @returns {boolean}
     */
    gnd.ui.Model.prototype.has = function ( attribute )
    {
        // If the attribute exists
        if ( attribute && this.attributes[ attribute ] ) {
            // Return true
            return true;
        }

        // Always assume failure
        return false;
    };

    /**
     * @method
     *
     * Determine whether the model/attribute changed
     *
     * @params
     *********
     * @param [attribute] {string}
     *  The attribute to test for
     *********
     *
     * @returns {boolean}
     */
    gnd.ui.Model.prototype.hasChanged = function ( attribute )
    {
        // If no attribute was passed
        if ( !attribute ) {
            // Return whether the model changed
            return gnd.is.empty.object( this.changed );
        }
        // Else ff the attribute requested changed
        else if ( this.changed[ attribute ] ) {
            // Return true
            return true;
        }

        // Always assume failure
        return false;
    };

    /**
     * @method
     *
     * Return the changed attributes
     *
     * @params
     *********
     *
     * @returns {object}
     *  The model's changed attributes
     */
    gnd.ui.Model.prototype.getChangedAttributes = function ()
    {
        // Return the changed attributes
        return gnd.utils.cloneObject( this.changed );
    };

    /**
     * @method
     *
     * Return the requested previous attribute
     *
     * @params
     *********
     * @param attribute {object}
     *  The attribute to test for
     *********
     *
     * @returns {object}
     *  The model's previous attributes
     */
    gnd.ui.Model.prototype.getPrevious = function ( attribute )
    {
        // Return the requested attribute's previous value
        return this._prevAttributes[ attribute ];
    };

    /**
     * @method
     *
     * Return the previous attributes
     *
     * @params
     *********
     *
     * @returns {object}
     *  The model's attributes
     */
    gnd.ui.Model.prototype.getPreviousAttributes = function ()
    {
        // Return the previous attributes
        return gnd.utils.cloneObject( this._prevAttributes );
    };

    /**
     * @method
     *
     * Set Model attributes
     *
     * @params
     *********
     * @param attributes {object}
     *  Attributes passed for the model
     *********
     *
     * @returns {object}
     *  The model
     */
    gnd.ui.Model.prototype.__setAttributes = function ( attributes )
    {
        // Are the defaults a valid object?
        this.defaults = gnd.utils.validateObject( this.defaults );

        // Are the attributes a valid object?
        attributes = gnd.utils.validateObject( attributes );

        // Extend the model attributes with incoming attributes and defaults
        this.attributes = gnd.utils.extend(
            // Default attributes
            this.defaults
            // Incoming attributes to overwrite all
        ,   attributes
        );

        // Return the model
        return this;
    };

    // Extend Collection prototype
    gnd.extend(
        gnd.ui.Model.prototype
    ,   gnd.ui.baseExtend
    );

    /**
     * @method
     *
     * @extends gnd.ui.extend
     */
    gnd.ui.Model.extend = (function()
    {
        // Return gnd.ui.extend
        return gnd.ui.extend
    })();