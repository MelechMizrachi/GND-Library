/**********************************************************************************************************************\
 *
 *  @author                             VGND Team
 *  @desc                               GND Library Templates for view events, topics, and models
 *
 *  @Table_of_Contents
 *
 *  @property                           Template
 *  @property                           Template.Init()
 *  @property                           Template.Init.prototype
 *  @property                           Template.prototype.constructor
 *  @property                           Template.prototype.render
 *  @property                           Template.prototype.sID
 *  @property                           Template.prototype.elem
 *  @property                           Template.prototype.tagName
 *  @property                           Template.prototype.className
 *  @property                           Template.prototype.template
 *  @property                           Template.prototype.attributes
 *  @property                           Template.prototype.events
 *  @property                           Template.prototype.__options
 *  @property                           Template.prototype.EVENT_SPLIT
 *  @property                           Template.prototype.initialize()
 *  @property                           Template.prototype.Dom()
 *  @property                           Template.prototype.setElement()
 *  @property                           Template.prototype.remove()
 *  @property                           Template.prototype.handleEvent()
 *  @property                           Template.prototype.triggerEvent()
 *  @property                           Template.prototype.handleEvents()
 *  @property                           Template.prototype.undelegateEvents()
 *  @property                           Template.prototype.__ensureElement()
 *  @property                           Template.prototype.__setOptions()
 *
\**********************************************************************************************************************/

/**
 * @class Template
 *
 * @desc
 *  GND Library Template Class
 *
 * @param objToMerge {object}
 *  The object to merge
 *
 * @return {object}
 *  The extended object
 */
var Template = function ( objToMerge )
{
    return new Template.Init( objToMerge );
};

(function TemplateMethods ()
{
    /**
     * @constructor
     *
     * @author
     *  MelechMizrachi
     *
     * @desc
     *  Template initializer
     *
     * @param objToMerge {object}
     *  The object to merge
     *
     * @return {Template}
     *  The Template object
     **/
    Template.Init = function ( objToMerge )
    {
        return this.extend( objToMerge );
    };

    /**
     * @author
     *  MelechMizrachi
     *
     * @desc
     *  Set the Init prototype as Template's prototype
     *
     * @type {Object|Function}
     */
    Template.Init.prototype = Template.prototype;

    /**
     * @constructor
     **/
    Template.prototype.constructor = Template;
})();

(function TemplatePrototype ()
{
    /**
     * @method
     *
     * @author
     *  MelechMizrachi
     *
     * @desc
     *  Render a template for a ui component/element/node
     *
     * @param [options] {object}
     *  Any custom options for this view
     *
     * @return void
     **/
    Template.prototype.render = function ( options )
    {
        // Set options
        this.__setOptions.apply( this, arguments );

        // Make sure we have a real element
        this.__ensureElement();

        // Initialize View
        this.initialize.apply( this, arguments );

        // Create Events
        this.handleEvents( this.events );
    };

    /**
     * @namespace
     *
     * @desc
     *  The Template ID
     *
     * @type {string}
     **/
    Template.prototype.sID = '';

    /**
     * @namespace
     *
     * @desc
     *  The Template ID
     *
     * @type {Dom}
     **/
    Template.prototype.elem = '';

    /**
     * @namespace
     *
     * @desc
     *  The element tag name
     *
     * @type {string}
     **/
    Template.prototype.tagName = 'div';

    /**
     * @namespace
     *
     * @desc
     *  The element class name
     *
     * @type {string}
     **/
    Template.prototype.className = '';

    /**
     * @namespace
     *
     * @desc
     *  The template to use
     *
     * @type {string}
     **/
    Template.prototype.template = '';

    /**
     * @namespace
     *
     * @desc
     *  The element attributes
     *
     * @type {object}
     **/
    Template.prototype.attributes = {};

    /**
     * @namespace
     *
     * @desc
     *  The events for this template
     *
     * @type {object}
     **/
    Template.prototype.events = {};

    /**
     * @namespace
     *
     * @desc
     *  The accepted options for the template
     *
     * @type {array}
     **/
    Template.prototype.__options = [
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
    Template.prototype.EVENT_SPLIT = ' ';

    /**
     * @method
     *
     * @author
     *  MelechMizrachi
     *
     * @desc
     *  Initialize Template
     *
     * @return {Template}
     **/
    Template.prototype.initialize = function ()
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
     * @param [selector] {string}
     *  The selector to use to find the elem's child
     *
     * @return {Dom}
     *  The child of elem
     **/
    Template.prototype.Dom = function ( selector )
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
     *  Set the View element
     *
     * @param element {object|string}
     *  The element to set
     * @param [delegateEvents] {boolean}
     *  Whether to delegate events
     *  (Default) true
     *
     * @return {object}
     *  The view
     **/
    Template.prototype.setElement = function ( element, delegateEvents )
    {
        // If an element is already set
        if ( this.elem instanceof Dom ) {
            // Undelegate all event handles for the old element
            this.undelegateEvents();
            // Set the elem
            this.elem = element;
        } else {
            // Set the elem
            this.elem = Dom( element );
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
     * @return {object}
     *  The view
     **/
    Template.prototype.remove = function ()
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
     * @param event {string}
     *  The event string
     * @param callbackMethod {function|string}
     *  The callback method
     * @param [scope] {object}
     *  The callback scope
     * @param [removeEvent] {boolean}
     *  Whether to delete the event or not
     *
     * @return {object}
     *  The component
     **/
    Template.prototype.handleEvent = function ( event, callbackMethod, scope, removeEvent )
    {
        // Sanity checks
        if ( !event || !callbackMethod ) {
            Logger.error( 'event or callback method not specified', event, callbackMethod );
            // The parameters aren't correct
            return false;
        }

        var
            eventSplit      = event.split( this.EVENT_SPLIT )
          , eventName       = eventSplit[ 0 ]
          , selector        = eventSplit[ 1 ]
          , typeOfEvent     = ( removeEvent === true )
                              ? 'off'
                              : 'on'
          , self            = this
          , elem            = self.elem
        ;

        // If no scope was provided
        if ( !scope || !scope[ callbackMethod ] ) {
            // Set scope to this
            scope = self;
        }

        // If the callbackMethod is a string
        if ( is.string( callbackMethod ) ) {
            // Check that this function exists in this view
            if ( !is.func( scope[ callbackMethod ] ) ) {
                Logger.error( 'callback method is not a function', scope[ callbackMethod ] );
                // If not return false, get out of here
                return false;
            }

            // Set the callback method to the function
            callbackMethod = scope[ callbackMethod ].bind( scope );
        }

        // Create/Delete the event
        elem[ typeOfEvent ](
            eventName
          , selector
          , callbackMethod
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
     * @param event {string}
     *  The event to trigger
     *
     * @return {object}
     *  The component
     **/
    Template.prototype.triggerEvent = function ( event )
    {
        // Make sure the parameter is a string
        if ( !event ) {
            // If it's not a string return false
            return false;
        }

        if ( String.contains( event, this.EVENT_SPLIT ) ) {

            var
                eventSplit  = event.split( this.EVENT_SPLIT )
              , eventName   = eventSplit[0]
              , selector    = eventSplit[1]
            ;

            // Trigger the event
            // [this.Dom does the check for this.elem or sub element]
            this.Dom( selector ).trigger( eventName );
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
     * @param events {object}
     *  The events to create
     * @param [removeEvent] {string}
     *  Whether to add/remove the event
     *
     * @return {Template}
     *  The template
     **/
    Template.prototype.handleEvents = function ( events, removeEvent )
    {
        // Determine validity of events object
        if ( !events ) {
            Logger.error( 'No events provided', events );
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
                  , events[ event ]
                    // Whether to add/remove the event
                  , removeEvent
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
     * @return {object}
     **/
    Template.prototype.undelegateEvents = function ()
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
     * @return void
     **/
    Template.prototype.__ensureElement = function ()
    {
        // Check if element is an element exists
        if ( !this.elem ) {
            // Set the elem to document
            this.elem = Dom( document );
        }

        // Set the element
        this.setElement( this.elem, false );
    };

    /**
     * @method
     *
     * @author
     *  MelechMizrachi
     *
     * @desc
     *  Set component options
     *
     * @param options {object}
     *  Options passed to the Template
     *
     * @return {Template}
     **/
    Template.prototype.__setOptions = function ( options )
    {
        // Determine validity of options object
        if ( is.object.empty( options ) ) {
            // Options object is invalid
            return false;
        }

        var
            newOptions = {}
          , name
        ;

        // Iterate through objects
        for ( name in options ) {
            // Check if this option is one that is accepted
            if ( options.hasOwnProperty( name ) && this.__options.contains( name ) ) {
                // If it's one of the accepted set it to the new options object
                newOptions[ name ] = options[ name ];
            }
        }

        // Extend the component with the accepted options
        this.extend(
            newOptions
        );

        // Return the component
        return this;
    };
})();