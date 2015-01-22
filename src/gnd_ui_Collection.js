/**=================================================================================**\
 *
 *  @author                             VGND Team
 *  @desc                               gnd Library UI Collection
 *
 *  @Table_of_Contents
 *
 *  @property                           gnd.ui.Collection
 *      @property                           gnd.ui.Collection.sID
 *      @property                           gnd.ui.Collection.$views
 *      @property                           gnd.ui.Collection.Views
 *      @property                           gnd.ui.Collection.viewOptions
 *      @property                           gnd.ui.Collection._indexByModel
 *      @property                           gnd.ui.Collection._indexByCollectionID
 *      @property                           gnd.ui.Collection.__options
 *      @property                           gnd.ui.Collection.View
 *      @property                           gnd.ui.Collection.init()
 *      @property                           gnd.ui.Collection.setViews()
 *      @property                           gnd.ui.Collection.addView()
 *      @property                           gnd.ui.Collection.findViewByModel()
 *      @property                           gnd.ui.Collection.findViewByModelID()
 *      @property                           gnd.ui.Collection.findViewByID()
 *      @property                           gnd.ui.Collection.getNthView()
 *      @property                           gnd.ui.Collection.getLastView()
 *      @property                           gnd.ui.Collection.getNthViewID()
 *      @property                           gnd.ui.Collection.getLastViewID()
 *      @property                           gnd.ui.Collection.getLastCollectionID()
 *      @property                           gnd.ui.Collection.extend()
 *
\**=================================================================================**/

/**
 * @class
 *
 * @author MelechMizrachi
 *
 * @desc
 *  A collection of ui components/elements/nodes
 *
 * @params
 *********
 * @param [options] {object}
 *  Any custom options for this collection
 *********
 *
 * @extends gnd.ui.Topics
 * @extends gnd.ui.Helpers
 *
 * @return void
 */
gnd.ui.Collection = function ( options )
{
    // Set options
    this.__setOptions.apply( this, arguments );

    // Initialize Collection
    this.init.apply( this, arguments );

    // Set the views to the collection
    this.setViews();
};

    /**
     * @namespace
     *
     * @desc
     *  The collection ID
     *
     * @type {string}
     */
    gnd.ui.Collection.prototype.sID = '';

    /**
     * @namespace
     *
     * @desc
     *  The selector for the DOM elements
     *
     * @type {object}
     */
    gnd.ui.Collection.prototype.$views = {};

    /**
     * @namespace
     *
     * @desc
     *  The views in this collection
     *
     * @type {object}
     */
    gnd.ui.Collection.prototype.Views = {};

    /**
     * @namespace
     *
     * @desc
     *  The options for this collections View
     *
     * @type {object}
     */
    gnd.ui.Collection.prototype.viewOptions = {};

    /**
     * @namespace
     *
     * @desc
     *  Index views by model id
     *
     * @type {object}
     */
    gnd.ui.Collection.prototype._indexByModel = {};

    /**
     * @namespace
     *
     * @desc
     *  Index views by collection id
     *
     * @type {array}
     */
    gnd.ui.Collection.prototype._indexByCollectionID = [];

    /**
     * @namespace
     *
     * @desc
     *  The accepted options for the collection
     *
     * @type {array}
     */
    gnd.ui.Collection.prototype.__options = [
            'Views'
        ,   'sID'
        ,   '$views'
        ,   'View'
        ,   'viewOptions'
    ];

    /**
     * @class
     * @extends gnd.ui.View
     *
     * @desc
     *  The View for the views in this collection
     */
    gnd.ui.Collection.prototype.View = gnd.ui.View;
    
    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Initialize collection
     *
     * @params
     *********
     *
     * @return {object}
     *  The collection
     */
    gnd.ui.Collection.prototype.init = function ()
    {
        // Overwrite this function for custom initialization of Collection

        // Return the collection
        return this;
    };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Set the views for the collection
     *
     * @params
     *********
     *
     * @return {object}
     *  The collection
     */
    gnd.ui.Collection.prototype.setViews = function ()
    {
        // Determine whether to use Views or $views
        // - Views     : Object of Views
        // - $views    : Selector to get the correct views from the DOM

        // Default views to Views
        var
                Views   = this.Views
            ,   self    = this
        ;

        // If $views is an object
        if ( !gnd.is.empty.object( this.$views ) ) {
            // Set views to $views
            Views = this.$views;
        }
        // Otherwise if $views is a string
        else if ( !gnd.is.empty.string( this.$views ) ) {
            // Set views using the given selector
            Views = gnd.ui.$( this.$views );
        }

        // Validate views
        if ( !Views ) {
            // Something is wrong; no views or container were specified
            return false;
        }

        // Iterate through each view
        Views.each(
//                Views,
           function ( index, elem )
            {
                // Add the view to the collection
                self.addView( elem );
            }
        );

        // Return the collection
        return this;
    };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Add a view to the collection
     *
     * @params
     *********
     * @param view {object}
     *  The view to add to the collection
     *********
     *
     * @return {object}
     *  The collection
     */
    gnd.ui.Collection.prototype.addView = function ( view )
    {
        // If this is not a valid view
        if ( !view ) {
            // Return false
            return false;
        }

        // If this element is an element
        if ( gnd.is.domElement( view ) ) {
            // Set view as the jQuery object
            view = gnd.ui.$( view );

            // Set the base view options to a new var
            var viewOptions    = this.viewOptions;

            // Set the view sID
            viewOptions.sID    = view[ 0 ].id;
            // Set the view element
            viewOptions.elem  = view;

            // Create the view
            view = new this.View( viewOptions );

            if ( !view.sID ) {
                view.sID = 'view' + view.Model.get( 'id' );
            }
        }

        // Add the view to this collection's views
        view = this.Views[ view.sID ] = view;

        // Set a custom collection ID
        view.collectionID = this.getLastCollectionID() + 1;

        // Set the DOM position of this view
        view.domPosition = view.collectionID + 1;

        // Index view by collection ID
        this._indexByCollectionID[ view.collectionID ]      =
        // Index view by Model sID
        this._indexByModel[ view.Model.sID ]                = view.sID;

        // Return the collection
        return this;
    };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Find a view in this collection by its model
     *
     * @params
     *********
     * @param model {object}
     *  The model to find by
     *********
     *
     * @return {object}
     *  The requested view
     */
    gnd.ui.Collection.prototype.findViewByModel = function ( model )
    {
        // If this is not a valid model
        if ( !model ) {
            // Return false
            return false;
        }

        // Return the view
        return this.findViewByModelID( model.sID );
    };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Find a view in this collection by its model id
     *
     * @params
     *********
     * @param sID {string}
     *  The model id to find by
     *********
     *
     * @return {object}
     *  The requested View
     */
    gnd.ui.Collection.prototype.findViewByModelID = function ( sID )
    {
        // If the id is not valid
        if ( !sID ) {
            // Return false
            return false;
        }

        // Find the view's id
        sID = this._indexByModel[ sID ];

        // Return the view
        return this.findViewByID( sID );
    };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Find a view in this collection by its id
     *
     * @params
     *********
     * @param sID {string}
     *  The id to find by
     *********
     *
     * @return {object}
     *  The requested view
     */
    gnd.ui.Collection.prototype.findViewByID = function ( sID )
    {
        // If the id is not valid
        if ( !sID ) {
            // Return false
            return false;
        }

        // Return the view
        return this.Views[ sID ];
    };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Get the nth view in the collection
     *
     * @params
     *********
     * @param nthItem {number}
     *  Int of the nth view to get
     *********
     *
     * @return {object}
     *  The requested view
     */
    gnd.ui.Collection.prototype.getNthView = function ( nthItem )
    {
        // If this is not a valid number
        if ( !gnd.is.numeric( nthItem ) ) {
            // Return false
            return false;
        }

        // Return the view
        return this.Views[ this.getNthViewID( nthItem ) ];
    };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Get the last view in the collection
     *
     * @params
     *********
     *
     * @return {object}
     *  The requested view
     */
    gnd.ui.Collection.prototype.getLastView = function ()
    {
        // Get the last view's sID
        var collectionID = this.getLastViewID();

        // Return the view
        return this.Views[ collectionID ];
    };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Get the nth view's id in the collection
     *
     * @params
     *********
     * @param nthItem {number}
     *  Int of the nth view to get
     *********
     *
     * @return {boolean|string}
     *  The view id
     */
    gnd.ui.Collection.prototype.getNthViewID = function ( nthItem )
    {
        // If this is not a valid number
        if ( !gnd.is.numeric( nthItem ) ) {
            // Return false
            return false;
        }

        // Return the view's id
        return this._indexByCollectionID[ nthItem ];
    };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Get the last view's id in the collection
     *
     * @params
     *********
     *
     * @return {string}
     *  The view id
     */
    gnd.ui.Collection.prototype.getLastViewID = function ()
    {
        // Return the view's id
        return this._indexByCollectionID[ this.getLastCollectionID() ];
    };

    /**
     * @method
     *
     * @author MelechMizrachi
     *
     * @desc
     *  Get the nth view's collection id in the collection
     *
     * @params
     *********
     *
     * @return {number}
     *  The collection id
     */
    gnd.ui.Collection.prototype.getLastCollectionID = function ()
    {
        // Return the last collection id (IE length of index by collection)
        return this._indexByCollectionID.length - 1;
    };

    // Extend Collection prototype
    gnd.extend(
        gnd.ui.Collection.prototype
    ,   gnd.ui.baseExtend
    );

    /**
     * @method
     * @extends gnd.ui.extend
     */
    gnd.ui.Collection.extend = (function()
    {
        // Return gnd.ui.extend
        return gnd.ui.extend
    })();