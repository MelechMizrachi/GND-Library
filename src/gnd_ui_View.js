/**=================================================================================**\
 *
 *  @author                             VGND Team
 *  @desc                               gnd Library UI View
 *
 *  @Table_of_Contents
 *
 *  @property                           gnd.ui.View
 *      @property                           gnd.ui.View.sID
 *      @property                           gnd.ui.View.elem
 *      @property                           gnd.ui.View.tagName
 *      @property                           gnd.ui.View.className
 *      @property                           gnd.ui.View.template
 *      @property                           gnd.ui.View.attributes
 *      @property                           gnd.ui.View.events
 *      @property                           gnd.ui.View.__options
 *      @property                           gnd.ui.View.Model
 *      @property                           gnd.ui.View.Collection
 *      @property                           gnd.ui.View.init()
 *      @property                           gnd.ui.View.$()
 *      @property                           gnd.ui.View.render()
 *      @property                           gnd.ui.View.setElement()
 *      @property                           gnd.ui.View.remove()
 *      @property                           gnd.ui.View.handleEvent()
 *      @property                           gnd.ui.View.triggerEvent()
 *      @property                           gnd.ui.View.handleEvents()
 *      @property                           gnd.ui.View.undelegateEvents()
 *      @property                           gnd.ui.View.__ensureElement()
 *      @property                           gnd.ui.View.extend()
 *
\**=================================================================================**/

/**
 * @class
 *
 * @author
 *  MelechMizrachi
 *
 * @desc
 *  The view for a ui component/element/node
 *
 * @params
 *********
 * @param [options] {object}
 *  Any custom options for this view
 *********
 *
 * @extends gnd.ui.Topics
 * @extends gnd.ui.Helpers
 *
 * @return void
 **/
gnd.ui.View = function ( options )
{
    // Set options
    this.__setOptions.apply( this, arguments );

    // Make sure we have a real element
    this.__ensureElement();

    // Initialize View
    this.init.apply( this, arguments );

    console.log( this.events );

    // Create Events
    this.handleEvents( this.events );
};

    /**
     * @namespace
     *
     * @desc
     *  The View ID
     *
     * @type {string}
     **/
    gnd.ui.View.prototype.sID = '';

    /**
     * @namespace
     *
     * @desc
     *  The View ID
     *
     * @type {gnd.$}
     **/
    gnd.ui.View.prototype.elem = '';

    /**
     * @namespace
     *
     * @desc
     *  The element tag name
     *
     * @type {string}
     **/
    gnd.ui.View.prototype.tagName = 'div';

    /**
     * @namespace
     *
     * @desc
     *  The element class name
     *
     * @type {string}
     **/
    gnd.ui.View.prototype.className = '';

    /**
     * @namespace
     *
     * @desc
     *  The template to use
     *
     * @type {string}
     **/
    gnd.ui.View.prototype.template = '';

    /**
     * @namespace
     *
     * @desc
     *  The element attributes
     *
     * @type {object}
     **/
    gnd.ui.View.prototype.attributes = {};

    /**
     * @namespace
     *
     * @desc
     *  The events for this view
     *
     * @type {object}
     **/
    gnd.ui.View.prototype.events = {};

    /**
     * @namespace
     *
     * @desc
     *  The accepted options for the view
     *
     * @type {array}
     **/
    gnd.ui.View.prototype.__options = [
            'Model'
        ,   'Collection'
        ,   'elem'
        ,   'sID'
        ,   'attributes'
        ,   'className'
        ,   'tagName'
        ,   'events'
    ];

    /**
     * @namespace
     *
     * @desc
     *  What to split event strings with
     *
     * @type {string}
     **/
    gnd.ui.View.prototype.EVENT_SPLIT = ' ';

    /**
     * @namespace
     * @extends gnd.ui.Model
     *
     * @desc
     *  The view model
     **/
    gnd.ui.View.prototype.Model = gnd.ui.Model;

    /**
     * @namespace
     * @extends gnd.ui.Collection
     *
     * @desc
     *  The view collection
     **/
    gnd.ui.View.prototype.Collection = gnd.ui.Collection;

    /**
     * @method
     *
     * @author
     *  MelechMizrachi
     *
     * @desc
     *  Initialize View
     *
     * @params
     *********
     *
     * @return {object}
     *  The view
     **/
    gnd.ui.View.prototype.init = function ()
    {
        // Overwrite this function for custom initialization of View

        // Return the view
        return this;
    };

    /**
     * @method
     *
     * @author
     *  MelechMizrachi
     *
     * @desc
     *  Return a dom element under elem
     *
     * @params
     *********
     * @param [selector] {string}
     *  The selector to use to find the elem's child
     *********
     *
     * @return {object}
     *  The child of elem
     **/
    gnd.ui.View.prototype.$ = function ( selector )
    {
        // Make sure the selector is a valid string
        if ( !selector ) {
            // Otherwise simply return elem
            return this.elem;
        }

        // Return the sub element
        return this.elem.find( selector );
    };

    /**
     * @method
     *
     * @author
     *  MelechMizrachi
     *
     * @desc
     *  Render View
     *
     * @params
     *********
     *
     * @return {object}
     *  The view
     **/
    gnd.ui.View.prototype.render = function ()
    {
        // Render the view
        this.elem.html(  );

        // Return the view
        return this;
    };

    /**
     * @method
     *
     * @author
     *  MelechMizrachi
     *
     * @desc
     *  Set the View element
     *
     * @params
     *********
     * @param element {object|string}
     *  The element to set
     **
     * @param [delegateEvents] {boolean}
     *  Whether to delegate events
     *  (Default) true
     *********
     *
     * @return {object}
     *  The view
     **/
    gnd.ui.View.prototype.setElement = function ( element, delegateEvents )
    {
        // If an element is already set
        if ( this.elem instanceof gnd.$ ) {
            // Undelegate all event handles for the old element
            this.undelegateEvents();
            // Set the elem
            this.elem = element;
        } else {
            // Set the elem
            this.elem = gnd.$( element );
        }

        // If the optional boolean is not false
        if ( delegateEvents !== false ) {
            // Delegate events for this view
            this.handleEvents( this.events );
        }

        // Return the view
        return this;
    };

    /**
     * @method
     *
     * @author
     *  MelechMizrachi
     *
     * @desc
     *  Remove View - Remove element from DOM
     *
     * @params
     *********
     *
     * @return {object}
     *  The view
     **/
    gnd.ui.View.prototype.remove = function ()
    {
        // Undelegate all event handlers
        this.undelegateEvents();

        // Remove the element from the dom
        this.elem.remove();

        // Return the view
        return this;
    };

    /**
     * @method
     *
     * @author
     *  MelechMizrachi
     *
     * @desc
     *  Delegate/Undelegate an event handler
     *
     * @params
     *********
     * @param event {string}
     *  The event string
     **
     * @param callbackMethod {function|string}
     *  The callback method
     **
     * @param [scope] {object}
     *  The callback scope
     **
     * @param [removeEvent] {boolean}
     *  Whether to delete the event or not
     *********
     *
     * @return {object}
     *  The component
     **/
    gnd.ui.View.prototype.handleEvent = function ( event, callbackMethod, scope, removeEvent )
    {
        // Sanity checks
        if ( !event || !callbackMethod ) {
            gnd.log.error( 'event or callback method not specified', event, callbackMethod );
            // The parameters aren't correct
            return false;
        }

        var
                eventSplit              = event.split( this.EVENT_SPLIT )
            ,   eventName               = eventSplit[ 0 ]
            ,   selector                = eventSplit[ 1 ]
            ,   typeOfEvent             = ( removeEvent === true )
                                            ? 'off'
                                            : 'on'
            ,   self                    = this
            ,   elem                    = self.elem
        ;

        // If no scope was provided
        if ( !scope || !scope[ callbackMethod ] ) {
            // Set scope to this
            scope = self;
        }

        // If the callbackMethod is a string
        if ( gnd.is.string( callbackMethod ) ) {
            // Check that this function exists in this view
            if ( !gnd.is.func( scope[ callbackMethod ] ) ) {
                gnd.log.error( 'callback method is not a function', scope[ callbackMethod ] );
                // If not return false, get out of here
                return false;
            }

            // Set the callback method to the function
            callbackMethod              = scope[ callbackMethod ].bind( scope );
        }

        // Create/Delete the event
        elem[ typeOfEvent ](
            eventName
        ,   selector
        ,   callbackMethod
        );

        // Return the view
        return self;
    };

    /**
     * @method
     *
     * @author
     *  MelechMizrachi
     *
     * @desc
     *  Trigger an event handler
     *
     * @params
     *********
     * @param event {string}
     *  The event to trigger
     *********
     *
     * @return {object}
     *  The component
     **/
    gnd.ui.View.prototype.triggerEvent = function ( event )
    {
        // Make sure the parameter is a string
        if ( !event ) {
            // If it's not a string return false
            return false;
        }

        if ( gnd.string.contains( event, this.EVENT_SPLIT ) ) {

            var
                    eventSplit              = event.split( this.EVENT_SPLIT )
                ,   eventName               = eventSplit[0]
                ,   selector                = eventSplit[1]
            ;

            // Trigger the event
            // [this.$ does the check for this.elem or sub element]
            this.$( selector ).trigger( eventName );
        } else {
            this.elem.trigger( event );
        }

        // Return the view
        return this;
    };

    /**
     * @method
     *
     * @author
     *  MelechMizrachi
     *
     * @desc
     *  Delegate/Undelegate event handlers given an object of events
     *
     * @params
     *********
     * @param events {object}
     *  The events to create
     **
     * @param [removeEvent] {string}
     *  Whether to add/remove the event
     *********
     *
     * @return {object}
     *  The view
     **/
    gnd.ui.View.prototype.handleEvents = function ( events, removeEvent )
    {
        // Determine validity of events object
        if ( !events ) {
            gnd.log.error( 'no events provided', events );
            // Events object is invalid
            return false;
        }

        // Loop through events object
        for ( var event in events ) {
            // If this is a property of the object
            if ( events.hasOwnProperty( event ) ) {
                // Create event
                this.handleEvent(
                    // The event string
                    event
                    // The callback method
                ,   events[ event ]
                    // Whether to add/remove the event
                ,   removeEvent
                );
            }
        }

        // Return the view
        return this;
    };

    /**
     * @method
     *
     * @author
     *  MelechMizrachi
     *
     * @desc
     *  Undelegate all event handlers
     *
     * @params
     *********
     *
     * @return {object}
     **/
    gnd.ui.View.prototype.undelegateEvents = function ()
    {
        // Remove all events attached to this element
        this.elem.off( '.viewEvents' + this.sID );

        // Return the view
        return this;
    };

    /**
     * @method
     *
     * @author
     *  MelechMizrachi
     *
     * @desc
     *  Ensure the view element exists
     *
     * @params
     *********
     *
     * @return void
     **/
    gnd.ui.View.prototype.__ensureElement = function ()
    {
        // Check if element is an element exists
        if ( !this.elem ) {
            // Set the elem to document
            this.elem = gnd.$( document );
        }

        // Set the element
        this.setElement( this.elem, false );
    };

    // Extend View prototype
    gnd.extend(
        gnd.ui.View.prototype
    ,   gnd.ui.baseExtend
    );

    /**
     * @method
     *
     * @extends gnd.ui.extend
     **/
    gnd.ui.View.extend = (function()
    {
        // Return gnd.ui.extend
        return gnd.ui.extend
    })();