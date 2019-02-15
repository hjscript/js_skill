(function(window, undefined) {
    var class2type = {},
        core_push = Array.prototype.push,
        core_slice = Array.prototype.slice,
        core_indexOf = Array.prototype.indexOf,
        core_toString = Object.prototype.toString,
        core_hasOwn = Object.prototype.hasOwnProperty,
        core_trim = String.prototype.trim;

    function jQuery() {
        return new jQuery.fn.init()
    }
    jQuery.fn = jQuery.prototype = {
        constructor: jQuery,
        length: 0,
        init: function() {
            console.log('简易版jQuery')
        },
        css: function() {
            console.log('简易版jQuery')
        },
        size: function() {
            return this.length;
        },
        toArray: function() {
            return core_slice.call(this);
        },
        get: function(num) {
            return num == null ? this.toArray() : (num < 0 ? this[this.length] : this[num])
        },
        map: function() {


        },
        pushStack: function() {

        }
    }

    jQuery.fn.init.prototype = jQuery.fn

    jQuery.extend = jQuery.fn.extend = function() {
        var options, name, src, copy, copyIsArray, clone,
            target = arguments[0] || {},
            i = 1,
            length = arguments.length,
            deep = false;

        if (typeof target === "boolean") {
            deep = target;
            target = arguments[1] || {};
            i++;
        }

        if (typeof target !== "object") {
            target = {};
        }

        if (i === length) {
            target = this;
            i--;
        }

        for (; i < length; i++) {

            if ((options = arguments[i]) != null) {

                for (name in options) {
                    src = target[name];
                    copy = options[name];

                    if (target === copy) {
                        continue;
                    }

                    if (deep && copy && (jQuery.isPlainObject(copy) ||
                            (copyIsArray = jQuery.isArray(copy)))) {

                        if (copyIsArray) {
                            copyIsArray = false;
                            clone = src && jQuery.isArray(src) ? src : [];

                        } else {
                            clone = src && jQuery.isPlainObject(src) ? src : {};
                        }

                        target[name] = jQuery.extend(deep, clone, copy);

                    } else if (copy !== undefined) {
                        target[name] = copy;
                    }
                }
            }
        }

        return target;
    };
    jQuery.extend({
        type: function(obj) {
            return obj == null ? String(obj) : class2type[core_toString.call(obj)] || 'object'
        },
        isFunction: function(obj) {
            return jQuery.type(obj) === "function";
        },
        isWindow: function(obj) {
            return obj != null && obj == obj.window;
        },
        isPlainObject: function(obj) {
            if (!obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)) {
                return false;
            }
            try {
                if (obj.constructor &&
                    !core_hasOwn.call(obj, "constructor") &&
                    !core_hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
                    return false;
                }
            } catch (e) {
                return false;
            }
            var key;
            for (key in obj) {}
            return key === undefined || core_hasOwn.call(obj, key)
        },
        // each方法会对数组中子元素的逐个进行fn函数调用，
        // 直至调用某个子元素返回的结果为false为止，也就是说，
        // 我们可以在提供的fn函数进行处理，使之满足一定条件后就退出each方法调用。
        // 当each方法提供了arg参数时，fn函数调用传入的参数为arg，否则为：子元素索引，子元素本身
        each: function(obj, callback, args) {
            var name,
                i = 0,
                length = obj.length,
                isObj = length === undefined || jQuery.isFunction(obj);
            if (args) {
                if (isObj) {
                    for (name in obj) {
                        if (callback.call(obj[name], args) === false) {
                            break;
                        }
                    }
                } else {
                    for (; i < length; i++) {
                        if (callback.call(obj[i], args) === false) {
                            break;
                        }
                    }
                }
            } else {
                if (isObj) {
                    for (name in obj) {
                        if (callback.call(obj[name], name, obj[name]) === false) {
                            break;
                        }
                    }
                } else {
                    for (; i < length; i++) {
                        if (callback.call(obj[i], i, obj[i]) === false) {
                            break;
                        }
                    }
                }
            }
            return obj;
        },
        isArray: Array.isArray || function(obj) {
            return jQuery.type(obj) === "array";
        },
        map: function(obj, callback, args) {
            var value, key,
                ret = [],
                i = 0,
                length = obj.length,
                isArray = obj instanceof jQuery || length !== undefined && typeof length === 'number' && (length > 0 && obj[0] && obj[length - 1] || length === 0 || jQuery.isArray(obj));
            if (isArray) {
                for (; i < length; i++) {
                    value = callback(obj[i], i, args)
                    if (value != null) {
                        ret[ret.length] = value
                    }
                }
            } else {
                for (key in obj) {
                    value = callback(obj[key], key, args)
                    if (value != null) {
                        ret[ret.length] = value;
                    }
                }
            }
            return ret.concat.apply([], ret);
        },
        merge: function(first, second) {
            var l = second.length,
                i = first.length,
                j = 0;
            if (typeof l === 'number') {
                for (; j < l; j++) {
                    first[i++] = second[j]
                }
            } else {
                while (second[j] !== undefined) {
                    first[i++] = second[j++]
                }
                
            }
            first.length = i;
            return first
        }
    })
    jQuery.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(i, name) {
        class2type["[object " + name + "]"] = name.toLowerCase();
    });
    window.$ = window.jQuery = jQuery
})(window)