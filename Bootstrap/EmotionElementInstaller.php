<?php

namespace TextElement\Bootstrap;

use Shopware\Components\Emotion\ComponentInstaller;

class EmotionElementInstaller
{
    /**
     * @var ComponentInstaller
     */
    private $emotionComponentInstaller;

    /**
     * @var string
     */
    private $pluginName;

    /**
     * @param string $pluginName
     * @param ComponentInstaller $emotionComponentInstaller
     */
    public function __construct($pluginName, ComponentInstaller $emotionComponentInstaller)
    {
        $this->emotionComponentInstaller = $emotionComponentInstaller;
        $this->pluginName = $pluginName;
    }

    public function install()
    {
        $textElement = $this->emotionComponentInstaller->createOrUpdate(
            $this->pluginName,
            'TextElement',
            [
                'name' => 'Text Element',
                'xtype' => 'emotion-components-text',
                'template' => 'emotion_text',
                'cls' => 'emotion-text-element'
            ]
        );

        $textElement->createTextField([
            'name' => 'text_element_id',
            'fieldLabel' => 'Title',
            'supportText' => 'Text Field.',
            'allowBlank' => false
        ]);

        $textElement->createMediaField([
            'name' => 'preview_image',
            'fieldLabel' => 'The preview image',
            'valueField' => 'virtualPath'
        ]);

        $textElement->createTextField([
            'name' => 'button_link',
            'fieldLabel' => 'Button Link',
            'supportText' => 'example: https://your-domain.com/'
        ]);

    }
}