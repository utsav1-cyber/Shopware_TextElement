//
//{block name="backend/emotion/view/detail/elements/base"}
//{$smarty.block.parent}
Ext.define('Shopware.apps.Emotion.view.detail.elements.TextElement', {


    extend: 'Shopware.apps.Emotion.view.detail.elements.Base',

    alias: 'widget.detail-element-emotion-components-text',


    componentCls: 'emotion--text-element',


    icon: 'https://lh3.googleusercontent.com/-n_pnmjcJioI/YNMR2COpzLI/AAAAAAAAAJs/qjzNG3hSlg4Fgs3J1l7SS0yRVV6cGzCGQCJEEGAsYHg/s0/bay20-logo%2B%25281%2529.png?authuser=0',

    /**
     * You can override the original `createPreview()` method
     * to create a custom grid preview for your element.
     *
     * @returns { string }
     */
    createPreview: function () {
        var me = this,
            preview = '',
            image = me.getConfigValue('text_element_thumbnail'),
            style;

        if (Ext.isDefined(image)) {
            style = Ext.String.format('background-image: url([0]);', image);

            preview = Ext.String.format('<div class="x-emotion-banner-element-preview" style="[0]"></div>', style);
        }

        return preview;
    }
});
//{/block}