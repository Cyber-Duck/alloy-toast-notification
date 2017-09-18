# Alloy Toast Notification

[![gitTio](http://gitt.io/badge.svg)](http://gitt.io/component/uk.co.cyber-duck.toast)

**Simple toast notification poping from the bottom of the screen on demand.**

This is a Axway Titanium Alloy Widget wrapping some standard components in order to create a
re-usable Widget for a toast notification which can be used on any screen of your application.

We've tried to make the API as simple and intuitive as possible but we're opened for
help, contributions and pull requests too.

## Installation

Download this repository and consult the [Alloy Documentation](http://docs.appcelerator.com/titanium/latest/#!/guide/Alloy_XML_Markup-section-35621528_AlloyXMLMarkup-ImportingWidgets) on how to install it, or simply use the [gitTio CLI](http://gitt.io/cli):

```
$ gittio install uk.co.cyber-duck.toast
```

## Demo

![screencast](https://cdn-pro.dprcdn.net/files/acc_244709/JQQWxu)

## Alloy implementation

Here is a simple example of how to use this widget.
We recommend to locate it at the bottom of your screen, just before the closing `<Window>` XML tag.

```xml
<Alloy>
    <Window>
        <!-- ... -->
        <Widget src="uk.co.cyber-duck.toast" id="myelement"
            hidden="true|false" text="This is a toast notification."
            category="danger|success|warning|info|muted"
            dismissable="true|false" onDismiss="doSomething"
            closeText="Cancel" />
    </Window>
</Alloy>
```

or using only JS:

```js
var myelement = Alloy.createWidget("uk.co.cyber-duck.toast", "myelement", {
    hidden: true|false,
    text: "This is a toast notification."
    category: "danger|success|warning|info|muted",
    // ...
});
```

## Instanciation

Upon instanciation, fro either the Alloy Controller (Javascript) or the Alloy View (XML), a couple of arguments can be accepted:

* `hidden` - `Boolean` - default: `true` -- Should the notification be rendered immediatly or not?
* `text` - `String` - default: `""` -- Actual text used to render the notification.
* `category` - `String` - default: `"danger"` -- This is driving the style/colors for the notification.
* `dismissable` - `Boolean` - default: `true` -- Can the notification be ignored/dismissed/closed or not?

Only if `dismissable` is set to `true`, the following additional arguments can also be accepted:

* `onDismiss` - `Event` -- Event triggered when the notification is closed.
* `closeText` or `closeLabelClass`:
    * `closeText` - `String` - default: `"CLOSE"` -- Used to customised the text for the close button.
    * `closeLabelClass` - `String` - default: `""` -- Used to add a class to the close button, very useful with icon fonts like Font Awesome or IonIcons fonts.
    * If both `closeText` and `closeLabelClass` are given, `closeLabelClass` will always have priority.

Some public functions are accessible from this widget instance:

```js
$.myelement.isVisible();
$.myelement.getText();
$.myelement.getCategory();

$.myelement.setText("This is a toast notification.");
$.myelement.setCategory('info');
$.myelement.show();
$.myelement.hide();

$.myelement.addEventListener("dismiss", doSomething); // same thing to use "onDismiss" from within the XML view
```

## Public Methods

### Setters

* `$.myelement.setText(title: String)`
* `$.myelement.setCategory(title: String)`

### Getters

* `$.myelement.getText()` returns `String`
* `$.myelement.getCategory()` returns `String`

### Widget Functions

* `$.myelement.show(message: String [optional])` -- Will slide the notification up and set the `text` attribute at the same time if given.
* `$.myelement.hide()`

## Public Events

### `dismiss(e)`

Triggered when the notification is dismissed.

#### Context

Defaults [from the SDK](https://docs.appcelerator.com/platform/latest/#!/api/Titanium.UI.View-event-click) `click` event:

* `e.source`
* `e.type`
* `e.x`
* `e.y`
* `e.bubbles`
* `e.cancelBubble`

## TSS Styling

This is following the best practises in terms of widget styling from [the official documentation](https://docs.appcelerator.com/platform/latest/#!/guide/Alloy_Widgets).

You can overriding any TSS class by creating the following file:

`app/themes/[your_theme_name]/widgets/uk.co.cyber-duck.toast/styles/widget.tss`

Once that file created, feel free to pick and choose from our classes within the original [`widget.tss`](https://github.com/Cyber-Duck/alloy-toast-notification/blob/master/uk.co.cyber-duck.toast/styles/widget.tss) file.

## License

```
Copyright 2017 Cyber-Duck Ltd

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
