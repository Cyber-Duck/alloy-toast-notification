// $.args;
var dismissable = true,
    text = $.args.text || "",
    category = $.args.category || "danger",
    closeText = $.args.closeText || "CLOSE",
    closeLabelClass = $.args.closeLabelClass || false;

// Getters
$.isVisible = function () {
    return $.toast.getVisible();
};
$.getText = function () {
    return text;
};
$.getCategory = function () {
    return cateogry;
};

// Setters
$.setText = function (message) {
    text = message;
    $.message.setText(text);
};
$.setCategory = function (cat) {
    if (!_.contains(["danger", "success", "warning", "info", "muted"], cat)) {
        throw new Error("Invalid category. Categories: danger, success, warning, info or muted.");
    }
    $.resetClass($.toast, "toast toast-" + cat);
    category = cat;

    return category;
};

// Public methods
$.show = function (message) {
    message = message || false;

    if (message) {
        $.message.setText(message);
    }

    return slideUp();
};
$.hide = function () {
    if (!dismissable) { return; }

    return slideDown();
};
// Private methods
function slideUp() {
    $.toast.setBottom(-$.toast.getRect().height);
    $.toast.setVisible(true);

    return $.toast.animate({ bottom: 0 });
}
function slideDown() {
    return $.toast.animate({
        bottom: -$.toast.getRect().height
    }, function (){
        $.toast.setVisible(false);
    });
}

// Private Event Listener
$.toast.addEventListener("click", function (e) {
    if (!dismissable) { return; }
    $.trigger("dismiss", e);
    return slideDown();
});

// Public Event Listeners
// - "onDismiss"

// Init of the Widget
(function init() {
    if (_.has($.args, "dismissable")) {
        dismissable = $.args.dismissable;
    }
    if ($.args.text) {
        $.setText($.args.text);
    }
    if (dismissable) {
        if (closeLabelClass) {
            $.addClass($.toastClose, "toast-close-button " + closeLabelClass);
        } else {
            $.toastClose.setTitle(closeText);
        }
    } else {
        $.toast.remove($.toastClose);
        $.resetClass($.toastWrapper, 'toast-wrapper-noclose');
    }

    $.setCategory(category);

    if (!$.args.hidden) {
        // animate 300ms after the widget is initialised
        _.delay(slideUp, 500);
    }
})();
