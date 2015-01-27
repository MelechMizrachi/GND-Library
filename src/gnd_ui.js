/**=================================================================================**\
 *
 *  @author                             VGND Team
 *  @desc                               gnd Library User Interface
 *
 *  @Table_of_Contents
 *
 *  @property                           gnd.ui
 *      @property                           gnd.ui.$
 *      @property                           gnd.ui.components
 *      @property                           gnd.ui.Topics
 *          @property                           gnd.ui.Topics.topics
 *          @property                           gnd.ui.Topics._topics
 *          @property                           gnd.ui.Topics.Topic()
 *          @property                           gnd.ui.Topics.subscribeToTopic()
 *          @property                           gnd.ui.Topics.unSubscribeFromTopic()
 *          @property                           gnd.ui.Topics.triggerTopic()
 *          @property                           gnd.ui.Topics.unSubscribeAllFromTopic()
 *          @property                           gnd.ui.Topics.handleTopics()
 *          @property                           gnd.ui.Topics.removeTopics()
 *      @property                           gnd.ui.Helpers
 *          @property                           gnd.ui.Helpers.__options
 *          @property                           gnd.ui.Helpers.__setOptions()
 *      @property                           gnd.ui.baseExtend
 *      @property                           gnd.ui.extend()
 *
\**=================================================================================**/

/**
 * @class
 */
gnd.ui = {};

    /**
     * @class
     *
     * The dom selector function to use
     *
     * @extends {gnd.$}
     */
    gnd.ui.$ = gnd.dom.$;

    /**
     * @namespace
     *
     * Object of components created that need to be referenced globally
     *
     * @type {object}
     */
    gnd.ui.components = {};

    /**
     * @class
     *
     * Topics for components
     */
    gnd.ui.Topics = {};

        /**
         * @namespace
         *
         * The topics to subscribe for this component
         *
         * @type {object}
         *
         * @schema
         * {
         *     'someTopic' : [
         *          { callback, scope }
         *     ,    { callback, scope }
         *     ]
         * }
         */
        gnd.ui.Topics.topics = {};

        /**
         * @namespace
         *
         * The subscribed topics
         *
         * @type {object}
         */
        gnd.ui.Topics._topics = {};

        /**
         * @class
         *
         * Handles topic callbacks for this component
         *
         * @params
         *********
         * @param topicName {string}
         *  The topic name
         *********
         *
         * @returns {object}
         *  The topic
         */
        gnd.ui.Topics.Topic = function ( topicName )
        {
            var
                    topic   = topicName && this._topics[ topicName ]
                ,   self    = this
            ;

            // If there is no topic already created
            if ( !topic ) {
                // Create the topic
                topic           = {
                    // Trigger a topic to fire it's callbacks
                    trigger         : self.triggerTopic
                    // Add a callback to a topic
                ,   subscribe       : self.subscribeToTopic
                    // Remove a callback from a topic
                ,   unSubscribe     : self.unSubscribeFromTopic
                    // Remove all callbacks from a topic
                ,   unSubscribeAll  : self.unSubscribeAllFromTopic
                    // Storage for topic callbacks
                ,   _callbacks      : []
                    // The default scope of things
                ,   scope           : self
                };

                // If the topic name is passed
                if ( !gnd.is.empty.string( topicName ) ) {
                    // Create the topic in the component's topics array
                    this._topics[ topicName ] = topic;
                }
            }

            // Return the topic
            return topic;
        };

        /**
         * @method
         *
         * Subscribe a callback method to a topic
         *
         * @params
         *********
         * @param callback {string}
         *  The callback method
         **
         * @param [scope] {object}
         *  The scope
         *********
         *
         * @returns {object}
         *  The topic
         */
        gnd.ui.Topics.subscribeToTopic = function ( callback, scope )
        {
            // Determine if scope is a valid object
            if ( !scope ) {
                // Set it to this topic's scope
                scope = this.scope;
            }

            // Sanity checks
            if ( !gnd.is.func( scope[ callback ] ) )
            {
                // Parameter is incorrect so return false
                return false;
            }

            var
                    i   = 0
                ,   len = this._callbacks.length
            ;

            // Iterate through the callbacks for this topic
            for ( ; i < len; i++ ) {
                // If we match the callback with the topic's callback
                if ( this._callbacks[ i ].callback === callback && this._callbacks[ i ].scope === scope ) {
                    // No need to add it so return false
                    return false;
                }
            }

            // Push this new callback to the topics array
            this._callbacks.push({
                callback    : callback
            ,   scope       : scope
            });

            // Return the topic
            return this;
        };

        /**
         * @method
         *
         * Subscribe a callback method to a topic
         *
         * @params
         *********
         * @param callback {string}
         *  The callback method
         **
         * @param [scope] {object}
         *  The scope
         *********
         *
         * @returns {object}
         *  The topic
         */
        gnd.ui.Topics.unSubscribeFromTopic = function ( callback, scope )
        {
            // If the callback is not a string
            if ( !gnd.is.string( callback ) )
            {
                return false;
            }

            var
                    i   = 0
                ,   len = this._callbacks.length
            ;

            // Determine if scope is a valid object
            if ( !scope ) {
                // Set it to this topic's scope
                scope = this.scope;
            }

            // Iterate through the callbacks for this topic
            for ( ; i < len; i++ ) {
                // If we match the callback with the topic's callback
                if ( this._callbacks[ i ].callback === callback && this._callbacks[ i ].scope === scope ) {
                    // Remove this topic callback
                    this._callbacks.splice( i, 1 );

                    // We found the topic to remove so no need to continue
                    break;
                }
            }

            // Return the topic
            return this;
        };

        /**
         * @method
         *
         * Trigger a topic's callback methods to fire
         *
         * @params
         *********
         *
         * @returns {object}
         *  The topic
         */
        gnd.ui.Topics.triggerTopic = function ()
        {
            var
                    i   = 0
                ,   len = this._callbacks.length
                ,   callbackItem
            ;

            // Iterate through the callbacks
            for ( ; i < len; i++ ) {
                // Quick reference
                callbackItem = this._callbacks[ i ];

                // Call the callback method
                callbackItem.scope[ callbackItem.callback ]
                    .apply( callbackItem.scope, arguments )
                ;
            }

            // Return the topic
            return this;
        };

        /**
         * @method
         *
         * Unsubscribe all callback methods from a topic
         *
         * @params
         *********
         *
         * @returns {object}
         *  The topic
         */
        gnd.ui.Topics.unSubscribeAllFromTopic = function ()
        {
            // Re-set topics to empty array
            this._callbacks = [];

            // Return the topic
            return this;
        };

        /**
         * @method
         *
         * Unsubscribe all callback methods from a topic
         *
         * @params
         *********
         * @param topics {object}
         *  The topics to create
         **
         * @param [remove] {boolean}
         *  Whether to remove the topics or not
         *********
         *
         * @returns {object}
         *  The topic
         */
        gnd.ui.Topics.handleTopics = function ( topics, remove )
        {
            // Determine if topics is a valid object
            if ( gnd.is.empty.object( topics ) ) {
                // Topics is not valid
                return false;
            }

            var
                    self        = this
                ,   topic
                ,   topicItem
                    // Subscribe or unsubscribe?
                ,   topicMethod = ( typeof remove === true )
                                  ? 'unsubscribe'
                                  : 'subscribe'
                ,   sTopic
                ,   i           = 0
                ,   len
            ;

            // Iterate through topics
            for ( sTopic in topics ) {

                // If this is a property of the object
                if ( topics.hasOwnProperty( sTopic ) ) {
                    // Easy reference for topic
                    topic = topics[ sTopic ];
                    len = topic.length;

                    // Iterate through topic's items
                    for ( ; i < len; i++ ) {
                        // Easy reference for topic item
                        topicItem = topic[ i ];

                        // If the scope is not an object
                        if ( gnd.is.empty.object( topicItem.scope ) ) {
                            // Set it to this topic's scope
                            topicItem.scope = self;
                        }

                        // Subscribe/Unsubscribe from topic
                        self.Topic( sTopic )[ topicMethod ]( topicItem.callback, topicItem.scope );
                    }
                }
            }

            // Return component
            return this;
        };

        /**
         * @method
         *
         * Remove all topics
         *
         * @params
         *********
         *
         * @returns {object}
         *  The topic
         */
        gnd.ui.Topics.removeTopics = function ()
        {
            // Re-set topic objects to empty object
            this._topics       = {};
            this.topics        = {};

            // Return the topic
            return this;
        };

    /**
     * @class
     *
     * Helpers for components
     */
    gnd.ui.Helpers = {};

        /**
         * @namespace
         *
         * The accepted options for the model
         *
         * @type {array}
         */
        gnd.ui.Helpers.__options = [];

        /**
         * @method
         *
         * Set component options
         *
         * @params
         *********
         * @param options {object}
         *  Options passed for component
         *********
         *
         * @returns {object}
         *  The component
         */
        gnd.ui.Helpers.__setOptions = function ( options )
        {
            // Determine validity of options object
            if ( gnd.is.empty.object( options ) ) {
                // Options object is invalid
                return false;
            }

            var
                    newOptions = {}
                ,   name
            ;

            // Iterate through objects
            for ( name in options ) {

                // Check if this option is one that is accepted
                if ( options.hasOwnProperty( name ) && gnd.array.contains( this.__options, name ) ) {
                    // If it's one of the accepted set it to the new options object
                    newOptions[ name ] = options[ name ];
                }
            }

            // Extend the component with the accepted options
            gnd.extend(
                this
            ,   newOptions
            );

            // Return the component
            return this;
        };

    /**
     * @class
     *
     * Extend Helpers and Topics to new class
     */
    gnd.ui.baseExtend = gnd.extend(
        gnd.ui.Topics
    ,   gnd.ui.Helpers
    );

    /**
     * @method
     *
     * Extend a class
     *
     * @params
     *********
     * @param objectToMerge {object}
     *  The object to merge
     *********
     *
     * @returns {object}
     *  The extended object
     */
    gnd.ui.extend = function ( objectToMerge )
    {
        var
                // The parent to extend off of
                parent      = this
                // The extended class
            ,   extended    = function ()
                {
                    return parent.apply( this, arguments );
                }
        ;

        // Extended prototype is a new copy of parent and new object
        extended.prototype = gnd.utils.extend(
            // New object
            {}
            // Parent prototype
        ,   parent.prototype
        );
        extended.prototype = gnd.utils.extend(
            // The extended prototype
            extended.prototype
            // Object to merge in, overwrite any previous vars
        ,   objectToMerge
        );

        // Keep a record of the old parent prototype
        extended.__parentPrototype__ = parent.prototype;

        // Return the extended class
        return extended;
    };