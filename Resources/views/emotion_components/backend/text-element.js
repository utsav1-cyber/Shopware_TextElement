//{namespace name="backend/emotion/shopping_world_element"}
//{block name="emotion_components/backend/text_element"}
Ext.define('Shopware.apps.Emotion.view.components.TextElement', {

    /**
     * Extend from the base class for the emotion components
     */
    extend: 'Shopware.apps.Emotion.view.components.Base',

    /**
     * Create the alias matching the xtype you defined in your `createEmotionComponent()` method.
     * The pattern is always 'widget.' + xtype
     */
    alias: 'widget.emotion-components-text',

    /**
     * Contains the translations of each input field which was created with the EmotionComponentInstaller.
     * Use the name of the field as identifier
     */
    snippets: {
        'text_interface_color': {
            'fieldLabel': '{s name=interfaceColorFieldLabel}{/s}',
            'supportText': '{s name=interfaceColorSupportText}{/s}'
        }
    },

     /**
      * The constructor method of each component.
      */
     initComponent: function () {
         var me = this;

        /**
         * Call the original method of the base class.
         */
         me.callParent(arguments);

         /**
          * Get single fields you've created with the helper functions in your `Bootstrap.php` file.
          */
        me.textThumbnailField = me.getForm().findField('text_element_thumbnail');
        me.textIdField = me.getForm().findField('text_element_id');

         /**
          * For example you can register additional event listeners on your fields to handle some data.
          */
         me.textIdField.on('change', Ext.bind(me.onIdChange, me));
     },

     /**
      * Event listener for the change event of the video id field.
      *
      * @param field
      * @param value
      */
     onIdChange: function (field, value) {
         var me = this;

         me.setPreviewImage(value);
     },

      /**
       * Does a request to the vimeo api to get the preview image of the video.
       * We will use the hidden input field we created via the helper functions to
       * store the data we receive from the api.
       *
       * @param textId
       * @returns { boolean }
       */
      setVimeoPreviewImage: function (textId) {
          var me = this;

          if (!textId) {
              return false;
          }
       }
});
//{/block}
