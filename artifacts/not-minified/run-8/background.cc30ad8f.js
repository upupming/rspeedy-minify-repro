(function(){
  'use strict';
  var g = globalThis;
  function __init_card_bundle__(lynxCoreInject) {
    g.__bundle__holder = undefined;
    var globDynamicComponentEntry = g.globDynamicComponentEntry || '__Card__';
    var tt = lynxCoreInject.tt;
    tt.define("background.cc30ad8f.js", function(require, module, exports, __Card,setTimeout,setInterval,clearInterval,clearTimeout,NativeModules,tt,console,__Component,__ReactLynx,nativeAppId,__Behavior,LynxJSBI,lynx,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,__WebSocket__,webkit,Reporter,print,global,requestAnimationFrame,cancelAnimationFrame) {
lynx = lynx || {};
lynx.targetSdkVersion=lynx.targetSdkVersion||"3.2";
var Promise = lynx.Promise;
fetch = fetch || lynx.fetch;
requestAnimationFrame = requestAnimationFrame || lynx.requestAnimationFrame;
cancelAnimationFrame = cancelAnimationFrame || lynx.cancelAnimationFrame;

// This needs to be wrapped in an IIFE because it needs to be isolated against Lynx injected variables.
(() => {

var __DEBUG_METADATA_RELEASE__ = "debugmetadata:ed3498b6e5d4edf876fcca16ded5f7a481f8b88b";
(function () {
  'use strict';
  try {
    throw new Error(__DEBUG_METADATA_RELEASE__);
  } catch (e) {
    e.name = 'LynxGetSourceMapReleaseError';
    if (typeof _SetSourceMapRelease === 'function') {
      _SetSourceMapRelease(e); // original filename from engine (e.g. 'lepus.js' or 'dynamic_component_name/main-thread.js')
      e.stack = "    at <eval> (file://background.cc30ad8f.js:1:1)\n";
      _SetSourceMapRelease(e); // engineVersion > 2.13 reports an empty filename, so set it to the Rspeedy filename
    } else if (
      typeof lynxCoreInject !== 'undefined' &&
      typeof lynxCoreInject.tt.setSourceMapRelease === 'function'
    ) {
      lynxCoreInject.tt.setSourceMapRelease(e);
    }
  }
  if (typeof lynx !== 'undefined' &&
      typeof lynx.performance !== 'undefined' &&
      typeof lynx.performance.profileMark !== 'undefined') {
    lynx.performance.profileMark('[pluginDebugMetadata] SetSourceMapInfo', {
      args: {
        release: __DEBUG_METADATA_RELEASE__,
      }
    });
  }
})();
"use strict";

;// CONCATENATED MODULE: ./node_modules/preact/dist/preact.mjs
/** Normal hydration that attaches to a DOM tree but does not diff it. */ var MODE_HYDRATE = 32;
/** Signifies this VNode suspended on the previous render */ var MODE_SUSPENDED = 128;
/** Indicates that this node needs to be inserted while patching children */ var INSERT_VNODE = 4;
/** Indicates a VNode has been matched with another VNode in the diff */ var MATCHED = 2;
/** Reset all mode flags */ var RESET_MODE = ~(MODE_HYDRATE | MODE_SUSPENDED);
var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
var XHTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';
var MATH_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
var NULL = null;
var UNDEFINED = undefined;
var preact_EMPTY_OBJ = /** @type {any} */ {};
var EMPTY_ARR = [];
var isArray = Array.isArray;
/**
 * Assign properties from `props` to `obj`
 * @template O, P The obj and props types
 * @param {O} obj The object to copy properties to
 * @param {P} props The object to copy properties from
 * @returns {O & P}
 */ function preact_assign(obj, props) {
    // @ts-expect-error We change the type of `obj` to be `O & P`
    for(var i in props)obj[i] = props[i];
    return /** @type {O & P} */ obj;
}
/**
 * Remove a child node from its parent if attached. This is a workaround for
 * IE11 which doesn't support `Element.prototype.remove()`. Using this function
 * is smaller than including a dedicated polyfill.
 * @param {import('./index').ContainerNode} node The node to remove
 */ function removeNode(node) {
    if (node && node.parentNode) node.parentNode.removeChild(node);
}
var slice = EMPTY_ARR.slice;
/**
 * Find the closest error boundary to a thrown error and call it
 * @param {object} error The thrown value
 * @param {import('../internal').VNode} vnode The vnode that threw the error that was caught (except
 * for unmounting when this parameter is the highest parent that was being
 * unmounted)
 * @param {import('../internal').VNode} [oldVNode]
 * @param {import('../internal').ErrorInfo} [errorInfo]
 */ function _catchError(error, vnode, oldVNode, errorInfo) {
    /** @type {import('../internal').Component} */ var component, /** @type {import('../internal').ComponentType} */ ctor, /** @type {boolean} */ handled;
    for(; vnode = vnode.__;){
        if ((component = vnode.__c) && !component.__) try {
            ctor = component.constructor;
            if (ctor && ctor.getDerivedStateFromError != NULL) {
                component.setState(ctor.getDerivedStateFromError(error));
                handled = component.__d;
            }
            if (component.componentDidCatch != NULL) {
                component.componentDidCatch(error, errorInfo || {});
                handled = component.__d;
            }
            // This is an error boundary. Mark it as having bailed out, and whether it was mid-hydration.
            if (handled) return component.__E = component;
        } catch (e) {
            error = e;
        }
    }
    throw error;
}
/**
 * The `option` object can potentially contain callback functions
 * that are called during various stages of our renderer. This is the
 * foundation on which all our addons like `preact/debug`, `preact/compat`,
 * and `preact/hooks` are based on. See the `Options` type in `internal.d.ts`
 * for a full list of available option hooks (most editors/IDEs allow you to
 * ctrl+click or cmd+click on mac the type definition below).
 * @type {import('./internal').Options}
 */ var preact_options = {
    __e: _catchError
};
var vnodeId = 0;
/**
 * Create an virtual node (used for JSX)
 * @param {import('./internal').VNode["type"]} type The node name or Component constructor for this
 * virtual node
 * @param {object | null | undefined} [props] The properties of the virtual node
 * @param {Array<import('.').ComponentChildren>} [children] The children of the
 * virtual node
 * @returns {import('./internal').VNode}
 */ function preact_createElement(type, props, children) {
    var normalizedProps = {}, key, ref, i;
    for(i in props){
        if (i == 'key') key = props[i];
        else if (i == 'ref') ref = props[i];
        else normalizedProps[i] = props[i];
    }
    if (arguments.length > 2) normalizedProps.children = arguments.length > 3 ? slice.call(arguments, 2) : children;
    // If a Component VNode, check for and apply defaultProps
    // Note: type may be undefined in development, must never error here.
    if (typeof type == 'function' && type.defaultProps != NULL) {
        for(i in type.defaultProps)if (normalizedProps[i] === UNDEFINED) normalizedProps[i] = type.defaultProps[i];
    }
    return createVNode(type, normalizedProps, key, ref, NULL);
}
/**
 * Create a VNode (used internally by Preact)
 * @param {import('./internal').VNode["type"]} type The node name or Component
 * Constructor for this virtual node
 * @param {object | string | number | null} props The properties of this virtual node.
 * If this virtual node represents a text node, this is the text of the node (string or number).
 * @param {string | number | null} key The key for this virtual node, used when
 * diffing it against its children
 * @param {import('./internal').VNode["ref"]} ref The ref property that will
 * receive a reference to its created child
 * @returns {import('./internal').VNode}
 */ function createVNode(type, props, key, ref, original) {
    // V8 seems to be better at detecting type shapes if the object is allocated from the same call site
    // Do not inline into createElement and coerceToVNode!
    /** @type {import('./internal').VNode} */ var vnode = {
        type: type,
        props: props,
        key: key,
        ref: ref,
        __k: NULL,
        __: NULL,
        __b: 0,
        __e: NULL,
        __c: NULL,
        constructor: UNDEFINED,
        __v: original == NULL ? ++vnodeId : original,
        __i: -1,
        __u: 0
    };
    // Only invoke the vnode hook if this was *not* a direct copy:
    if (original == NULL && preact_options.vnode != NULL) preact_options.vnode(vnode);
    return vnode;
}
function preact_createRef() {
    return {
        current: NULL
    };
}
function preact_Fragment(props) {
    return props.children;
}
/**
 * Check if a the argument is a valid Preact VNode.
 * @param {*} vnode
 * @returns {vnode is VNode}
 */ var preact_isValidElement = function isValidElement(vnode) {
    return vnode != NULL && vnode.constructor === UNDEFINED;
};
/**
 * Base Component class. Provides `setState()` and `forceUpdate()`, which
 * trigger rendering
 * @param {object} props The initial component props
 * @param {object} context The initial context from parent components'
 * getChildContext
 */ function BaseComponent(props, context) {
    this.props = props;
    this.context = context;
}
/**
 * Update component state and schedule a re-render.
 * @this {import('./internal').Component}
 * @param {object | ((s: object, p: object) => object)} update A hash of state
 * properties to update with new values or a function that given the current
 * state and props returns a new partial state
 * @param {() => void} [callback] A function to be called once component state is
 * updated
 */ BaseComponent.prototype.setState = function(update, callback) {
    // only clone state when copying to nextState the first time.
    var s;
    if (this.__s != NULL && this.__s != this.state) s = this.__s;
    else s = this.__s = preact_assign({}, this.state);
    if (typeof update == 'function') // preventing us from mutating it, so we need to clone it. See #2716
    update = update(preact_assign({}, s), this.props);
    if (update) preact_assign(s, update);
    // Skip update if updater function returned null
    if (update == NULL) return;
    if (this.__v) {
        if (callback) this._sb.push(callback);
        enqueueRender(this);
    }
};
/**
 * Immediately perform a synchronous re-render of the component
 * @this {import('./internal').Component}
 * @param {() => void} [callback] A function to be called after component is
 * re-rendered
 */ BaseComponent.prototype.forceUpdate = function(callback) {
    if (this.__v) {
        // Set render mode so that we can differentiate where the render request
        // is coming from. We need this because forceUpdate should never call
        // shouldComponentUpdate
        this.__e = true;
        if (callback) this.__h.push(callback);
        enqueueRender(this);
    }
};
/**
 * Accepts `props` and `state`, and returns a new Virtual DOM tree to build.
 * Virtual DOM is generally constructed via [JSX](https://jasonformat.com/wtf-is-jsx).
 * @param {object} props Props (eg: JSX attributes) received from parent
 * element/component
 * @param {object} state The component's current state
 * @param {object} context Context object, as returned by the nearest
 * ancestor's `getChildContext()`
 * @returns {ComponentChildren | void}
 */ BaseComponent.prototype.render = preact_Fragment;
/**
 * @param {import('./internal').VNode} vnode
 * @param {number | null} [childIndex]
 */ function getDomSibling(vnode, childIndex) {
    if (childIndex == NULL) return vnode.__ ? getDomSibling(vnode.__, vnode.__i + 1) : NULL;
    var sibling;
    for(; childIndex < vnode.__k.length; childIndex++){
        sibling = vnode.__k[childIndex];
        if (sibling != NULL && sibling.__e != NULL) // we can rely on _dom to tell us if this subtree contains a
        // rendered DOM node, and what the first rendered DOM node is
        return sibling.__e;
    }
    // If we get here, we have not found a DOM node in this vnode's children.
    // We must resume from this vnode's sibling (in it's parent _children array)
    // Only climb up and search the parent if we aren't searching through a DOM
    // VNode (meaning we reached the DOM parent of the original vnode that began
    // the search)
    return typeof vnode.type == 'function' ? getDomSibling(vnode) : NULL;
}
/**
 * Trigger in-place re-rendering of a component.
 * @param {import('./internal').Component} component The component to rerender
 */ function renderComponent(component) {
    if (component.__P && component.__d) {
        var oldVNode = component.__v, oldDom = oldVNode.__e, commitQueue = [], refQueue = [], newVNode = preact_assign({}, oldVNode);
        newVNode.__v = oldVNode.__v + 1;
        if (preact_options.vnode) preact_options.vnode(newVNode);
        if (preact_options.renderComponent) preact_options.renderComponent(newVNode, component);
        diff(component.__P, newVNode, oldVNode, component.__n, component.__P.namespaceURI, newVNode._slotIndex, oldVNode.__u & MODE_HYDRATE ? [
            oldDom
        ] : NULL, commitQueue, oldDom == NULL ? getDomSibling(oldVNode) : oldDom, !!(oldVNode.__u & MODE_HYDRATE), refQueue);
        newVNode.__v = oldVNode.__v;
        newVNode.__.__k[newVNode.__i] = newVNode;
        commitRoot(commitQueue, newVNode, refQueue);
        oldVNode.__e = oldVNode.__ = null;
        if (newVNode.__e != oldDom) updateParentDomPointers(newVNode);
    }
}
/**
 * @param {import('./internal').VNode} vnode
 */ function updateParentDomPointers(vnode) {
    if ((vnode = vnode.__) != NULL && vnode.__c != NULL) {
        vnode.__e = vnode.__c.base = NULL;
        vnode.__k.some(function(child) {
            if (child != NULL && child.__e != NULL) return vnode.__e = vnode.__c.base = child.__e;
        });
        return updateParentDomPointers(vnode);
    }
}
/**
 * The render queue
 * @type {Array<import('./internal').Component>}
 */ var rerenderQueue = [];
/*
 * The value of `Component.debounce` must asynchronously invoke the passed in callback. It is
 * important that contributors to Preact can consistently reason about what calls to `setState`, etc.
 * do, and when their effects will be applied. See the links below for some further reading on designing
 * asynchronous APIs.
 * * [Designing APIs for Asynchrony](https://blog.izs.me/2013/08/designing-apis-for-asynchrony)
 * * [Callbacks synchronous and asynchronous](https://blog.ometer.com/2011/07/24/callbacks-synchronous-and-asynchronous/)
 */ var preact_prevDebounce;
var defer = typeof Promise == 'function' ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout;
/**
 * Enqueue a rerender of a component
 * @param {import('./internal').Component} c The component to rerender
 */ function enqueueRender(c) {
    'background only';
    if (!c.__d && (c.__d = true) && rerenderQueue.push(c) && !process.__r++ || preact_prevDebounce != preact_options.debounceRendering) {
        preact_prevDebounce = preact_options.debounceRendering;
        (preact_prevDebounce || defer)(process);
    }
}
/**
 * @param {import('./internal').Component} a
 * @param {import('./internal').Component} b
 */ var preact_depthSort = function depthSort(a, b) {
    return a.__v.__b - b.__v.__b;
};
/** Flush the render queue by rerendering all queued components */ function process() {
    'background only';
    try {
        var c, l = 1;
        // Don't update `renderCount` yet. Keep its value non-zero to prevent unnecessary
        // process() calls from getting scheduled while `queue` is still being consumed.
        while(rerenderQueue.length){
            // Keep the rerender queue sorted by (depth, insertion order). The queue
            // will initially be sorted on the first iteration only if it has more than 1 item.
            //
            // New items can be added to the queue e.g. when rerendering a provider, so we want to
            // keep the order from top to bottom with those new items so we can handle them in a
            // single pass
            if (rerenderQueue.length > l) rerenderQueue.sort(preact_depthSort);
            c = rerenderQueue.shift();
            l = rerenderQueue.length;
            renderComponent(c);
        }
    } finally{
        rerenderQueue.length = process.__r = 0;
    }
}
process.__r = 0;
/**
 * @typedef {import('../internal').ComponentChildren} ComponentChildren
 * @typedef {import('../internal').Component} Component
 * @typedef {import('../internal').PreactElement} PreactElement
 * @typedef {import('../internal').VNode} VNode
 */ /**
 * Diff the children of a virtual node
 * @param {PreactElement} parentDom The DOM element whose children are being
 * diffed
 * @param {ComponentChildren[]} renderResult
 * @param {VNode} newParentVNode The new virtual node whose children should be
 * diff'ed against oldParentVNode
 * @param {VNode} oldParentVNode The old virtual node whose children should be
 * diff'ed against newParentVNode
 * @param {object} globalContext The current context object - modified by
 * getChildContext
 * @param {string} namespace Current namespace of the DOM node (HTML, SVG, or MathML)
 * @param {number | true} slotIndex The index of the slot being processed. `true` indicates that `renderResult` is generated from `$[num]` slots
 * @param {Array<PreactElement>} excessDomChildren
 * @param {Array<Component>} commitQueue List of components which have callbacks
 * to invoke in commitRoot
 * @param {PreactElement} oldDom The current attached DOM element any new dom
 * elements should be placed around. Likely `null` on first render (except when
 * hydrating). Can be a sibling DOM element when diffing Fragments that have
 * siblings. In most cases, it starts out as `oldChildren[0]._dom`.
 * @param {boolean} isHydrating Whether or not we are in hydration
 * @param {any[]} refQueue an array of elements needed to invoke refs
 */ function preact_diffChildren(parentDom, renderResult, newParentVNode, oldParentVNode, globalContext, namespace, slotIndex, excessDomChildren, commitQueue, oldDom, isHydrating, refQueue) {
    var i, /** @type {VNode} */ oldVNode, /** @type {VNode} */ childVNode, /** @type {PreactElement} */ newDom, /** @type {PreactElement} */ firstChildDom;
    // This is a compression of oldParentVNode!=null && oldParentVNode != EMPTY_OBJ && oldParentVNode._children || EMPTY_ARR
    // as EMPTY_OBJ._children should be `undefined`.
    /** @type {VNode[]} */ var oldChildren = oldParentVNode && oldParentVNode.__k || EMPTY_ARR;
    var newChildrenLength = renderResult.length;
    oldDom = constructNewChildrenArray(newParentVNode, renderResult, oldChildren, oldDom, newChildrenLength, slotIndex);
    for(i = 0; i < newChildrenLength; i++){
        childVNode = newParentVNode.__k[i];
        if (childVNode == NULL) continue;
        // At this point, constructNewChildrenArray has assigned _index to be the
        // matchingIndex for this VNode's oldVNode (or -1 if there is no oldVNode).
        oldVNode = childVNode.__i != -1 && oldChildren[childVNode.__i] || preact_EMPTY_OBJ;
        // Update childVNode._index to its final index
        childVNode.__i = i;
        // Morph the old element into the new one, but don't append it to the dom yet
        var result = diff(parentDom, childVNode, oldVNode, globalContext, namespace, // all <text/> element should inherit the `slotIndex` of `0`
        slotIndex === true ? i : slotIndex, excessDomChildren, commitQueue, oldDom, isHydrating, refQueue);
        // Adjust DOM nodes
        newDom = childVNode.__e;
        if (childVNode.ref && oldVNode.ref != childVNode.ref) {
            if (oldVNode.ref) applyRef(oldVNode.ref, NULL, childVNode);
            refQueue.push(childVNode.ref, childVNode.__c || newDom, childVNode);
        }
        if (firstChildDom == NULL && newDom != NULL) firstChildDom = newDom;
        var shouldPlace = !!(childVNode.__u & INSERT_VNODE);
        if (shouldPlace || oldVNode.__k === childVNode.__k) {
            oldDom = insert(childVNode, oldDom, parentDom, shouldPlace);
            // When a matched VNode is physically moved via INSERT_VNODE, its old
            // _dom pointer becomes a stale positional reference. Clear it so that
            // getDomSibling (called from nested diffs) won't return this stale
            // reference and mis-place subsequent DOM nodes. See #5065.
            if (shouldPlace && oldVNode.__e) oldVNode.__e = NULL;
        } else if (typeof childVNode.type == 'function' && result !== UNDEFINED) oldDom = result;
        else if (newDom) oldDom = newDom.nextSibling;
        // Unset diffing flags
        childVNode.__u &= ~(INSERT_VNODE | MATCHED);
    }
    newParentVNode.__e = firstChildDom;
    return oldDom;
}
/**
 * @param {VNode} newParentVNode
 * @param {ComponentChildren[]} renderResult
 * @param {VNode[]} oldChildren
 */ function constructNewChildrenArray(newParentVNode, renderResult, oldChildren, oldDom, newChildrenLength, slotIndex) {
    /** @type {number} */ var i;
    /** @type {VNode} */ var childVNode;
    /** @type {VNode} */ var oldVNode;
    var oldChildrenLength = oldChildren.length, remainingOldChildren = oldChildrenLength;
    var skew = 0;
    newParentVNode.__k = new Array(newChildrenLength);
    for(i = 0; i < newChildrenLength; i++){
        // @ts-expect-error We are reusing the childVNode variable to hold both the
        // pre and post normalized childVNode
        childVNode = renderResult[i];
        if (childVNode == NULL || typeof childVNode == 'boolean' || typeof childVNode == 'function' || // ts-expect-error Reduce an extra dom on empty text nodes
        childVNode === '') {
            newParentVNode.__k[i] = NULL;
            continue;
        } else if (typeof childVNode == 'string' || typeof childVNode == 'number' || // eslint-disable-next-line valid-typeof
        typeof childVNode == 'bigint' || childVNode.constructor == String) childVNode = newParentVNode.__k[i] = createVNode(NULL, childVNode, NULL, NULL, NULL);
        else if (isArray(childVNode)) childVNode = newParentVNode.__k[i] = createVNode(preact_Fragment, {
            children: childVNode
        }, NULL, NULL, NULL);
        else if (childVNode.constructor === UNDEFINED && childVNode.__b > 0) // scenario:
        //   const reuse = <div />
        //   <div>{reuse}<span />{reuse}</div>
        childVNode = newParentVNode.__k[i] = createVNode(childVNode.type, childVNode.props, childVNode.key, childVNode.ref ? childVNode.ref : NULL, childVNode.__v);
        else newParentVNode.__k[i] = childVNode;
        // Lynx: stamp slot identity so cross-position diff matching is constrained
        // to the same structural slot. At template-slot level (slotIndex === true)
        // every child gets a unique slot id (its position); at Fragment / list level
        // children share the parent's slot id, so keyed reorder still works.
        childVNode._slotIndex = slotIndex === true ? i : slotIndex;
        var skewedIndex = i + skew;
        childVNode.__ = newParentVNode;
        childVNode.__b = newParentVNode.__b + 1;
        // Temporarily store the matchingIndex on the _index property so we can pull
        // out the oldVNode in diffChildren. We'll override this to the VNode's
        // final index after using this property to get the oldVNode
        var matchingIndex = childVNode.__i = findMatchingIndex(childVNode, oldChildren, skewedIndex, remainingOldChildren);
        oldVNode = NULL;
        if (matchingIndex != -1) {
            oldVNode = oldChildren[matchingIndex];
            remainingOldChildren--;
            if (oldVNode) oldVNode.__u |= MATCHED;
        }
        // Here, we define isMounting for the purposes of the skew diffing
        // algorithm. Nodes that are unsuspending are considered mounting and we detect
        // this by checking if oldVNode._original == null
        var isMounting = oldVNode == NULL || oldVNode.__v == NULL;
        if (isMounting) {
            if (matchingIndex == -1) {
                // When the array of children is growing we need to decrease the skew
                // as we are adding a new element to the array.
                // Example:
                // [1, 2, 3] --> [0, 1, 2, 3]
                // oldChildren   newChildren
                //
                // The new element is at index 0, so our skew is 0,
                // we need to decrease the skew as we are adding a new element.
                // The decrease will cause us to compare the element at position 1
                // with value 1 with the element at position 0 with value 0.
                //
                // A linear concept is applied when the array is shrinking,
                // if the length is unchanged we can assume that no skew
                // changes are needed.
                if (newChildrenLength > oldChildrenLength) skew--;
                else if (newChildrenLength < oldChildrenLength) skew++;
            }
            // If we are mounting a DOM VNode, mark it for insertion
            if (typeof childVNode.type != 'function') childVNode.__u |= INSERT_VNODE;
        } else if (matchingIndex != skewedIndex) {
            // When we move elements around i.e. [0, 1, 2] --> [1, 0, 2]
            // --> we diff 1, we find it at position 1 while our skewed index is 0 and our skew is 0
            //     we set the skew to 1 as we found an offset.
            // --> we diff 0, we find it at position 0 while our skewed index is at 2 and our skew is 1
            //     this makes us increase the skew again.
            // --> we diff 2, we find it at position 2 while our skewed index is at 4 and our skew is 2
            //
            // this becomes an optimization question where currently we see a 1 element offset as an insertion
            // or deletion i.e. we optimize for [0, 1, 2] --> [9, 0, 1, 2]
            // while a more than 1 offset we see as a swap.
            // We could probably build heuristics for having an optimized course of action here as well, but
            // might go at the cost of some bytes.
            //
            // If we wanted to optimize for i.e. only swaps we'd just do the last two code-branches and have
            // only the first item be a re-scouting and all the others fall in their skewed counter-part.
            // We could also further optimize for swaps
            if (matchingIndex == skewedIndex - 1) skew--;
            else if (matchingIndex == skewedIndex + 1) skew++;
            else {
                if (matchingIndex > skewedIndex) skew--;
                else skew++;
                // Move this VNode's DOM if the original index (matchingIndex) doesn't
                // match the new skew index (i + new skew)
                // In the former two branches we know that it matches after skewing
                childVNode.__u |= INSERT_VNODE;
            }
        }
    }
    // Remove remaining oldChildren if there are any. Loop forwards so that as we
    // unmount DOM from the beginning of the oldChildren, we can adjust oldDom to
    // point to the next child, which needs to be the first DOM node that won't be
    // unmounted.
    if (remainingOldChildren) for(i = 0; i < oldChildrenLength; i++){
        oldVNode = oldChildren[i];
        if (oldVNode != NULL && (oldVNode.__u & MATCHED) == 0) {
            if (oldVNode.__e == oldDom) oldDom = getDomSibling(oldVNode);
            unmount(oldVNode, oldVNode);
        }
    }
    return oldDom;
}
/**
 * @param {VNode} parentVNode
 * @param {PreactElement} oldDom
 * @param {PreactElement} parentDom
 * @param {boolean} shouldPlace
 * @returns {PreactElement}
 */ function insert(parentVNode, oldDom, parentDom, shouldPlace) {
    var _parentVNode$_dom, _parentVNode$_dom2;
    // Note: VNodes in nested suspended trees may be missing _children.
    if (typeof parentVNode.type == 'function') {
        var children = parentVNode.__k;
        for(var i = 0; children && i < children.length; i++)if (children[i]) {
            // If we enter this code path on sCU bailout, where we copy
            // oldVNode._children to newVNode._children, we need to update the old
            // children's _parent pointer to point to the newVNode (parentVNode
            // here).
            children[i].__ = parentVNode;
            oldDom = insert(children[i], oldDom, parentDom, shouldPlace);
        }
        return oldDom;
    } else if (((_parentVNode$_dom = parentVNode.__e) == null ? void 0 : _parentVNode$_dom.__nextSlotIndex) != ((_parentVNode$_dom2 = parentVNode.__e) == null ? void 0 : _parentVNode$_dom2.__slotIndex)) {
        parentVNode.__e.__slotIndex = parentVNode.__e.__nextSlotIndex;
        // `oldDom` is the diff loop's cursor: the next old DOM child to
        // process at this parent. Inserting before it places the moved
        // node at the cursor's position, which is exactly the slot we
        // are processing. Recover via `getDomSibling` if the cursor was
        // unmounted earlier in the same diff, mirroring the plain-branch.
        if (oldDom && parentVNode.type && !oldDom.parentNode) oldDom = getDomSibling(parentVNode);
        // When the cross-slot node is already at the cursor position, inserting
        // before itself corrupts BSI linked lists. Use nextSibling instead —
        // it's the same effective DOM position and emits a valid patch.
        parentDom.insertBefore(parentVNode.__e, (parentVNode.__e !== oldDom ? oldDom : oldDom && oldDom.nextSibling) || NULL);
        oldDom = parentVNode.__e;
    } else if (parentVNode.__e != oldDom) {
        if (shouldPlace) {
            if (oldDom && parentVNode.type && !oldDom.parentNode) oldDom = getDomSibling(parentVNode);
            parentDom.insertBefore(parentVNode.__e, oldDom || NULL);
        }
        oldDom = parentVNode.__e;
    }
    do oldDom = oldDom && oldDom.nextSibling;
    while (oldDom != NULL && oldDom.nodeType == 8);
    return oldDom;
}
/**
 * Flatten and loop through the children of a virtual node
 * @param {ComponentChildren} children The unflattened children of a virtual
 * node
 * @returns {VNode[]}
 */ function preact_toChildArray(children, out) {
    out = out || [];
    if (children == NULL || typeof children == 'boolean') ;
    else if (isArray(children)) children.some(function(child) {
        preact_toChildArray(child, out);
    });
    else out.push(children);
    return out;
}
/**
 * @param {VNode} childVNode
 * @param {VNode[]} oldChildren
 * @param {number} skewedIndex
 * @param {number} remainingOldChildren
 * @returns {number}
 */ function findMatchingIndex(childVNode, oldChildren, skewedIndex, remainingOldChildren) {
    var key = childVNode.key;
    var type = childVNode.type;
    var newSlot = childVNode._slotIndex;
    var oldVNode = oldChildren[skewedIndex];
    var matched = oldVNode != NULL && (oldVNode.__u & MATCHED) == 0;
    // We only need to perform a search if there are more children
    // (remainingOldChildren) to search. However, if the oldVNode we just looked
    // at skewedIndex was not already used in this diff, then there must be at
    // least 1 other (so greater than 1) remainingOldChildren to attempt to match
    // against. So the following condition checks that ensuring
    // remainingOldChildren > 1 if the oldVNode is not already used/matched. Else
    // if the oldVNode was null or matched, then there could needs to be at least
    // 1 (aka `remainingOldChildren > 0`) children to find and compare against.
    //
    // Lynx: also require matching _slotIndex so that template-slot level diffs
    // (where each child has a unique slot id) cannot reuse a vnode from a
    // different structural slot, while Fragment/list-level diffs (where all
    // children share the parent's slot id) keep their keyed reorder behavior.
    var shouldSearch = remainingOldChildren > (matched ? 1 : 0);
    if (oldVNode === NULL && key == null || matched && key == oldVNode.key && type == oldVNode.type && oldVNode._slotIndex === newSlot) return skewedIndex;
    else if (shouldSearch) {
        var x = skewedIndex - 1;
        var y = skewedIndex + 1;
        while(x >= 0 || y < oldChildren.length){
            var childIndex = x >= 0 ? x-- : y++;
            oldVNode = oldChildren[childIndex];
            if (oldVNode != NULL && (oldVNode.__u & MATCHED) == 0 && key == oldVNode.key && type == oldVNode.type && oldVNode._slotIndex === newSlot) return childIndex;
        }
    }
    return -1;
}
// import { IS_NON_DIMENSIONAL, NULL, SVG_NAMESPACE } from '../constants';
// import options from '../options';
// function setStyle(style, key, value) {
// 	if (key[0] == '-') {
// 		style.setProperty(key, value == NULL ? '' : value);
// 	} else if (value == NULL) {
// 		style[key] = '';
// 	} else if (typeof value != 'number' || IS_NON_DIMENSIONAL.test(key)) {
// 		style[key] = value;
// 	} else {
// 		style[key] = value + 'px';
// 	}
// }
// const CAPTURE_REGEX = /(PointerCapture)$|Capture$/i;
// A logical clock to solve issues like https://github.com/preactjs/preact/issues/3927.
// When the DOM performs an event it leaves micro-ticks in between bubbling up which means that
// an event can trigger on a newly reated DOM-node while the event bubbles up.
//
// Originally inspired by Vue
// (https://github.com/vuejs/core/blob/caeb8a68811a1b0f79/packages/runtime-dom/src/modules/events.ts#L90-L101),
// but modified to use a logical clock instead of Date.now() in case event handlers get attached
// and events get dispatched during the same millisecond.
//
// The clock is incremented after each new event dispatch. This allows 1 000 000 new events
// per second for over 280 years before the value reaches Number.MAX_SAFE_INTEGER (2**53 - 1).
// let eventClock = 0;
/**
 * Set a property value on a DOM node
 * @param {import('../internal').PreactElement} dom The DOM node to modify
 * @param {string} name The name of the property to set
 * @param {*} value The value to set the property to
 * @param {*} oldValue The old value the property had
 * @param {string} namespace Whether or not this DOM node is an SVG node or not
 */ function setProperty(dom, name, value, oldValue, namespace) {
    dom.setAttribute(name, value);
// let useCapture;
// o: if (name == 'style') {
// 	if (typeof value == 'string') {
// 		dom.style.cssText = value;
// 	} else {
// 		if (typeof oldValue == 'string') {
// 			dom.style.cssText = oldValue = '';
// 		}
// 		if (oldValue) {
// 			for (name in oldValue) {
// 				if (!(value && name in value)) {
// 					setStyle(dom.style, name, '');
// 				}
// 			}
// 		}
// 		if (value) {
// 			for (name in value) {
// 				if (!oldValue || value[name] != oldValue[name]) {
// 					setStyle(dom.style, name, value[name]);
// 				}
// 			}
// 		}
// 	}
// }
// // Benchmark for comparison: https://esbench.com/bench/574c954bdb965b9a00965ac6
// else if (name[0] == 'o' && name[1] == 'n') {
// 	useCapture = name != (name = name.replace(CAPTURE_REGEX, '$1'));
// 	const lowerCaseName = name.toLowerCase();
// 	// Infer correct casing for DOM built-in events:
// 	if (lowerCaseName in dom || name == 'onFocusOut' || name == 'onFocusIn')
// 		name = lowerCaseName.slice(2);
// 	else name = name.slice(2);
// 	if (!dom._listeners) dom._listeners = {};
// 	dom._listeners[name + useCapture] = value;
// 	if (value) {
// 		if (!oldValue) {
// 			value._attached = eventClock;
// 			dom.addEventListener(
// 				name,
// 				useCapture ? eventProxyCapture : eventProxy,
// 				useCapture
// 			);
// 		} else {
// 			value._attached = oldValue._attached;
// 		}
// 	} else {
// 		dom.removeEventListener(
// 			name,
// 			useCapture ? eventProxyCapture : eventProxy,
// 			useCapture
// 		);
// 	}
// } else {
// 	if (namespace == SVG_NAMESPACE) {
// 		// Normalize incorrect prop usage for SVG:
// 		// - xlink:href / xlinkHref --> href (xlink:href was removed from SVG and isn't needed)
// 		// - className --> class
// 		name = name.replace(/xlink(H|:h)/, 'h').replace(/sName$/, 's');
// 	} else if (
// 		name != 'width' &&
// 		name != 'height' &&
// 		name != 'href' &&
// 		name != 'list' &&
// 		name != 'form' &&
// 		// Default value in browsers is `-1` and an empty string is
// 		// cast to `0` instead
// 		name != 'tabIndex' &&
// 		name != 'download' &&
// 		name != 'rowSpan' &&
// 		name != 'colSpan' &&
// 		name != 'role' &&
// 		name != 'popover' &&
// 		name in dom
// 	) {
// 		try {
// 			dom[name] = value == NULL ? '' : value;
// 			// labelled break is 1b smaller here than a return statement (sorry)
// 			break o;
// 		} catch (e) {}
// 	}
// 	// aria- and data- attributes have no boolean representation.
// 	// A `false` value is different from the attribute not being
// 	// present, so we can't remove it. For non-boolean aria
// 	// attributes we could treat false as a removal, but the
// 	// amount of exceptions would cost too many bytes. On top of
// 	// that other frameworks generally stringify `false`.
// 	if (typeof value == 'function') {
// 		// never serialize functions as attribute values
// 	} else if (value != NULL && (value !== false || name[4] == '-')) {
// 		dom.setAttribute(name, name == 'popover' && value == true ? '' : value);
// 	} else {
// 		dom.removeAttribute(name);
// 	}
// }
}
/**
 * Create an event proxy function.
 * @param {boolean} useCapture Is the event handler for the capture phase.
 * @private
 */ // function createEventProxy(useCapture) {
// 	/**
// 	 * Proxy an event to hooked event handlers
// 	 * @param {import('../internal').PreactEvent} e The event object from the browser
// 	 * @private
// 	 */
// 	return function (e) {
// 		if (this._listeners) {
// 			const eventHandler = this._listeners[e.type + useCapture];
// 			if (e._dispatched == NULL) {
// 				e._dispatched = eventClock++;
// 				// When `e._dispatched` is smaller than the time when the targeted event
// 				// handler was attached we know we have bubbled up to an element that was added
// 				// during patching the DOM.
// 			} else if (e._dispatched < eventHandler._attached) {
// 				return;
// 			}
// 			return eventHandler(options.event ? options.event(e) : e);
// 		}
// 	};
// }
// const eventProxy = createEventProxy(false);
// const eventProxyCapture = createEventProxy(true);
/**
 * @typedef {import('../internal').ComponentChildren} ComponentChildren
 * @typedef {import('../internal').Component} Component
 * @typedef {import('../internal').PreactElement} PreactElement
 * @typedef {import('../internal').VNode} VNode
 */ /**
 * @template {any} T
 * @typedef {import('../internal').Ref<T>} Ref<T>
 */ /**
 * Diff two virtual nodes and apply proper changes to the DOM
 * @param {PreactElement} parentDom The parent of the DOM element
 * @param {VNode} newVNode The new virtual node
 * @param {VNode} oldVNode The old virtual node
 * @param {object} globalContext The current context object. Modified by
 * getChildContext
 * @param {string} namespace Current namespace of the DOM node (HTML, SVG, or MathML)
 * @param {number} slotIndex The index of the slot being processed
 * @param {Array<PreactElement>} excessDomChildren
 * @param {Array<Component>} commitQueue List of components which have callbacks
 * to invoke in commitRoot
 * @param {PreactElement} oldDom The current attached DOM element any new dom
 * elements should be placed around. Likely `null` on first render (except when
 * hydrating). Can be a sibling DOM element when diffing Fragments that have
 * siblings. In most cases, it starts out as `oldChildren[0]._dom`.
 * @param {boolean} isHydrating Whether or not we are in hydration
 * @param {any[]} refQueue an array of elements needed to invoke refs
 */ function diff(parentDom, newVNode, oldVNode, globalContext, namespace, slotIndex, excessDomChildren, commitQueue, oldDom, isHydrating, refQueue) {
    /** @type {any} */ var tmp, newType = newVNode.type;
    // When passing through createElement it assigns the object
    // constructor as undefined. This to prevent JSON-injection.
    if (newVNode.constructor !== UNDEFINED) return NULL;
    // If the previous diff bailed out, resume creating/hydrating.
    if (oldVNode.__u & MODE_SUSPENDED) {
        isHydrating = !!(oldVNode.__u & MODE_HYDRATE);
        oldDom = newVNode.__e = oldVNode.__e;
        excessDomChildren = [
            oldDom
        ];
    }
    if (tmp = preact_options.__b) tmp(newVNode);
    if (tmp = preact_options._diff2) tmp(newVNode, oldVNode);
    outer: if (typeof newType == 'function') try {
        var c, isNew, oldProps, oldState, snapshot, clearProcessingException;
        var newProps = newVNode.props;
        var isClassComponent = newType.prototype && newType.prototype.render;
        // Necessary for createContext api. Setting this property will pass
        // the context value as `this.context` just for this component.
        tmp = newType.contextType;
        var provider = tmp && globalContext[tmp.__c];
        var componentContext = tmp ? provider ? provider.props.value : tmp.__ : globalContext;
        // Get component and set it to `c`
        if (oldVNode.__c) {
            c = newVNode.__c = oldVNode.__c;
            clearProcessingException = c.__ = c.__E;
        } else {
            // Instantiate the new component
            if (isClassComponent) newVNode.__c = c = new newType(newProps, componentContext); // eslint-disable-line new-cap
            else {
                // @ts-expect-error Trust me, Component implements the interface we want
                newVNode.__c = c = new BaseComponent(newProps, componentContext);
                c.constructor = newType;
                c.render = doRender;
            }
            if (provider) provider.sub(c);
            if (!c.state) c.state = {};
            c.__n = globalContext;
            isNew = c.__d = true;
            c.__h = [];
            c._sb = [];
        }
        // Invoke getDerivedStateFromProps
        if (isClassComponent && c.__s == NULL) c.__s = c.state;
        if (isClassComponent && newType.getDerivedStateFromProps != NULL) {
            if (c.__s == c.state) c.__s = preact_assign({}, c.__s);
            preact_assign(c.__s, newType.getDerivedStateFromProps(newProps, c.__s));
        }
        oldProps = c.props;
        oldState = c.state;
        c.__v = newVNode;
        // Invoke pre-render lifecycle methods
        if (isNew) {
            if (isClassComponent && newType.getDerivedStateFromProps == NULL && c.componentWillMount != NULL) c.componentWillMount();
            if (isClassComponent && c.componentDidMount != NULL) c.__h.push(c.componentDidMount);
        } else {
            if (isClassComponent && newType.getDerivedStateFromProps == NULL && newProps !== oldProps && c.componentWillReceiveProps != NULL) c.componentWillReceiveProps(newProps, componentContext);
            if (newVNode.__v == oldVNode.__v || !c.__e && c.shouldComponentUpdate != NULL && c.shouldComponentUpdate(newProps, c.__s, componentContext) === false) {
                // More info about this here: https://gist.github.com/JoviDeCroock/bec5f2ce93544d2e6070ef8e0036e4e8
                if (newVNode.__v != oldVNode.__v) {
                    // When we are dealing with a bail because of sCU we have to update
                    // the props, state and dirty-state.
                    // when we are dealing with strict-equality we don't as the child could still
                    // be dirtied see #3883
                    c.props = newProps;
                    c.state = c.__s;
                    c.__d = false;
                }
                newVNode.__e = oldVNode.__e;
                newVNode.__k = oldVNode.__k;
                newVNode.__k.some(function(vnode) {
                    if (vnode) vnode.__ = newVNode;
                });
                EMPTY_ARR.push.apply(c.__h, c._sb);
                c._sb = [];
                if (c.__h.length) commitQueue.push(c);
                break outer;
            }
            if (c.componentWillUpdate != NULL) c.componentWillUpdate(newProps, c.__s, componentContext);
            if (isClassComponent && c.componentDidUpdate != NULL) c.__h.push(function() {
                c.componentDidUpdate(oldProps, oldState, snapshot);
            });
        }
        c.context = componentContext;
        c.props = newProps;
        c.__P = parentDom;
        c.__e = false;
        var renderHook = preact_options.__r, count = 0;
        if (isClassComponent) {
            c.state = c.__s;
            c.__d = false;
            if (renderHook) renderHook(newVNode);
            tmp = c.render(c.props, c.state, c.context);
            EMPTY_ARR.push.apply(c.__h, c._sb);
            c._sb = [];
        } else do {
            c.__d = false;
            if (renderHook) renderHook(newVNode);
            tmp = c.render(c.props, c.state, c.context);
            // Handle setState called in render, see #2553
            c.state = c.__s;
        }while (c.__d && ++count < 25);
        // Handle setState called in render, see #2553
        c.state = c.__s;
        if (c.getChildContext != NULL) globalContext = preact_assign(preact_assign({}, globalContext), c.getChildContext());
        if (isClassComponent && !isNew && c.getSnapshotBeforeUpdate != NULL) snapshot = c.getSnapshotBeforeUpdate(oldProps, oldState);
        var renderResult = tmp != NULL && tmp.type === preact_Fragment && tmp.key == NULL ? cloneNode(tmp.props.children) : tmp;
        oldDom = preact_diffChildren(parentDom, isArray(renderResult) ? renderResult : [
            renderResult
        ], newVNode, oldVNode, globalContext, namespace, slotIndex, excessDomChildren, commitQueue, oldDom, isHydrating, refQueue);
        c.base = newVNode.__e;
        // We successfully rendered this VNode, unset any stored hydration/bailout state:
        newVNode.__u &= RESET_MODE;
        if (c.__h.length) commitQueue.push(c);
        if (clearProcessingException) c.__E = c.__ = NULL;
    } catch (e) {
        newVNode.__v = NULL;
        // if hydrating or creating initial tree, bailout preserves DOM:
        if (isHydrating || excessDomChildren != NULL) {
            if (e.then) {
                newVNode.__u |= isHydrating ? MODE_HYDRATE | MODE_SUSPENDED : MODE_SUSPENDED;
                while(oldDom && oldDom.nodeType == 8 && oldDom.nextSibling)oldDom = oldDom.nextSibling;
                excessDomChildren[excessDomChildren.indexOf(oldDom)] = NULL;
                newVNode.__e = oldDom;
            } else {
                for(var i = excessDomChildren.length; i--;)removeNode(excessDomChildren[i]);
                markAsForce(newVNode);
            }
        } else {
            newVNode.__e = oldVNode.__e;
            newVNode.__k = oldVNode.__k;
            if (!e.then) markAsForce(newVNode);
        }
        preact_options.__e(e, newVNode, oldVNode);
    }
    else if (excessDomChildren == NULL && newVNode.__v == oldVNode.__v) {
        newVNode.__k = oldVNode.__k;
        newVNode.__e = oldVNode.__e;
        newVNode.__e.__nextSlotIndex = slotIndex;
    } else {
        oldDom = newVNode.__e = diffElementNodes(oldVNode.__e, newVNode, oldVNode, globalContext, namespace, slotIndex, excessDomChildren, commitQueue, isHydrating, refQueue);
        newVNode.__e.__nextSlotIndex = slotIndex;
    }
    if (tmp = preact_options.diffed) tmp(newVNode);
    return newVNode.__u & MODE_SUSPENDED ? undefined : oldDom;
}
function markAsForce(vnode) {
    if (vnode) {
        if (vnode.__c) vnode.__c.__e = true;
        if (vnode.__k) vnode.__k.some(markAsForce);
    }
}
/**
 * @param {Array<Component>} commitQueue List of components
 * which have callbacks to invoke in commitRoot
 * @param {VNode} root
 */ function commitRoot(commitQueue, root, refQueue) {
    for(var i = 0; i < refQueue.length; i++)applyRef(refQueue[i], refQueue[++i], refQueue[++i]);
    if (preact_options.__c) preact_options.__c(root, commitQueue);
    commitQueue.some(function(c) {
        try {
            // @ts-expect-error Reuse the commitQueue variable here so the type changes
            commitQueue = c.__h;
            c.__h = [];
            commitQueue.some(function(cb) {
                // @ts-expect-error See above comment on commitQueue
                cb.call(c);
            });
        } catch (e) {
            preact_options.__e(e, c.__v);
        }
    });
}
function cloneNode(node) {
    if (typeof node != 'object' || node == NULL || node.__b > 0) return node;
    if (isArray(node)) return node.map(cloneNode);
    return preact_assign({}, node);
}
/**
 * Diff two virtual nodes representing DOM element
 * @param {PreactElement} dom The DOM element representing the virtual nodes
 * being diffed
 * @param {VNode} newVNode The new virtual node
 * @param {VNode} oldVNode The old virtual node
 * @param {object} globalContext The current context object
 * @param {string} namespace Current namespace of the DOM node (HTML, SVG, or MathML)
 * @param {number} slotIndex The index of the slot being processed
 * @param {Array<PreactElement>} excessDomChildren
 * @param {Array<Component>} commitQueue List of components which have callbacks
 * to invoke in commitRoot
 * @param {boolean} isHydrating Whether or not we are in hydration
 * @param {any[]} refQueue an array of elements needed to invoke refs
 * @returns {PreactElement}
 */ function diffElementNodes(dom, newVNode, oldVNode, globalContext, namespace, slotIndex, excessDomChildren, commitQueue, isHydrating, refQueue) {
    var oldProps = oldVNode.props || preact_EMPTY_OBJ;
    var newProps = newVNode.props;
    var nodeType = /** @type {string} */ newVNode.type;
    /** @type {any} */ var i;
    /** @type {{ __html?: string }} */ var newHtml;
    /** @type {{ __html?: string }} */ var oldHtml;
    /** @type {ComponentChildren} */ var newChildren;
    var value;
    var inputValue;
    var checked;
    // Tracks entering and exiting namespaces when descending through the tree.
    if (nodeType == 'svg') namespace = SVG_NAMESPACE;
    else if (nodeType == 'math') namespace = MATH_NAMESPACE;
    else if (!namespace) namespace = XHTML_NAMESPACE;
    if (excessDomChildren != NULL) for(i = 0; i < excessDomChildren.length; i++){
        value = excessDomChildren[i];
        // if newVNode matches an element in excessDomChildren or the `dom`
        // argument matches an element in excessDomChildren, remove it from
        // excessDomChildren so it isn't later removed in diffChildren
        if (value && 'setAttribute' in value == !!nodeType && (nodeType ? value.localName == nodeType : value.nodeType == 3)) {
            dom = value;
            excessDomChildren[i] = NULL;
            break;
        }
    }
    if (dom == null) {
        if (nodeType === null) {
            dom = preact_options.document.createTextNode(newProps);
            // See comment below on the element-creation path.
            dom.__slotIndex = slotIndex;
            return dom;
        }
        dom = preact_options.document.createElementNS(namespace, nodeType, newProps.is && newProps);
        // Baseline `__slotIndex` on fresh DOM so insert()'s slot-branch only
        // fires on a real cross-slot transition, not spuriously on first
        // placement (when `__slotIndex` would otherwise be `undefined` and
        // mismatch the freshly-set `__nextSlotIndex`). Without this, a mid-diff
        // detached sibling can end up as an `insertBefore` reference and the
        // browser throws NotFoundError. Mirrors Lynx's `SnapshotInstance`
        // `__slotIndex = 0` class-field default.
        dom.__slotIndex = slotIndex;
        // we are creating a new node, so we can assume this is a new subtree (in
        // case we are hydrating), this deopts the hydrate
        if (isHydrating) {
            if (preact_options.__m) preact_options.__m(newVNode, excessDomChildren);
            isHydrating = false;
        }
        // we created a new parent, so none of the previously attached children can be reused:
        excessDomChildren = NULL;
    }
    if (nodeType == NULL) {
        if (oldProps !== newProps && (!isHydrating || dom.data != newProps)) dom.data = newProps;
    } else {
        // If excessDomChildren was not null, repopulate it with the current element's children:
        excessDomChildren = excessDomChildren && slice.call(dom.childNodes);
        // If we are in a situation where we are not hydrating but are using
        // existing DOM (e.g. replaceNode) we should read the existing DOM
        // attributes to diff them
        if (!isHydrating && excessDomChildren != NULL) {
            oldProps = {};
            for(i = 0; i < dom.attributes.length; i++){
                value = dom.attributes[i];
                oldProps[value.name] = value.value;
            }
        }
        for(i in oldProps){
            value = oldProps[i];
            if (i == 'dangerouslySetInnerHTML') oldHtml = value;
            else if (i != 'children' && !(i in newProps) && !(i == 'value' && 'defaultValue' in newProps) && !(i == 'checked' && 'defaultChecked' in newProps)) setProperty(dom, i, NULL);
        }
        var hasNamedChildren = false;
        // During hydration, props are not diffed at all (including dangerouslySetInnerHTML)
        // @TODO we should warn in debug mode when props don't match here.
        for(i in newProps){
            value = newProps[i];
            if (i == 'children') newChildren = value;
            else if (typeof i == 'string' && i[0] == '$') {
                var _newChildren;
                (_newChildren = newChildren) != null ? _newChildren : newChildren = [];
                hasNamedChildren = true;
                var index = +i.slice(1);
                newChildren[index] = value;
            } else if (i == 'dangerouslySetInnerHTML') newHtml = value;
            else if (i == 'value') inputValue = value;
            else if (i == 'checked') checked = value;
            else if ((!isHydrating || typeof value == 'function') && oldProps[i] !== value) setProperty(dom, i, value);
        }
        // If the new vnode didn't have dangerouslySetInnerHTML, diff its children
        if (newHtml) {
            // Avoid re-applying the same '__html' if it did not changed between re-render
            if (!isHydrating && (!oldHtml || newHtml.__html != oldHtml.__html && newHtml.__html != dom.innerHTML)) dom.innerHTML = newHtml.__html;
            newVNode.__k = [];
        } else {
            if (oldHtml) dom.innerHTML = '';
            var _slotIndex = slotIndex;
            if (hasNamedChildren) {
                // @ts-expect-error newChildren must be an array
                if (newChildren.length === 1) {
                    newChildren = newChildren[0];
                    _slotIndex = 0;
                } else _slotIndex = true;
            }
            preact_diffChildren(newVNode.type == 'template' ? dom.content : dom, isArray(newChildren) ? newChildren : [
                newChildren
            ], newVNode, oldVNode, globalContext, nodeType == 'foreignObject' ? XHTML_NAMESPACE : namespace, _slotIndex, excessDomChildren, commitQueue, excessDomChildren ? excessDomChildren[0] : oldVNode.__k && getDomSibling(oldVNode, 0), isHydrating, refQueue);
            // Remove children that are not part of any vnode.
            if (excessDomChildren != NULL) for(i = excessDomChildren.length; i--;)removeNode(excessDomChildren[i]);
        }
        // As above, don't diff props during hydration
        if (!isHydrating) {
            i = 'value';
            if (nodeType == 'progress' && inputValue == NULL) dom.removeAttribute('value');
            else if (inputValue != UNDEFINED && // despite the attribute not being present. When the attribute
            // is missing the progress bar is treated as indeterminate.
            // To fix that we'll always update it when it is 0 for progress elements
            (inputValue !== dom[i] || nodeType == 'progress' && !inputValue || // This is only for IE 11 to fix <select> value not being updated.
            // To avoid a stale select value we need to set the option.value
            // again, which triggers IE11 to re-evaluate the select value
            nodeType == 'option' && inputValue != oldProps[i])) setProperty(dom, i, inputValue);
            i = 'checked';
            if (checked != UNDEFINED && checked != dom[i]) setProperty(dom, i, checked);
        }
    }
    return dom;
}
/**
 * Invoke or update a ref, depending on whether it is a function or object ref.
 * @param {Ref<any> & { _unmount?: unknown }} ref
 * @param {any} value
 * @param {VNode} vnode
 */ function applyRef(ref, value, vnode) {
    try {
        if (typeof ref == 'function') {
            var hasRefUnmount = typeof ref.__u == 'function';
            if (hasRefUnmount) ref.__u();
            if (!hasRefUnmount || value != NULL) // instance object itself to avoid shape
            // transitioning vnode
            ref.__u = ref(value);
        } else ref.current = value;
    } catch (e) {
        preact_options.__e(e, vnode);
    }
}
/**
 * Unmount a virtual node from the tree and apply DOM changes
 * @param {VNode} vnode The virtual node to unmount
 * @param {VNode} parentVNode The parent of the VNode that initiated the unmount
 * @param {boolean} [skipRemove] Flag that indicates that a parent node of the
 * current element is already detached from the DOM.
 */ function unmount(vnode, parentVNode, skipRemove) {
    var r;
    if (preact_options.unmount) preact_options.unmount(vnode);
    if (r = vnode.ref) {
        if (!r.current || r.current == vnode.__e) applyRef(r, NULL, parentVNode);
    }
    if ((r = vnode.__c) != NULL) {
        if (r.componentWillUnmount) try {
            r.componentWillUnmount();
        } catch (e) {
            preact_options.__e(e, parentVNode);
        }
        r.base = r.__P = NULL;
    }
    if (r = vnode.__k) {
        for(var i = 0; i < r.length; i++)if (r[i]) unmount(r[i], parentVNode, skipRemove || typeof vnode.type != 'function');
    }
    if (!skipRemove) removeNode(vnode.__e);
    vnode.__c = vnode.__ = vnode.__e = UNDEFINED;
}
/** The `.render()` method for a PFC backing instance. */ function doRender(props, state, context) {
    return this.constructor(props, context);
}
/**
 * Render a Preact virtual node into a DOM element
 * @param {import('./internal').ComponentChild} vnode The virtual node to render
 * @param {import('./internal').PreactElement} parentDom The DOM element to render into
 * @param {import('./internal').PreactElement | object} [replaceNode] Optional: Attempt to re-use an
 * existing DOM tree rooted at `replaceNode`
 */ function preact_render(vnode, parentDom, replaceNode) {
    'background only';
    if (preact_options.__) preact_options.__(vnode, parentDom);
    // We abuse the `replaceNode` parameter in `hydrate()` to signal if we are in
    // hydration mode or not by passing the `hydrate` function instead of a DOM
    // element..
    var isHydrating = typeof replaceNode == 'function';
    // To be able to support calling `render()` multiple times on the same
    // DOM node, we need to obtain a reference to the previous tree. We do
    // this by assigning a new `_children` property to DOM nodes which points
    // to the last rendered tree. By default this property is not present, which
    // means that we are mounting a new tree for the first time.
    var oldVNode = isHydrating ? NULL : replaceNode && replaceNode.__k || parentDom.__k;
    vnode = (!isHydrating && replaceNode || parentDom).__k = preact_createElement(preact_Fragment, NULL, [
        vnode
    ]);
    // List of effects that need to be called after diffing.
    var commitQueue = [], refQueue = [];
    diff(parentDom, // our custom `_children` property.
    vnode, oldVNode || preact_EMPTY_OBJ, preact_EMPTY_OBJ, parentDom.namespaceURI, 0, !isHydrating && replaceNode ? [
        replaceNode
    ] : oldVNode ? NULL : parentDom.firstChild ? slice.call(parentDom.childNodes) : NULL, commitQueue, !isHydrating && replaceNode ? replaceNode : oldVNode ? oldVNode.__e : parentDom.firstChild, isHydrating, refQueue);
    // Flush all queued effects
    commitRoot(commitQueue, vnode, refQueue);
}
/**
 * Update an existing DOM element with data from a Preact virtual node
 * @param {import('./internal').ComponentChild} vnode The virtual node to render
 * @param {import('./internal').PreactElement} parentDom The DOM element to update
 */ function preact_hydrate(vnode, parentDom) {
    'background only';
    preact_render(vnode, parentDom, preact_hydrate);
}
/**
 * Clones the given VNode, optionally adding attributes/props and replacing its
 * children.
 * @param {import('./internal').VNode} vnode The virtual DOM element to clone
 * @param {object} props Attributes/props to add when cloning
 * @param {Array<import('./internal').ComponentChildren>} rest Any additional arguments will be used
 * as replacement children.
 * @returns {import('./internal').VNode}
 */ function preact_cloneElement(vnode, props, children) {
    var normalizedProps = preact_assign({}, vnode.props), key, ref, i;
    var defaultProps;
    if (vnode.type && vnode.type.defaultProps) defaultProps = vnode.type.defaultProps;
    for(i in props){
        if (i == 'key') key = props[i];
        else if (i == 'ref') ref = props[i];
        else if (props[i] === UNDEFINED && defaultProps != UNDEFINED) normalizedProps[i] = defaultProps[i];
        else normalizedProps[i] = props[i];
    }
    if (arguments.length > 2) normalizedProps.children = arguments.length > 3 ? slice.call(arguments, 2) : children;
    return createVNode(vnode.type, normalizedProps, key || vnode.key, ref || vnode.ref, NULL);
}
var preact_i = 0;
function preact_createContext(defaultValue) {
    function Context(props) {
        if (!this.getChildContext) {
            /** @type {Set<import('./internal').Component> | null} */ var subs = new Set();
            var ctx = {};
            ctx[Context.__c] = this;
            this.getChildContext = function() {
                return ctx;
            };
            this.componentWillUnmount = function() {
                subs = NULL;
            };
            this.shouldComponentUpdate = function(_props) {
                // @ts-expect-error even
                if (this.props.value != _props.value) subs.forEach(function(c) {
                    c.__e = true;
                    enqueueRender(c);
                });
            };
            this.sub = function(c) {
                subs.add(c);
                var old = c.componentWillUnmount;
                c.componentWillUnmount = function() {
                    if (subs) subs.delete(c);
                    if (old) old.call(c);
                };
            };
        }
        return props.children;
    }
    Context.__c = '__cC' + preact_i++;
    Context.__ = defaultValue;
    /** @type {import('./internal').FunctionComponent} */ Context.Consumer = function(props, contextValue) {
        return props.children(contextValue);
    };
    // we could also get rid of _contextRef entirely
    Context.Provider = Context.__l = Context.Consumer.contextType = Context;
    return Context;
}
 //# sourceMappingURL=preact.module.js.map

;// CONCATENATED MODULE: ./node_modules/preact/jsx-runtime/dist/jsxRuntime.mjs


var ENCODED_ENTITIES = /["&<]/;
/** @param {string} str */ function encodeEntities(str) {
    // Skip all work for strings with no entities needing encoding:
    if (str.length === 0 || ENCODED_ENTITIES.test(str) === false) return str;
    var last = 0, i = 0, out = '', ch = '';
    // Seek forward in str until the next entity char:
    for(; i < str.length; i++){
        switch(str.charCodeAt(i)){
            case 34:
                ch = '&quot;';
                break;
            case 38:
                ch = '&amp;';
                break;
            case 60:
                ch = '&lt;';
                break;
            default:
                continue;
        }
        // Append skipped/buffered characters and the encoded entity:
        if (i !== last) out += str.slice(last, i);
        out += ch;
        // Start the next seek/buffer after the entity's offset:
        last = i + 1;
    }
    if (i !== last) out += str.slice(last, i);
    return out;
}
/** Normal hydration that attaches to a DOM tree but does not diff it. */ var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
var jsxRuntime_vnodeId = 0;
var jsxRuntime_isArray = Array.isArray;
/**
 * @fileoverview
 * This file exports various methods that implement Babel's "automatic" JSX runtime API:
 * - jsx(type, props, key)
 * - jsxs(type, props, key)
 * - jsxDEV(type, props, key, __source, __self)
 *
 * The implementation of createVNode here is optimized for performance.
 * Benchmarks: https://esbench.com/bench/5f6b54a0b4632100a7dcd2b3
 */ /**
 * JSX.Element factory used by Babel's {runtime:"automatic"} JSX transform
 * @param {VNode['type']} type
 * @param {VNode['props']} props
 * @param {VNode['key']} [key]
 * @param {unknown} [isStaticChildren]
 * @param {unknown} [__source]
 * @param {unknown} [__self]
 */ function jsxRuntime_createVNode(type, props, key, isStaticChildren, __source, __self) {
    if (!props) props = {};
    // We'll want to preserve `ref` in props to get rid of the need for
    // forwardRef components in the future, but that should happen via
    // a separate PR.
    var normalizedProps = props, ref, i;
    if ('ref' in normalizedProps) {
        normalizedProps = {};
        for(i in props)if (i == 'ref') ref = props[i];
        else normalizedProps[i] = props[i];
    }
    /** @type {VNode & { __source: any; __self: any }} */ var vnode = {
        type: type,
        props: normalizedProps,
        key: key,
        ref: ref,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __c: null,
        constructor: undefined,
        __v: --jsxRuntime_vnodeId,
        __i: -1,
        __u: 0,
        __source: __source,
        __self: __self
    };
    // If a Component VNode, check for and apply defaultProps.
    // Note: `type` is often a String, and can be `undefined` in development.
    if (typeof type === 'function' && (ref = type.defaultProps)) {
        for(i in ref)if (normalizedProps[i] === undefined) normalizedProps[i] = ref[i];
    }
    if (preact_options.vnode) preact_options.vnode(vnode);
    return vnode;
}
/**
 * Create a template vnode. This function is not expected to be
 * used directly, but rather through a precompile JSX transform
 * @param {string[]} templates
 * @param  {Array<string | null | VNode>} exprs
 * @returns {VNode}
 */ function jsxTemplate(templates) {
    var vnode = jsxRuntime_createVNode(Fragment, {
        tpl: templates,
        exprs: [].slice.call(arguments, 1)
    });
    // Bypass render to string top level Fragment optimization
    vnode.key = vnode.__v;
    return vnode;
}
var JS_TO_CSS = (/* unused pure expression or super */ null && ({}));
var CSS_REGEX = /[A-Z]/g;
/**
 * Unwrap potential signals.
 * @param {*} value
 * @returns {*}
 */ function normalizeAttrValue(value) {
    return value !== null && typeof value === 'object' && typeof value.valueOf === 'function' ? value.valueOf() : value;
}
/**
 * Serialize an HTML attribute to a string. This function is not
 * expected to be used directly, but rather through a precompile
 * JSX transform
 * @param {string} name The attribute name
 * @param {*} value The attribute value
 * @returns {string}
 */ function jsxAttr(name, value) {
    if (options.attr) {
        var result = options.attr(name, value);
        if (typeof result === 'string') return result;
    }
    value = normalizeAttrValue(value);
    if (name === 'ref' || name === 'key') return '';
    if (name === 'style' && typeof value === 'object') {
        var str = '';
        for(var prop in value){
            var val = value[prop];
            if (val != null && val !== '') {
                var _name = prop[0] == '-' ? prop : JS_TO_CSS[prop] || (JS_TO_CSS[prop] = prop.replace(CSS_REGEX, '-$&').toLowerCase());
                var suffix = ';';
                if (typeof val === 'number' && // Exclude custom-attributes
                !_name.startsWith('--') && !IS_NON_DIMENSIONAL.test(_name)) suffix = 'px;';
                str = str + _name + ':' + val + suffix;
            }
        }
        return name + '="' + encodeEntities(str) + '"';
    }
    if (value == null || value === false || typeof value === 'function' || typeof value === 'object') return '';
    else if (value === true) return name;
    return name + '="' + encodeEntities('' + value) + '"';
}
/**
 * Escape a dynamic child passed to `jsxTemplate`. This function
 * is not expected to be used directly, but rather through a
 * precompile JSX transform
 * @param {*} value
 * @returns {string | null | VNode | Array<string | null | VNode>}
 */ function jsxEscape(value) {
    if (value == null || typeof value === 'boolean' || typeof value === 'function') return null;
    if (typeof value === 'object') {
        // Check for VNode
        if (value.constructor === undefined) return value;
        if (jsxRuntime_isArray(value)) {
            for(var i = 0; i < value.length; i++)value[i] = jsxEscape(value[i]);
            return value;
        }
    }
    return encodeEntities('' + value);
}
 //# sourceMappingURL=jsxRuntime.module.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/jsx-runtime/index.js
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.


;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/core/lynx/runtime-backend.js
// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
var RUNTIME_BACKEND_SNAPSHOT = 'Snapshot';
var RUNTIME_BACKEND_ELEMENT_TEMPLATE = 'Element Template';
var sRuntimeBackend = Symbol.for('__REACT_LYNX_RUNTIME_BACKEND__');
function registerRuntimeBackend(backend) {
    var target = lynx;
    var currentBackend = target[sRuntimeBackend];
    if (currentBackend !== undefined && currentBackend !== backend) throw new Error(`ReactLynx runtime backend mismatch: the current template uses ${currentBackend}, but this bundle was built for ${backend}. Snapshot and Element Template templates cannot share lazy bundles. Rebuild the main template and lazy bundle with the same elementTemplate setting.`);
    Object.defineProperty(target, sRuntimeBackend, {
        value: backend,
        enumerable: false,
        writable: false,
        configurable: true
    });
} //# sourceMappingURL=runtime-backend.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/runtime-backend-marker.js
// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

registerRuntimeBackend(RUNTIME_BACKEND_SNAPSHOT); //# sourceMappingURL=runtime-backend-marker.js.map

;// CONCATENATED MODULE: ./node_modules/preact/hooks/dist/hooks.mjs

/** @type {number} */ var currentIndex;
/** @type {import('./internal').Component} */ var currentComponent;
/** @type {import('./internal').Component} */ var previousComponent;
/** @type {number} */ var currentHook = 0;
/** @type {Array<import('./internal').Component>} */ var afterPaintEffects = [];
// Cast to use internal Options type
var hooks_options = /** @type {import('./internal').Options} */ preact_options;
var oldBeforeDiff = hooks_options.__b;
var oldBeforeRender = hooks_options.__r;
var hooks_oldAfterDiff = hooks_options.diffed;
var oldCommit = hooks_options.__c;
var oldBeforeUnmount = hooks_options.unmount;
var hooks_oldRoot = hooks_options.__;
// We take the minimum timeout for requestAnimationFrame to ensure that
// the callback is invoked after the next frame. 35ms is based on a 30hz
// refresh rate, which is the minimum rate for a smooth user experience.
var RAF_TIMEOUT = 35;
var prevRaf;
/** @type {(vnode: import('./internal').VNode) => void} */ hooks_options.__b = function(vnode) {
    currentComponent = null;
    if (oldBeforeDiff) oldBeforeDiff(vnode);
};
hooks_options.__ = function(vnode, parentDom) {
    if (vnode && parentDom.__k && parentDom.__k.__m) vnode.__m = parentDom.__k.__m;
    if (hooks_oldRoot) hooks_oldRoot(vnode, parentDom);
};
/** @type {(vnode: import('./internal').VNode) => void} */ hooks_options.__r = function(vnode) {
    if (oldBeforeRender) oldBeforeRender(vnode);
    currentComponent = vnode.__c;
    currentIndex = 0;
    var hooks = currentComponent.__H;
    if (hooks) {
        if (previousComponent === currentComponent) {
            hooks.__h = [];
            currentComponent.__h = [];
            hooks.__.some(function(hookItem) {
                if (hookItem.__N) hookItem.__ = hookItem.__N;
                hookItem._pendingArgs = hookItem.__N = undefined;
            });
        } else {
            hooks.__h.some(invokeCleanup);
            hooks.__h.some(invokeEffect);
            hooks.__h = [];
            currentIndex = 0;
        }
    }
    previousComponent = currentComponent;
};
/** @type {(vnode: import('./internal').VNode) => void} */ hooks_options.diffed = function(vnode) {
    if (hooks_oldAfterDiff) hooks_oldAfterDiff(vnode);
    var c = vnode.__c;
    if (c && c.__H) {
        if (c.__H.__h.length) afterPaint(afterPaintEffects.push(c));
        c.__H.__.some(function(hookItem) {
            if (hookItem._pendingArgs) hookItem.__H = hookItem._pendingArgs;
            hookItem._pendingArgs = undefined;
        });
    }
    previousComponent = currentComponent = null;
};
// TODO: Improve typing of commitQueue parameter
/** @type {(vnode: import('./internal').VNode, commitQueue: any) => void} */ hooks_options.__c = function(vnode, commitQueue) {
    commitQueue.some(function(component) {
        try {
            component.__h.some(invokeCleanup);
            component.__h = component.__h.filter(function(cb) {
                return cb.__ ? invokeEffect(cb) : true;
            });
        } catch (e) {
            commitQueue.some(function(c) {
                if (c.__h) c.__h = [];
            });
            commitQueue = [];
            hooks_options.__e(e, component.__v);
        }
    });
    if (oldCommit) oldCommit(vnode, commitQueue);
};
/** @type {(vnode: import('./internal').VNode) => void} */ hooks_options.unmount = function(vnode) {
    if (oldBeforeUnmount) oldBeforeUnmount(vnode);
    var c = vnode.__c;
    if (c && c.__H) {
        var hasErrored;
        c.__H.__.some(function(s) {
            try {
                invokeCleanup(s);
            } catch (e) {
                hasErrored = e;
            }
        });
        c.__H = undefined;
        if (hasErrored) hooks_options.__e(hasErrored, c.__v);
    }
};
/**
 * Get a hook's state from the currentComponent
 * @param {number} index The index of the hook to get
 * @param {number} type The index of the hook to get
 * @returns {any}
 */ function getHookState(index, type) {
    if (hooks_options.__h) hooks_options.__h(currentComponent, index, currentHook || type);
    currentHook = 0;
    // Largely inspired by:
    // * https://github.com/michael-klein/funcy.js/blob/f6be73468e6ec46b0ff5aa3cc4c9baf72a29025a/src/hooks/core_hooks.mjs
    // * https://github.com/michael-klein/funcy.js/blob/650beaa58c43c33a74820a3c98b3c7079cf2e333/src/renderer.mjs
    // Other implementations to look at:
    // * https://codesandbox.io/s/mnox05qp8
    var hooks = currentComponent.__H || (currentComponent.__H = {
        __: [],
        __h: []
    });
    if (index >= hooks.__.length) hooks.__.push({});
    return hooks.__[index];
}
/**
 * @template {unknown} S
 * @param {import('./index').Dispatch<import('./index').StateUpdater<S>>} [initialState]
 * @returns {[S, (state: S) => void]}
 */ function hooks_useState(initialState) {
    currentHook = 1;
    return hooks_useReducer(invokeOrReturn, initialState);
}
/**
 * @template {unknown} S
 * @template {unknown} A
 * @param {import('./index').Reducer<S, A>} reducer
 * @param {import('./index').Dispatch<import('./index').StateUpdater<S>>} initialState
 * @param {(initialState: any) => void} [init]
 * @returns {[ S, (state: S) => void ]}
 */ function hooks_useReducer(reducer, initialState, init) {
    /** @type {import('./internal').ReducerHookState} */ var hookState = getHookState(currentIndex++, 2);
    hookState._reducer = reducer;
    if (!hookState.__c) {
        hookState.__ = [
            !init ? invokeOrReturn(undefined, initialState) : init(initialState),
            function(action) {
                var currentValue = hookState.__N ? hookState.__N[0] : hookState.__[0];
                var nextValue = hookState._reducer(currentValue, action);
                if (currentValue !== nextValue) {
                    hookState.__N = [
                        nextValue,
                        hookState.__[1]
                    ];
                    hookState.__c.setState({});
                }
            }
        ];
        hookState.__c = currentComponent;
        if (!currentComponent.__f) {
            // This SCU has the purpose of bailing out after repeated updates
            // to stateful hooks.
            // we store the next value in _nextValue[0] and keep doing that for all
            // state setters, if we have next states and
            // all next states within a component end up being equal to their original state
            // we are safe to bail out for this specific component.
            /**
       *
       * @type {import('./internal').Component["shouldComponentUpdate"]}
       */ // @ts-ignore - We don't use TS to downtranspile
            // eslint-disable-next-line no-inner-declarations
            var updateHookState = function updateHookState(p, s, c) {
                if (!hookState.__c.__H) return true;
                var stateHooks = hookState.__c.__H.__.filter(function(x) {
                    return x.__c;
                });
                var allHooksEmpty = stateHooks.every(function(x) {
                    return !x.__N;
                });
                // When we have no updated hooks in the component we invoke the previous SCU or
                // traverse the VDOM tree further.
                if (allHooksEmpty) return prevScu ? prevScu.call(this, p, s, c) : true;
                // We check whether we have components with a nextValue set that
                // have values that aren't equal to one another this pushes
                // us to update further down the tree
                var shouldUpdate = hookState.__c.props !== p;
                stateHooks.some(function(hookItem) {
                    if (hookItem.__N) {
                        var currentValue = hookItem.__[0];
                        hookItem.__ = hookItem.__N;
                        hookItem.__N = undefined;
                        if (currentValue !== hookItem.__[0]) shouldUpdate = true;
                    }
                });
                return prevScu ? prevScu.call(this, p, s, c) || shouldUpdate : shouldUpdate;
            };
            currentComponent.__f = true;
            var prevScu = currentComponent.shouldComponentUpdate;
            var prevCWU = currentComponent.componentWillUpdate;
            // If we're dealing with a forced update `shouldComponentUpdate` will
            // not be called. But we use that to update the hook values, so we
            // need to call it.
            currentComponent.componentWillUpdate = function(p, s, c) {
                if (this.__e) {
                    var tmp = prevScu;
                    // Clear to avoid other sCU hooks from being called
                    prevScu = undefined;
                    updateHookState(p, s, c);
                    prevScu = tmp;
                }
                if (prevCWU) prevCWU.call(this, p, s, c);
            };
            currentComponent.shouldComponentUpdate = updateHookState;
        }
    }
    return hookState.__N || hookState.__;
}
/**
 * @param {import('./internal').Effect} callback
 * @param {unknown[]} args
 * @returns {void}
 */ function hooks_useEffect(callback, args) {
    /** @type {import('./internal').EffectHookState} */ var state = getHookState(currentIndex++, 3);
    if (!hooks_options.__s && argsChanged(state.__H, args)) {
        state.__ = callback;
        state._pendingArgs = args;
        currentComponent.__H.__h.push(state);
    }
}
/**
 * @param {import('./internal').Effect} callback
 * @param {unknown[]} args
 * @returns {void}
 */ function hooks_useLayoutEffect(callback, args) {
    /** @type {import('./internal').EffectHookState} */ var state = getHookState(currentIndex++, 4);
    if (!hooks_options.__s && argsChanged(state.__H, args)) {
        state.__ = callback;
        state._pendingArgs = args;
        currentComponent.__h.push(state);
    }
}
/** @type {(initialValue: unknown) => unknown} */ function hooks_useRef(initialValue) {
    currentHook = 5;
    return hooks_useMemo(function() {
        return {
            current: initialValue
        };
    }, []);
}
/**
 * @param {object} ref
 * @param {() => object} createHandle
 * @param {unknown[]} args
 * @returns {void}
 */ function hooks_useImperativeHandle(ref, createHandle, args) {
    currentHook = 6;
    hooks_useLayoutEffect(function() {
        if (typeof ref == 'function') {
            var result = ref(createHandle());
            return function() {
                ref(null);
                if (result && typeof result == 'function') result();
            };
        } else if (ref) {
            ref.current = createHandle();
            return function() {
                return ref.current = null;
            };
        }
    }, args == null ? args : args.concat(ref));
}
/**
 * @template {unknown} T
 * @param {() => T} factory
 * @param {unknown[]} args
 * @returns {T}
 */ function hooks_useMemo(factory, args) {
    /** @type {import('./internal').MemoHookState<T>} */ var state = getHookState(currentIndex++, 7);
    if (argsChanged(state.__H, args)) {
        state.__ = factory();
        state.__H = args;
        state.__h = factory;
    }
    return state.__;
}
/**
 * @param {() => void} callback
 * @param {unknown[]} args
 * @returns {() => void}
 */ function hooks_useCallback(callback, args) {
    currentHook = 8;
    return hooks_useMemo(function() {
        return callback;
    }, args);
}
/**
 * @param {import('./internal').PreactContext} context
 */ function hooks_useContext(context) {
    var provider = currentComponent.context[context.__c];
    // We could skip this call here, but than we'd not call
    // `options._hook`. We need to do that in order to make
    // the devtools aware of this hook.
    /** @type {import('./internal').ContextHookState} */ var state = getHookState(currentIndex++, 9);
    // The devtools needs access to the context object to
    // be able to pull of the default value when no provider
    // is present in the tree.
    state.c = context;
    if (!provider) return context.__;
    // This is probably not safe to convert to "!"
    if (state.__ == null) {
        state.__ = true;
        provider.sub(currentComponent);
    }
    return provider.props.value;
}
/**
 * Display a custom label for a custom hook for the devtools panel
 * @type {<T>(value: T, cb?: (value: T) => string | number) => void}
 */ function hooks_useDebugValue(value, formatter) {
    if (hooks_options.useDebugValue) hooks_options.useDebugValue(formatter ? formatter(value) : /** @type {any}*/ value);
}
/**
 * @param {(error: unknown, errorInfo: import('preact').ErrorInfo) => void} cb
 * @returns {[unknown, () => void]}
 */ function useErrorBoundary(cb) {
    /** @type {import('./internal').ErrorBoundaryHookState} */ var state = getHookState(currentIndex++, 10);
    var errState = hooks_useState();
    state.__ = cb;
    if (!currentComponent.componentDidCatch) currentComponent.componentDidCatch = function(err, errorInfo) {
        if (state.__) state.__(err, errorInfo);
        errState[1](err);
    };
    return [
        errState[0],
        function() {
            errState[1](undefined);
        }
    ];
}
/** @type {() => string} */ function hooks_useId() {
    /** @type {import('./internal').IdHookState} */ var state = getHookState(currentIndex++, 11);
    if (!state.__) {
        // Grab either the root node or the nearest async boundary node.
        /** @type {import('./internal').VNode} */ var root = currentComponent.__v;
        while(root !== null && !root.__m && root.__ !== null)root = root.__;
        var mask = root.__m || (root.__m = [
            0,
            0
        ]);
        state.__ = 'P' + mask[0] + '-' + mask[1]++;
    }
    return state.__;
}
/**
 * After paint effects consumer.
 */ function flushAfterPaintEffects() {
    var component;
    while(component = afterPaintEffects.shift()){
        var hooks = component.__H;
        if (!component.__P || !hooks) continue;
        try {
            hooks.__h.some(invokeCleanup);
            hooks.__h.some(invokeEffect);
            hooks.__h = [];
        } catch (e) {
            hooks.__h = [];
            hooks_options.__e(e, component.__v);
        }
    }
}
var HAS_RAF = typeof requestAnimationFrame == 'function';
/**
 * Schedule a callback to be invoked after the browser has a chance to paint a new frame.
 * Do this by combining requestAnimationFrame (rAF) + setTimeout to invoke a callback after
 * the next browser frame.
 *
 * Also, schedule a timeout in parallel to the the rAF to ensure the callback is invoked
 * even if RAF doesn't fire (for example if the browser tab is not visible)
 *
 * @param {() => void} callback
 */ function afterNextFrame(callback) {
    var done = function done() {
        clearTimeout(timeout);
        if (HAS_RAF) cancelAnimationFrame(raf);
        setTimeout(callback);
    };
    var timeout = setTimeout(done, RAF_TIMEOUT);
    var raf;
    if (HAS_RAF) raf = requestAnimationFrame(done);
}
// Note: if someone used options.debounceRendering = requestAnimationFrame,
// then effects will ALWAYS run on the NEXT frame instead of the current one, incurring a ~16ms delay.
// Perhaps this is not such a big deal.
/**
 * Schedule afterPaintEffects flush after the browser paints
 * @param {number} newQueueLength
 * @returns {void}
 */ function afterPaint(newQueueLength) {
    if (newQueueLength === 1 || prevRaf !== hooks_options.requestAnimationFrame) {
        prevRaf = hooks_options.requestAnimationFrame;
        (prevRaf || afterNextFrame)(flushAfterPaintEffects);
    }
}
/**
 * @param {import('./internal').HookState} hook
 * @returns {void}
 */ function invokeCleanup(hook) {
    // A hook cleanup can introduce a call to render which creates a new root, this will call options.vnode
    // and move the currentComponent away.
    var comp = currentComponent;
    var cleanup = hook.__c;
    if (typeof cleanup == 'function') {
        hook.__c = undefined;
        cleanup();
    }
    currentComponent = comp;
}
/**
 * Invoke a Hook's effect
 * @param {import('./internal').EffectHookState} hook
 * @returns {void}
 */ function invokeEffect(hook) {
    // A hook call can introduce a call to render which creates a new root, this will call options.vnode
    // and move the currentComponent away.
    var comp = currentComponent;
    hook.__c = hook.__();
    currentComponent = comp;
}
/**
 * @param {unknown[]} oldArgs
 * @param {unknown[]} newArgs
 * @returns {boolean}
 */ function argsChanged(oldArgs, newArgs) {
    return !oldArgs || oldArgs.length !== newArgs.length || newArgs.some(function(arg, index) {
        return arg !== oldArgs[index];
    });
}
/**
 * @template Arg
 * @param {Arg} arg
 * @param {(arg: Arg) => any} f
 * @returns {any}
 */ function invokeOrReturn(arg, f) {
    return typeof f == 'function' ? f(arg) : f;
}
 //# sourceMappingURL=hooks.module.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/shared/profile.js
var _lynx_performance_isProfileRecording, profile_lynx_performance;
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/* v8 ignore start */ var noop = ()=>{};
var noopFlowId = ()=>0;
/* v8 ignore end */ var profile_isProfiling = /* @__PURE__ */ Boolean((profile_lynx_performance = lynx.performance) === null || profile_lynx_performance === void 0 ? void 0 : (_lynx_performance_isProfileRecording = profile_lynx_performance.isProfileRecording) === null || _lynx_performance_isProfileRecording === void 0 ? void 0 : _lynx_performance_isProfileRecording.call(profile_lynx_performance));
var profile_profileStart = /* @__PURE__ */ (()=>{
    var p;
    if (!(p = lynx.performance) || typeof p.profileStart !== 'function') return noop;
    return p.profileStart.bind(p);
})();
var profile_profileEnd = /* @__PURE__ */ (()=>{
    var p;
    if (!(p = lynx.performance) || typeof p.profileEnd !== 'function') return noop;
    return p.profileEnd.bind(p);
})();
var profile_profileFlowId = /* @__PURE__ */ (/* unused pure expression or super */ null && ((()=>{
    var p;
    if (!(p = lynx.performance) || typeof p.profileFlowId !== 'function') return noopFlowId;
    return p.profileFlowId.bind(p);
})())); //# sourceMappingURL=profile.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/core/hooks/react.js
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.


// Cache profiled wrappers by the original preact setter to preserve stable
// identity without introducing extra hooks in component render flow.
var stateSetterTraceCache = /* @__PURE__ */ profile_isProfiling ? new WeakMap() : undefined;
function buildTraceOption(flowId, stack) {
    if (!stack) return {
        flowId
    };
    return {
        flowId,
        args: {
            stack
        }
    };
}
function withEffectProfile(effect, traceName, flowId, stack) {
    var traceOption = buildTraceOption(flowId, stack);
    return ()=>{
        profileStart(traceName, traceOption);
        try {
            var cleanup = effect();
            if (typeof cleanup !== 'function') return cleanup;
            return ()=>{
                profileStart(`${traceName}::cleanup`, traceOption);
                try {
                    cleanup();
                } finally{
                    profileEnd();
                }
            };
        } finally{
            profileEnd();
        }
    };
}
function useEffectWithProfile(effect, deps, traceName) {
    var flowId = profileFlowId();
    var stack = new Error().stack;
    var traceOption = buildTraceOption(flowId, stack);
    profileStart(traceName, traceOption);
    try {
        return usePreactEffect(withEffectProfile(effect, `${traceName}::callback`, flowId, stack), deps);
    } finally{
        profileEnd();
    }
}
function useLayoutEffectProfiled(effect, deps) {
    return useEffectWithProfile(effect, deps, 'ReactLynx::hooks::useLayoutEffect');
}
function useEffectProfiled(effect, deps) {
    return useEffectWithProfile(effect, deps, 'ReactLynx::hooks::useEffect');
}
function useStateWithProfile(initialState) {
    var [state, setState] = arguments.length === 0 ? hooks_useState() : hooks_useState(initialState);
    var genericSetState = setState;
    var cachedTracedSetState = stateSetterTraceCache === null || stateSetterTraceCache === void 0 ? void 0 : stateSetterTraceCache.get(genericSetState);
    if (cachedTracedSetState) return [
        state,
        cachedTracedSetState
    ];
    var tracedSetState = (nextState)=>{
        var stack = new Error().stack;
        var traceOption = stack ? {
            args: {
                stack
            }
        } : undefined;
        profile_profileStart('ReactLynx::hooks::useState::setter', traceOption);
        try {
            return setState(nextState);
        } finally{
            profile_profileEnd();
        }
    };
    stateSetterTraceCache === null || stateSetterTraceCache === void 0 ? void 0 : stateSetterTraceCache.set(genericSetState, tracedSetState);
    return [
        state,
        tracedSetState
    ];
}
var react_useState = profile_isProfiling ? useStateWithProfile : hooks_useState;
/**
 * Accepts a function that contains imperative, possibly effectful code.
 * The effects run after main thread dom update without blocking it.
 *
 * @param effect - Imperative function that can return a cleanup function
 * @param deps - If present, effect will only activate if the values in the list change (using ===).
 *
 * @public
 */ var react_useEffect = (/* unused pure expression or super */ null && (isProfiling ? useEffectProfiled : usePreactEffect));
/**
 * `useLayoutEffect` is now an alias of `useEffect`. Use `useEffect` instead.
 *
 * Accepts a function that contains imperative, possibly effectful code. The effects run after main thread dom update without blocking it.
 *
 * @param effect - Imperative function that can return a cleanup function
 * @param deps - If present, effect will only activate if the values in the list change (using ===).
 *
 * @public
 *
 * @deprecated `useLayoutEffect` in the background thread cannot offer the precise timing for reading layout information and synchronously re-render, which is different from React.
 */ var react_useLayoutEffect = (/* unused pure expression or super */ null && (isProfiling ? useLayoutEffectProfiled : usePreactEffect));
 //# sourceMappingURL=react.js.map

;// CONCATENATED MODULE: ./node_modules/@swc/helpers/esm/_define_property.js
function _define_property(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}


;// CONCATENATED MODULE: ./node_modules/@swc/helpers/esm/_object_spread.js

function _object_spread_object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}


;// CONCATENATED MODULE: ./node_modules/@swc/helpers/esm/_object_spread_props.js
function _object_spread_props_ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props_object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    else _object_spread_props_ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
    return target;
}


;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/dynamicPartType.js
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/**
 * Types of dynamic parts that can be updated in a snapshot
 * These are determined at compile time through static analysis
 */ var dynamicPartType_DynamicPartType = {
    Attr: 0,
    Spread: 1,
    Slot: 2,
    Children: 3,
    ListChildren: 4,
    MultiChildren: 5,
    SlotV2: 6,
    ListSlotV2: 7
};
/**
 * Default dynamic part for children
 */ var __DynamicPartChildren_0 = [
    [
        dynamicPartType_DynamicPartType.Children,
        0
    ]
];
/**
 * Default dynamic part for list children
 */ var __DynamicPartListChildren_0 = [
    [
        dynamicPartType_DynamicPartType.ListChildren,
        0
    ]
];
/**
 * Dynamic part for slot v2
 */ var __DynamicPartSlotV2_0 = [
    [
        dynamicPartType_DynamicPartType.SlotV2,
        0
    ]
];
/**
 * Dynamic part for list slot v2
 */ var __DynamicPartListSlotV2_0 = [
    [
        dynamicPartType_DynamicPartType.ListSlotV2,
        0
    ]
]; //# sourceMappingURL=dynamicPartType.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/shared/component-stack.js
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/**
 * @license
The MIT License (MIT)

Copyright (c) 2015-present Jason Miller

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */ 

/**
 * Get human readable name of the component/dom node
 */ function component_stack_getDisplayName(vnode) {
    var _vnode_type_displayName;
    if (vnode.type === Fragment) return 'Fragment';
    else if (typeof vnode.type == 'function') return (_vnode_type_displayName = vnode.type.displayName) !== null && _vnode_type_displayName !== void 0 ? _vnode_type_displayName : vnode.type.name;
    else if (typeof vnode.type == 'string') return vnode.type;
    return '#text';
}
/**
 * Used to keep track of the currently rendered `vnode` and print it
 * in debug messages.
 */ var renderStack = (/* unused pure expression or super */ null && ([]));
/**
 * Keep track of the current owners. An owner describes a component
 * which was responsible to render a specific `vnode`. This exclude
 * children that are passed via `props.children`, because they belong
 * to the parent owner.
 *
 * ```jsx
 * const Foo = props => <div>{props.children}</div> // div's owner is Foo
 * const Bar = props => {
 *   return (
 *     <Foo><span /></Foo> // Foo's owner is Bar, span's owner is Bar
 *   )
 * }
 * ```
 *
 * Note: A `vnode` may be hoisted to the root scope due to compiler
 * optimization. In these cases the `_owner` will be different.
 */ var ownerStack = (/* unused pure expression or super */ null && ([]));
/**
 * Get the currently rendered `vnode`
 */ function getCurrentVNode() {
    return renderStack.length > 0 ? renderStack[renderStack.length - 1] : null;
}
/**
 * Check if a `vnode` is a possible owner.
 */ function isPossibleOwner(vnode) {
    return typeof vnode.type == 'function' && vnode.type != Fragment;
}
/**
 * Return the component stack that was captured up to this point.
 */ function getOwnerStack(vnode) {
    var stack = [
        vnode
    ];
    var next = vnode;
    while(next._owner != null){
        stack.push(next._owner);
        next = next._owner;
    }
    return stack.reduce((acc, owner)=>{
        acc += `  in ${component_stack_getDisplayName(owner)}`;
        var source = owner.__source;
        if (source) acc += ` (at ${source.fileName}:${source.lineNumber})`;
        return acc += '\n';
    }, '');
}
/**
 * Setup code to capture the component trace while rendering. Note that
 * we cannot simply traverse `vnode._parent` upwards, because we have some
 * debug messages for `this.setState` where the `vnode` is `undefined`.
 */ function setupComponentStack() {
    var oldDiff = options[DIFF];
    var oldDiffed = options[DIFFED];
    var oldRoot = options[ROOT];
    // eslint-disable-next-line @typescript-eslint/unbound-method
    var oldVNode = options.vnode;
    var oldRender = options[RENDER];
    options[DIFFED] = (vnode)=>{
        if (isPossibleOwner(vnode)) ownerStack.pop();
        renderStack.pop();
        if (oldDiffed) oldDiffed(vnode);
    };
    options[DIFF] = (vnode)=>{
        if (isPossibleOwner(vnode)) renderStack.push(vnode);
        if (oldDiff) oldDiff(vnode);
    };
    options[ROOT] = (vnode, parent)=>{
        ownerStack = [];
        if (oldRoot) oldRoot(vnode, parent);
    };
    options.vnode = (vnode)=>{
        vnode._owner = ownerStack.length > 0 ? ownerStack[ownerStack.length - 1] : null;
        if (oldVNode) oldVNode(vnode);
    };
    options[RENDER] = (vnode)=>{
        if (isPossibleOwner(vnode)) ownerStack.push(vnode);
        if (oldRender) oldRender(vnode);
    };
} //# sourceMappingURL=component-stack.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/utils.js
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

/* v8 ignore start */ var utils_noop = ()=>{};
/* v8 ignore end */ function utils_isDirectOrDeepEqual(a, b) {
    if (a === b) return true;
    try {
        if (typeof a == 'object' && a !== null && typeof b == 'object' && b !== null && JSON.stringify(a) === JSON.stringify(b)) return true;
    } catch (error) {
        if (false) { var stack, vnode }
        throw error;
    }
    return false;
}
function utils_isEmptyObject(obj) {
    for(var _ in obj)return false;
    return true;
}
function utils_isSdkVersionGt(major, minor) {
    var _SystemInfo_lynxSdkVersion;
    var lynxSdkVersion = (_SystemInfo_lynxSdkVersion = SystemInfo.lynxSdkVersion) !== null && _SystemInfo_lynxSdkVersion !== void 0 ? _SystemInfo_lynxSdkVersion : '1.0';
    var version = lynxSdkVersion.split('.');
    return Number(version[0]) > major || Number(version[0]) == major && Number(version[1]) > minor;
}
function pick(obj, keys) {
    var result = {};
    for (var key of keys)if (key in obj) result[key] = obj[key];
    return result;
}
function utils_maybePromise(value) {
    return typeof value === 'object' && value !== null && typeof value.then === 'function';
}
function utils_getDisplayName(type) {
    var _type_displayName;
    return (_type_displayName = type.displayName) !== null && _type_displayName !== void 0 ? _type_displayName : type.name;
}
function utils_hook(object, key, fn) {
    var oldFn = object[key];
    object[key] = function(...args) {
        return fn.call(this, oldFn, ...args);
    };
}
var lynxQueueMicrotask = /* @__PURE__ */ (()=>{
    if (lynx.queueMicrotask) return (fn)=>lynx.queueMicrotask(fn);
    else if (typeof globalThis.Promise === 'function') {
        var resolved = globalThis.Promise.resolve();
        /* v8 ignore start */ return (fn)=>{
            // Schedule as a microtask, and surface exceptions like queueMicrotask would.
            resolved.then(fn).catch((err)=>{
                setTimeout(()=>{
                    throw err;
                }, 0);
            });
        };
    } else return (fn)=>{
        setTimeout(fn, 0);
    };
/* v8 ignore stop */ })(); //# sourceMappingURL=utils.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/worklet-runtime/bindings/events.js
var events_WorkletEvents;
(function(WorkletEvents) {
    WorkletEvents["runWorkletCtx"] = "Lynx.Worklet.runWorkletCtx";
    WorkletEvents["runOnBackground"] = "Lynx.Worklet.runOnBackground";
    WorkletEvents["FunctionCallRet"] = "Lynx.Worklet.FunctionCallRet";
    WorkletEvents["releaseBackgroundWorkletCtx"] = "Lynx.Worklet.releaseBackgroundWorkletCtx";
    WorkletEvents["releaseWorkletRef"] = "Lynx.Worklet.releaseWorkletRef";
})(events_WorkletEvents || (events_WorkletEvents = {}));
 //# sourceMappingURL=events.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/worklet-runtime/bindings/index.js
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.



 //# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/patch/isMainThreadHydrating.js
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

var isMainThreadHydrating_isMainThreadHydrating = false;
function setMainThreadHydrating(isHydrating) {
    if (!isHydrating && isMainThreadHydrating_isMainThreadHydrating) onHydrationFinished();
    isMainThreadHydrating_isMainThreadHydrating = isHydrating;
} //# sourceMappingURL=isMainThreadHydrating.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/workletRef.js
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.


var mtRefQueue = (/* unused pure expression or super */ null && ([]));
function workletRef_applyRefQueue() {
    var queue = mtRefQueue;
    mtRefQueue = [];
    for(var i = 0; i < queue.length; i += 2){
        var worklet = queue[i];
        var element = queue[i + 1];
        if ('_wvid' in worklet) update(worklet, element);
        else if ('_wkltId' in worklet) worklet._unmount = runWorkletCtx(worklet, [
            {
                elementRefptr: element
            }
        ]);
    }
}
function addToRefQueue(worklet, element) {
    mtRefQueue.push(worklet, element);
}
function workletRef_workletUnRef(value) {
    if ('_wvid' in value) update(value, null);
    else if ('_wkltId' in value) {
        if (typeof value._unmount == 'function') value._unmount();
        else runWorkletCtx(value, [
            null
        ]);
    }
}
function workletRef_updateWorkletRef(snapshot, expIndex, oldValue, elementIndex, workletType) {
    var _snapshot___worklet_ref_set;
    var value = snapshot.__values[expIndex];
    if (workletType === 'main-thread' && value && value._wkltId) retainWorkletCtx(value);
    if (!snapshot.__elements) return;
    if (oldValue && ((_snapshot___worklet_ref_set = snapshot.__worklet_ref_set) === null || _snapshot___worklet_ref_set === void 0 ? void 0 : _snapshot___worklet_ref_set.has(oldValue))) {
        var _snapshot___worklet_ref_set1;
        workletRef_workletUnRef(oldValue);
        (_snapshot___worklet_ref_set1 = snapshot.__worklet_ref_set) === null || _snapshot___worklet_ref_set1 === void 0 ? void 0 : _snapshot___worklet_ref_set1.delete(oldValue);
    }
    if (value === null || value === undefined) ;
    else if (value._wvid) {
        var element = snapshot.__elements[elementIndex];
        addToRefQueue(value, element);
    } else if (value._wkltId) {
        var element1 = snapshot.__elements[elementIndex];
        onWorkletCtxUpdate(value, oldValue, isMainThreadHydrating, element1);
        addToRefQueue(value, element1);
    /* v8 ignore next 3 */ } else if (value._type === '__LEPUS__' || value._lepusWorkletHash) ;
    else throw new Error('MainThreadRef: main-thread:ref must be of type MainThreadRef or main-thread function.');
    if (value) {
        var _snapshot, ___worklet_ref_set;
        (___worklet_ref_set = (_snapshot = snapshot).__worklet_ref_set) !== null && ___worklet_ref_set !== void 0 ? ___worklet_ref_set : _snapshot.__worklet_ref_set = new Set();
        snapshot.__worklet_ref_set.add(value);
    }
    // Add an arbitrary attribute to avoid this element being layout-only
    __SetAttribute(snapshot.__elements[elementIndex], 'has-react-ref', true);
} //# sourceMappingURL=workletRef.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/snapshot/list/list.js
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.



var list_gSignMap = (/* unused pure expression or super */ null && ({}));
var list_gRecycleMap = (/* unused pure expression or super */ null && ({}));
var gParentWeakMap = /*#__PURE__*/ (/* unused pure expression or super */ null && (new WeakMap()));
var resolvedPromise = /* @__PURE__ */ (/* unused pure expression or super */ null && (Promise.resolve()));
function clearListGlobal() {
    for(var key in list_gSignMap)delete list_gSignMap[key];
    for(var key1 in list_gRecycleMap)delete list_gRecycleMap[key1];
}
function list_componentAtIndexFactory(ctx, hydrateFunction) {
    // A hack workaround to ensure childCtx has no direct reference through `__parent` to list,
    // to avoid memory leak.
    // TODO(hzy): make `__parent` a WeakRef or `#__parent` in the future.
    ctx.forEach((childCtx)=>{
        if (gParentWeakMap.has(childCtx)) ;
        else {
            gParentWeakMap.set(childCtx, childCtx.parentNode);
            Object.defineProperty(childCtx, '__parent', {
                get: ()=>gParentWeakMap.get(childCtx),
                set: (value)=>{
                    gParentWeakMap.set(childCtx, value);
                }
            });
        }
    });
    var componentAtChildCtx = (list, listID, childCtx, operationID, enableReuseNotification, enableBatchRender = false, asyncFlush = false)=>{
        var _childCtx___listItemPlatformInfo, _platformInfo_reuseidentifier;
        var _childCtx___extraProps, _childCtx___extraProps1;
        var signMap = list_gSignMap[listID];
        var recycleMap = list_gRecycleMap[listID];
        /* v8 ignore start */ if (!signMap || !recycleMap) // Kept as a safeguard in case the callback is somehow invoked after list removal.
        throw new Error('componentAtIndex called on removed list');
        /* v8 ignore end */ var platformInfo = (_childCtx___listItemPlatformInfo = childCtx.__listItemPlatformInfo) !== null && _childCtx___listItemPlatformInfo !== void 0 ? _childCtx___listItemPlatformInfo : {};
        // The lifecycle of this `__extraProps.isReady`:
        // 0 -> Promise<number> -> 1
        // 0: The initial state, the list-item is not ready yet, we will send a event to background
        //    when `componentAtIndex` is called on it
        // Promise<number>: A promise that will be resolved when the list-item is ready
        // 1: The list-item is ready, we can use it to render the list
        if (((_childCtx___extraProps = childCtx.__extraProps) === null || _childCtx___extraProps === void 0 ? void 0 : _childCtx___extraProps['isReady']) === 0) {
            if (typeof __GetAttributeByName === 'function' && __GetAttributeByName(list, 'custom-list-name') === 'list-container') ;
            else throw new Error('Unsupported: `<list-item/>` with `defer={true}` must be used with `<list custom-list-name="list-container"/>`');
            // send a event to background to render the list-item
            __OnLifecycleEvent([
                LifecycleConstant.publishEvent,
                {
                    handlerName: `${childCtx.__id}:__extraProps:onComponentAtIndex`,
                    data: {}
                }
            ]);
            // use a promise to track the list-item's readiness
            var p;
            return p = new Promise((resolve)=>{
                Object.defineProperty(childCtx.__extraProps, 'isReady', {
                    set (isReady) {
                        if (isReady === 1) {
                            delete childCtx.__extraProps['isReady'];
                            childCtx.__extraProps['isReady'] = 1;
                            resolvedPromise.then(()=>{
                                // the cellIndex may be changed already, but the `childCtx` is the same
                                resolve(componentAtChildCtx(list, listID, childCtx, operationID, enableReuseNotification));
                            });
                        }
                    },
                    get () {
                        return p;
                    }
                });
            });
        } else if (maybePromise((_childCtx___extraProps1 = childCtx.__extraProps) === null || _childCtx___extraProps1 === void 0 ? void 0 : _childCtx___extraProps1['isReady'])) throw new Error('componentAtIndex was called on a pending deferred list item');
        var uniqID = childCtx.type + ((_platformInfo_reuseidentifier = platformInfo['reuse-identifier']) !== null && _platformInfo_reuseidentifier !== void 0 ? _platformInfo_reuseidentifier : '');
        var recycleSignMap = recycleMap.get(uniqID);
        if (childCtx.__elements) {
            /**
             * If this situation is encountered, there might be two cases:
             * 1. Reusing with itself
             *    In this case, enqueueComponent will be triggered first, followed by componentAtIndex.
             * 2. Moving
             *    In this case, the trigger order is uncertain; componentAtIndex might be triggered first, or enqueueComponent might be triggered first.
             *
             * When enqueueComponent is triggered first, there must be an item in the reuse pool with the same sign as here, which can be returned directly.
             * When componentAtIndex is triggered first, a clone needs to be made first, then follow the logic for adding or reusing. The cloned item will enter the reuse pool in the subsequent enqueueComponent.
             */ var root = childCtx.__elements[0];
            var sign = __GetElementUniqueID(root);
            if (recycleSignMap === null || recycleSignMap === void 0 ? void 0 : recycleSignMap.has(sign)) {
                signMap.set(sign, childCtx);
                recycleSignMap.delete(sign);
                if (!enableBatchRender) __FlushElementTree(root, {
                    triggerLayout: true,
                    operationID,
                    elementID: sign,
                    listID
                });
                else if (enableBatchRender && asyncFlush) __FlushElementTree(root, {
                    asyncFlush: true
                });
                // enableBatchRender == true && asyncFlush == false
                // in this case, no need to invoke __FlushElementTree because in the end of componentAtIndexes(), the list will invoke __FlushElementTree.
                return sign;
            } else {
                var newCtx = childCtx.takeElements();
                signMap.set(sign, newCtx);
            }
        }
        if (recycleSignMap && recycleSignMap.size > 0) {
            var _oldCtx___extraProps;
            var [first] = recycleSignMap;
            var [sign1, oldCtx] = first;
            recycleSignMap.delete(sign1);
            hydrateFunction(oldCtx, childCtx);
            oldCtx.unRenderElements();
            if (!oldCtx.__id) oldCtx.tearDown();
            else if (((_oldCtx___extraProps = oldCtx.__extraProps) === null || _oldCtx___extraProps === void 0 ? void 0 : _oldCtx___extraProps['isReady']) === 1) __OnLifecycleEvent([
                LifecycleConstant.publishEvent,
                {
                    handlerName: `${oldCtx.__id}:__extraProps:onRecycleComponent`,
                    data: {}
                }
            ]);
            var root1 = childCtx.__element_root;
            applyRefQueue();
            // In the defer `list-item` scenario, `componentAtIndex` occurs with delay.
            // Within `componentAtIndex`, nodes that quickly appear and disappear due to re-layout will be enqueued again,
            // causing the mapping relationship between sign and SnapshotInstance to become corrupted.
            // This results in a SnapshotInstance without `__elements` being enqueued.
            signMap.set(sign1, childCtx);
            if (!enableBatchRender) {
                var flushOptions = {
                    triggerLayout: true,
                    operationID,
                    elementID: sign1,
                    listID
                };
                if (enableReuseNotification) flushOptions.listReuseNotification = {
                    listElement: list,
                    itemKey: platformInfo['item-key']
                };
                __FlushElementTree(root1, flushOptions);
            } else if (enableBatchRender && asyncFlush) {
                var flushOptions1 = {
                    asyncFlush: true
                };
                if (enableReuseNotification) flushOptions1.listReuseNotification = {
                    listElement: list,
                    itemKey: platformInfo['item-key']
                };
                __FlushElementTree(root1, flushOptions1);
            }
            return sign1;
        }
        childCtx.ensureElements();
        var root2 = childCtx.__element_root;
        __AppendElement(list, root2);
        var sign2 = __GetElementUniqueID(root2);
        applyRefQueue();
        signMap.set(sign2, childCtx);
        if (!enableBatchRender) __FlushElementTree(root2, {
            triggerLayout: true,
            operationID,
            elementID: sign2,
            listID
        });
        else if (enableBatchRender && asyncFlush) __FlushElementTree(root2, {
            asyncFlush: true
        });
        return sign2;
    };
    function componentAtIndex(list, listID, cellIndex, operationID, enableReuseNotification) {
        var childCtx = ctx[cellIndex];
        if (!childCtx) throw new Error('childCtx not found');
        var r = componentAtChildCtx(list, listID, childCtx, operationID, enableReuseNotification);
        /* v8 ignore start */ if (false) {}
        else return typeof r === 'number' ? r : undefined;
    /* v8 ignore end */ }
    function componentAtIndexes(list, listID, cellIndexes, operationIDs, enableReuseNotification, asyncFlush) {
        var hasUnready = false;
        var p = [];
        cellIndexes.forEach((cellIndex, index)=>{
            var operationID = operationIDs[index];
            var childCtx = ctx[cellIndex];
            if (!childCtx) throw new Error('childCtx not found');
            var u = componentAtChildCtx(list, listID, childCtx, operationID, enableReuseNotification, true, asyncFlush);
            if (typeof u === 'number') ;
            else hasUnready = true;
            p.push(u);
        });
        // We need __FlushElementTree twice:
        // 1. The first time is sync, we flush the items that are ready, with unready items' uiSign as -1.
        // 2. The second time is async, with all the uiSigns.
        // NOTE: The `operationIDs` passed to __FlushElementTree must be the one passed in,
        // not the one generated by any code here, to workaround a bug of Lynx Engine.
        // So we CANNOT split the `operationIDs` into two parts: one for ready items, one for unready items.
        if (hasUnready) Promise.all(p).then((uiSigns)=>{
            __FlushElementTree(list, {
                triggerLayout: true,
                operationIDs,
                elementIDs: uiSigns,
                listID
            });
        });
        __FlushElementTree(list, {
            triggerLayout: true,
            operationIDs,
            elementIDs: cellIndexes.map((_, index)=>typeof p[index] === 'number' ? p[index] : -1),
            listID
        });
    }
    return [
        componentAtIndex,
        componentAtIndexes
    ];
}
function list_enqueueComponentFactory() {
    // eslint-disable-next-line unicorn/consistent-function-scoping
    var enqueueComponent = (_, listID, sign)=>{
        var _childCtx___listItemPlatformInfo, _platformInfo_reuseidentifier;
        var signMap = list_gSignMap[listID];
        var recycleMap = list_gRecycleMap[listID];
        if (!signMap || !recycleMap) throw new Error('enqueueComponent called on removed list');
        var childCtx = signMap.get(sign);
        if (!childCtx) return;
        var platformInfo = (_childCtx___listItemPlatformInfo = childCtx.__listItemPlatformInfo) !== null && _childCtx___listItemPlatformInfo !== void 0 ? _childCtx___listItemPlatformInfo : {};
        var uniqID = childCtx.type + ((_platformInfo_reuseidentifier = platformInfo['reuse-identifier']) !== null && _platformInfo_reuseidentifier !== void 0 ? _platformInfo_reuseidentifier : '');
        if (!recycleMap.has(uniqID)) recycleMap.set(uniqID, new Map());
        recycleMap.get(uniqID).set(sign, childCtx);
    };
    return enqueueComponent;
} //# sourceMappingURL=list.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/core/ref.js
// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
function assertValidRef(value) {
    if (typeof value === 'function' || typeof value === 'object' && value !== null && 'current' in value) return value;
    throw new Error(`Elements' "ref" property should be a function, or an object created ` + `by createRef(), but got [${typeof value}] instead`);
}
function normalizeRefValue(value) {
    if (value === null || value === undefined) return value;
    return assertValidRef(value);
}
function applyOrdinaryRef(ref, value) {
    try {
        if (typeof ref === 'function') {
            var cleanup = ref._unmount;
            var hasCleanup = typeof cleanup === 'function';
            if (hasCleanup) cleanup();
            ref._unmount = undefined;
            if (!hasCleanup || value !== null) {
                var nextCleanup = ref(value);
                if (typeof nextCleanup === 'function') ref._unmount = nextCleanup;
            }
        } else ref.current = value;
    } catch (error) {
        lynx.reportError(error);
    }
}
// Keeps the Snapshot/ET ordinary ref ordering shared without owning backend
// timing: each backend decides when to queue/flush and how to build the proxy.
class OrdinaryRefEffectQueue {
    queue(oldRef, newRef, token) {
        if (oldRef === newRef) return;
        if (oldRef) this.refsToClear.push(oldRef);
        if (newRef) this.refsToApply.push([
            newRef,
            token
        ]);
    }
    flush(createValue) {
        // Ref callbacks can synchronously trigger more work; detach this batch from
        // the queue before invoking user code so later effects stay in the next batch.
        var refsToClearNow = this.refsToClear.splice(0);
        var refsToApplyNow = this.refsToApply.splice(0);
        for (var ref of refsToClearNow)applyOrdinaryRef(ref, null);
        for (var [ref1, token] of refsToApplyNow)applyOrdinaryRef(ref1, createValue(token));
    }
    clear() {
        this.refsToClear.length = 0;
        this.refsToApply.length = 0;
    }
    hasPending() {
        return this.refsToClear.length > 0 || this.refsToApply.length > 0;
    }
    constructor(){
        this.refsToClear = [];
        this.refsToApply = [];
    }
}
class SelectorRefProxy {
    createProxy() {
        return new Proxy(this, {
            get: (target, prop, receiver)=>{
                if (typeof prop === 'symbol' || prop === 'then' || prop in target || typeof prop !== 'string') return Reflect.get(target, prop, receiver);
                return (...args)=>{
                    return target.createProxyTarget().setTask(prop, args);
                };
            }
        });
    }
    setTask(method, args) {
        this.task = (nodesRef)=>{
            var nodesRefMethod = nodesRef[method];
            return nodesRefMethod.apply(nodesRef, args);
        };
        return this;
    }
    exec() {
        this.runOrDelay(()=>{
            this.task(lynx.createSelectorQuery().select(this.selector)).exec();
        });
    }
} //# sourceMappingURL=ref.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/snapshotInstanceHydrationMap.js
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/**
 * A map to store hydration states between snapshot instances.
 * K->V: main thread snapshotInstance IDs -> background snapshotInstance IDs.
 *
 * The map is used by the ref system to translate between snapshot instance IDs when
 * operations need to cross the thread boundary during the commit phase.
 */ var hydrationMap = /*#__PURE__*/ new Map();
/**
 * @internal
 */  //# sourceMappingURL=snapshotInstanceHydrationMap.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/ref/delay.js
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.


/**
 * A flag to indicate whether UI operations should be delayed.
 * When set to true, UI operations will be queued in the `delayedUiOps` array
 * and executed later when `runDelayedUiOps` is called.
 * This is used before hydration to ensure UI operations are batched
 * and executed at the appropriate time.
 */ var shouldDelayUiOps = {
    value: true
};
/**
 * An array of functions that will be executed later when `runDelayedUiOps` is called.
 * These functions contain UI operations that need to be delayed.
 */ var delayedUiOps = [];
/**
 * Runs a task either immediately or delays it based on the `shouldDelayUiOps` flag.
 * @param task - The function to execute.
 */ function runOrDelay(task) {
    if (shouldDelayUiOps.value) delayedUiOps.push(task);
    else task();
}
/**
 * Executes all delayed UI operations.
 */ function runDelayedUiOps() {
    var tasks = delayedUiOps.slice();
    delayedUiOps.length = 0;
    shouldDelayUiOps.value = false;
    for (var task of tasks)task();
}
/**
 * A proxy class designed for managing and executing reference-based tasks.
 * It delays the execution of tasks until hydration is complete.
 */ class RefProxy extends SelectorRefProxy {
    createProxyTarget() {
        return new RefProxy(this.refAttr);
    }
    runOrDelay(task) {
        runOrDelay(task);
    }
    get selector() {
        var _hydrationMap_get;
        var realRefId = (_hydrationMap_get = hydrationMap.get(this.refAttr[0])) !== null && _hydrationMap_get !== void 0 ? _hydrationMap_get : this.refAttr[0];
        return `[react-ref-${realRefId}-${this.refAttr[1]}]`;
    }
    constructor(refAttr){
        super();
        this.refAttr = refAttr;
        return this.createProxy();
    }
}
/**
 * @internal
 */  //# sourceMappingURL=delay.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/ref.js



var refEffectQueue = /*#__PURE__*/ new OrdinaryRefEffectQueue();
function ref_unref(snapshot, recursive) {
    var _snapshot___worklet_ref_set, _snapshot___worklet_ref_set1;
    (_snapshot___worklet_ref_set = snapshot.__worklet_ref_set) === null || _snapshot___worklet_ref_set === void 0 ? void 0 : _snapshot___worklet_ref_set.forEach((v)=>{
        if (v) workletUnRef(v);
    });
    (_snapshot___worklet_ref_set1 = snapshot.__worklet_ref_set) === null || _snapshot___worklet_ref_set1 === void 0 ? void 0 : _snapshot___worklet_ref_set1.clear();
    if (recursive) snapshot.childNodes.forEach((it)=>{
        ref_unref(it, recursive);
    });
}
function clearRef(ref) {
    applyOrdinaryRef(ref, null);
}
function ref_updateRef(snapshot, expIndex, oldValue, elementIndex) {
    var value = snapshot.__values[expIndex];
    var ref;
    if (typeof value === 'string') ref = value;
    else ref = `react-ref-${snapshot.__id}-${expIndex}`;
    snapshot.__values[expIndex] = ref;
    if (snapshot.__elements && oldValue !== ref) {
        if (oldValue) __SetAttribute(snapshot.__elements[elementIndex], oldValue, undefined);
        if (ref) __SetAttribute(snapshot.__elements[elementIndex], ref, 1);
    }
}
function getRefFromValue(val) {
    var _val_ref;
    if (!val || typeof val !== 'object' && typeof val !== 'function') return null;
    if ('__spread' in val && 'ref' in val) return (_val_ref = val.ref) !== null && _val_ref !== void 0 ? _val_ref : null;
    if ('__ref' in val) return val;
    return null;
}
function transformRef(ref) {
    var validRef = normalizeRefValue(ref);
    if (validRef === undefined || validRef === null) return validRef;
    if ('__ref' in validRef) return validRef;
    return Object.defineProperty(validRef, '__ref', {
        value: 1
    });
}
function applyQueuedRefs() {
    if (!refEffectQueue.hasPending()) return;
    refEffectQueue.flush((value)=>new RefProxy(value));
}
function queueRefAttrUpdate(oldRef, newRef, snapshotInstanceId, expIndex) {
    refEffectQueue.queue(oldRef, newRef, [
        snapshotInstanceId,
        expIndex
    ]);
}
function clearQueuedRefs() {
    refEffectQueue.clear();
}
/**
 * @internal
 */  //# sourceMappingURL=ref.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/snapshot/renderToOpcodes/hydrate.js


// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.






var UNREACHABLE_ITEM_KEY_NOT_FOUND = 'UNREACHABLE_ITEM_KEY_NOT_FOUND';
function isEmptyDiffResult(diffResult) {
    var hasChanged = !utils_isEmptyObject(diffResult.i) || !utils_isEmptyObject(diffResult.m) || diffResult.r.length > 0;
    return !hasChanged;
}
function diffArrayLepus(before, after, isSameType, onDiffChildren, isListHasItemKey) {
    var lastPlacedIndex = 0;
    var result = {
        $$diff: true,
        i: {},
        r: [],
        m: {}
    };
    var beforeMap = {};
    for(var i = 0; i < before.length; i++){
        var _ref, _beforeMap, _key, _;
        var _node___listItemPlatformInfo;
        var node = before[i];
        var key = isListHasItemKey ? (_ref = (_node___listItemPlatformInfo = node.__listItemPlatformInfo) === null || _node___listItemPlatformInfo === void 0 ? void 0 : _node___listItemPlatformInfo['item-key']) !== null && _ref !== void 0 ? _ref : UNREACHABLE_ITEM_KEY_NOT_FOUND : node.type;
        ((_ = (_beforeMap = beforeMap)[_key = key]) !== null && _ !== void 0 ? _ : _beforeMap[_key] = new Set()).add([
            node,
            i
        ]);
    }
    for(var i1 = 0; i1 < after.length; i1++){
        var _ref1;
        var _afterNode___listItemPlatformInfo;
        var afterNode = after[i1];
        var key1 = isListHasItemKey ? (_ref1 = (_afterNode___listItemPlatformInfo = afterNode.__listItemPlatformInfo) === null || _afterNode___listItemPlatformInfo === void 0 ? void 0 : _afterNode___listItemPlatformInfo['item-key']) !== null && _ref1 !== void 0 ? _ref1 : UNREACHABLE_ITEM_KEY_NOT_FOUND : afterNode.type;
        var beforeNodes = beforeMap[key1];
        var beforeNode = void 0;
        if (beforeNodes && beforeNodes.size > 0 && ([beforeNode] = beforeNodes, beforeNode) && isSameType(beforeNode[0], afterNode)) {
            // Reuse old node
            beforeNodes.delete(beforeNode);
            var oldIndex = beforeNode[1];
            onDiffChildren(beforeNode[0], afterNode, oldIndex, i1);
            if (oldIndex < lastPlacedIndex) {
                result.m[oldIndex] = i1;
                continue;
            } else lastPlacedIndex = oldIndex;
        } else result.i[i1] = afterNode;
    }
    // Delete
    for(var k in beforeMap)for (var [, i2] of beforeMap[k])result.r.push(i2);
    return result;
}
// export function diffIterableLepus<A extends Typed, B extends Typed>(
//   before: A[],
//   after: Iterable<B>,
//   isSameType: (a: A, b: B) => boolean,
//   onDiffChildren: (a: A, b: B) => void
// ): DiffResult<B> {
//   let returnResult = EMPTY_DIFF_RESULT as DiffResult<B>;
//   let lastPlacedIndex = 0;
//   const result: DiffResult<B> = {
//     $$diff: true,
//     i: {},
//     r: [],
//     m: {},
//   };
//   const beforeMap: Record<string, Set<[A, number]>> = {};
//   for (let i = 0; i < before.length; i++) {
//     let node = before[i];
//     (beforeMap[node.type] ??= new Set()).add([node, i]);
//   }
//   let i = 0;
//   for (const afterNode of after) {
//     const beforeNodes = beforeMap[afterNode.type];
//     let beforeNode: [A, number];
//     if (beforeNodes && (([beforeNode] = beforeNodes), beforeNode) && isSameType(beforeNode[0], afterNode)) {
//       // Reuse old node
//       beforeNodes.delete(beforeNode);
//       const oldIndex = beforeNode[1];
//       onDiffChildren(beforeNode[0], afterNode);
//       if (oldIndex < lastPlacedIndex) {
//         result.m[oldIndex] = i;
//         returnResult = result;
//         i++;
//         continue;
//       } else {
//         lastPlacedIndex = oldIndex;
//       }
//     } else {
//       // Create new node
//       result.i[i] = afterNode;
//       returnResult = result;
//     }
//     i++;
//   }
//   // delete
//   for (const k in beforeMap) {
//     for (const [, i] of beforeMap[k]) {
//       result.r.push(i);
//       returnResult = result;
//     }
//   }
//   return result;
// }
function diffArrayAction(before, diffResult, onInsert, onRemove, onMove) {
    if (isEmptyDiffResult(diffResult)) return before;
    var deleteSet = new Set(diffResult.r);
    var { i: insertMap, m: placementMap } = diffResult;
    var moveTempMap = new Map();
    var old;
    var k = 0;
    old = before[k];
    // let current: T | null | undefined = null;
    var result = [];
    var i = 0; // index of the old list
    var j = 0; // index of the new list
    var remain = Object.keys(insertMap).length;
    while(old || remain > 0){
        var keep = false;
        if (old && deleteSet.has(j)) onRemove(old);
        else if (old && placementMap[j] !== undefined) {
            // save node to re-use
            moveTempMap.set(placementMap[j], old);
            remain++;
        } else {
            // insert node
            var newNode = old;
            if (moveTempMap.has(i)) {
                // insert re-used node
                newNode = moveTempMap.get(i);
                keep = true;
                onMove(newNode, old);
                remain--;
            } else if (insertMap[i] !== undefined) {
                // insert new node
                newNode = onInsert(insertMap[i], old);
                keep = true;
                remain--;
            }
            result.push(newNode);
            i++;
        }
        if (old && !keep) {
            old = before[++k];
            j++;
        }
    }
    return result;
}
function hydrate_hydrate(before, after, options) {
    after.__elements = before.__elements;
    after.__element_root = before.__element_root;
    if (!(options === null || options === void 0 ? void 0 : options.skipUnRef)) unref(before, false);
    var swap;
    if (swap = options === null || options === void 0 ? void 0 : options.swap) swap[before.__id] = after.__id;
    __pendingListUpdates.runWithoutUpdates(()=>{
        var _after___values;
        (_after___values = after.__values) === null || _after___values === void 0 ? void 0 : _after___values.forEach((value, index)=>{
            var old = before.__values[index];
            if (value !== old) {
                after.__values[index] = old;
                after.setAttribute(index, value);
            }
        });
    });
    var { slot } = after.__snapshot_def;
    if (!slot) return;
    var beforeChildNodes = before.childNodes;
    var afterChildNodes = after.childNodes;
    slot.forEach(([type, elementIndex], index)=>{
        switch(type){
            case DynamicPartType.Slot:
            case DynamicPartType.MultiChildren:
                {
                    // TODO: the following null assertions are not 100% safe
                    var v1 = beforeChildNodes[index];
                    var v2 = afterChildNodes[index];
                    hydrate_hydrate(v1, v2, options);
                    break;
                }
            case DynamicPartType.SlotV2:
            case DynamicPartType.Children:
                {
                    var filteredBeforeChildNodes = beforeChildNodes;
                    var filteredAfterChildNodes = afterChildNodes;
                    if (type === DynamicPartType.SlotV2) {
                        filteredBeforeChildNodes = beforeChildNodes.filter((v)=>v.__slotIndex === index);
                        filteredAfterChildNodes = afterChildNodes.filter((v)=>v.__slotIndex === index);
                    }
                    // Children match pairwise by type (the common case), so the diff is
                    // empty — do what `diffArrayLepus` + `diffArrayAction` would do without
                    // allocating the diff structures.
                    var length = filteredBeforeChildNodes.length;
                    if (length === filteredAfterChildNodes.length) {
                        var samePairwise = true;
                        for(var i = 0; i < length; i++)if (filteredBeforeChildNodes[i].type !== filteredAfterChildNodes[i].type) {
                            samePairwise = false;
                            break;
                        }
                        if (samePairwise) {
                            for(var i1 = 0; i1 < length; i1++)hydrate_hydrate(filteredBeforeChildNodes[i1], filteredAfterChildNodes[i1], options);
                            break;
                        }
                    }
                    var diffResult = diffArrayLepus(filteredBeforeChildNodes, filteredAfterChildNodes, (a, b)=>a.type === b.type, (a, b)=>{
                        hydrate_hydrate(a, b, options);
                    }, false);
                    diffArrayAction(filteredBeforeChildNodes, diffResult, (node, target)=>{
                        node.ensureElements();
                        __InsertElementBefore(before.__elements[elementIndex], node.__element_root, target === null || target === void 0 ? void 0 : target.__element_root);
                        return node;
                    }, (node)=>{
                        __RemoveElement(before.__elements[elementIndex], node.__element_root);
                    }, (node, target)=>{
                        __RemoveElement(before.__elements[elementIndex], node.__element_root);
                        __InsertElementBefore(before.__elements[elementIndex], node.__element_root, target === null || target === void 0 ? void 0 : target.__element_root);
                    });
                    break;
                }
            case DynamicPartType.ListSlotV2:
            case DynamicPartType.ListChildren:
                {
                    var _console_alog, _console;
                    var filteredBeforeChildNodes1 = beforeChildNodes;
                    var filteredAfterChildNodes1 = afterChildNodes;
                    if (type === DynamicPartType.ListSlotV2) {
                        filteredBeforeChildNodes1 = beforeChildNodes.filter((v)=>v.__slotIndex === index);
                        filteredAfterChildNodes1 = afterChildNodes.filter((v)=>v.__slotIndex === index);
                    }
                    var removals = [];
                    var insertions = [];
                    var updateAction = [];
                    var listID = __GetElementUniqueID(before.__elements[elementIndex]);
                    var signMap = gSignMap[listID];
                    var recycleMap = gRecycleMap[listID];
                    var diffResult1 = diffArrayLepus(filteredBeforeChildNodes1, filteredAfterChildNodes1, (a, b)=>a.type === b.type, (a, b, _oldIndex, newIndex)=>{
                        if (JSON.stringify(a.__listItemPlatformInfo) !== JSON.stringify(b.__listItemPlatformInfo)) updateAction.push(_object_spread_props(_object_spread({}, b.__listItemPlatformInfo), {
                            from: newIndex,
                            to: newIndex,
                            // no flush
                            flush: false,
                            type: b.type
                        }));
                        if (a.__elements) {
                            // transfer a's elements to b
                            hydrate_hydrate(a, b, options);
                            // if a list-item has `elements`, it may be:
                            //   - `enqueueComponent` already called on it: so we need to update the `signMap` and the `recycleMap`
                            //   - `enqueueComponent` not called on it: update the `signMap`
                            var listItemID = __GetElementUniqueID(a.__element_root);
                            if (signMap.has(listItemID)) signMap.set(listItemID, b);
                            if (recycleMap.has(a.type)) {
                                var recycleSignMap = recycleMap.get(a.type);
                                // Should only update `list-item` in the recycling pool
                                // Because if an on-screen `list-item` is added to the recycling pool,
                                // it could cause a blank screen when reused next time, as it may still be visible.
                                if (recycleSignMap.has(listItemID)) recycleSignMap.set(listItemID, b);
                            }
                        }
                    }, true);
                    for (var i2 of diffResult1.r)removals.push(i2);
                    for(var i3 in diffResult1.i)insertions.push(Number(i3));
                    for(var i4 in diffResult1.m){
                        removals.push(Number(i4));
                        insertions.push(diffResult1.m[i4]);
                    }
                    insertions.sort((a, b)=>a - b);
                    removals.sort((a, b)=>a - b);
                    var info = {
                        insertAction: insertions.map((it)=>_object_spread({
                                position: it,
                                type: afterChildNodes[it].type
                            }, afterChildNodes[it].__listItemPlatformInfo)),
                        removeAction: removals,
                        updateAction
                    };
                    if (true) profileStart('ReactLynx::listHydrate::updateListInfo', {
                        args: {
                            'list id': String(listID),
                            'update list info': JSON.stringify(info)
                        }
                    });
                    if (false) {}
                    var listElement = before.__elements[elementIndex];
                    __SetAttribute(listElement, 'update-list-info', info);
                    var [componentAtIndex, componentAtIndexes] = componentAtIndexFactory(afterChildNodes, hydrate_hydrate);
                    __UpdateListCallbacks(listElement, componentAtIndex, enqueueComponentFactory(), componentAtIndexes);
                    // The `before` & `after` target to the same list element, so we need to
                    // avoid the newly created list's (behind snapshot instance `after`) "update-list-info" being recorded.
                    __pendingListUpdates.clear(after.__id);
                    if (true) profileEnd();
                    break;
                }
            default:
                throw new Error('Unexpected slot type: ' + type);
        }
    });
} //# sourceMappingURL=hydrate.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/list.js
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.


var destroyLifetimeHandlerMap = /*#__PURE__*/ (/* unused pure expression or super */ null && (new Map()));
function snapshotCreateList(pageId, _ctx, _expIndex) {
    var signMap = new Map();
    var recycleMap = new Map();
    var [componentAtIndex, componentAtIndexes] = componentAtIndexFactory([], hydrate);
    var list = __CreateList(pageId, componentAtIndex, enqueueComponentFactory(), {}, componentAtIndexes);
    var listID = __GetElementUniqueID(list);
    if (typeof lynx !== 'undefined' && typeof lynx.getNative === 'function') {
        var _lynx_getNative;
        var cb = ()=>{
            __UpdateListCallbacks(list, null, null, null);
            destroyLifetimeHandlerMap.delete(listID);
        };
        (_lynx_getNative = lynx.getNative()) === null || _lynx_getNative === void 0 ? void 0 : _lynx_getNative.addEventListener('__DestroyLifetime', cb);
        destroyLifetimeHandlerMap.set(listID, cb);
    }
    gSignMap[listID] = signMap;
    gRecycleMap[listID] = recycleMap;
    return list;
}
function list_snapshotDestroyList(si) {
    var _si___elements;
    var [, elementIndex] = si.__snapshot_def.slot[0];
    var list = (_si___elements = si.__elements) === null || _si___elements === void 0 ? void 0 : _si___elements[elementIndex];
    // `takeElements` and hydration transfer the rendered elements to a new
    // SnapshotInstance while leaving the old instance tree available for
    // teardown. Only the instance that still owns the list element may clean up
    // its callbacks and recycling state.
    if (list === undefined) return;
    var listID = __GetElementUniqueID(list);
    __UpdateListCallbacks(list, ()=>-1, ()=>{}, ()=>{});
    if (typeof lynx !== 'undefined' && typeof lynx.getNative === 'function') {
        var cb = destroyLifetimeHandlerMap.get(listID);
        if (cb) {
            var _lynx_getNative;
            (_lynx_getNative = lynx.getNative()) === null || _lynx_getNative === void 0 ? void 0 : _lynx_getNative.removeEventListener('__DestroyLifetime', cb);
            destroyLifetimeHandlerMap.delete(listID);
        }
    }
    delete gSignMap[listID];
    delete gRecycleMap[listID];
} //# sourceMappingURL=list.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/snapshotCreatorMap.js
// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
var snapshotCreatorMap_snapshotCreatorMap = {};
function setSnapshotCreatorMap(map) {
    snapshotCreatorMap_snapshotCreatorMap = map;
}
/**
 * Set only in `__DEV__` (by `internal.js` registering its own namespace), so
 * production keeps no reference to the full runtime namespace.
 */ var snapshotCreatorMap_snapshotCreatorRuntime;
function setSnapshotCreatorRuntime(runtime) {
    snapshotCreatorMap_snapshotCreatorRuntime = runtime;
}
var devOnlySentSnapshots = new Set(); //# sourceMappingURL=snapshotCreatorMap.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/snapshot/gesture/processGesture.js
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.


function isSerializedGesture(gesture) {
    var _gesture___isSerialized;
    return (_gesture___isSerialized = gesture.__isSerialized) !== null && _gesture___isSerialized !== void 0 ? _gesture___isSerialized : false;
}
function getSerializedBaseGesture(gesture) {
    if (!gesture || !isSerializedGesture(gesture)) return undefined;
    if (gesture.type !== GestureTypeInner.COMPOSED) return gesture;
    return undefined;
}
function appendUniqueSerializedBaseGestures(gesture, out, seenIds) {
    if (!gesture || !isSerializedGesture(gesture)) return;
    if (gesture.type === GestureTypeInner.COMPOSED) {
        for (var subGesture of gesture.gestures)appendUniqueSerializedBaseGestures(subGesture, out, seenIds);
        return;
    }
    var baseGesture = gesture;
    if (seenIds.has(baseGesture.id)) return;
    seenIds.add(baseGesture.id);
    out.push(baseGesture);
}
function collectOldGestureInfo(oldGesture) {
    var uniqOldBaseGestures = [];
    var oldBaseGesturesById = new Map();
    appendOldGestureInfo(oldGesture, uniqOldBaseGestures, oldBaseGesturesById);
    return {
        uniqOldBaseGestures,
        oldBaseGesturesById
    };
}
function appendOldGestureInfo(gesture, out, byId) {
    if (!gesture || !isSerializedGesture(gesture)) return;
    if (gesture.type === GestureTypeInner.COMPOSED) {
        for (var subGesture of gesture.gestures)appendOldGestureInfo(subGesture, out, byId);
        return;
    }
    var oldBaseGesture = gesture;
    if (!byId.has(oldBaseGesture.id)) {
        byId.set(oldBaseGesture.id, oldBaseGesture);
        out.push(oldBaseGesture);
    }
}
function consumeOldBaseGesture(baseGesture, uniqOldBaseGestures, oldBaseGesturesById) {
    var idMatchedOldBaseGesture = oldBaseGesturesById.get(baseGesture.id);
    if (idMatchedOldBaseGesture) {
        oldBaseGesturesById.delete(baseGesture.id);
        return idMatchedOldBaseGesture;
    }
    var fallbackOldBaseGesture = uniqOldBaseGestures.find((oldBaseGesture)=>oldBaseGesturesById.has(oldBaseGesture.id));
    if (!fallbackOldBaseGesture) return undefined;
    oldBaseGesturesById.delete(fallbackOldBaseGesture.id);
    return fallbackOldBaseGesture;
}
function processGesture_retainGestureWorkletCtx(gesture) {
    var retainedBaseGestures = [];
    appendUniqueSerializedBaseGestures(gesture, retainedBaseGestures, new Set());
    for (var baseGesture of retainedBaseGestures)for (var key of Object.keys(baseGesture.callbacks)){
        var callback = baseGesture.callbacks[key];
        if (callback) retainWorkletCtx(callback);
    }
}
function removeGestureDetector(dom, id) {
    // Keep compatibility with old runtimes where remove API is not exposed.
    if (typeof __RemoveGestureDetector === 'function') __RemoveGestureDetector(dom, id);
}
function clearLegacyGestureState(dom) {
    __SetAttribute(dom, 'has-react-gesture', null);
    // `flatten` may still be required by unrelated attrs from the same spread
    // (e.g. `clip-radius`), so only clear the gesture-specific legacy state here.
    // When `__RemoveGestureDetector` is available, let it own the detector cleanup
    // so we do not clobber an unrelated user-provided `gesture` attr.
    if (typeof __RemoveGestureDetector !== 'function') __SetAttribute(dom, 'gesture', null);
}
function getGestureInfo(gesture, oldGesture, isFirstScreen, dom) {
    var _ref, _ref1, _ref2;
    var _baseGesture_waitFor, _baseGesture_simultaneousWith, _baseGesture_continueWith;
    var config = {
        callbacks: []
    };
    var baseGesture = gesture;
    if (baseGesture.config) config.config = baseGesture.config;
    for (var key of Object.keys(baseGesture.callbacks)){
        var callback = baseGesture.callbacks[key];
        var oldCallback = oldGesture === null || oldGesture === void 0 ? void 0 : oldGesture.callbacks[key];
        onWorkletCtxUpdate(callback, oldCallback, isFirstScreen, dom);
        config.callbacks.push({
            name: key,
            callback: callback
        });
    }
    var relationMap = {
        waitFor: (_ref = baseGesture === null || baseGesture === void 0 ? void 0 : (_baseGesture_waitFor = baseGesture.waitFor) === null || _baseGesture_waitFor === void 0 ? void 0 : _baseGesture_waitFor.map((subGesture)=>subGesture.id)) !== null && _ref !== void 0 ? _ref : [],
        simultaneous: (_ref1 = baseGesture === null || baseGesture === void 0 ? void 0 : (_baseGesture_simultaneousWith = baseGesture.simultaneousWith) === null || _baseGesture_simultaneousWith === void 0 ? void 0 : _baseGesture_simultaneousWith.map((subGesture)=>subGesture.id)) !== null && _ref1 !== void 0 ? _ref1 : [],
        continueWith: (_ref2 = baseGesture === null || baseGesture === void 0 ? void 0 : (_baseGesture_continueWith = baseGesture.continueWith) === null || _baseGesture_continueWith === void 0 ? void 0 : _baseGesture_continueWith.map((subGesture)=>subGesture.id)) !== null && _ref2 !== void 0 ? _ref2 : []
    };
    return {
        config,
        relationMap
    };
}
function processGesture_processGesture(dom, gesture, oldGesture, isFirstScreen, gestureOptions) {
    var domSet = (gestureOptions === null || gestureOptions === void 0 ? void 0 : gestureOptions.domSet) === true;
    if ((gestureOptions === null || gestureOptions === void 0 ? void 0 : gestureOptions.retainCallbacks) !== false) processGesture_retainGestureWorkletCtx(gesture);
    if (!gesture || !isSerializedGesture(gesture)) {
        var { oldBaseGesturesById } = collectOldGestureInfo(oldGesture);
        for (var oldBaseGesture of oldBaseGesturesById.values())removeGestureDetector(dom, oldBaseGesture.id);
        // Clearing the attrs keeps the legacy main-thread state in sync when
        // gesture props disappear during spread/key-removal updates.
        if (!domSet && oldBaseGesturesById.size > 0) clearLegacyGestureState(dom);
        return;
    }
    var { uniqOldBaseGestures, oldBaseGesturesById: oldBaseGesturesById1 } = collectOldGestureInfo(oldGesture);
    // Fast path for the most common case: single base gesture update.
    var singleBaseGesture = getSerializedBaseGesture(gesture);
    var singleOldBaseGesture = getSerializedBaseGesture(oldGesture);
    if (singleBaseGesture && (!oldGesture || singleOldBaseGesture)) {
        if (!domSet) {
            __SetAttribute(dom, 'has-react-gesture', true);
            __SetAttribute(dom, 'flatten', false);
        }
        if (singleOldBaseGesture) removeGestureDetector(dom, singleOldBaseGesture.id);
        var { config, relationMap } = getGestureInfo(singleBaseGesture, singleOldBaseGesture, isFirstScreen, dom);
        __SetGestureDetector(dom, singleBaseGesture.id, singleBaseGesture.type, config, relationMap);
        return;
    }
    var uniqBaseGestures = [];
    appendUniqueSerializedBaseGestures(gesture, uniqBaseGestures, new Set());
    if (uniqBaseGestures.length === 0) {
        for (var oldBaseGesture1 of oldBaseGesturesById1.values())removeGestureDetector(dom, oldBaseGesture1.id);
        if (!domSet && oldBaseGesturesById1.size > 0) clearLegacyGestureState(dom);
        return;
    }
    if (!domSet) {
        __SetAttribute(dom, 'has-react-gesture', true);
        __SetAttribute(dom, 'flatten', false);
    }
    // On update, remove old detectors first to avoid stale callbacks.
    for (var oldBaseGesture2 of oldBaseGesturesById1.values())removeGestureDetector(dom, oldBaseGesture2.id);
    for (var baseGesture of uniqBaseGestures){
        var oldBaseGesture3 = consumeOldBaseGesture(baseGesture, uniqOldBaseGestures, oldBaseGesturesById1);
        var { config: config1, relationMap: relationMap1 } = getGestureInfo(baseGesture, oldBaseGesture3, isFirstScreen, dom);
        __SetGestureDetector(dom, baseGesture.id, baseGesture.type, config1, relationMap1);
    }
} //# sourceMappingURL=processGesture.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/gesture.js
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.


function gesture_updateGesture(snapshot, expIndex, oldValue, elementIndex, workletType) {
    var value = snapshot.__values[expIndex];
    if (workletType === 'main-thread') retainGestureWorkletCtx(value);
    if (!snapshot.__elements) return;
    if (workletType === 'main-thread') processGesture(snapshot.__elements[elementIndex], value, oldValue, isMainThreadHydrating, {
        domSet: false,
        retainCallbacks: false
    });
} //# sourceMappingURL=gesture.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/snapshot/list/listUpdateInfo.js


// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.



class listUpdateInfo_ListUpdateInfoRecording {
    // private __commitAndReset() {
    //   (this.__pendingAttributes ??= []).push(this.__toAttribute());
    //   this.oldChildNodes = this.list.childNodes;
    //   this.oldChildNodesSet = new Set(this.oldChildNodes);
    //   this.removeChild1.clear();
    //   this.removeChild2.clear();
    //   this.insertBefore.clear();
    //   this.appendChild.length = 0;
    //   this.platformInfoUpdate.clear();
    // }
    flush() {
        if (!this.list.__elements) return undefined;
        var elementIndex = this.list.__snapshot_def.slot[0][1];
        var listElement = this.list.__elements[elementIndex];
        // this.__pendingAttributes?.forEach(pendingAttribute => {
        //   __SetAttribute(listElement, "update-list-info", pendingAttribute);
        //   __FlushElementTree(listElement);
        // });
        var updateListInfo = this.__toAttribute();
        if (true) {
            var listID = __GetElementUniqueID(listElement);
            profileStart(`ReactLynx::listFlush::updateListInfo`, {
                args: {
                    'list id': String(listID),
                    'update list info': JSON.stringify(updateListInfo)
                }
            });
        }
        if (false) { var _console, _console_alog, listID1 }
        __SetAttribute(listElement, 'update-list-info', updateListInfo);
        var [componentAtIndex, componentAtIndexes] = componentAtIndexFactory(this.list.childNodes, hydrate);
        __UpdateListCallbacks(listElement, componentAtIndex, enqueueComponentFactory(), componentAtIndexes);
        if (true) profileEnd();
        return this.list.__id;
    }
    getAttachedListId() {
        if (!this.list.__elements) return undefined;
        return this.list.__id;
    }
    onInsertBefore(newNode, existingNode) {
        if (newNode.parentNode) //   this.__commitAndReset();
        // }
        this.removeChild.add(newNode);
        if (existingNode) {
            var _this_insertBefore_get;
            // if (!this.oldChildNodesSet.has(existingNode)) {
            //   this.__commitAndReset();
            // }
            var newChildren = (_this_insertBefore_get = this.insertBefore.get(existingNode)) !== null && _this_insertBefore_get !== void 0 ? _this_insertBefore_get : [];
            newChildren.push(newNode);
            this.insertBefore.set(existingNode, newChildren);
        } else this.appendChild.push(newNode);
    }
    onRemoveChild(child) {
        // if (!this.oldChildNodesSet.has(child)) {
        //   this.__commitAndReset();
        // }
        this.removeChild.add(child);
    }
    onSetAttribute(child, attr, _oldAttr) {
        this.platformInfoUpdate.set(child, attr);
    }
    __toAttribute() {
        var { removeChild, insertBefore, appendChild, platformInfoUpdate } = this;
        var removals = [];
        var insertions = [];
        var updates = [];
        var j = 0;
        for(var i = 0; i < this.oldChildNodes.length; i++, j++){
            var _ref;
            var _insertBefore_get;
            var child = this.oldChildNodes[i];
            var insertedBefore = (_ref = (_insertBefore_get = insertBefore.get(child)) === null || _insertBefore_get === void 0 ? void 0 : _insertBefore_get.length) !== null && _ref !== void 0 ? _ref : 0;
            if (platformInfoUpdate.has(child)) updates.push(_object_spread_props(_object_spread({}, platformInfoUpdate.get(child)), {
                from: +j + insertedBefore,
                to: +j + insertedBefore,
                // no flush
                flush: false,
                type: child.type
            }));
            if (insertBefore.has(child)) {
                var children = insertBefore.get(child);
                children.forEach((c)=>{
                    insertions.push(_object_spread({
                        position: j,
                        type: c.type
                    }, c.__listItemPlatformInfo));
                    j++;
                });
            }
            if (removeChild.has(child)) {
                removals.push(i);
                removeChild.delete(child);
                j--;
            }
        }
        for(var i1 = 0; i1 < appendChild.length; i1++){
            var child1 = appendChild[i1];
            insertions.push(_object_spread({
                position: j + i1,
                type: child1.type
            }, child1.__listItemPlatformInfo));
        }
        insertions.sort((a, b)=>a.position - b.position);
        removals.sort((a, b)=>a - b);
        if (SystemInfo.lynxSdkVersion === '2.14' || SystemInfo.lynxSdkVersion === '2.15' || SystemInfo.lynxSdkVersion === '2.16' || SystemInfo.lynxSdkVersion === '2.17' || SystemInfo.lynxSdkVersion === '2.18') {
            var elementIndex = this.list.__snapshot_def.slot[0][1];
            var listElement = this.list.__elements[elementIndex];
            // `__GetAttributeByName` is available since Lynx 2.14
            if (__GetAttributeByName(listElement, 'custom-list-name') === 'list-container') {
                // `updateAction` must be full (not incremental) when Lynx version <= 2.18 and
                // when `custom-list-name` is `list-container` (available when Lynx version >= 2.14) is true,
                updates.length = 0;
                this.list.childNodes.forEach((child, index)=>{
                    updates.push(_object_spread_props(_object_spread({}, child.__listItemPlatformInfo), {
                        from: index,
                        to: index,
                        // no flush
                        flush: false,
                        type: child.type
                    }));
                });
            }
        }
        return {
            insertAction: insertions,
            removeAction: removals,
            updateAction: updates
        };
    }
    toJSON() {
        // if (this.__pendingAttributes) {
        //   return [...this.__pendingAttributes, this.__toAttribute()];
        // } else {
        //   return [this.__toAttribute()];
        // }
        return [
            this.__toAttribute()
        ];
    }
    constructor(list){
        // private oldChildNodesSet: Set<SnapshotInstance>;
        this.removeChild = new Set();
        this.insertBefore = new Map();
        this.appendChild = [];
        this.platformInfoUpdate = new Map();
        this.list = list;
        this.oldChildNodes = list.childNodes;
    // this.oldChildNodesSet = new Set(this.oldChildNodes);
    }
} //# sourceMappingURL=listUpdateInfo.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/platformInfo.js
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.



var platformInfoVirtualAttributes = /* @__PURE__ */ (/* unused pure expression or super */ null && (new Set([
    'reuse-identifier',
    'recyclable'
])));
var platformInfo_platformInfoAttributes = /* @__PURE__ */ new Set([
    'reuse-identifier',
    'full-span',
    'item-key',
    'sticky-top',
    'sticky-bottom',
    'estimated-height',
    'estimated-height-px',
    'estimated-main-axis-size-px',
    'recyclable'
]);
function collectListItemPlatformInfo(object, transformAttributeNames = false) {
    var result = {};
    for(var key in object){
        var transformedKey =  false ? 0 : key;
        if (platformInfo_platformInfoAttributes.has(transformedKey)) result[transformedKey] = object[key];
    }
    return result;
}
function extractListItemPlatformInfo(value) {
    if (value && typeof value === 'object') return collectListItemPlatformInfo(value);
    return value;
}
function platformInfo_getListItemPlatformInfoFromIndexedValue(value, isSpreadValue = false) {
    if (value && typeof value === 'object' && '__spread' in value) return collectListItemPlatformInfo(value, true);
    if (isSpreadValue) return extractListItemPlatformInfo(value);
    return value;
}
function platformInfo_updateListItemPlatformInfo(ctx, index, oldValue, elementIndex) {
    var newValue = ctx.__listItemPlatformInfo = platformInfo_getListItemPlatformInfoFromIndexedValue(ctx.__values[index]);
    if (__pendingListUpdates.values) {
        var __pendingListUpdates_values, _list___id, _;
        var list = ctx.parentNode;
        if (list === null || list === void 0 ? void 0 : list.__snapshot_def.isListHolder) ((_ = (__pendingListUpdates_values = __pendingListUpdates.values)[_list___id = list.__id]) !== null && _ !== void 0 ? _ : __pendingListUpdates_values[_list___id] = new ListUpdateInfoRecording(list)).onSetAttribute(ctx, newValue, oldValue);
    }
    // In this updater, unlike `updateSpread`, the shape of the value is guaranteed to be an fixed object.
    // No adding / removing keys.
    if (ctx.__elements) {
        var e = ctx.__elements[elementIndex];
        var value = ctx.__values[index];
        for(var k in value){
            if (platformInfoVirtualAttributes.has(k)) continue;
            __SetAttribute(e, k, value[k]);
        }
    }
}
 //# sourceMappingURL=platformInfo.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/workletEvent.js
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.



function formatEventAttribute(workletType, eventType, eventName) {
    var suffix = eventType.endsWith('Event') ? eventType.slice(0, -5) : eventType;
    return `${workletType}:${suffix}${eventName}`;
}
function reportInvalidWorkletValue(snapshot, elementIndex, workletType, eventType, eventName, value) {
    var _snapshot___elements;
    var eventAttr = formatEventAttribute(workletType, eventType, eventName);
    var element = (_snapshot___elements = snapshot.__elements) === null || _snapshot___elements === void 0 ? void 0 : _snapshot___elements[elementIndex];
    var elementTag = element ? __GetTag(element) : 'unknown';
    var elementId = snapshot.__id;
    var snapshotName = snapshot.type;
    var message = `"${eventAttr}" on <${elementTag}> (snapshot ${elementId} "${snapshotName}") expected ` + 'a main-thread function but received ' + `${describeInvalidValue(value)}. Did you forget to add a "main thread" directive to the handler?`;
    lynx.reportError(new Error(message));
}
function workletEvent_updateWorkletEvent(snapshot, expIndex, oldValue, elementIndex, workletType, eventType, eventName) {
    var rawValue = snapshot.__values[expIndex];
    if (false) {}
    var value = rawValue !== null && rawValue !== void 0 ? rawValue : {};
    value._workletType = workletType;
    if (workletType === 'main-thread') retainWorkletCtx(value);
    if (!snapshot.__elements) return;
    if (workletType === 'main-thread') {
        onWorkletCtxUpdate(value, oldValue, isMainThreadHydrating, snapshot.__elements[elementIndex]);
        var event = {
            type: 'worklet',
            value
        };
        __AddEvent(snapshot.__elements[elementIndex], eventType, eventName, event);
    }
}
 //# sourceMappingURL=workletEvent.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/spread.js
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/**
 * Handles JSX spread operator in the snapshot system.
 *
 * Spread operators in JSX (e.g., <div {...props}>) are transformed into
 * optimized attribute updates at compile time, avoiding runtime object spreads.
 */ 











// eslint-disable-next-line regexp/no-unused-capturing-group
var eventRegExp = /^(([A-Za-z-]*):)?(bind|catch|capture-bind|capture-catch|global-bind)([A-Za-z]+)$/;
var eventTypeMap = (/* unused pure expression or super */ null && ({
    bind: 'bindEvent',
    catch: 'catchEvent',
    'capture-bind': 'capture-bind',
    'capture-catch': 'capture-catch',
    'global-bind': 'global-bindEvent'
}));
function retainSpreadWorkletCtx(newValue, oldValue) {
    var match = null;
    for(var key in newValue){
        var value1 = newValue[key];
        if (value1 === oldValue[key]) continue;
        if (key.endsWith(':ref')) {
            if (key.slice(0, -4) === 'main-thread' && value1 && value1._wkltId) retainWorkletCtx(value1);
        } else if (key.endsWith(':gesture')) {
            if (key.slice(0, -8) === 'main-thread') retainGestureWorkletCtx(value1);
        } else if ((match = eventRegExp.exec(key)) && match[2] === 'main-thread' && value1 !== null && value1 !== undefined && typeof value1 === 'object') retainWorkletCtx(value1);
    }
}
function updateSpread(snapshot, index, oldValue, elementIndex, isListItem = false) {
    var _loop = function(key) {
        var v = newValue[key];
        if (v !== oldValue[key]) {
            if (key === 'className') __SetClasses(snapshot.__elements[elementIndex], v);
            else if (key === 'style') {
                if (!isDirectOrDeepEqual(v, oldValue[key])) __SetInlineStyles(snapshot.__elements[elementIndex], v);
            } else if (key === 'id') __SetID(snapshot.__elements[elementIndex], v);
            else if (key.startsWith('data-')) ;
            else if (key === 'ref') {
                var fakeSnapshot = {
                    __values: {
                        get [index] () {
                            return v;
                        },
                        set [index] (value){
                            // Modifications to the ref value should be reflected in the corresponding position of the spread.
                            newValue[key] = value;
                        }
                    },
                    __id: snapshot.__id,
                    __elements: snapshot.__elements
                };
                updateRef(fakeSnapshot, index, oldValue[key], elementIndex);
            } else if (key.endsWith(':ref')) {
                var _snapshot, ___worklet_ref_set;
                (___worklet_ref_set = (_snapshot = snapshot).__worklet_ref_set) !== null && ___worklet_ref_set !== void 0 ? ___worklet_ref_set : _snapshot.__worklet_ref_set = new Set();
                var fakeSnapshot1 = {
                    __values: {
                        get [index] () {
                            return v;
                        }
                    },
                    __id: snapshot.__id,
                    __elements: snapshot.__elements,
                    __worklet_ref_set: snapshot.__worklet_ref_set
                };
                updateWorkletRef(fakeSnapshot1, index, oldValue[key], elementIndex, key.slice(0, -4));
            } else if (key.endsWith(':gesture')) {
                var workletType = key.slice(0, -8);
                var fakeSnapshot2 = {
                    __values: {
                        get [index] () {
                            return v;
                        }
                    },
                    __id: snapshot.__id,
                    __elements: snapshot.__elements
                };
                updateGesture(fakeSnapshot2, index, oldValue[key], elementIndex, workletType);
            } else if (match = eventRegExp.exec(key)) {
                var workletType1 = match[2];
                var eventType = eventTypeMap[match[3]];
                var eventName = match[4];
                var fakeSnapshot3 = {
                    __values: {
                        get [index] () {
                            return v;
                        },
                        set [index] (value){
                            // Modifications to the event value should be reflected in the corresponding position of the spread.
                            newValue[key] = value;
                        }
                    },
                    __id: snapshot.__id,
                    __elements: snapshot.__elements
                };
                if (workletType1) updateWorkletEvent(fakeSnapshot3, index, oldValue[key], elementIndex, workletType1, eventType, eventName);
                else updateEvent(fakeSnapshot3, index, oldValue[key], elementIndex, eventType, eventName, key);
            } else if (platformInfoAttributes.has(key)) ;
            else __SetAttribute(snapshot.__elements[elementIndex], key, v);
        }
        // collect data regardless of whether it has changed
        if (key.startsWith('data-')) dataset[key.slice(5)] = v;
    }, _loop1 = function(key1) {
        if (!(key1 in newValue)) {
            if (key1 === 'className') __SetClasses(snapshot.__elements[elementIndex], '');
            else if (key1 === 'style') __SetInlineStyles(snapshot.__elements[elementIndex], '');
            else if (key1 === 'id') __SetID(snapshot.__elements[elementIndex], null);
            else if (key1.startsWith('data-')) ;
            else if (key1 === 'ref') {
                var fakeSnapshot = {
                    __values: {
                        get [index] () {
                            return undefined;
                        },
                        set [index] (value){
                            // Modifications to the ref value should be reflected in the corresponding position of the spread.
                            newValue[key1] = value;
                        }
                    },
                    __id: snapshot.__id,
                    __elements: snapshot.__elements
                };
                updateRef(fakeSnapshot, index, oldValue[key1], elementIndex);
            } else if (key1.endsWith(':ref')) {
                var _snapshot, ___worklet_ref_set;
                (___worklet_ref_set = (_snapshot = snapshot).__worklet_ref_set) !== null && ___worklet_ref_set !== void 0 ? ___worklet_ref_set : _snapshot.__worklet_ref_set = new Set();
                var fakeSnapshot1 = {
                    __values: {
                        get [index] () {
                            return undefined;
                        }
                    },
                    __id: snapshot.__id,
                    __elements: snapshot.__elements,
                    __worklet_ref_set: snapshot.__worklet_ref_set
                };
                updateWorkletRef(fakeSnapshot1, index, oldValue[key1], elementIndex, key1.slice(0, -4));
            } else if (key1.endsWith(':gesture')) {
                var workletType = key1.slice(0, -8);
                var fakeSnapshot2 = {
                    __values: {
                        get [index] () {
                            return undefined;
                        }
                    },
                    __id: snapshot.__id,
                    __elements: snapshot.__elements
                };
                updateGesture(fakeSnapshot2, index, oldValue[key1], elementIndex, workletType);
            } else if (match = eventRegExp.exec(key1)) {
                var workletType1 = match[2];
                var eventType = eventTypeMap[match[3]];
                var eventName = match[4];
                var fakeSnapshot3 = {
                    __values: {
                        get [index] () {
                            return undefined;
                        },
                        set [index] (value){
                            newValue[key1] = value;
                        }
                    },
                    __id: snapshot.__id,
                    __elements: snapshot.__elements
                };
                if (workletType1) updateWorkletEvent(fakeSnapshot3, index, oldValue[key1], elementIndex, workletType1, eventType, eventName);
                else updateEvent(fakeSnapshot3, index, oldValue[key1], elementIndex, eventType, eventName, key1);
            } else if (platformInfoAttributes.has(key1)) ;
            else __SetAttribute(snapshot.__elements[elementIndex], key1, null);
        }
        // collect data regardless of whether it has changed
        if (key1.startsWith('data-')) hasOldDataset = true;
    };
    oldValue !== null && oldValue !== void 0 ? oldValue : oldValue = {};
    var newValue = snapshot.__values[index]; // compiler guarantee this must be an object;
    var list = snapshot.parentNode;
    if (list === null || list === void 0 ? void 0 : list.__snapshot_def.isListHolder) {
        var oldPlatformInfo = getListItemPlatformInfoFromIndexedValue(oldValue, true);
        var platformInfo = getListItemPlatformInfoFromIndexedValue(newValue, true);
        if (!isDirectOrDeepEqual(oldPlatformInfo, platformInfo)) {
            var __pendingListUpdates_values, _list___id, _;
            if (__pendingListUpdates.values) ((_ = (__pendingListUpdates_values = __pendingListUpdates.values)[_list___id = list.__id]) !== null && _ !== void 0 ? _ : __pendingListUpdates_values[_list___id] = new ListUpdateInfoRecording(list)).onSetAttribute(snapshot, platformInfo, oldPlatformInfo);
            snapshot.__listItemPlatformInfo = platformInfo;
            // The fakeSnapshot is missing `__parent`, so no `ListUpdateInfoRecording#onSetAttribute` will be called
            var fakeSnapshot = {
                __values: {
                    get [index] () {
                        return platformInfo;
                    }
                },
                __id: snapshot.__id,
                __elements: snapshot.__elements
            };
            updateListItemPlatformInfo(fakeSnapshot, index, oldPlatformInfo, elementIndex);
        }
    } else if (isListItem) {
        // Only seed list-item platform info before the snapshot is attached to a list holder.
        // Non-platform spread attributes continue through the normal update loop below.
        var platformInfo1 = getListItemPlatformInfoFromIndexedValue(newValue, true);
        snapshot.__listItemPlatformInfo = platformInfo1;
    }
    if ('__spread' in newValue) {
        // first screen
        newValue = transformSpread(snapshot, index, newValue);
        snapshot.__values[index] = newValue;
    }
    if (!snapshot.__elements) {
        retainSpreadWorkletCtx(newValue, oldValue);
        return;
    }
    var dataset = {};
    var match = null;
    for(var key in newValue)_loop(key);
    var hasOldDataset = false;
    for(var key1 in oldValue)_loop1(key1);
    // TODO: compare dataset before commit it to native?
    if (hasOldDataset || !isEmptyObject(dataset)) __SetDataset(snapshot.__elements[elementIndex], dataset);
}
function transformSpread(snapshot, index, spread) {
    var result = {};
    var hasNoFlattenAttributes = false;
    for(var key in spread){
        var _transformRef;
        var value1 = spread[key];
        if (key === '__spread') ;
        else if (key === 'class' || key === 'className') {
            value1 !== null && value1 !== void 0 ? value1 : value1 = '';
            result['className'] = value1;
        } else if (key === 'ref') result[key] = (_transformRef = transformRef(value1)) === null || _transformRef === void 0 ? void 0 : _transformRef.__ref;
        else if (key === '__self' || key === '__source') ;
        else if (typeof value1 === 'function') {
            var transformedKey =  false ? 0 : key;
            result[transformedKey] = `${snapshot.__id}:${index}:${key}`;
        } else {
            var transformedKey1 =  false ? 0 : key;
            if (!hasNoFlattenAttributes) switch(transformedKey1){
                case 'name':
                case 'clip-radius':
                case 'overlap':
                case 'exposure-scene':
                case 'exposure-id':
                    hasNoFlattenAttributes = true;
            }
            result[transformedKey1] = value1;
        }
    }
    if (hasNoFlattenAttributes) result['flatten'] = false;
    return result;
}
 //# sourceMappingURL=spread.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/constants.js
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/**
 * Constants for snapshot system.
 */ /**
 * Default entry name for snapshots.
 */ var constants_DEFAULT_ENTRY_NAME = '__Card__';
/**
 * Default CSS ID for snapshots.
 */ var constants_DEFAULT_CSS_ID = 0;
/**
 * Default snapshot type for compiled snapshots.
 */ var COMPILED_SNAPSHOT = '__snapshot';
/**
 * Default snapshot type for clone snapshots.
 */ var constants_CLONE_SNAPSHOT = '__clone'; //# sourceMappingURL=constants.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/utils.js
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/**
 * Utility functions for snapshot system.
 */ 
/**
 * Generates a unique ID for a snapshot entry by combining the entry name and unique ID.
 */ function entryUniqID(uniqID, entryName) {
    return entryName ? `${entryName}:${uniqID}` : uniqID;
}
/**
 * Traverses a snapshot instance tree and calls the callback for each node.
 */ function utils_traverseSnapshotInstance(si, callback) {
    // Walk the sibling chain instead of materializing a `childNodes` array per
    // node. The callback may detach the visited node, so the first child and each
    // next sibling are captured before the corresponding callback runs.
    var child = si.__firstChild;
    callback(si);
    while(child){
        var next = child.__nextSibling;
        utils_traverseSnapshotInstance(child, callback);
        child = next;
    }
}
var utils_isCompiledSnapshot = (type)=>type.includes(COMPILED_SNAPSHOT);
var utils_isCloneSnapshot = (type)=>type.startsWith(`${constants_CLONE_SNAPSHOT}_`);
function utils_getCloneSnapshotInfo(type) {
    // Format: `${CLONE_SNAPSHOT}_${cloneSpreadIndex}_${originalType}`.
    var match = new RegExp(`^${constants_CLONE_SNAPSHOT}_(0|[1-9]\\d*)_(.+)$`).exec(type);
    if (!match) return undefined;
    var cloneSpreadIndexString = match[1];
    var cloneSpreadIndex = Number(cloneSpreadIndexString);
    var originalType = match[2];
    if (!utils_isCompiledSnapshot(originalType)) return undefined;
    return {
        originalType,
        cloneSpreadIndex
    };
}
function utils_getCloneSnapshotType(type, cloneSpreadIndex) {
    return utils_isCloneSnapshot(type) ? type : `${CLONE_SNAPSHOT}_${cloneSpreadIndex}_${type}`;
} //# sourceMappingURL=utils.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/patch/snapshotPatch.js
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/**
 * Defines the core patch operations for the snapshot system.
 * The patch operations are designed to be serializable and minimal, allowing
 * efficient transmission between threads and application to element tree.
 */ var snapshotPatch_SnapshotOperation = {
    CreateElement: 0,
    InsertBefore: 1,
    RemoveChild: 2,
    SetAttribute: 3,
    SetAttributes: 4,
    nodesRefInsertBefore: 5,
    nodesRefRemoveChild: 6,
    DEV_ONLY_AddSnapshot: 100,
    DEV_ONLY_RegisterWorklet: 101,
    DEV_ONLY_SetSnapshotEntryName: 102
};
var SnapshotOperationParams = /* @__PURE__ */ {
    [snapshotPatch_SnapshotOperation.CreateElement]: {
        name: 'CreateElement',
        params: [
            'type',
            /* string */ 'id' /* number */ 
        ]
    },
    [snapshotPatch_SnapshotOperation.InsertBefore]: {
        name: 'InsertBefore',
        params: [
            'parentId',
            /* number */ 'childId',
            /* number */ 'beforeId',
            /* number | undefined */ 'slotIndex'
        ]
    },
    [snapshotPatch_SnapshotOperation.RemoveChild]: {
        name: 'RemoveChild',
        params: [
            'parentId',
            /* number */ 'childId' /* number */ 
        ]
    },
    [snapshotPatch_SnapshotOperation.SetAttribute]: {
        name: 'SetAttribute',
        params: [
            'id',
            /* number */ 'dynamicPartIndex',
            /* number */ 'value' /* any */ 
        ]
    },
    [snapshotPatch_SnapshotOperation.SetAttributes]: {
        name: 'SetAttributes',
        params: [
            'id',
            /* number */ 'values' /* any */ 
        ]
    },
    [snapshotPatch_SnapshotOperation.nodesRefInsertBefore]: {
        name: 'nodesRefInsertBefore',
        params: [
            'identifier',
            /* string — CSS selector */ 'childId',
            /* number */ 'beforeId'
        ]
    },
    [snapshotPatch_SnapshotOperation.nodesRefRemoveChild]: {
        name: 'nodesRefRemoveChild',
        params: [
            'identifier',
            /* string — CSS selector */ 'childId'
        ]
    },
    [snapshotPatch_SnapshotOperation.DEV_ONLY_AddSnapshot]: {
        name: 'DEV_ONLY_AddSnapshot',
        params: [
            'uniqID',
            /* string */ 'snapshotCreator'
        ]
    },
    [snapshotPatch_SnapshotOperation.DEV_ONLY_RegisterWorklet]: {
        name: 'DEV_ONLY_RegisterWorklet',
        params: [
            'hash',
            /* string */ 'fnStr' /* string */ 
        ]
    },
    [snapshotPatch_SnapshotOperation.DEV_ONLY_SetSnapshotEntryName]: {
        name: 'DEV_ONLY_SetSnapshotEntryName',
        params: [
            'uniqID',
            /* string */ 'entryName' /* string */ 
        ]
    }
};
var snapshotPatch_globalSnapshotPatch;
function takeGlobalSnapshotPatch() {
    if (snapshotPatch_globalSnapshotPatch) {
        var list = snapshotPatch_globalSnapshotPatch;
        snapshotPatch_globalSnapshotPatch = [];
        return list;
    } else return undefined;
}
function initGlobalSnapshotPatch() {
    snapshotPatch_globalSnapshotPatch = [];
}
function deinitGlobalSnapshotPatch() {
    snapshotPatch_globalSnapshotPatch = undefined;
} //# sourceMappingURL=snapshotPatch.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/definition.js


// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/**
 * Snapshot manager that manages all snapshot definitions.
 */ 






var definition_page;
var __pageId = 0;
function setupPage(page) {
    definition_page = page;
    __pageId = __GetElementUniqueID(page);
}
function clearPage() {
    definition_page = undefined;
    __pageId = 0;
}
/**
 * Manager for snapshot definitions
 */ var definition_snapshotManager = {
    values: /* @__PURE__ */ new Map([
        [
            'root',
            {
                create () {
                    /* v8 ignore start */ if (true) return [];
                    /* v8 ignore stop */ // removed by dead control flow
{}
                },
                update: [],
                slot: __DynamicPartChildren_0,
                isListHolder: false,
                cssId: 0
            }
        ],
        [
            'wrapper',
            {
                create () {
                    /* v8 ignore start */ if (true) return [];
                    /* v8 ignore stop */ // removed by dead control flow
{}
                },
                update: [],
                slot: __DynamicPartChildren_0,
                isListHolder: false
            }
        ],
        [
            null,
            {
                create () {
                    /* v8 ignore start */ if (true) return [];
                    /* v8 ignore stop */ // removed by dead control flow
{}
                },
                update: [
                    (ctx)=>{
                        /* v8 ignore start */ if (true) return;
                        /* v8 ignore stop */ // removed by dead control flow
{}
                    }
                ],
                slot: [],
                isListHolder: false
            }
        ]
    ])
};
/**
 * Creates a new snapshot definition and adds it to the manager
 */ function createSnapshot(uniqID, create, update, slot, cssId, entryName, refAndSpreadIndexes, isLazySnapshotSupported = false) {
    if (!isLazySnapshotSupported) uniqID = entryUniqID(uniqID, entryName);
    // For Lazy Bundle, their entryName is not DEFAULT_ENTRY_NAME.
    // We need to set the entryName correctly for HMR
    if (false) {}
    var s = {
        create,
        update,
        slot,
        cssId,
        entryName,
        refAndSpreadIndexes
    };
    definition_snapshotManager.values.set(uniqID, s);
    if (slot && slot[0]) {
        var v = slot[0][0];
        if (v === dynamicPartType_DynamicPartType.ListChildren || v === dynamicPartType_DynamicPartType.ListSlotV2) s.isListHolder = true;
        s.isSlotV2 = slot.every(([type])=>type === dynamicPartType_DynamicPartType.SlotV2 || type === dynamicPartType_DynamicPartType.ListSlotV2);
    }
    return uniqID;
}
function definition_createRuntimeSnapshot(type) {
    var isListHolder = type === 'list';
    definition_snapshotManager.values.set(type, {
        create (snapshotInstance) {
            /* v8 ignore start */ if (true) return [];
            // Keep runtime-created element creation consistent with the compiled snapshot path
            // (see swc_plugin_snapshot tag dispatch).
            // removed by dead control flow
{}
        /* v8 ignore stop */ },
        update: [
            (ctx, index, oldValue)=>{
                /* v8 ignore start */ if (true) return;
                /* v8 ignore stop */ // removed by dead control flow
{}
            }
        ],
        slot: isListHolder ? __DynamicPartListSlotV2_0 : __DynamicPartSlotV2_0,
        isListHolder,
        refAndSpreadIndexes: [
            0
        ]
    });
}
function definition_createCloneSnapshot(type) {
    var _originalDef_update, _originalDef_refAndSpreadIndexes;
    /* v8 ignore start */ if (definition_snapshotManager.values.has(type)) return;
    /* v8 ignore stop */ var cloneSnapshotInfo = utils_getCloneSnapshotInfo(type);
    if (!cloneSnapshotInfo) throw new Error(`Invalid clone snapshot type: ${type}`);
    var { originalType, cloneSpreadIndex } = cloneSnapshotInfo;
    // get the original snapshot definition
    var originalDef = definition_snapshotManager.values.get(originalType);
    if (!originalDef) {
        var _snapshotCreatorMap_originalType;
        (_snapshotCreatorMap_originalType = snapshotCreatorMap_snapshotCreatorMap[originalType]) === null || _snapshotCreatorMap_originalType === void 0 ? void 0 : _snapshotCreatorMap_originalType.call(snapshotCreatorMap_snapshotCreatorMap, originalType, snapshotCreatorMap_snapshotCreatorRuntime);
        originalDef = definition_snapshotManager.values.get(originalType);
    }
    if (!originalDef) throw new Error('Snapshot not found: ' + originalType);
    // clone the original snapshot definition with spread updater
    var originalDefUpdate = (_originalDef_update = originalDef.update) !== null && _originalDef_update !== void 0 ? _originalDef_update : [];
    var update = originalDefUpdate.slice();
    update[cloneSpreadIndex] = (ctx, index, oldValue)=>{
        /* v8 ignore start */ if (true) return;
        /* v8 ignore stop */ // removed by dead control flow
{}
    };
    var s = _object_spread_props_object_spread_props(_object_spread_object_spread({}, originalDef), {
        update,
        refAndSpreadIndexes: [
            ...(_originalDef_refAndSpreadIndexes = originalDef.refAndSpreadIndexes) !== null && _originalDef_refAndSpreadIndexes !== void 0 ? _originalDef_refAndSpreadIndexes : [],
            cloneSpreadIndex
        ]
    });
    definition_snapshotManager.values.set(type, s);
} //# sourceMappingURL=definition.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/reconstructInstanceTree.js
// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

function reconstructInstanceTree(afters, parentId, targetId) {
    for (var child of afters){
        var id = child.__id;
        snapshotPatch_globalSnapshotPatch === null || snapshotPatch_globalSnapshotPatch === void 0 ? void 0 : snapshotPatch_globalSnapshotPatch.push(snapshotPatch_SnapshotOperation.CreateElement, child.type, id);
        var values = child.__values;
        if (values) {
            child.__values = undefined;
            child.setAttribute('values', values);
        }
        var extraProps = child.__extraProps;
        for(var key in extraProps)child.setAttribute(key, extraProps[key]);
        reconstructInstanceTree(child.childNodes, id);
        // Skip the parent link when `parentId` is `undefined` — used by portal,
        // where the topmost reconstructed node has no BSI parent (it is attached
        // to a NodesRef-resolved host element via `nodesRefInsertBefore`).
        if (parentId !== undefined) snapshotPatch_globalSnapshotPatch === null || snapshotPatch_globalSnapshotPatch === void 0 ? void 0 : snapshotPatch_globalSnapshotPatch.push(snapshotPatch_SnapshotOperation.InsertBefore, parentId, id, targetId, child.__slotIndex);
    }
} //# sourceMappingURL=reconstructInstanceTree.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/snapshot/debug/vnodeSource.js
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.


var snapshotVNodeSourceMap = /*#__PURE__*/ new Map();
var hookInstalled = false;
function formatSource(source) {
    if (!source.fileName) return undefined;
    if (typeof source.lineNumber === 'number' && typeof source.columnNumber === 'number') return `${source.fileName}:${source.lineNumber}:${source.columnNumber}`;
    if (typeof source.lineNumber === 'number') return `${source.fileName}:${source.lineNumber}`;
    return source.fileName;
}
function captureVNodeSource(vnode) {
    var _vnode_DOM;
    if (typeof vnode.type !== 'string') return;
    var source = vnode.__source;
    var id = (_vnode_DOM = vnode[DOM]) === null || _vnode_DOM === void 0 ? void 0 : _vnode_DOM.__id;
    if (!source || typeof id !== 'number') return;
    var formattedSource = formatSource(source);
    if (formattedSource) snapshotVNodeSourceMap.set(id, formattedSource);
}
function setupVNodeSourceHook() {
    if (hookInstalled) return;
    hookInstalled = true;
    var oldDiffed = options[DIFFED];
    options[DIFFED] = (vnode)=>{
        captureVNodeSource(vnode);
        oldDiffed === null || oldDiffed === void 0 ? void 0 : oldDiffed(vnode);
    };
}
function moveSnapshotVNodeSource(oldId, newId) {
    if (oldId === newId) return;
    var source = snapshotVNodeSourceMap.get(oldId);
    if (source) {
        snapshotVNodeSourceMap.set(newId, source);
        snapshotVNodeSourceMap.delete(oldId);
    }
}
function getSnapshotVNodeSource(id) {
    return snapshotVNodeSourceMap.get(id);
}
function clearSnapshotVNodeSource() {
    snapshotVNodeSourceMap.clear();
} //# sourceMappingURL=vnodeSource.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/snapshotInstanceManager.js
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

var snapshotInstanceManager_snapshotInstanceManager = {
    nextId: 0,
    values: /* @__PURE__ */ new Map(),
    clear () {
        // not resetting `nextId` to prevent id collision
        this.values.clear();
        if (false) {}
    }
}; //# sourceMappingURL=snapshotInstanceManager.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/snapshot.js
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.













function isRemovedSnapshot(value, removedSnapshots) {
    return (typeof value === 'object' || typeof value === 'function') && value !== null && removedSnapshots.has(value);
}
function clearRemovedSnapshotsFromArray(values, removedSnapshots, seen = new WeakSet()) {
    if (seen.has(values)) return false;
    seen.add(values);
    var changed = false;
    values.forEach((value, index)=>{
        if (isRemovedSnapshot(value, removedSnapshots)) {
            values[index] = undefined;
            changed = true;
        } else if (Array.isArray(value) && clearRemovedSnapshotsFromArray(value, removedSnapshots, seen)) changed = true;
    });
    return changed;
}
function collectRemovedSnapshots(removedChild) {
    var removedSnapshots = new WeakSet();
    traverseSnapshotInstance(removedChild, (snapshot)=>{
        removedSnapshots.add(snapshot);
    });
    return removedSnapshots;
}
function clearTransientChildPropRefs(owner, removedSnapshots) {
    var props = owner.props;
    if (!props) return;
    for (var key of Object.keys(props)){
        // Named child props are transient staging refs. Once a child subtree is
        // removed, they must not keep the old snapshots alive.
        if (!key.startsWith('$')) continue;
        var value = props[key];
        if (isRemovedSnapshot(value, removedSnapshots)) delete props[key];
        else if (Array.isArray(value)) clearRemovedSnapshotsFromArray(value, removedSnapshots);
    }
}


if (false) {}
/**
 * The runtime instance of a {@link Snapshot} on the main thread that manages
 * the actual elements and handles updates to dynamic parts.
 *
 * This class is designed to be compatible with Preact's {@link ContainerNode}
 * interface for Preact's renderer to operate upon.
 */ class snapshot_SnapshotInstance {
    ensureElements() {
        var { create, slot, isListHolder, cssId } = this.__snapshot_def;
        // FetchBundle intentionally removes CSS scope of entryName
        var useFetchBundle =  true && "QueryComponent" === 'FetchBundle';
        var entryName = useFetchBundle ? undefined : this.__snapshot_def.entryName;
        var elements = create(this);
        this.__elements = elements;
        this.__element_root = elements[0];
        if (cssId === undefined) {
            if (entryName !== DEFAULT_ENTRY_NAME && entryName !== undefined) __SetCSSId(this.__elements, DEFAULT_CSS_ID, entryName);
        } else if (entryName !== DEFAULT_ENTRY_NAME && entryName !== undefined) __SetCSSId(this.__elements, cssId, entryName);
        else __SetCSSId(this.__elements, cssId);
        if (entryName !== DEFAULT_ENTRY_NAME && entryName !== undefined && this.parentNode && entryName !== this.parentNode.__snapshot_def.entryName) __SetAttribute(this.__element_root, 'lazy-bundle-url', this.__snapshot_def.entryName);
        __pendingListUpdates.runWithoutUpdates(()=>{
            var values = this.__values;
            if (values) {
                this.__values = undefined;
                this.setAttribute('values', values);
            }
        });
        if (isListHolder) {
            // never recurse into list's children
            // In nested list scenarios, there are some `list` that are lazily created.
            // We need to `flush` them during `ensureElements`.
            // Also, `flush` is a safe operation since it checks if the `list` is in `__pendingListUpdates`.
            if (__pendingListUpdates.values && !__pendingListUpdates.values[this.__id] && this.__firstChild !== null) {
                var child = this.__firstChild;
                while(child){
                    var __pendingListUpdates_values, _this___id, _;
                    ((_ = (__pendingListUpdates_values = __pendingListUpdates.values)[_this___id = this.__id]) !== null && _ !== void 0 ? _ : __pendingListUpdates_values[_this___id] = new ListUpdateInfoRecording(this)).onInsertBefore(child);
                    child = child.__nextSibling;
                }
            }
            __pendingListUpdates.flushWithId(this.__id);
        } else {
            var index = 0;
            var child1 = this.__firstChild;
            while(child1){
                child1.ensureElements();
                var [type, elementIndex] = slot[this.__snapshot_def.isSlotV2 ? child1.__slotIndex : index];
                switch(type){
                    case DynamicPartType.Slot:
                        __ReplaceElement(child1.__element_root, elements[elementIndex]);
                        elements[elementIndex] = child1.__element_root;
                        index++;
                        break;
                    /* v8 ignore start */ case DynamicPartType.MultiChildren:
                        if (__GetTag(elements[elementIndex]) === 'wrapper') __ReplaceElement(child1.__element_root, elements[elementIndex]);
                        else __AppendElement(elements[elementIndex], child1.__element_root);
                        index++;
                        break;
                    /* v8 ignore end */ case DynamicPartType.Children:
                    case DynamicPartType.ListChildren:
                    case DynamicPartType.SlotV2:
                    case DynamicPartType.ListSlotV2:
                        __AppendElement(elements[elementIndex], child1.__element_root);
                        break;
                    default:
                        throw new Error('Unexpected slot type: ' + type);
                }
                child1 = child1.__nextSibling;
            }
        }
    }
    unRenderElements() {
        var { isListHolder } = this.__snapshot_def;
        this.__elements = undefined;
        this.__element_root = undefined;
        if (isListHolder) ;
        else {
            var child = this.__firstChild;
            while(child){
                child.unRenderElements();
                child = child.__nextSibling;
            }
        }
    }
    takeElements() {
        var a = Object.create(snapshot_SnapshotInstance.prototype);
        a.__id = this.__id;
        a.__snapshot_def = this.__snapshot_def;
        a.__values = this.__values;
        a.__slotIndex = this.__slotIndex;
        // all clear
        a.__parent = null;
        a.__firstChild = null;
        a.__lastChild = null;
        a.__nextSibling = null;
        a.__previousSibling = null;
        this.childNodes.map((c)=>c.takeElements()).forEach((node)=>a.__insertBefore(node));
        a.__elements = this.__elements;
        a.__element_root = this.__element_root;
        this.__elements = undefined;
        this.__element_root = undefined;
        return a;
    }
    tearDown() {
        traverseSnapshotInstance(this, (v)=>{
            v.__parent = null;
            v.__previousSibling = null;
            v.__nextSibling = null;
        });
    }
    get parentNode() {
        return this.__parent;
    }
    get nextSibling() {
        return this.__nextSibling;
    }
    // get isConnected() {
    //   return !!this.__parent;
    // }
    contains(child) {
        return child.parentNode === this;
    }
    get childNodes() {
        var nodes = [];
        var node = this.__firstChild;
        while(node){
            nodes.push(node);
            node = node.__nextSibling;
        }
        return nodes;
    }
    __insertBefore(node, beforeNode) {
        // If the node already has a parent, remove it from its current parent
        if (node.__parent) node.__parent.__removeChild(node);
        // If beforeNode is not provided, add the new node as the last child
        if (beforeNode) {
            // If beforeNode is provided, insert the new node before beforeNode
            if (beforeNode.__previousSibling) {
                beforeNode.__previousSibling.__nextSibling = node;
                node.__previousSibling = beforeNode.__previousSibling;
            } else {
                this.__firstChild = node;
                node.__previousSibling = null;
            }
            beforeNode.__previousSibling = node;
            node.__nextSibling = beforeNode;
            node.__parent = this;
        } else {
            if (this.__lastChild) {
                this.__lastChild.__nextSibling = node;
                node.__previousSibling = this.__lastChild;
            } else {
                this.__firstChild = node;
                node.__previousSibling = null;
            }
            this.__lastChild = node;
            node.__parent = this;
            node.__nextSibling = null;
        }
    }
    __removeChild(node) {
        if (node.__parent !== this) throw new Error('The node to be removed is not a child of this node.');
        if (node.__previousSibling) node.__previousSibling.__nextSibling = node.__nextSibling;
        else this.__firstChild = node.__nextSibling;
        if (node.__nextSibling) node.__nextSibling.__previousSibling = node.__previousSibling;
        else this.__lastChild = node.__previousSibling;
        node.__parent = null;
        node.__previousSibling = null;
        node.__nextSibling = null;
    }
    insertBefore(newNode, existingNode) {
        var __snapshot_def = this.__snapshot_def;
        if (__snapshot_def.isListHolder) {
            var __pendingListUpdates_values, _this___id, _;
            if (__pendingListUpdates.values) ((_ = (__pendingListUpdates_values = __pendingListUpdates.values)[_this___id = this.__id]) !== null && _ !== void 0 ? _ : __pendingListUpdates_values[_this___id] = new ListUpdateInfoRecording(this)).onInsertBefore(newNode, existingNode);
            this.__insertBefore(newNode, existingNode);
            return;
        }
        var shouldRemove = newNode.__parent === this;
        this.__insertBefore(newNode, existingNode);
        var __elements = this.__elements;
        if (__elements) {
            if (!newNode.__elements) newNode.ensureElements();
        } else return;
        var count = __snapshot_def.slot.length;
        if (count === 1 || __snapshot_def.isSlotV2) {
            var [, elementIndex] = __snapshot_def.slot[typeof newNode.__slotIndex === 'number' ? newNode.__slotIndex : 0];
            var parent = __elements[elementIndex];
            if (shouldRemove) __RemoveElement(parent, newNode.__element_root);
            if (existingNode) {
                // SlotV2: each slot has its own wrapper. `existingNode` may live in a
                // different wrapper — `insertBefore(node, ref)` across wrappers throws,
                // so fall back to `append` (DOM auto-detaches the node from old parent).
                if (__snapshot_def.isSlotV2 && newNode.__slotIndex !== existingNode.__slotIndex) __AppendElement(parent, newNode.__element_root);
                else __InsertElementBefore(parent, newNode.__element_root, existingNode.__element_root);
            } else __AppendElement(parent, newNode.__element_root);
        } else if (count > 1) {
            var index = this.__current_slot_index++;
            var [s, elementIndex1] = __snapshot_def.slot[index];
            if (s === DynamicPartType.Slot) {
                __ReplaceElement(newNode.__element_root, __elements[elementIndex1]);
                __elements[elementIndex1] = newNode.__element_root;
            /* v8 ignore start */ } else if (s === DynamicPartType.MultiChildren) {
                if (__GetTag(__elements[elementIndex1]) === 'wrapper') __ReplaceElement(newNode.__element_root, __elements[elementIndex1]);
                else __AppendElement(__elements[elementIndex1], newNode.__element_root);
            }
        /* v8 ignore end */ }
    }
    removeChild(child) {
        var __snapshot_def = this.__snapshot_def;
        var removedSnapshots = collectRemovedSnapshots(child);
        clearTransientChildPropRefs(this, removedSnapshots);
        if (__snapshot_def.isListHolder) {
            var __pendingListUpdates_values, _this___id, _;
            if (__pendingListUpdates.values) ((_ = (__pendingListUpdates_values = __pendingListUpdates.values)[_this___id = this.__id]) !== null && _ !== void 0 ? _ : __pendingListUpdates_values[_this___id] = new ListUpdateInfoRecording(this)).onRemoveChild(child);
            this.__removeChild(child);
            traverseSnapshotInstance(child, (v)=>{
                clearTransientChildPropRefs(v, removedSnapshots);
                snapshotInstanceManager.values.delete(v.__id);
            });
            // mark this child as deleted
            child.__id = 0;
            return;
        }
        unref(child, true);
        if (this.__elements) {
            var [, elementIndex] = __snapshot_def.slot[typeof child.__slotIndex === 'number' ? child.__slotIndex : 0];
            __RemoveElement(this.__elements[elementIndex], child.__element_root);
        }
        this.__removeChild(child);
        traverseSnapshotInstance(child, (v)=>{
            if (v.__snapshot_def.isListHolder) snapshotDestroyList(v);
            clearTransientChildPropRefs(v, removedSnapshots);
            v.__parent = null;
            v.__previousSibling = null;
            v.__nextSibling = null;
            delete v.__elements;
            delete v.__element_root;
            snapshotInstanceManager.values.delete(v.__id);
        });
    }
    // remove all children from start or this.__firstChild
    removeChildren(start = this.__firstChild) {
        var nodeToRemove = start;
        while(nodeToRemove){
            var next = nodeToRemove.__nextSibling;
            this.removeChild(nodeToRemove);
            nodeToRemove = next;
        }
    }
    setAttribute(key, value) {
        var _this___values;
        if (key === 'values') {
            var oldValues = this.__values;
            var values = value;
            this.__values = values;
            if (oldValues) for(var index = 0; index < values.length; index++)this.callUpdateIfNotDirectOrDeepEqual(index, oldValues[index], values[index]);
            else for(var index1 = 0; index1 < values.length; index1++)this.callUpdateIfNotDirectOrDeepEqual(index1, undefined, values[index1]);
            this.syncListItemPlatformInfo();
            return;
        }
        if (typeof key === 'string') {
            var // for more flexible usage, we allow setting non-indexed attributes
            _this___extraProps;
            if (key === '__listItemPlatformInfoIndex') {
                this.__listItemPlatformInfoIndex = value;
                this.syncListItemPlatformInfo();
                return;
            }
            if (key === '__listItemPlatformInfo') {
                this.__listItemPlatformInfo = value;
                return;
            }
            ((_this___extraProps = this.__extraProps) !== null && _this___extraProps !== void 0 ? _this___extraProps : this.__extraProps = {})[key] = value;
            return;
        }
        (_this___values = this.__values) !== null && _this___values !== void 0 ? _this___values : this.__values = [];
        this.callUpdateIfNotDirectOrDeepEqual(key, this.__values[key], this.__values[key] = value);
        this.syncListItemPlatformInfo();
    }
    syncListItemPlatformInfo() {
        var _this___snapshot_def_refAndSpreadIndexes;
        if (this.__listItemPlatformInfoIndex === undefined || !this.__values) return;
        var index = this.__listItemPlatformInfoIndex;
        this.__listItemPlatformInfo = getListItemPlatformInfoFromIndexedValue(this.__values[index], (_this___snapshot_def_refAndSpreadIndexes = this.__snapshot_def.refAndSpreadIndexes) === null || _this___snapshot_def_refAndSpreadIndexes === void 0 ? void 0 : _this___snapshot_def_refAndSpreadIndexes.includes(index));
    }
    toJSON() {
        var json = {
            id: this.__id,
            type: this.type,
            values: this.__values,
            extraProps: this.__extraProps,
            children: this.__firstChild ? this.childNodes : undefined
        };
        // To save serialize time, we only serialize slotIndex if it is not 0
        if (this.__slotIndex > 0) json.slotIndex = this.__slotIndex;
        if (this.__listItemPlatformInfo) json.__listItemPlatformInfo = this.__listItemPlatformInfo;
        return json;
    }
    callUpdateIfNotDirectOrDeepEqual(index, oldValue, newValue) {
        if (isDirectOrDeepEqual(oldValue, newValue)) ;
        else this.__snapshot_def.update[index](this, index, oldValue);
    }
    constructor(type, id){
        // current slot index for dynamic parts
        // only increment when inserting dynamic parts
        // when removing dynamic parts, the slot index will not change
        // cause there would be a wrapper to keep the slot index stable
        this.__current_slot_index = 0;
        this.__slotIndex = 0;
        // onCreate?: () => void;
        // onAttach?: () => void;
        // onDetach?: () => void;
        // onRef?: () => void;
        // onUnref?: () => void;
        this.__parent = null;
        this.__firstChild = null;
        this.__lastChild = null;
        this.__previousSibling = null;
        this.__nextSibling = null;
        this.type = type;
        // Suspense uses 'div'
        if (!snapshotManager.values.has(type) && type !== 'div') {
            if (snapshotCreatorMap[type]) snapshotCreatorMap[type](type, snapshotCreatorRuntime);
            else if (isCloneSnapshot(type)) createCloneSnapshot(type);
            else if (isCompiledSnapshot(type)) {
                var message = 'Snapshot not found: ' + type;
                if (false) {}
                throw new Error(message);
            } else createRuntimeSnapshot(type);
        }
        this.__snapshot_def = snapshotManager.values.get(type);
        id !== null && id !== void 0 ? id : id = snapshotInstanceManager.nextId -= 1;
        this.__id = id;
        snapshotInstanceManager.values.set(id, this);
    }
} //# sourceMappingURL=snapshot.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/shared/render-constants.js
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
var render_constants_DIFF = '__b';
var render_constants_DIFF2 = '_diff2';
var render_constants_RENDER = '__r';
var render_constants_DIFFED = 'diffed';
var render_constants_COMMIT = '__c';
var render_constants_SKIP_EFFECTS = '__s';
var CATCH_ERROR = '__e';
var render_constants_ROOT = '__';
var RENDER_COMPONENT = 'renderComponent';
// VNode properties
var render_constants_COMPONENT = '__c';
var render_constants_CHILDREN = '__k';
var render_constants_PARENT = '__';
var render_constants_MASK = '__m';
var render_constants_DOM = '__e';
var ORIGINAL = '__v';
var INDEX = '__i';
var FLAGS = '__u';
// Component properties
var render_constants_VNODE = '__v';
var render_constants_DIRTY = '__d';
var FORCE = '__e';
var render_constants_NEXT_STATE = '__s';
var render_constants_CHILD_DID_SUSPEND = '__c';
var RENDER_CALLBACKS = '__h';
var render_constants_HOOK = '__h';
// Hooks properties
var HOOKS = '__H';
var LIST = '__';
var VALUE = '__';
var NEXT_VALUE = '__N';
var PENDING_EFFECTS = '__h'; //# sourceMappingURL=render-constants.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/core/performance.js
// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.



var PerformanceTimingFlags = {
    reactLynxHydrate: 'react_lynx_hydrate'
};
var PipelineOrigins = {
    reactLynxHydrate: 'reactLynxHydrate',
    updateTriggeredByBts: 'updateTriggeredByBts'
};
/**
 * @deprecated used by old timing api(setState timing flag)
 */ var PerfSpecificKey = '__lynx_timing_flag';
var performance_timingFlag;
var shouldMarkDiffVdomStart = false;
var shouldMarkDiffVdomEnd = false;
var globalPipelineOptions;
var activeTimingAPIOptions;
var didInstallTimingAPIHooks = false;
/**
 * @deprecated used by old timing api(setState timing flag)
 */ function markTimingLegacy(key, timingFlag_) {
    var _lynx_getNativeApp_markTiming, _lynx_getNativeApp;
    switch(key){
        case 'updateSetStateTrigger':
            shouldMarkDiffVdomStart = true;
            shouldMarkDiffVdomEnd = true;
            performance_timingFlag = timingFlag_;
            break;
        case 'updateDiffVdomStart':
            if (!shouldMarkDiffVdomStart) return;
            shouldMarkDiffVdomStart = false;
            break;
        case 'updateDiffVdomEnd':
            if (!shouldMarkDiffVdomEnd) return;
            shouldMarkDiffVdomEnd = false;
            break;
    }
    (_lynx_getNativeApp_markTiming = (_lynx_getNativeApp = lynx.getNativeApp()).markTiming) === null || _lynx_getNativeApp_markTiming === void 0 ? void 0 : _lynx_getNativeApp_markTiming.call(_lynx_getNativeApp, performance_timingFlag, key);
}
function beginPipeline(needTimestamps, pipelineOrigin, timingFlag) {
    var _lynx_performance__generatePipelineOptions, _lynx_performance;
    globalPipelineOptions = (_lynx_performance = lynx.performance) === null || _lynx_performance === void 0 ? void 0 : (_lynx_performance__generatePipelineOptions = _lynx_performance._generatePipelineOptions) === null || _lynx_performance__generatePipelineOptions === void 0 ? void 0 : _lynx_performance__generatePipelineOptions.call(_lynx_performance);
    if (globalPipelineOptions) {
        var _lynx_performance__onPipelineStart, _lynx_performance1, _lynx_performance__onPipelineStart1, _lynx_performance2, _lynx_performance__bindPipelineIdWithTimingFlag, _lynx_performance3;
        globalPipelineOptions.needTimestamps = needTimestamps;
        globalPipelineOptions.pipelineOrigin = pipelineOrigin;
        globalPipelineOptions.dsl = 'reactLynx';
        switch(pipelineOrigin){
            case PipelineOrigins.reactLynxHydrate:
                globalPipelineOptions.stage = 'hydrate';
                break;
            case PipelineOrigins.updateTriggeredByBts:
                globalPipelineOptions.stage = 'update';
                break;
        }
        if (utils_isSdkVersionGt(3, 0)) (_lynx_performance1 = lynx.performance) === null || _lynx_performance1 === void 0 ? void 0 : (_lynx_performance__onPipelineStart = _lynx_performance1._onPipelineStart) === null || _lynx_performance__onPipelineStart === void 0 ? void 0 : _lynx_performance__onPipelineStart.call(_lynx_performance1, globalPipelineOptions.pipelineID, globalPipelineOptions);
        else (_lynx_performance2 = lynx.performance) === null || _lynx_performance2 === void 0 ? void 0 : (_lynx_performance__onPipelineStart1 = _lynx_performance2._onPipelineStart) === null || _lynx_performance__onPipelineStart1 === void 0 ? void 0 : _lynx_performance__onPipelineStart1.call(_lynx_performance2, globalPipelineOptions.pipelineID);
        if (timingFlag) (_lynx_performance3 = lynx.performance) === null || _lynx_performance3 === void 0 ? void 0 : (_lynx_performance__bindPipelineIdWithTimingFlag = _lynx_performance3._bindPipelineIdWithTimingFlag) === null || _lynx_performance__bindPipelineIdWithTimingFlag === void 0 ? void 0 : _lynx_performance__bindPipelineIdWithTimingFlag.call(_lynx_performance3, globalPipelineOptions.pipelineID, timingFlag);
    }
}
function setPipeline(pipeline) {
    globalPipelineOptions = pipeline;
}
function resetTimingState() {
    performance_timingFlag = undefined;
    shouldMarkDiffVdomStart = false;
    shouldMarkDiffVdomEnd = false;
    globalPipelineOptions = undefined;
}
function markTiming(timestampKey, force) {
    var _lynx_performance__markTiming, _lynx_performance;
    if (globalPipelineOptions && (force || globalPipelineOptions.needTimestamps)) (_lynx_performance = lynx.performance) === null || _lynx_performance === void 0 ? void 0 : (_lynx_performance__markTiming = _lynx_performance._markTiming) === null || _lynx_performance__markTiming === void 0 ? void 0 : _lynx_performance__markTiming.call(_lynx_performance, globalPipelineOptions.pipelineID, timestampKey);
}
function initTimingAPI(timingAPIOptions) {
    activeTimingAPIOptions = timingAPIOptions;
    resetTimingState();
    if (didInstallTimingAPIHooks) return;
    didInstallTimingAPIHooks = true;
    var helper = ()=>{
        var _timingAPIOptions_beginPipeline;
        var _$timingAPIOptions = activeTimingAPIOptions;
        /* v8 ignore start */ if (!_$timingAPIOptions) return;
        /* v8 ignore stop */ var startPipeline = (_timingAPIOptions_beginPipeline = _$timingAPIOptions.beginPipeline) !== null && _timingAPIOptions_beginPipeline !== void 0 ? _timingAPIOptions_beginPipeline : beginPipeline;
        if (_$timingAPIOptions.shouldStartUpdatePipeline()) {
            if (!globalPipelineOptions) {
                startPipeline(false, PipelineOrigins.updateTriggeredByBts);
                markTiming('diffVdomStart', true);
            }
            if (shouldMarkDiffVdomStart) markTimingLegacy('updateDiffVdomStart');
        }
    };
    var onHook = (old, ...args)=>{
        helper();
        /* v8 ignore start */ if (old) old(...args);
    /* v8 ignore stop */ };
    utils_hook(preact_options, RENDER_COMPONENT, onHook);
    utils_hook(preact_options, render_constants_ROOT, onHook);
}
 //# sourceMappingURL=performance.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/snapshot/gesture/types.js
var types_GestureTypeInner = {
    COMPOSED: -1,
    PAN: 0,
    FLING: 1,
    DEFAULT: 2,
    TAP: 3,
    LONGPRESS: 4,
    ROTATION: 5,
    PINCH: 6,
    NATIVE: 7
}; //# sourceMappingURL=types.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/functionality.js
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

var mtsEnabled;
var runOnBackgroundEnabled;
/**
 * @internal
 */ function isMtsEnabled() {
    return mtsEnabled !== null && mtsEnabled !== void 0 ? mtsEnabled : mtsEnabled = utils_isSdkVersionGt(2, 13);
}
/**
 * @internal
 */ function isRunOnBackgroundEnabled() {
    return runOnBackgroundEnabled !== null && runOnBackgroundEnabled !== void 0 ? runOnBackgroundEnabled : runOnBackgroundEnabled = utils_isSdkVersionGt(2, 15);
}
function clearConfigCacheForTesting() {
    mtsEnabled = undefined;
    runOnBackgroundEnabled = undefined;
}
 //# sourceMappingURL=functionality.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/shared/index-map.js
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
class index_map_IndexMap {
    add(value) {
        var index = ++this.lastIndex;
        this.indexMap.set(index, value);
        return index;
    }
    get(index) {
        return this.indexMap.get(index);
    }
    remove(index) {
        this.indexMap.delete(index);
    }
    get size() {
        return this.indexMap.size;
    }
    constructor(){
        this.lastIndex = 0;
        this.indexMap = new Map();
    }
} //# sourceMappingURL=index-map.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/core/background-function/exec-map.js
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

/**
 * Keeps the background-thread worklet ctx alive while main thread still holds
 * a handle to one of its background functions.
 */ class BackgroundFunctionExecMap extends index_map_IndexMap {
    add(worklet) {
        var execId = super.add(worklet);
        worklet._execId = execId;
        return execId;
    }
    findJsFnHandle(execId, fnId) {
        var worklet = this.get(execId);
        if (!worklet) return undefined;
        return this.findJsFnHandleInValue(worklet, fnId);
    }
    findJsFnHandleInValue(value, fnId) {
        if (value === null || typeof value !== 'object') return undefined;
        var obj = value;
        if ('_jsFnId' in obj && obj['_jsFnId'] === fnId) return obj;
        for(var i in obj){
            var result = this.findJsFnHandleInValue(obj[i], fnId);
            if (result) return result;
        }
        return undefined;
    }
} //# sourceMappingURL=exec-map.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/core/runtime-destroy.js
// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
var destroyTasks = new Set();
function runtime_destroy_registerDestroyTask(task) {
    destroyTasks.add(task);
    return ()=>{
        destroyTasks.delete(task);
    };
}
function runDestroyTasks() {
    var tasks = Array.from(destroyTasks);
    for (var task of tasks)task();
    destroyTasks.clear();
} //# sourceMappingURL=runtime-destroy.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/core/background-function/run-on-background.js
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.




var execIdMap;
var cleanupBackgroundFunctionRuntime;
var unregisterBackgroundFunctionCleanup;
function initBackgroundFunctionRuntime() {
    'background only';
    if (execIdMap) return;
    execIdMap = new BackgroundFunctionExecMap();
    var context = lynx.getCoreContext();
    context.addEventListener(events_WorkletEvents.runOnBackground, runBackgroundFunction);
    context.addEventListener(events_WorkletEvents.releaseBackgroundWorkletCtx, releaseBackgroundFunctionCtx);
    cleanupBackgroundFunctionRuntime = ()=>{
        context.removeEventListener(events_WorkletEvents.runOnBackground, runBackgroundFunction);
        context.removeEventListener(events_WorkletEvents.releaseBackgroundWorkletCtx, releaseBackgroundFunctionCtx);
        execIdMap = undefined;
        cleanupBackgroundFunctionRuntime = undefined;
    };
}
/**
 * @internal
 */ function runBackgroundFunction(event) {
    'background only';
    var data = JSON.parse(event.data);
    var obj = execIdMap.findJsFnHandle(data.obj._execId, data.obj._jsFnId);
    var f = obj === null || obj === void 0 ? void 0 : obj._fn;
    if (!f) throw new Error('runOnBackground: JS function not found: ' + JSON.stringify(data.obj));
    var returnValue = f(...data.params);
    lynx.getCoreContext().dispatchEvent({
        type: events_WorkletEvents.FunctionCallRet,
        data: JSON.stringify({
            resolveId: data.resolveId,
            returnValue
        })
    });
}
function releaseBackgroundFunctionCtx(event) {
    'background only';
    for (var id of event.data)execIdMap.remove(id);
}
/**
 * @internal
 */ function run_on_background_registerBackgroundFunctionCtx(ctx) {
    'background only';
    initBackgroundFunctionRuntime();
    ensureBackgroundFunctionCleanup();
    execIdMap.add(ctx);
}
function ensureBackgroundFunctionCleanup() {
    if (unregisterBackgroundFunctionCleanup) return;
    unregisterBackgroundFunctionCleanup = runtime_destroy_registerDestroyTask(()=>{
        resetBackgroundFunctionRuntime();
    });
}
function resetBackgroundFunctionRuntime() {
    cleanupBackgroundFunctionRuntime === null || cleanupBackgroundFunctionRuntime === void 0 ? void 0 : cleanupBackgroundFunctionRuntime();
    unregisterBackgroundFunctionCleanup === null || unregisterBackgroundFunctionCleanup === void 0 ? void 0 : unregisterBackgroundFunctionCleanup();
    unregisterBackgroundFunctionCleanup = undefined;
}
/**
 * `runOnBackground` allows triggering js functions on the background thread asynchronously.
 * @param f - The js function to be called.
 * @returns A function. Calling which with the arguments to be passed to the js function to trigger it on the background thread. This function returns a promise that resolves to the return value of the js function.
 * @public
 */ function runOnBackground(f) {
    if (!isSdkVersionGt(2, 15)) throw new Error('runOnBackground requires Lynx sdk version 2.16.');
    throw new Error('runOnBackground can only be used on the main thread.');
} //# sourceMappingURL=run-on-background.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/ctx.js


/**
 * @internal
 */ function onPostWorkletCtx(afterValue) {
    if (!isMtsEnabled() && afterValue) {
        lynx.reportError(new Error('Main thread script requires Lynx sdk version 2.14'));
        return null;
    }
    if (!afterValue || !isRunOnBackgroundEnabled()) return afterValue;
    run_on_background_registerBackgroundFunctionCtx(afterValue);
    return afterValue;
} //# sourceMappingURL=ctx.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/snapshot/gesture/processGestureBagkround.js




function prepareWorkletForCommit(value) {
    // Copy-on-commit: keep the background-side gesture/worklet objects clean.
    // `_execId` is injected into the payload object that will be sent to the main thread.
    var copy = _object_spread_object_spread({}, value);
    return onPostWorkletCtx(copy);
}
function removeUndefinedFields(record) {
    var filteredEntries = Object.entries(record).filter(([, value])=>value !== undefined);
    return Object.fromEntries(filteredEntries);
}
function serializeCommittedGesture(gesture) {
    var _ref, _ref1, _ref2;
    var _baseGesture_simultaneousWith, _baseGesture_waitFor, _baseGesture_continueWith;
    if (gesture.type === types_GestureTypeInner.COMPOSED) {
        var composed = gesture;
        return {
            type: composed.type,
            gestures: composed.gestures.map((subGesture)=>serializeCommittedGesture(subGesture)),
            __isSerialized: true
        };
    }
    var baseGesture = gesture;
    return removeUndefinedFields({
        config: baseGesture.config,
        id: baseGesture.id,
        type: baseGesture.type,
        simultaneousWith: (_ref = (_baseGesture_simultaneousWith = baseGesture.simultaneousWith) === null || _baseGesture_simultaneousWith === void 0 ? void 0 : _baseGesture_simultaneousWith.map((subGesture)=>({
                id: subGesture.id
            }))) !== null && _ref !== void 0 ? _ref : [],
        waitFor: (_ref1 = (_baseGesture_waitFor = baseGesture.waitFor) === null || _baseGesture_waitFor === void 0 ? void 0 : _baseGesture_waitFor.map((subGesture)=>({
                id: subGesture.id
            }))) !== null && _ref1 !== void 0 ? _ref1 : [],
        continueWith: (_ref2 = (_baseGesture_continueWith = baseGesture.continueWith) === null || _baseGesture_continueWith === void 0 ? void 0 : _baseGesture_continueWith.map((subGesture)=>({
                id: subGesture.id
            }))) !== null && _ref2 !== void 0 ? _ref2 : [],
        callbacks: baseGesture.callbacks,
        __isSerialized: true
    });
}
function attachCommittedSerializer(gesture) {
    var serialize = ()=>serializeCommittedGesture(gesture);
    return Object.assign(gesture, {
        serialize,
        toJSON: serialize
    });
}
/**
 * Prepare a gesture payload to be sent to the main thread.
 *
 * This function returns a copy of the input object and injects `_execId` into
 * its worklet callbacks. The background-side gesture object MUST NOT be mutated,
 * otherwise `_execId` churn would pollute the cached values and cause redundant patches.
 */ function prepareGestureForCommit(gesture) {
    if (gesture.type === types_GestureTypeInner.COMPOSED) {
        var composed = gesture;
        var committed = _object_spread_props_object_spread_props(_object_spread_object_spread({}, composed), {
            gestures: composed.gestures.map((g)=>prepareGestureForCommit(g))
        });
        return attachCommittedSerializer(committed);
    }
    var baseGesture = gesture;
    var committedCallbacks = _object_spread_object_spread({}, baseGesture.callbacks);
    for (var name of Object.keys(committedCallbacks)){
        var callback = committedCallbacks[name];
        if (callback == null) continue;
        // `onPostWorkletCtx` may report errors and return null depending on runtime configuration.
        // Keep behavior consistent with the previous implementation (which used `!`).
        committedCallbacks[name] = prepareWorkletForCommit(callback);
    }
    var committed1 = _object_spread_props_object_spread_props(_object_spread_object_spread({}, baseGesture), {
        callbacks: committedCallbacks
    });
    return attachCommittedSerializer(committed1);
} //# sourceMappingURL=processGestureBagkround.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/patch/globalState.js
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/**
 * Global state shared across modules to avoid circular dependencies
 */ /**
 * List of background snapshot instances to remove during commit phase
 */ var globalState_globalBackgroundSnapshotInstancesToRemove = [];
function setGlobalBackgroundSnapshotInstancesToRemove(ids) {
    globalState_globalBackgroundSnapshotInstancesToRemove = ids;
} //# sourceMappingURL=globalState.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/nodesRef.js

/**
 * `_nodeSelectToken.type` values produced by Lynx core's selector query:
 *   - `0` = CSS selector (`select` / `selectAll` / `selectRoot`)
 *   - `1` = React ref (`selectReactRef`)
 *   - `2` = element unique id (`selectUniqueID`)
 *
 * We only support type `0` — the apply side resolves it via
 * `__QuerySelector`. Types `1` / `2` would need their own lookup PAPIs
 * (`__GetElementByUniqueId`, etc.) which we don't wire today.
 */ var NodeSelectType = {
    Selector: 0,
    ReactRef: 1,
    UniqueID: 2
};
var nodesRef_serializeNodesRef = (nodesRef)=>{
    if (nodesRef instanceof RefProxy) return nodesRef.selector;
    var nodeSelectToken = nodesRef._nodeSelectToken;
    if (nodeSelectToken.type !== NodeSelectType.Selector) throw new Error(`[createPortal] unsupported NodesRef type ${nodeSelectToken.type} ` + `(identifier ${JSON.stringify(nodeSelectToken.identifier)}). ` + `Pass a CSS-selector NodesRef from \`lynx.createSelectorQuery().select(...)\` ` + `or a React ref instead.`);
    return nodeSelectToken.identifier;
}; //# sourceMappingURL=nodesRef.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/portalsPending.js
// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.



/**
 * Tuples of `(container, child, before)` queued by `Portal`'s pre-hydrate
 * `fakeRoot.insertBefore` — the global patch buffer is `undefined` before
 * hydrate, so the BSI constructor's `CreateElement` push and our
 * `nodesRefInsertBefore` push would both be silently dropped. We hold them
 * here and replay during `clearPendingPortalInsertBefore` (called from
 * `hydrate()` once the global buffer is initialized).
 */ var portalsPending_pendingInsertBefore = [];
var clearPendingPortalInsertBefore = ()=>{
    var i = 0;
    while(i < portalsPending_pendingInsertBefore.length){
        var container = portalsPending_pendingInsertBefore[i++];
        var child = portalsPending_pendingInsertBefore[i++];
        var before = portalsPending_pendingInsertBefore[i++];
        // Replay the BSI subtree's `CreateElement` / `SetAttributes` / internal
        // `InsertBefore` ops — they were dropped pre-hydrate because
        // `__globalSnapshotPatch` was `undefined`. Pass `parentId=undefined` so
        // the topmost node is left orphan; we link it to the host element via
        // the following `nodesRefInsertBefore` instead.
        reconstructInstanceTree([
            child
        ]);
        // Pre-hydrate `before` is effectively always undefined: preact's
        // initial diff appends each child sequentially, so the queued tuple's
        // third slot is undefined in normal flows. The `before?.__id` truthy
        // branch is exercised post-hydrate in the prepend-keyed-children test.
        /* v8 ignore start */ snapshotPatch_globalSnapshotPatch.push(snapshotPatch_SnapshotOperation.nodesRefInsertBefore, nodesRef_serializeNodesRef(container), child.__id, before === null || before === void 0 ? void 0 : before.__id);
    /* v8 ignore stop */ }
    portalsPending_pendingInsertBefore.length = 0;
}; //# sourceMappingURL=portalsPending.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/snapshot/snapshot/backgroundSnapshot.js

// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.




















/**
 * Background snapshot instance manager that manages all background snapshot instances.
 */ var backgroundSnapshotInstanceManager = {
    nextId: 0,
    values: /* @__PURE__ */ new Map(),
    clear () {
        // not resetting `nextId` to prevent id collision
        this.values.clear();
        if (false) {}
    },
    updateId (id, newId) {
        var values = this.values;
        var si = values.get(id);
        // For PreactDevtools, on first hydration,
        // PreactDevtools can get the real snapshot instance id in main-thread
        if (false) {}
        values.delete(id);
        values.set(newId, si);
        si.__id = newId;
        if (false) {}
    },
    getValueBySign (str) {
        var res = str === null || str === void 0 ? void 0 : str.split(':');
        if (!res || res.length != 2 && res.length != 3) throw new Error('Invalid ctx format: ' + str);
        var id = Number(res[0]);
        var expIndex = Number(res[1]);
        var ctx = this.values.get(id);
        if (!ctx) return null;
        /**
         * 1. normal event
         *  `${ctx.__id}:${expIndex}:${spreadKey}`
         * 2. defer list event
         *   ${ctx.__id}:__extraProps:onRecycleComponent`
         *   ${ctx.__id}:__extraProps:onComponentAtIndex`
         */ var spreadKey = res[2];
        if (res[1] === '__extraProps') {
            if (spreadKey) return ctx.__extraProps[spreadKey];
            throw new Error('unreachable');
        } else {
            if (spreadKey) return ctx.__values[expIndex][spreadKey];
            else return ctx.__values[expIndex];
        }
    }
};
function backgroundSnapshot_prepareWorkletForCommit(worklet) {
    // Copy-on-commit: do not mutate the background-side worklet ctx.
    // `_execId` is injected into the payload object that will be sent to the main thread.
    return onPostWorkletCtx(_object_spread_object_spread({}, worklet));
}
function prepareSpreadForCommit(spread, oldSpread) {
    var committed;
    for(var key in spread){
        var v = spread[key];
        if (key === '__lynx_timing_flag' && (oldSpread === null || oldSpread === void 0 ? void 0 : oldSpread[key]) != v && globalPipelineOptions) globalPipelineOptions.needTimestamps = true;
        if (!v || typeof v !== 'object') continue;
        var valueRecord = v;
        var committedValue = void 0;
        if ('_wkltId' in valueRecord) committedValue = backgroundSnapshot_prepareWorkletForCommit(v);
        else if ('__isGesture' in valueRecord) committedValue = prepareGestureForCommit(v);
        else continue;
        committed !== null && committed !== void 0 ? committed : committed = _object_spread_object_spread({}, spread);
        committed[key] = committedValue;
    }
    return committed !== null && committed !== void 0 ? committed : spread;
}
class backgroundSnapshot_BackgroundSnapshotInstance {
    get parentNode() {
        return this.__parent;
    }
    get nextSibling() {
        return this.__nextSibling;
    }
    // get isConnected() {
    //   return !!this.__parent;
    // }
    // contains(child: BackgroundSnapshotInstance): boolean {
    //   return child.parentNode === this;
    // }
    // This will be called in `lazy`/`Suspense`.
    appendChild(child) {
        return this.insertBefore(child);
    }
    insertBefore(node, beforeNode) {
        if (node.__removed_from_tree) {
            node.__removed_from_tree = false;
            // This is only called by `lazy`/`Suspense` through `appendChild` so beforeNode is always undefined.
            /* v8 ignore next */ reconstructInstanceTree([
                node
            ], this.__id, beforeNode === null || beforeNode === void 0 ? void 0 : beforeNode.__id);
        } else snapshotPatch_globalSnapshotPatch === null || snapshotPatch_globalSnapshotPatch === void 0 ? void 0 : snapshotPatch_globalSnapshotPatch.push(snapshotPatch_SnapshotOperation.InsertBefore, this.__id, node.__id, beforeNode === null || beforeNode === void 0 ? void 0 : beforeNode.__id, node.__slotIndex);
        // If the node already has a parent, remove it from its current parent
        var p = node.__parent;
        if (p) {
            if (node.__previousSibling) node.__previousSibling.__nextSibling = node.__nextSibling;
            else p.__firstChild = node.__nextSibling;
            if (node.__nextSibling) node.__nextSibling.__previousSibling = node.__previousSibling;
            else p.__lastChild = node.__previousSibling;
        }
        // If beforeNode is not provided, add the new node as the last child
        if (beforeNode) {
            // If beforeNode is provided, insert the new node before beforeNode
            if (beforeNode.__previousSibling) {
                beforeNode.__previousSibling.__nextSibling = node;
                node.__previousSibling = beforeNode.__previousSibling;
            } else {
                this.__firstChild = node;
                node.__previousSibling = null;
            }
            beforeNode.__previousSibling = node;
            node.__nextSibling = beforeNode;
            node.__parent = this;
        } else {
            if (this.__lastChild) {
                this.__lastChild.__nextSibling = node;
                node.__previousSibling = this.__lastChild;
            } else {
                this.__firstChild = node;
                node.__previousSibling = null;
            }
            this.__lastChild = node;
            node.__parent = this;
            node.__nextSibling = null;
        }
    }
    removeChild(node) {
        snapshotPatch_globalSnapshotPatch === null || snapshotPatch_globalSnapshotPatch === void 0 ? void 0 : snapshotPatch_globalSnapshotPatch.push(snapshotPatch_SnapshotOperation.RemoveChild, this.__id, node.__id);
        node.__removed_from_tree = true;
        if (node.__parent !== this) throw new Error('The node to be removed is not a child of this node.');
        if (node.__previousSibling) node.__previousSibling.__nextSibling = node.__nextSibling;
        else this.__firstChild = node.__nextSibling;
        if (node.__nextSibling) node.__nextSibling.__previousSibling = node.__previousSibling;
        else this.__lastChild = node.__previousSibling;
        node.__parent = null;
        node.__previousSibling = null;
        node.__nextSibling = null;
        queueRefAttrUpdate(()=>{
            utils_traverseSnapshotInstance(node, (v)=>{
                var _v___snapshot_def_refAndSpreadIndexes;
                if (v.__values) (_v___snapshot_def_refAndSpreadIndexes = v.__snapshot_def.refAndSpreadIndexes) === null || _v___snapshot_def_refAndSpreadIndexes === void 0 ? void 0 : _v___snapshot_def_refAndSpreadIndexes.forEach((i)=>{
                    var value = v.__values[i];
                    if (value && (typeof value === 'object' || typeof value === 'function')) {
                        if ('__spread' in value && 'ref' in value && value.ref) clearRef(value.ref);
                        else if ('__ref' in value) clearRef(value);
                    }
                });
            });
        }, null, 0, 0);
        globalState_globalBackgroundSnapshotInstancesToRemove.push(node.__id);
    }
    tearDown() {
        utils_traverseSnapshotInstance(this, (v)=>{
            v.__parent = null;
            v.__previousSibling = null;
            v.__nextSibling = null;
            backgroundSnapshotInstanceManager.values.delete(v.__id);
        });
    }
    get childNodes() {
        var nodes = [];
        var node = this.__firstChild;
        while(node){
            nodes.push(node);
            node = node.__nextSibling;
        }
        return nodes;
    }
    setAttribute(key, value) {
        if (true) profile_profileStart('ReactLynx::BSI::setAttribute');
        if (key === 'values') {
            var _this___snapshot_def_refAndSpreadIndexes;
            if (snapshotPatch_globalSnapshotPatch) {
                var oldValues = this.__values;
                if (oldValues) for(var index = 0; index < value.length; index++){
                    var { needUpdate, valueToCommit } = this.setAttributeImpl(value[index], oldValues[index], index);
                    if (needUpdate) snapshotPatch_globalSnapshotPatch.push(snapshotPatch_SnapshotOperation.SetAttribute, this.__id, index, valueToCommit);
                }
                else {
                    var patch = [];
                    var length = value.length;
                    for(var index1 = 0; index1 < length; ++index1){
                        var { valueToCommit: valueToCommit1 } = this.setAttributeImpl(value[index1], null, index1);
                        patch[index1] = valueToCommit1;
                    }
                    snapshotPatch_globalSnapshotPatch.push(snapshotPatch_SnapshotOperation.SetAttributes, this.__id, patch);
                }
            } else (_this___snapshot_def_refAndSpreadIndexes = this.__snapshot_def.refAndSpreadIndexes) === null || _this___snapshot_def_refAndSpreadIndexes === void 0 ? void 0 : _this___snapshot_def_refAndSpreadIndexes.forEach((index)=>{
                var _this___values;
                // In first render, this.__values is undefined.
                // In next rerenders before hydration, this.__values is not undefined.
                var oldValue = (_this___values = this.__values) === null || _this___values === void 0 ? void 0 : _this___values[index];
                var v = value[index];
                queueRefAttrUpdate(getRefFromValue(oldValue), getRefFromValue(v), this.__id, index);
            });
            this.__values = value;
            this.syncListItemPlatformInfo();
            if (true) profile_profileEnd();
            return;
        }
        if (typeof key === 'string') {
            var _this___extraProps;
            if (key === '__listItemPlatformInfoIndex') {
                this.__listItemPlatformInfoIndex = value;
                this.syncListItemPlatformInfo();
                if (true) profile_profileEnd();
                return;
            }
            if (key === '__listItemPlatformInfo') {
                this.__listItemPlatformInfo = value;
                if (true) profile_profileEnd();
                return;
            }
            ((_this___extraProps = this.__extraProps) !== null && _this___extraProps !== void 0 ? _this___extraProps : this.__extraProps = {})[key] = value;
        } else {
            var // old path (`this.setAttribute(0, xxx)`)
            // is reserved as slow path
            _this___values;
            ((_this___values = this.__values) !== null && _this___values !== void 0 ? _this___values : this.__values = [])[key] = value;
            this.syncListItemPlatformInfo();
        }
        snapshotPatch_globalSnapshotPatch === null || snapshotPatch_globalSnapshotPatch === void 0 ? void 0 : snapshotPatch_globalSnapshotPatch.push(snapshotPatch_SnapshotOperation.SetAttribute, this.__id, key, value);
        if (true) profile_profileEnd();
    }
    syncListItemPlatformInfo() {
        var _this___snapshot_def_refAndSpreadIndexes;
        if (this.__listItemPlatformInfoIndex === undefined || !this.__values) return;
        var index = this.__listItemPlatformInfoIndex;
        this.__listItemPlatformInfo = platformInfo_getListItemPlatformInfoFromIndexedValue(this.__values[index], (_this___snapshot_def_refAndSpreadIndexes = this.__snapshot_def.refAndSpreadIndexes) === null || _this___snapshot_def_refAndSpreadIndexes === void 0 ? void 0 : _this___snapshot_def_refAndSpreadIndexes.includes(index));
    }
    setAttributeImpl(newValue, oldValue, index) {
        if (!newValue) {
            // `oldValue` can't be a spread.
            if (oldValue && typeof oldValue === 'object' && '__ref' in oldValue) queueRefAttrUpdate(oldValue, null, this.__id, index);
            return {
                needUpdate: oldValue !== newValue,
                valueToCommit: newValue
            };
        }
        var newType = typeof newValue;
        if (newType === 'object') {
            var newValueObj = newValue;
            if ('__spread' in newValueObj) {
                var oldSpread = oldValue === null || oldValue === void 0 ? void 0 : oldValue.__spread;
                var newSpread = transformSpread(this, index, newValueObj);
                var needUpdate = !utils_isDirectOrDeepEqual(oldSpread, newSpread);
                // use __spread to cache the transform result for next diff
                newValueObj['__spread'] = newSpread;
                queueRefAttrUpdate(oldSpread && oldValue.ref, newValueObj['ref'], this.__id, index);
                return {
                    needUpdate,
                    valueToCommit: needUpdate ? prepareSpreadForCommit(newSpread, oldSpread) : newSpread
                };
            }
            if ('__ref' in newValueObj) {
                queueRefAttrUpdate(oldValue, newValueObj, this.__id, index);
                return {
                    needUpdate: false,
                    valueToCommit: 1
                };
            }
            if ('_wkltId' in newValueObj) {
                // Worklet ctx can be stable across rerenders (e.g. memoized by the user).
                // In that case we should NOT re-register / re-send it, otherwise `_execId` churn
                // will cause unnecessary patches.
                var needUpdate1 = oldValue !== newValue;
                return {
                    needUpdate: needUpdate1,
                    valueToCommit: needUpdate1 ? backgroundSnapshot_prepareWorkletForCommit(newValueObj) : newValue
                };
            }
            if ('__isGesture' in newValueObj) {
                // Gestures are large objects; if the reference is stable, avoid reprocessing and patching.
                var needUpdate2 = oldValue !== newValue;
                return {
                    needUpdate: needUpdate2,
                    valueToCommit: needUpdate2 ? prepareGestureForCommit(newValueObj) : newValue
                };
            }
            if ('__ltf' in newValueObj) {
                // __lynx_timing_flag
                if (globalPipelineOptions && (oldValue === null || oldValue === void 0 ? void 0 : oldValue.__ltf) != newValueObj['__ltf']) {
                    globalPipelineOptions.needTimestamps = true;
                    return {
                        needUpdate: true,
                        valueToCommit: newValue
                    };
                }
                return {
                    needUpdate: false,
                    valueToCommit: newValue
                };
            }
            return {
                needUpdate: !utils_isDirectOrDeepEqual(oldValue, newValue),
                valueToCommit: newValue
            };
        }
        if (newType === 'function') {
            if (newValue.__ref) {
                queueRefAttrUpdate(oldValue, newValue, this.__id, index);
                return {
                    needUpdate: false,
                    valueToCommit: 1
                };
            }
            /* event */ return {
                needUpdate: !oldValue,
                valueToCommit: 1
            };
        }
        return {
            needUpdate: oldValue !== newValue,
            valueToCommit: newValue
        };
    }
    constructor(type){
        this.__slotIndex = 0;
        this.__parent = null;
        this.__firstChild = null;
        this.__lastChild = null;
        this.__previousSibling = null;
        this.__nextSibling = null;
        this.type = type;
        // Suspense uses 'div'
        if (!definition_snapshotManager.values.has(type) && type !== 'div') {
            if (snapshotCreatorMap_snapshotCreatorMap[type]) snapshotCreatorMap_snapshotCreatorMap[type](type, snapshotCreatorMap_snapshotCreatorRuntime);
            else if (utils_isCloneSnapshot(type)) definition_createCloneSnapshot(type);
            else if (utils_isCompiledSnapshot(type)) throw new Error('BackgroundSnapshot not found: ' + type);
            else definition_createRuntimeSnapshot(type);
        }
        this.__snapshot_def = definition_snapshotManager.values.get(type);
        var id = this.__id = backgroundSnapshotInstanceManager.nextId += 1;
        backgroundSnapshotInstanceManager.values.set(id, this);
        snapshotPatch_globalSnapshotPatch === null || snapshotPatch_globalSnapshotPatch === void 0 ? void 0 : snapshotPatch_globalSnapshotPatch.push(snapshotPatch_SnapshotOperation.CreateElement, type, id);
    }
}
function backgroundSnapshot_hydrate(before, after) {
    var shouldProfile =  true && true;
    if (shouldProfile) profile_profileStart('ReactLynx::BSI::hydrate');
    try {
        initGlobalSnapshotPatch();
        var helper = (before, after)=>{
            var _before_children;
            var // handle value by index
            _after___values;
            hydrationMap.set(after.__id, before.id);
            backgroundSnapshotInstanceManager.updateId(after.__id, before.id);
            (_after___values = after.__values) === null || _after___values === void 0 ? void 0 : _after___values.forEach((value, index)=>{
                var _before_values;
                // render with different root would cause different values length
                var old = (_before_values = before.values) === null || _before_values === void 0 ? void 0 : _before_values[index];
                if (value) {
                    if (typeof value === 'object') {
                        if ('__spread' in value) {
                            // `value.__spread` my contain event ids using snapshot ids before hydration. Remove it.
                            delete value.__spread;
                            var __spread = transformSpread(after, index, value);
                            // Cache a clean spread for future diffs. For the patch payload, create a committed copy
                            // with runtime fields (e.g. `_execId`) injected.
                            after.__values[index]['__spread'] = __spread;
                            value = prepareSpreadForCommit(__spread, old);
                        } else if ('__ref' in value) value = old;
                        else if ('_wkltId' in value) value = backgroundSnapshot_prepareWorkletForCommit(value);
                        else if ('__isGesture' in value) value = prepareGestureForCommit(value);
                    } else if (typeof value === 'function') {
                        if ('__ref' in value) value = old;
                        else value = `${after.__id}:${index}:`;
                    }
                }
                if (!utils_isDirectOrDeepEqual(value, old)) {
                    if (value === undefined && old === null) ;
                    else if (shouldProfile) {
                        var _getSnapshotVNodeSource;
                        profile_profileStart('ReactLynx::hydrate::setAttribute', {
                            args: {
                                id: String(after.__id),
                                snapshotType: String(after.type),
                                source: (_getSnapshotVNodeSource = getSnapshotVNodeSource(after.__id)) !== null && _getSnapshotVNodeSource !== void 0 ? _getSnapshotVNodeSource : '',
                                dynamicPartIndex: String(index),
                                valueType: value === null ? 'null' : typeof value
                            }
                        });
                        try {
                            snapshotPatch_globalSnapshotPatch.push(snapshotPatch_SnapshotOperation.SetAttribute, after.__id, index, value);
                        } finally{
                            profile_profileEnd();
                        }
                    } else snapshotPatch_globalSnapshotPatch.push(snapshotPatch_SnapshotOperation.SetAttribute, after.__id, index, value);
                }
            });
            // handle extraProps as attributes and set by key
            if (after.__extraProps) for(var key in after.__extraProps){
                var _before_extraProps;
                var value = after.__extraProps[key];
                var old = (_before_extraProps = before.extraProps) === null || _before_extraProps === void 0 ? void 0 : _before_extraProps[key];
                if (!utils_isDirectOrDeepEqual(value, old)) {
                    if (shouldProfile) {
                        var _getSnapshotVNodeSource;
                        profile_profileStart('ReactLynx::hydrate::setAttribute', {
                            args: {
                                id: String(after.__id),
                                snapshotType: String(after.type),
                                source: (_getSnapshotVNodeSource = getSnapshotVNodeSource(after.__id)) !== null && _getSnapshotVNodeSource !== void 0 ? _getSnapshotVNodeSource : '',
                                dynamicPartIndex: key,
                                valueType: value === null ? 'null' : typeof value
                            }
                        });
                        try {
                            snapshotPatch_globalSnapshotPatch.push(snapshotPatch_SnapshotOperation.SetAttribute, after.__id, key, value);
                        } finally{
                            profile_profileEnd();
                        }
                    } else snapshotPatch_globalSnapshotPatch.push(snapshotPatch_SnapshotOperation.SetAttribute, after.__id, key, value);
                }
            }
            var { slot } = after.__snapshot_def;
            var beforeChildNodes = (_before_children = before.children) !== null && _before_children !== void 0 ? _before_children : [];
            var afterChildNodes = after.childNodes;
            if (!slot) return;
            // Hoisted out of the loop: none of this depends on the slot entry.
            var diffChildren = (filteredBeforeChildNodes, filteredAfterChildNodes, isListHasItemKey)=>{
                var diffResult = diffArrayLepus(filteredBeforeChildNodes, filteredAfterChildNodes, (a, b)=>a.type === b.type, (a, b)=>{
                    helper(a, b);
                }, isListHasItemKey);
                diffArrayAction(filteredBeforeChildNodes, diffResult, (node, target)=>{
                    var _getSnapshotVNodeSource;
                    if (shouldProfile) profile_profileStart('ReactLynx::BSI::reconstructInstanceTree', {
                        args: {
                            id: String(node.__id),
                            snapshotType: String(node.type),
                            source: (_getSnapshotVNodeSource = getSnapshotVNodeSource(node.__id)) !== null && _getSnapshotVNodeSource !== void 0 ? _getSnapshotVNodeSource : ''
                        }
                    });
                    try {
                        reconstructInstanceTree([
                            node
                        ], before.id, target === null || target === void 0 ? void 0 : target.id);
                    } finally{
                        if (shouldProfile) profile_profileEnd();
                    }
                    return undefined;
                }, (node)=>{
                    if (shouldProfile) {
                        var _getSnapshotVNodeSource;
                        profile_profileStart('ReactLynx::hydrate::removeChild', {
                            args: {
                                id: String(node.id),
                                snapshotType: String(node.type),
                                source: (_getSnapshotVNodeSource = getSnapshotVNodeSource(node.id)) !== null && _getSnapshotVNodeSource !== void 0 ? _getSnapshotVNodeSource : '',
                                parentId: String(before.id)
                            }
                        });
                        try {
                            snapshotPatch_globalSnapshotPatch.push(snapshotPatch_SnapshotOperation.RemoveChild, before.id, node.id);
                        } finally{
                            profile_profileEnd();
                        }
                    } else snapshotPatch_globalSnapshotPatch.push(snapshotPatch_SnapshotOperation.RemoveChild, before.id, node.id);
                }, (node, target)=>{
                    var _node_slotIndex;
                    // changedList.push([SnapshotOperation.RemoveChild, before.id, node.id]);
                    if (shouldProfile) {
                        var _getSnapshotVNodeSource, _ref;
                        profile_profileStart('ReactLynx::hydrate::insertBefore', {
                            args: {
                                id: String(node.id),
                                snapshotType: String(node.type),
                                source: (_getSnapshotVNodeSource = getSnapshotVNodeSource(node.id)) !== null && _getSnapshotVNodeSource !== void 0 ? _getSnapshotVNodeSource : '',
                                parentId: String(before.id),
                                targetId: String((_ref = target === null || target === void 0 ? void 0 : target.id) !== null && _ref !== void 0 ? _ref : '')
                            }
                        });
                        try {
                            var _node_slotIndex1;
                            snapshotPatch_globalSnapshotPatch.push(snapshotPatch_SnapshotOperation.InsertBefore, before.id, node.id, target === null || target === void 0 ? void 0 : target.id, (_node_slotIndex1 = node.slotIndex) !== null && _node_slotIndex1 !== void 0 ? _node_slotIndex1 : 0);
                        } finally{
                            profile_profileEnd();
                        }
                    } else snapshotPatch_globalSnapshotPatch.push(snapshotPatch_SnapshotOperation.InsertBefore, before.id, node.id, target === null || target === void 0 ? void 0 : target.id, (_node_slotIndex = node.slotIndex) !== null && _node_slotIndex !== void 0 ? _node_slotIndex : 0);
                });
            };
            slot.forEach(([type], index)=>{
                switch(type){
                    case dynamicPartType_DynamicPartType.Slot:
                    case dynamicPartType_DynamicPartType.MultiChildren:
                        {
                            // TODO: the following null assertions are not 100% safe
                            var v1 = beforeChildNodes[index];
                            var v2 = afterChildNodes[index];
                            helper(v1, v2);
                            break;
                        }
                    case dynamicPartType_DynamicPartType.SlotV2:
                    case dynamicPartType_DynamicPartType.Children:
                        {
                            var filteredBeforeChildNodes = beforeChildNodes;
                            var filteredAfterChildNodes = afterChildNodes;
                            if (type === dynamicPartType_DynamicPartType.SlotV2) {
                                filteredBeforeChildNodes = beforeChildNodes.filter((v)=>{
                                    var _v_slotIndex;
                                    return ((_v_slotIndex = v.slotIndex) !== null && _v_slotIndex !== void 0 ? _v_slotIndex : 0) === index;
                                });
                                filteredAfterChildNodes = afterChildNodes.filter((v)=>v.__slotIndex === index);
                            }
                            // Children match pairwise by type, so the diff is empty — do what
                            // `diffArrayLepus` + `diffArrayAction` would do without allocating
                            // the diff structures.
                            var length = filteredBeforeChildNodes.length;
                            if (length === filteredAfterChildNodes.length) {
                                var samePairwise = true;
                                for(var i = 0; i < length; i++)if (filteredBeforeChildNodes[i].type !== filteredAfterChildNodes[i].type) {
                                    samePairwise = false;
                                    break;
                                }
                                if (samePairwise) {
                                    for(var i1 = 0; i1 < length; i1++)helper(filteredBeforeChildNodes[i1], filteredAfterChildNodes[i1]);
                                    break;
                                }
                            }
                            diffChildren(filteredBeforeChildNodes, filteredAfterChildNodes, false);
                            break;
                        }
                    case dynamicPartType_DynamicPartType.ListSlotV2:
                    case dynamicPartType_DynamicPartType.ListChildren:
                        {
                            var filteredBeforeChildNodes1 = beforeChildNodes;
                            var filteredAfterChildNodes1 = afterChildNodes;
                            if (type === dynamicPartType_DynamicPartType.ListSlotV2) {
                                filteredBeforeChildNodes1 = beforeChildNodes.filter((v)=>{
                                    var _v_slotIndex;
                                    return ((_v_slotIndex = v.slotIndex) !== null && _v_slotIndex !== void 0 ? _v_slotIndex : 0) === index;
                                });
                                filteredAfterChildNodes1 = afterChildNodes.filter((v)=>v.__slotIndex === index);
                            }
                            diffChildren(filteredBeforeChildNodes1, filteredAfterChildNodes1, true);
                            break;
                        }
                    default:
                        throw new Error('Unexpected slot type: ' + type);
                }
            });
        };
        helper(before, after);
        // Hydration should not trigger ref updates. They were incorrectly triggered when using `setAttribute` to add values to the patch list.
        clearQueuedRefs();
        clearPendingPortalInsertBefore();
        return takeGlobalSnapshotPatch();
    } finally{
        if (shouldProfile) profile_profileEnd();
    }
} //# sourceMappingURL=backgroundSnapshot.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/document.js
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.


var document_document = {};
/**
 * Sets up the document interface for the background thread.
 * All DOM operations are intercepted to create {@link BackgroundSnapshotInstance}.
 */ function setupBackgroundDocument(_document = document_document) {
    _document.createElement = function(type) {
        return new backgroundSnapshot_BackgroundSnapshotInstance(type);
    };
    _document.createElementNS = function(_ns, type, _is) {
        return new backgroundSnapshot_BackgroundSnapshotInstance(type);
    };
    _document.createTextNode = function(text) {
        var i = new backgroundSnapshot_BackgroundSnapshotInstance(null);
        i.setAttribute(0, text);
        Object.defineProperty(i, 'data', {
            set (v) {
                i.setAttribute(0, v);
            }
        });
        return i;
    };
}
/**
 * Sets up the document interface for the main thread.
 * All DOM operations are intercepted to create {@link SnapshotInstance}.
 */ function setupDocument(_document = document_document) {
    _document.createElement = function(type) {
        var si = new SnapshotInstance(type);
        return si;
    };
    _document.createElementNS = function(_ns, type, _is) {
        var si = new SnapshotInstance(type);
        return si;
    };
    _document.createTextNode = function(text) {
        var i = new SnapshotInstance(null);
        i.setAttribute(0, text);
        Object.defineProperty(i, 'data', {
            set (v) {
                i.setAttribute(0, v);
            }
        });
        return i;
    };
}
// if (__JS__) {
//   setupBackgroundDocument();
// } else if (__LEPUS__) {
//   setupDocument();
// }
 //# sourceMappingURL=document.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/snapshot/alog/elementPAPICall.js


// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

var fiberElementPAPINameList = (/* unused pure expression or super */ null && ([
    '__CreatePage',
    '__CreateElement',
    '__CreateWrapperElement',
    '__CreateText',
    '__CreateImage',
    '__CreateView',
    '__CreateRawText',
    '__CreateList',
    '__AppendElement',
    '__InsertElementBefore',
    '__RemoveElement',
    '__ReplaceElement',
    '__FirstElement',
    '__LastElement',
    '__NextElement',
    '__GetPageElement',
    '__GetTemplateParts',
    '__AddDataset',
    '__SetDataset',
    '__GetDataset',
    '__SetAttribute',
    '__GetAttributes',
    '__GetAttributeByName',
    '__GetAttributeNames',
    '__SetClasses',
    '__SetCSSId',
    '__AddInlineStyle',
    '__SetInlineStyles',
    '__AddEvent',
    '__SetID',
    '__GetElementUniqueID',
    '__GetTag',
    '__FlushElementTree',
    '__UpdateListCallbacks',
    '__OnLifecycleEvent',
    '__QueryComponent',
    '__SetGestureDetector',
    '__RemoveGestureDetector'
]));
function initElementPAPICallAlog(globalWithIndex = globalThis) {
    var count = 0;
    var fiberElementMap = new Map();
    function formatFiberElement(fiberElement) {
        var fiberElementInfo = fiberElementMap.get(fiberElement);
        return `${fiberElementInfo.tag}#${fiberElementInfo.uniqueId}`;
    }
    var filteredFiberElementPAPINameList = fiberElementPAPINameList.filter((fiberElementPAPIName)=>typeof globalWithIndex[fiberElementPAPIName] === 'function');
    var originalFiberElementPAPIs = filteredFiberElementPAPINameList.reduce((prev, fiberElementPAPIName)=>_object_spread_props(_object_spread({}, prev), {
            [fiberElementPAPIName]: globalWithIndex[fiberElementPAPIName]
        }), {});
    filteredFiberElementPAPINameList.forEach((fiberElementPAPIName)=>{
        var oldFiberElementPAPI = globalWithIndex[fiberElementPAPIName];
        if (typeof oldFiberElementPAPI === 'function') globalWithIndex[fiberElementPAPIName] = (...args)=>{
            var _console_alog, _console;
            if (true) profileStart(`FiberElementPAPI: ${fiberElementPAPIName}`, {
                args: {
                    args: JSON.stringify(args)
                }
            });
            var result = oldFiberElementPAPI(...args);
            if (true) profileEnd();
            var formattedArgs = [
                ...args
            ];
            for(var i = 0; i < formattedArgs.length; i++){
                var arg = formattedArgs[i];
                if (Array.isArray(arg)) formattedArgs[i] = '[' + arg.map((item)=>{
                    if (fiberElementMap.has(item)) return formatFiberElement(item);
                    return JSON.stringify(item);
                }).join(', ') + ']';
                else if (fiberElementMap.has(arg)) formattedArgs[i] = formatFiberElement(arg);
                else formattedArgs[i] = JSON.stringify(arg);
            }
            if (fiberElementPAPIName === '__CreatePage' || fiberElementPAPIName === '__CreateElement' || fiberElementPAPIName === '__CreateWrapperElement' || fiberElementPAPIName === '__CreateText' || fiberElementPAPIName === '__CreateImage' || fiberElementPAPIName === '__CreateView' || fiberElementPAPIName === '__CreateRawText' || fiberElementPAPIName === '__CreateList') fiberElementMap.set(result, {
                tag: originalFiberElementPAPIs['__GetTag'](result),
                uniqueId: originalFiberElementPAPIs['__GetElementUniqueID'](result)
            });
            var formattedResult;
            if (fiberElementMap.has(result)) formattedResult = formatFiberElement(result);
            else if (result !== null) formattedResult = JSON.stringify(result);
            (_console_alog = (_console = console).alog) === null || _console_alog === void 0 ? void 0 : _console_alog.call(_console, `[ReactLynxDebug] FiberElement API call #${++count}: ${fiberElementPAPIName}(${formattedArgs.join(', ')})${formattedResult == null ? '' : ` => ${formattedResult}`}`);
            return result;
        };
    });
} //# sourceMappingURL=elementPAPICall.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/snapshot/alog/render.js
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.



function render_initRenderAlog() {
    var oldAfterDiff = options[DIFFED];
    options[DIFFED] = function(vnode) {
        // Only log on component vnode
        if (typeof vnode.type === 'function') {
            var threadName = 'BackgroundThread';
            var displayName = getDisplayName(vnode.type);
            {
                var _console_alog, _console;
                var dom = vnode[DOM];
                (_console_alog = (_console = console).alog) === null || _console_alog === void 0 ? void 0 : _console_alog.call(_console, `[${threadName} Component Render] name: ${displayName}, uniqID: ${dom === null || dom === void 0 ? void 0 : dom.type}, __id: ${dom === null || dom === void 0 ? void 0 : dom.__id}`);
            }
        }
        oldAfterDiff === null || oldAfterDiff === void 0 ? void 0 : oldAfterDiff(vnode);
    };
} //# sourceMappingURL=render.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/snapshot/alog/index.js
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

function initAlog() {
    initRenderAlog();
} //# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/core/commit-context.js
// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
var globalCommitContext = {
    ops: [],
    flushOptions: {}
};
function resetGlobalCommitContext() {
    globalCommitContext.ops = [];
    globalCommitContext.flushOptions = {};
    delete globalCommitContext.flowIds;
}
function takeGlobalFlushOptions() {
    var flushOptions = globalCommitContext.flushOptions;
    globalCommitContext.flushOptions = {};
    return flushOptions;
} //# sourceMappingURL=commit-context.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/core/reload-version.js
// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
var reloadVersion = 0;
function getReloadVersion() {
    return reloadVersion;
}
function reload_version_increaseReloadVersion() {
    return ++reloadVersion;
} //# sourceMappingURL=reload-version.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/core/thread-function-call/return-value.js
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.



var resolveMap;
var cleanupReturnValueListener;
var unregisterReturnValueCleanup;
function initReturnValueListener() {
    var context = lynx.getCoreContext();
    resolveMap = new IndexMap();
    context.addEventListener(WorkletEvents.FunctionCallRet, onFunctionCallRet);
    cleanupReturnValueListener = ()=>{
        context.removeEventListener(WorkletEvents.FunctionCallRet, onFunctionCallRet);
        resolveMap = undefined;
        cleanupReturnValueListener = undefined;
    };
}
/**
 * @internal
 */ function return_value_onFunctionCall(resolve) {
    ensureFunctionCallReturnCleanup();
    if (!resolveMap) initReturnValueListener();
    return resolveMap.add(resolve);
}
function ensureFunctionCallReturnCleanup() {
    if (unregisterReturnValueCleanup) return;
    unregisterReturnValueCleanup = registerDestroyTask(()=>{
        resetFunctionCallReturnListener();
    });
}
function resetFunctionCallReturnListener() {
    cleanupReturnValueListener === null || cleanupReturnValueListener === void 0 ? void 0 : cleanupReturnValueListener();
    unregisterReturnValueCleanup === null || unregisterReturnValueCleanup === void 0 ? void 0 : unregisterReturnValueCleanup();
    unregisterReturnValueCleanup = undefined;
}
function dropFunctionCallReturnIds(resolveIds) {
    if (!resolveMap) return;
    for (var resolveId of resolveIds)resolveMap.remove(resolveId);
    if (resolveMap.size === 0) resetFunctionCallReturnListener();
}
function onFunctionCallRet(event) {
    var data = JSON.parse(event.data);
    var map = resolveMap;
    if (!map) return;
    var resolve = map.get(data.resolveId);
    if (!resolve) return;
    map.remove(data.resolveId);
    resolve(data.returnValue);
} //# sourceMappingURL=return-value.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/core/thread-function-call/main-thread.js
// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.




var delayedRunOnMainThreadData = [];
function enqueueDelayedRunOnMainThreadData(data) {
    delayedRunOnMainThreadData.push(data);
}
function takeDelayedRunOnMainThreadData() {
    var data = delayedRunOnMainThreadData;
    delayedRunOnMainThreadData = [];
    return data;
}
/**
 * @internal
 */ function main_thread_createRunOnMainThread(options) {
    return (fn)=>{
        if (!isMainThreadFunctionSupported()) throw new Error('runOnMainThread requires Lynx sdk version 2.14.');
        return async (...params)=>{
            return new Promise((resolve)=>{
                var worklet = fn;
                prepareMainThreadFunctionCtx(worklet);
                var data = {
                    worklet,
                    params,
                    resolveId: onFunctionCall(resolve)
                };
                if (options.shouldDispatchRunOnMainThreadDirectly()) {
                    dispatchRunOnMainThreadEvent(data);
                    return;
                }
                enqueueDelayedRunOnMainThreadData(data);
            });
        };
    };
}
function isMainThreadFunctionSupported() {
    return isSdkVersionGt(2, 13);
}
function isRunOnBackgroundSupported() {
    return isSdkVersionGt(2, 15);
}
function isMainThreadFunctionCtx(value) {
    return value != null && typeof value === 'object' && !Array.isArray(value) && typeof value._wkltId === 'string';
}
function prepareMainThreadFunctionCtx(worklet) {
    if (isMainThreadFunctionCtx(worklet) && isRunOnBackgroundSupported()) registerBackgroundFunctionCtx(worklet);
}
function dispatchRunOnMainThreadEvent(data) {
    lynx.getCoreContext().dispatchEvent({
        type: WorkletEvents.runWorkletCtx,
        data: JSON.stringify(data)
    });
} //# sourceMappingURL=main-thread.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/constant.js
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
var constant_LifecycleConstant = {
    firstScreen: 'rLynxFirstScreen',
    updateFromRoot: 'updateFromRoot',
    globalEventFromLepus: 'globalEventFromLepus',
    // Signals the main thread to sync the first screen, sent by the background thread
    // (automatically in `jsReady` mode, or via `markFirstScreenSyncReady()` in `manual`).
    firstScreenSyncReady: 'rLynxFirstScreenSyncReady',
    patchUpdate: 'rLynxChange',
    publishEvent: 'rLynxPublishEvent',
    updateMTRefInitValue: 'rLynxChangeRefInitValue',
    prepareLazyBundleMTS: 'rLynxPrepareLazyBundleMTS'
};
var NativeUpdateDataType = (/* unused pure expression or super */ null && ({
    UPDATE: 0,
    RESET: 1
})); //# sourceMappingURL=constant.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/ref/workletRefPool.js
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

var initValuePatch = [];
/**
 * @internal
 */ function addWorkletRefInitValue(id, value) {
    if (!isMtsEnabled()) return;
    initValuePatch.push([
        id,
        value
    ]);
}
/**
 * @internal
 */ function takeWorkletRefInitValuePatch() {
    var res = initValuePatch;
    initValuePatch = [];
    return res;
} //# sourceMappingURL=workletRefPool.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/ref/updateInitValue.js
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.



function updateMTRefInitValue({ data }) {
    // This update ignores reloadVersion check.
    // MainThreadRefs created before reloadTemplate may still be referenced by user in some cases after reloadTemplate.
    var patch = JSON.parse(data);
    updateWorkletRefInitValueChanges(patch);
}
function injectUpdateMTRefInitValue() {
    Object.assign(globalThis, {
        [LifecycleConstant.updateMTRefInitValue]: updateMTRefInitValue
    });
}
function sendMTRefInitValueToMainThread() {
    var patch = takeWorkletRefInitValuePatch();
    if (patch.length === 0) return;
    var data = JSON.stringify(patch);
    lynx.getNativeApp().callLepusMethod(constant_LifecycleConstant.updateMTRefInitValue, {
        data
    });
} //# sourceMappingURL=updateInitValue.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/isRendering.js
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.



var isRendering_isRendering = /* @__PURE__ */ {
    value: false
};
var setIsRendering = ()=>{
    isRendering_isRendering.value = true;
    // Make sure `isRendering` is set to false even if an error is thrown during rendering
    lynxQueueMicrotask(()=>{
        isRendering_isRendering.value = false;
    });
};
var onRenderHook = (old, ...args)=>{
    /* v8 ignore next */ if (old) old(...args);
    setIsRendering();
};
utils_hook(preact_options, RENDER_COMPONENT, onRenderHook);
utils_hook(preact_options, render_constants_ROOT, onRenderHook); //# sourceMappingURL=isRendering.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/patch/commit.js


// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/**
 * Implements the commit phase of the rendering lifecycle.
 * This module patches Preact's commit phase to integrate with the snapshot system,
 * handling the collection and transmission of patches between threads.
 *
 * The commit phase is responsible for:
 * - Collecting patches from the snapshot system
 * - Managing commit tasks and their execution
 * - Coordinating with the native layer for updates
 * - Handling performance timing and pipeline options
 */ /**
 * This module patches Preact's commit phase by hacking into the internal of
 * its [options](https://preactjs.com/guide/v10/options/) API
 */ 














var globalCommitTaskMap = /*@__PURE__*/ new Map();
var nextCommitTaskId = 1;
var globalPatchOptions = {};
function takeGlobalPatchOptions() {
    var res = globalPatchOptions;
    globalPatchOptions = {};
    return res;
}
/**
 * Replaces Preact's default commit hook with our custom implementation
 */ function replaceCommitHook() {
    utils_hook(preact_options, render_constants_COMMIT, (originalPreactCommit, vnode, commitQueue)=>{
        isRendering_isRendering.value = false;
        // Mark the end of virtual DOM diffing phase for performance tracking
        markTimingLegacy('updateDiffVdomEnd');
        markTiming('diffVdomEnd');
        var backgroundSnapshotInstancesToRemove = globalState_globalBackgroundSnapshotInstancesToRemove;
        setGlobalBackgroundSnapshotInstancesToRemove([]);
        var commitTaskId = genCommitTaskId();
        // Register the commit task
        globalCommitTaskMap.set(commitTaskId, ()=>{
            if (backgroundSnapshotInstancesToRemove.length) setTimeout(()=>{
                backgroundSnapshotInstancesToRemove.forEach((id)=>{
                    var _backgroundSnapshotInstanceManager_values_get;
                    (_backgroundSnapshotInstanceManager_values_get = backgroundSnapshotInstanceManager.values.get(id)) === null || _backgroundSnapshotInstanceManager_values_get === void 0 ? void 0 : _backgroundSnapshotInstanceManager_values_get.tearDown();
                });
            }, 10000);
        });
        sendMTRefInitValueToMainThread();
        // Collect patches for this update
        var snapshotPatch = takeGlobalSnapshotPatch();
        var flushOptions = takeGlobalFlushOptions();
        var patchOptions = takeGlobalPatchOptions();
        if (!snapshotPatch) {
            // before hydration, skip patch
            applyQueuedRefs();
            originalPreactCommit === null || originalPreactCommit === void 0 ? void 0 : originalPreactCommit(vnode, commitQueue);
            return;
        }
        var patch = {
            id: commitTaskId
        };
        // TODO: check all fields in `flushOptions` from runtime3
        if (snapshotPatch.length) patch.snapshotPatch = snapshotPatch;
        var patchList = {
            patchList: [
                patch
            ]
        };
        if (!snapshotPatch.length && !delayedRunOnMainThreadData.length) flushOptions.emptyPatch = true;
        if (!utils_isEmptyObject(flushOptions)) patchList.flushOptions = flushOptions;
        if (delayedRunOnMainThreadData.length) patchList.delayedRunOnMainThreadData = takeDelayedRunOnMainThreadData();
        var obj = commitPatchUpdate(patchList, patchOptions);
        // Send the update to the native layer
        lynx.getNativeApp().callLepusMethod(constant_LifecycleConstant.patchUpdate, obj, ()=>{
            var commitTask = globalCommitTaskMap.get(commitTaskId);
            if (commitTask) {
                commitTask();
                globalCommitTaskMap.delete(commitTaskId);
            }
        });
        applyQueuedRefs();
        originalPreactCommit === null || originalPreactCommit === void 0 ? void 0 : originalPreactCommit(vnode, commitQueue);
    });
}
/**
 * Prepares the patch update for transmission to the native layer
 */ function commitPatchUpdate(patchList, patchOptions) {
    // console.debug('********** JS update:');
    // printSnapshotInstance(
    //   (backgroundSnapshotInstanceManager.values.get(1) ?? backgroundSnapshotInstanceManager.values.get(-1))!,
    // );
    // console.debug('commitPatchUpdate:', prettyFormatSnapshotPatch(patchList.patchList[0]?.snapshotPatch));
    if (true) profile_profileStart('ReactLynx::commitChanges');
    markTiming('packChangesStart');
    var obj = {
        data: JSON.stringify(patchList),
        patchOptions: _object_spread_props_object_spread_props(_object_spread_object_spread({}, patchOptions), {
            reloadVersion: getReloadVersion()
        })
    };
    markTiming('packChangesEnd');
    if (globalPipelineOptions) {
        obj.patchOptions.pipelineOptions = globalPipelineOptions;
        setPipeline(undefined);
    }
    if (true) profile_profileEnd();
    return obj;
}
/**
 * Generates a unique ID for commit tasks
 */ function genCommitTaskId() {
    return nextCommitTaskId++;
}
/**
 * Resets the commit task ID counter
 */ function clearCommitTaskId() {
    nextCommitTaskId = 1;
}
/**
 * @internal
 */  //# sourceMappingURL=commit.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/snapshot/debug/profileHooks.js

// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.





var format = (val)=>{
    if (typeof val === 'function') return val.toString();
    return val;
};
function safeJsonStringify(val) {
    var seen = new WeakSet();
    return JSON.stringify(val, function(_key, value) {
        if (typeof value === 'object' && value !== null) {
            if (seen.has(value)) return '[Unserializable: Circular]';
            seen.add(value);
        }
        return value;
    });
}
function buildSetStateProfileMarkArgs(type, currentState, nextState) {
    var EMPTY_OBJ = {};
    var currentStateObj = currentState !== null && currentState !== void 0 ? currentState : EMPTY_OBJ;
    var nextStateObj = nextState !== null && nextState !== void 0 ? nextState : EMPTY_OBJ;
    return {
        componentName: type && typeof type === 'function' ? utils_getDisplayName(type) : 'Unknown',
        'current state keys': JSON.stringify(Object.keys(currentStateObj)),
        'next state keys': JSON.stringify(Object.keys(nextStateObj)),
        'changed (shallow diff) state keys': JSON.stringify(Object.keys(nextStateObj).filter((key)=>currentStateObj[key] !== nextStateObj[key])),
        currentValue: safeJsonStringify(format(currentState)),
        nextValue: safeJsonStringify(format(nextState))
    };
}
function initProfileHook() {
    // early-exit if required profiling APIs are unavailable
    var p;
    /* v8 ignore start */ if (!(p = lynx.performance) || typeof p.profileStart !== 'function' || typeof p.profileEnd !== 'function' || typeof p.profileMark !== 'function' || typeof p.profileFlowId !== 'function') return;
    /* v8 ignore stop */ var profileStart = p.profileStart.bind(p);
    var profileEnd = p.profileEnd.bind(p);
    var profileMark = p.profileMark.bind(p);
    var profileFlowId = p.profileFlowId.bind(p);
    // for each setState call, we will add a profiling trace and
    // attach a flowId to the component instance.
    // This allows us to trace the flow of its diffing, committing and patching.
    {
        var sFlowID = Symbol('FLOW_ID');
        utils_hook(BaseComponent.prototype, 'setState', function(old, state, callback) {
            old === null || old === void 0 ? void 0 : old.call(this, state, callback);
            if (this[render_constants_DIRTY]) {
                var _sFlowID, _this_;
                var type = this[render_constants_VNODE].type;
                var isClassComponent = typeof type === 'function' && 'prototype' in type && 'render' in type.prototype;
                if (isClassComponent) profileMark('ReactLynx::setState', {
                    flowId: (_this_ = this[_sFlowID = sFlowID]) !== null && _this_ !== void 0 ? _this_ : this[_sFlowID] = profileFlowId(),
                    args: buildSetStateProfileMarkArgs(type, this.state, this[render_constants_NEXT_STATE])
                });
            }
        });
        utils_hook(preact_options, render_constants_DIFF2, (old, vnode, oldVNode)=>{
            // We only add profiling trace for Component
            if (typeof vnode.type === 'function') {
                var profileOptions = {};
                {
                    var c = oldVNode[render_constants_COMPONENT];
                    if (c) {
                        var flowId = c[sFlowID];
                        delete c[sFlowID];
                        if (flowId) {
                            var _globalPatchOptions, _flowIds;
                            (_flowIds = (_globalPatchOptions = globalPatchOptions).flowIds) !== null && _flowIds !== void 0 ? _flowIds : _globalPatchOptions.flowIds = [];
                            globalPatchOptions.flowIds.push(flowId);
                            profileOptions.flowId = flowId;
                        }
                    }
                }
                profileStart(`ReactLynx::diff::${/* #__INLINE__ */ utils_getDisplayName(vnode.type)}`, profileOptions);
            }
            old === null || old === void 0 ? void 0 : old(vnode, oldVNode);
        });
        utils_hook(preact_options, render_constants_DIFFED, (old, vnode)=>{
            {
                var _vnode_COMPONENT;
                var hooks = (_vnode_COMPONENT = vnode[render_constants_COMPONENT]) === null || _vnode_COMPONENT === void 0 ? void 0 : _vnode_COMPONENT[HOOKS];
                var hookList = hooks === null || hooks === void 0 ? void 0 : hooks[LIST];
                if (Array.isArray(hookList)) hookList.forEach((hookState, hookIdx)=>{
                    hookState['internalNextValue'] = hookState[NEXT_VALUE];
                    // define a setter for __N to track the next value of the hook
                    Object.defineProperty(hookState, NEXT_VALUE, {
                        get: ()=>hookState['internalNextValue'],
                        set: (value)=>{
                            if (Array.isArray(value)) {
                                var _component, _sFlowID, _;
                                // hookState[VALUE] is [state, dispatch]
                                var currentValueTuple = hookState[VALUE];
                                var currentValue = currentValueTuple[0];
                                var [nextValue] = value;
                                var component = hookState[render_constants_COMPONENT];
                                if (!component) {
                                    hookState['internalNextValue'] = value;
                                    return;
                                }
                                var type = component[render_constants_VNODE].type;
                                var flowId = (_ = (_component = component)[_sFlowID = sFlowID]) !== null && _ !== void 0 ? _ : _component[_sFlowID] = profileFlowId();
                                profileMark('ReactLynx::hooks::setState', {
                                    flowId,
                                    args: _object_spread_object_spread({
                                        hookIdx: String(hookIdx)
                                    }, buildSetStateProfileMarkArgs(type, currentValue, nextValue))
                                });
                            }
                            hookState['internalNextValue'] = value;
                        },
                        configurable: true
                    });
                });
            }
            if (typeof vnode.type === 'function') profileEnd(); // for options[DIFF2]
            old === null || old === void 0 ? void 0 : old(vnode);
        });
        utils_hook(preact_options, render_constants_COMMIT, (old, vnode, commitQueue)=>{
            profileStart('ReactLynx::commit', _object_spread_object_spread({}, globalPatchOptions.flowIds ? {
                flowId: globalPatchOptions.flowIds["0"],
                flowIds: globalPatchOptions.flowIds
            } : {}));
            old === null || old === void 0 ? void 0 : old(vnode, commitQueue);
            profileEnd();
        });
    }
    // Profile the user-provided `render`.
    utils_hook(preact_options, render_constants_RENDER, (old, vnode)=>{
        // eslint-disable-next-line @typescript-eslint/unbound-method
        var originalRender = vnode[render_constants_COMPONENT].render;
        vnode[render_constants_COMPONENT].render = function render(props, state, context) {
            profileStart(`ReactLynx::render::${/* #__INLINE__ */ utils_getDisplayName(vnode.type)}`);
            try {
                return originalRender.call(this, props, state, context);
            } finally{
                profileEnd();
                vnode[render_constants_COMPONENT].render = originalRender;
            }
        };
        old === null || old === void 0 ? void 0 : old(vnode);
    });
    {
        var sPatchLength = Symbol('PATCH_LENGTH');
        utils_hook(preact_options, render_constants_DIFF, (old, vnode)=>{
            if (typeof vnode.type === 'function' && snapshotPatch_globalSnapshotPatch) vnode[sPatchLength] = snapshotPatch_globalSnapshotPatch.length;
            old === null || old === void 0 ? void 0 : old(vnode);
        });
        utils_hook(preact_options, render_constants_DIFFED, (old, vnode)=>{
            if (typeof vnode.type === 'function') {
                var patchLength = vnode[sPatchLength];
                delete vnode[sPatchLength];
                if (snapshotPatch_globalSnapshotPatch && patchLength === snapshotPatch_globalSnapshotPatch.length) profileMark('ReactLynx::diffFinishNoPatch', {
                    args: {
                        componentName: /* #__INLINE__ */ utils_getDisplayName(vnode.type)
                    }
                });
            }
            old === null || old === void 0 ? void 0 : old(vnode);
        });
    }
} //# sourceMappingURL=profileHooks.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/patch/error.js
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.


var ctxNotFoundType = 'Lynx.Error.CtxNotFound';
var errorMsg = 'snapshotPatchApply failed: ctx not found';
var ctxNotFoundEventListener = null;
function sendCtxNotFoundEventToBackground(id) {
    /* v8 ignore next 3 */ if (!lynx.getJSContext) throw new Error(errorMsg);
    lynx.getJSContext().dispatchEvent({
        type: ctxNotFoundType,
        data: {
            id
        }
    });
}
function reportCtxNotFound(data) {
    var id = data.id;
    var instance = backgroundSnapshotInstanceManager.values.get(id);
    var snapshotType = 'null';
    if (instance && instance.__snapshot_def) {
        for (var [snapshotId, snapshot] of definition_snapshotManager.values.entries())if (snapshot === instance.__snapshot_def) {
            snapshotType = snapshotId;
            break;
        }
    }
    var message = `${errorMsg}, snapshot type: '${snapshotType}'`;
    if (false) {}
    lynx.reportError(new Error(message));
}
function addCtxNotFoundEventListener() {
    var _lynx_getCoreContext, _lynx;
    ctxNotFoundEventListener = (e)=>{
        reportCtxNotFound(e.data);
    };
    (_lynx_getCoreContext = (_lynx = lynx).getCoreContext) === null || _lynx_getCoreContext === void 0 ? void 0 : _lynx_getCoreContext.call(_lynx).addEventListener(ctxNotFoundType, ctxNotFoundEventListener);
}
function removeCtxNotFoundEventListener() {
    var _lynx_getCoreContext, _lynx;
    var coreContext = (_lynx_getCoreContext = (_lynx = lynx).getCoreContext) === null || _lynx_getCoreContext === void 0 ? void 0 : _lynx_getCoreContext.call(_lynx);
    if (coreContext && ctxNotFoundEventListener) {
        coreContext.removeEventListener(ctxNotFoundType, ctxNotFoundEventListener);
        ctxNotFoundEventListener = null;
    }
} //# sourceMappingURL=error.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/env.js

// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
function setupLynxEnv() {
    {
        var { initData, updateData } = lynxCoreInject.tt._params;
        lynx.__initData = _object_spread_object_spread({}, initData, updateData);
        lynx.registerDataProcessors = function() {};
    }
} //# sourceMappingURL=env.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/performance.js
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.


function shouldStartUpdatePipeline() {
    return Boolean(snapshotPatch_globalSnapshotPatch);
}
function performance_initTimingAPI() {
    initTimingAPI({
        shouldStartUpdatePipeline
    });
}
/**
 * @internal
 */  //# sourceMappingURL=performance.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/core/forceRootRender.js
// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.


function runWithForceRootRender({ getRootVNode, setRootVNode, render }) {
    // Preact can skip root render if `_original` is unchanged; bumping it keeps
    // backend force renders aligned with Preact's own rerender path.
    var rootVNode = getRootVNode();
    if (rootVNode) {
        var newVNode = Object.assign({}, rootVNode);
        if (newVNode[ORIGINAL] != null) {
            newVNode[ORIGINAL] += 1;
            setRootVNode(newVNode);
        }
    }
    var oldDiff = preact_options[render_constants_DIFF2];
    preact_options[render_constants_DIFF2] = (vnode, oldVNode)=>{
        /* v8 ignore start */ if (oldDiff) oldDiff(vnode, oldVNode);
        /* v8 ignore stop */ var c = oldVNode[render_constants_COMPONENT];
        if (c) c[FORCE] = true;
    };
    try {
        render();
    } finally{
        preact_options[render_constants_DIFF2] = oldDiff;
    }
} //# sourceMappingURL=forceRootRender.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/root.js
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

/**
 * The internal ReactLynx's root.
 * {@link @lynx-js/react!Root | root}.
 */ var root_root;
function root_setRoot(root) {
    root_root = root;
    // A fake ELEMENT_NODE to make preact/debug happy.
    if (false) {}
}
root_setRoot(new backgroundSnapshot_BackgroundSnapshotInstance('root'));
 //# sourceMappingURL=root.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/runWithForce.js


function runWithForce(cb) {
    runWithForceRootRender({
        getRootVNode: ()=>root_root.__jsx,
        setRootVNode: (vnode)=>{
            // @ts-expect-error: __root.__jsx is a Preact VNode during background force render.
            root_root.__jsx = vnode;
        },
        render: cb
    });
} //# sourceMappingURL=runWithForce.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/core/globalProps.js

function isGlobalPropsEventMode() {
    return  true && "reactive" === 'event';
}
function globalProps_createGlobalProps(deps) {
    return isGlobalPropsEventMode() ? /* @__PURE__ */ factory(deps, '__globalProps', 'onGlobalPropsChanged') : /* @__PURE__ */ createFallbackGlobalProps(deps.useLynxGlobalEventListener);
}
function updateGlobalProps(newData, { forceRerender } = {}) {
    if (isGlobalPropsEventMode()) lynx.__globalProps = Object.assign({}, lynx.__globalProps, newData);
    else {
        Object.assign(lynx.__globalProps, newData);
        if (forceRerender) Promise.resolve().then(forceRerender);
    }
    lynxCoreInject.tt.GlobalEventEmitter.emit('onGlobalPropsChanged', [
        lynx.__globalProps
    ]);
}
function warnGlobalPropsMode() {
    if (false) {}
}
function FallbackProvider({ children }) {
    warnGlobalPropsMode();
    return children;
}
function FallbackConsumer({ children }) {
    warnGlobalPropsMode();
    return children(lynx.__globalProps);
}
function useFallbackGlobalProps() {
    warnGlobalPropsMode();
    return lynx.__globalProps;
}
function createFallbackGlobalProps(useListener) {
    var useChanged = (callback)=>{
        useListener('onGlobalPropsChanged', callback);
    };
    return {
        Provider: ()=>FallbackProvider,
        Consumer: ()=>FallbackConsumer,
        use: ()=>useFallbackGlobalProps,
        useChanged: ()=>useChanged
    };
} //# sourceMappingURL=globalProps.js.map

;// CONCATENATED MODULE: ./node_modules/@swc/helpers/esm/_object_without_properties_loose.js
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {}, sourceKeys = Object.getOwnPropertyNames(source), key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
    }
    return target;
}


;// CONCATENATED MODULE: ./node_modules/@swc/helpers/esm/_object_without_properties.js

function _object_without_properties_object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = {}, sourceKeys, key, i;
    if (typeof Reflect !== "undefined" && Reflect.ownKeys) {
        sourceKeys = Reflect.ownKeys(Object(source));
        for(i = 0; i < sourceKeys.length; i++){
            key = sourceKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
        return target;
    }
    target = _object_without_properties_loose(source, excluded);
    if (Object.getOwnPropertySymbols) {
        sourceKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceKeys.length; i++){
            key = sourceKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}


;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/core/lynx-update-data.js

// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

var hasReportedResetWithInitDataInState = false;
var lynx_update_data_NativeUpdateDataType = {
    UPDATE: 0,
    RESET: 1
};
function updateCardData(newData, options) {
    var { ['__lynx_timing_flag']: performanceTimingFlag } = newData, restNewData = _object_without_properties_object_without_properties(newData, [
        '__lynx_timing_flag'
    ]);
    if (performanceTimingFlag) lynx.reportError(new Error(`Received unsupported updateData with \`__lynx_timing_flag\` (value "${performanceTimingFlag}"), the timing flag is ignored`));
    var { type = lynx_update_data_NativeUpdateDataType.UPDATE } = options !== null && options !== void 0 ? options : {};
    if (type == lynx_update_data_NativeUpdateDataType.RESET) {
        if (false) {}
        lynx.__initData = {};
    }
    // COW keeps provider/consumer readers aligned with Snapshot updateData behavior.
    lynx.__initData = Object.assign({}, lynx.__initData, restNewData);
    lynx.getJSModule('GlobalEventEmitter').emit('onDataChanged', [
        restNewData
    ]);
} //# sourceMappingURL=lynx-update-data.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/snapshot/debug/debug.js
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
var debug_logDebug = console.debug;
/**
 * @internal
 */  //# sourceMappingURL=debug.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/snapshot/debug/printSnapshot.js
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.



function printSnapshotInstance(instance, log) {
    var impl = (instance, level)=>{
        var msg = '';
        for(var i = 0; i < level; ++i)msg += '  ';
        msg += `| ${instance.__id}(${instance.type}): ${JSON.stringify(instance.__values)}`;
        (log !== null && log !== void 0 ? log : logDebug)(msg);
        for (var c of instance.childNodes)impl(c, level + 1);
    };
    impl(instance, 0);
}
function printSerializedSnapshotInstance(instance, log) {
    var impl = (instance, level)=>{
        var _instance_children;
        var msg = '';
        for(var i = 0; i < level; ++i)msg += '  ';
        msg += `| ${instance.id}(${instance.type}): ${JSON.stringify(instance.values)}`;
        (log !== null && log !== void 0 ? log : logDebug)(msg);
        for (var c of (_instance_children = instance.children) !== null && _instance_children !== void 0 ? _instance_children : [])impl(c, level + 1);
    };
    impl(instance, 0);
}
function printSnapshotInstanceToString(instance) {
    var logArr = [];
    if (instance instanceof SnapshotInstance || instance instanceof BackgroundSnapshotInstance) printSnapshotInstance(instance, logArr.push.bind(logArr));
    else printSerializedSnapshotInstance(instance, logArr.push.bind(logArr));
    return logArr.join('\n');
} //# sourceMappingURL=printSnapshot.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/event/delayEvents.js
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
var delayedEvents;
function delayedPublishEvent(handlerName, data) {
    delayedEvents !== null && delayedEvents !== void 0 ? delayedEvents : delayedEvents = [];
    delayedEvents.push([
        handlerName,
        data
    ]);
}
 //# sourceMappingURL=delayEvents.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/event/delayLifecycleEvents.js
var delayedLifecycleEvents = [];
function delayLifecycleEvent(type, data) {
    delayedLifecycleEvents.push([
        type,
        data
    ]);
}
/**
 * @internal
 */  //# sourceMappingURL=delayLifecycleEvents.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/destroy.js
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.






function destroyBackground() {
    if (true) profile_profileStart('ReactLynx::destroyBackground');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    preact_render(null, root_root);
    globalCommitTaskMap.forEach((task)=>{
        task();
    });
    globalCommitTaskMap.clear();
    // Clear delayed events which should not be executed after destroyed.
    // This is important when the page is performing a reload.
    delayedLifecycleEvents.length = 0;
    if (delayedEvents) delayedEvents.length = 0;
    if (true) profile_profileEnd();
}
 //# sourceMappingURL=destroy.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/snapshot/renderToOpcodes/index.js
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/**
 * Implements rendering to opcodes.
 * This module is modified from preact-render-to-string@6.0.3 to generate
 * opcodes instead of HTML strings for Lynx.
 */ // @ts-nocheck



/** @typedef {import('preact').VNode} VNode */ var renderToOpcodes_EMPTY_ARR = (/* unused pure expression or super */ null && ([]));
var renderToOpcodes_isArray = /* @__PURE__ */ Array.isArray;
var renderToOpcodes_assign = /* @__PURE__ */ Object.assign;
// Global state for the current render pass
var beforeDiff, beforeDiff2, afterDiff, renderToOpcodes_renderHook, ummountHook;
/**
 * Render Preact JSX + Components to an HTML string.
 * @param {VNode} vnode	JSX Element / VNode to render
 * @param {object} [context] Initial root context object
 */ function renderToOpcodes_renderToString(vnode, context, into) {
    // Performance optimization: `renderToString` is synchronous and we
    // therefore don't execute any effects. To do that we pass an empty
    // array to `options._commit` (`__c`). But we can go one step further
    // and avoid a lot of dirty checks and allocations by setting
    // `options._skipEffects` (`__s`) too.
    var previousSkipEffects = options[SKIP_EFFECTS];
    options[SKIP_EFFECTS] = true;
    // store options hooks once before each synchronous render call
    beforeDiff = options[DIFF];
    beforeDiff2 = options[DIFF2];
    afterDiff = options[DIFFED];
    renderToOpcodes_renderHook = options[RENDER];
    ummountHook = options.unmount;
    var parent = h(Fragment, null);
    parent[CHILDREN] = [
        vnode
    ];
    var opcodes = [];
    try {
        _renderToString(vnode, context || renderToOpcodes_EMPTY_OBJ, 0, undefined, parent, opcodes, 0, into);
    } finally{
        // options._commit, we don't schedule any effects in this library right now,
        // so we can pass an empty queue to this hook.
        if (options[COMMIT]) options[COMMIT](vnode, renderToOpcodes_EMPTY_ARR);
        options[SKIP_EFFECTS] = previousSkipEffects;
        renderToOpcodes_EMPTY_ARR.length = 0;
    }
    return opcodes;
}
// Installed as setState/forceUpdate for function components
function markAsDirty() {
    this[DIRTY] = true;
}
var renderToOpcodes_EMPTY_OBJ = (/* unused pure expression or super */ null && ({}));
var __OpBegin = 0;
var __OpEnd = 1;
var __OpAttr = 2;
var __OpText = 3;
/**
 * @param {VNode} vnode
 * @param {Record<string, unknown>} context
 */ function renderClassComponent(vnode, context) {
    var type = /** @type {import("preact").ComponentClass<typeof vnode.props>} */ vnode.type;
    var c;
    if (vnode[COMPONENT]) {
        c = vnode[COMPONENT];
        c.state = c[NEXT_STATE];
    } else c = new type(vnode.props, context);
    vnode[COMPONENT] = c;
    c[VNODE] = vnode;
    c.props = vnode.props;
    c.context = context;
    // turn off stateful re-rendering:
    c[DIRTY] = true;
    if (c.state == null) c.state = renderToOpcodes_EMPTY_OBJ;
    if (c[NEXT_STATE] == null) c[NEXT_STATE] = c.state;
    if (type.getDerivedStateFromProps) c.state = renderToOpcodes_assign({}, c.state, type.getDerivedStateFromProps(c.props, c.state));
    if (renderToOpcodes_renderHook) renderToOpcodes_renderHook(vnode);
    return c.render(c.props, c.state, context);
}
/**
 * Recursively render VNodes to HTML.
 * @param {VNode|any} vnode
 * @param {any} context
 * @param {number | true} slotIndex
 * @param {any} selectValue
 * @param {VNode} parent
 * @param {any[]} opcodes
 * @param {number} opcodesLength
 * @param {SnapshotInstance} into
 */ function _renderToString(vnode, context, slotIndex, selectValue, parent, opcodes, opcodesLength, into) {
    // Ignore non-rendered VNodes/values
    if (vnode == null || vnode === true || vnode === false || vnode === '') return;
    var vnodeType = typeof vnode;
    // Text VNodes: escape as HTML
    if (vnodeType !== 'object') {
        if (vnodeType === 'function') return;
        renderToTextNode(into, vnode, opcodes, slotIndex);
        return;
    }
    // Recurse into children / Arrays
    if (renderToOpcodes_isArray(vnode)) {
        parent[CHILDREN] = vnode;
        for(var i = 0; i < vnode.length; i++){
            var child = vnode[i];
            if (child == null || typeof child === 'boolean') continue;
            _renderToString(child, context, slotIndex === true ? i : slotIndex, selectValue, parent, opcodes, /* v8 ignore start */  false ? 0 : 0, /* v8 ignore end */ into);
        }
        return;
    }
    // VNodes have {constructor:undefined} to prevent JSON injection:
    // if (vnode.constructor !== undefined) return;
    vnode[PARENT] = parent;
    if (beforeDiff) beforeDiff(vnode);
    if (beforeDiff2) beforeDiff2(vnode, renderToOpcodes_EMPTY_OBJ);
    var type = vnode.type, props = vnode.props, cctx = context, contextType, rendered, component;
    // Invoke rendering on Components
    if (typeof type === 'function') {
        if (type === Fragment) rendered = props.children;
        else {
            contextType = type.contextType;
            if (contextType != null) {
                var provider = context[contextType.__c];
                cctx = provider ? provider.props.value : contextType.__;
            }
            if (type.prototype && typeof type.prototype.render === 'function') {
                rendered = /**#__NOINLINE__**/ renderClassComponent(vnode, cctx);
                component = vnode[COMPONENT];
            } else {
                component = {
                    [VNODE]: vnode,
                    props,
                    context: cctx,
                    // silently drop state updates
                    setState: markAsDirty,
                    forceUpdate: markAsDirty,
                    [DIRTY]: true,
                    // hooks
                    [HOOK]: []
                };
                vnode[COMPONENT] = component;
                component.constructor = type;
                component.render = renderToOpcodes_doRender;
                // If a hook invokes setState() to invalidate the component during rendering,
                // re-render it up to 25 times to allow "settling" of memoized states.
                // Note:
                //   This will need to be updated for Preact 11 to use internal.flags rather than component._dirty:
                //   https://github.com/preactjs/preact/blob/d4ca6fdb19bc715e49fd144e69f7296b2f4daa40/src/diff/component.js#L35-L44
                var count = 0;
                while(component[DIRTY] && count++ < 25){
                    component[DIRTY] = false;
                    if (renderToOpcodes_renderHook) renderToOpcodes_renderHook(vnode);
                    rendered = component.render(props, component.state, cctx);
                }
                component[DIRTY] = true;
            }
            if (component.getChildContext != null) context = renderToOpcodes_assign({}, context, component.getChildContext());
        }
        // When a component returns a Fragment node we flatten it in core, so we
        // need to mirror that logic here too
        var isTopLevelFragment = rendered != null && rendered.type === Fragment && rendered.key == null;
        rendered = isTopLevelFragment ? rendered.props.children : rendered;
        var lastChild = into.__lastChild;
        // Recurse into children before invoking the after-diff hook
        try {
            _renderToString(rendered, context, slotIndex, selectValue, vnode, opcodes, /* v8 ignore start */  false ? 0 : 0, /* v8 ignore end */ into);
        } catch (e) {
            // clear existing children
            into.removeChildren(lastChild ? lastChild.__nextSibling : into.__firstChild);
            if (e && typeof e === 'object' && e.then && component && /* _childDidSuspend */ component[CHILD_DID_SUSPEND]) {
                component[NEXT_STATE] = renderToOpcodes_assign({}, component[NEXT_STATE], {
                    /* _suspended */ __a: true
                });
                if (component[DIRTY]) {
                    rendered = renderClassComponent(vnode, context);
                    component = vnode[COMPONENT];
                    if (false) {}
                    _renderToString(rendered, context, slotIndex, selectValue, vnode, opcodes, /* v8 ignore start */  false ? 0 : 0, /* v8 ignore end */ into);
                }
            } else throw e;
        } finally{
            if (afterDiff) afterDiff(vnode);
            vnode[PARENT] = undefined;
            if (ummountHook) ummountHook(vnode);
        }
        return;
    }
    var children;
    var hasNamedChildren = false;
    // hack for runtime test
    if (false) {}
    // already inserted
    if (vnode.__parent) vnode = new SnapshotInstance(type);
    if (false) {}
    vnode.__slotIndex = slotIndex;
    into.insertBefore(vnode);
    for(var name in props){
        var v = props[name];
        switch(name){
            case 'children':
                children = v;
                continue;
            // VDOM-specific props
            /* c8 ignore next 5 */ case 'key':
            case 'ref':
            case '__self':
            case '__source':
                continue;
            default:
                if (name.startsWith('$')) {
                    children !== null && children !== void 0 ? children : children = [];
                    children[+name.slice(1)] = v;
                    hasNamedChildren = true;
                    continue;
                }
        }
        // write this attribute to the buffer
        if (v != null && v !== false && typeof v !== 'function') {
            if (false) {}
            vnode.setAttribute(name, v);
        }
    }
    var childrenType = typeof children;
    if (childrenType === 'string' || childrenType === 'number') renderToTextNode(vnode, children, opcodes, slotIndex);
    else if (children != null && children !== false && children !== true) {
        // recurse into this element VNode's children
        var _slotIndex = slotIndex;
        if (hasNamedChildren) {
            // @ts-expect-error children must be an array
            if (children.length === 1) {
                children = children[0];
                _slotIndex = 0;
            } else _slotIndex = true;
        }
        _renderToString(children, context, _slotIndex, selectValue, vnode, opcodes, /* v8 ignore start */  false ? 0 : 0, /* v8 ignore end */ vnode);
    }
    if (afterDiff) afterDiff(vnode);
    vnode[PARENT] = undefined;
    if (ummountHook) ummountHook(vnode);
    if (false) {}
    vnode[CHILDREN] = undefined;
    return;
}
/** The `.render()` method for a PFC backing instance. */ function renderToOpcodes_doRender(props, state, context) {
    return this.constructor(props, context);
}
function renderToTextNode(into, text, opcodes, slotIndex) {
    var textNode = new SnapshotInstance(null);
    textNode.__slotIndex = slotIndex;
    textNode.setAttribute(0, text);
    into.insertBefore(textNode);
    if (false) {}
}
/* export default */ var renderToOpcodes = ((/* unused pure expression or super */ null && (renderToOpcodes_renderToString)));
var renderToOpcodes_render = (/* unused pure expression or super */ null && (renderToOpcodes_renderToString));
var renderToStaticMarkup = (/* unused pure expression or super */ null && (renderToOpcodes_renderToString)); //# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/render.js
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/**
 * Implements the IFR (Instant First-Frame Rendering) on main thread.
 */ 


function render_renderMainThread() {
    var opcodes;
    try {
        if (true) profileStart('ReactLynx::renderMainThread');
        opcodes = renderToString(__root.__jsx, undefined, __root);
    } catch (e) {
        lynx.reportError(e);
        opcodes = [];
        __root.removeChildren();
    } finally{
        if (true) profileEnd();
    }
    if (false) {}
}
 //# sourceMappingURL=render.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/core/lynx-data-processors.js



// `true` only while the default data processor is running. `defaultDataProcessor` is
// invoked by the native side as a separate call *before* `renderPage` / `updatePage`,
// so a `markFirstScreenSyncReady()` made inside it must not sync the *previous* tree
// (still latched ready) — a re-render of the data being processed is imminent. The
// first-screen sync backend reads this to defer such a mark. Lives here (not in the
// backend) so `core` does not depend on a runtime backend.
var processingDefaultData = false;
function lynx_data_processors_isProcessingDefaultData() {
    return processingDefaultData;
}
function createProcessData(dataProcessorDefinition) {
    var hasDefaultDataProcessorExecuted = false;
    return (data, processorName)=>{
        if (true) profileStart('processData');
        var result;
        try {
            var _ref;
            var _dataProcessorDefinition_dataProcessors_processorName, _dataProcessorDefinition_dataProcessors;
            if (processorName) result = (_ref = dataProcessorDefinition === null || dataProcessorDefinition === void 0 ? void 0 : (_dataProcessorDefinition_dataProcessors = dataProcessorDefinition.dataProcessors) === null || _dataProcessorDefinition_dataProcessors === void 0 ? void 0 : (_dataProcessorDefinition_dataProcessors_processorName = _dataProcessorDefinition_dataProcessors[processorName]) === null || _dataProcessorDefinition_dataProcessors_processorName === void 0 ? void 0 : _dataProcessorDefinition_dataProcessors_processorName.call(_dataProcessorDefinition_dataProcessors, data)) !== null && _ref !== void 0 ? _ref : data;
            else {
                // a `markFirstScreenSyncReady()` made inside `defaultDataProcessor` must be
                // deferred until the data being processed renders (see `processingDefaultData`)
                processingDefaultData = true;
                try {
                    var _ref1;
                    var _dataProcessorDefinition_defaultDataProcessor;
                    result = (_ref1 = dataProcessorDefinition === null || dataProcessorDefinition === void 0 ? void 0 : (_dataProcessorDefinition_defaultDataProcessor = dataProcessorDefinition.defaultDataProcessor) === null || _dataProcessorDefinition_defaultDataProcessor === void 0 ? void 0 : _dataProcessorDefinition_defaultDataProcessor.call(dataProcessorDefinition, data)) !== null && _ref1 !== void 0 ? _ref1 : data;
                } finally{
                    processingDefaultData = false;
                }
            }
        } catch (error) {
            lynx.reportError(error);
            result = {};
        }
        if (true) profileEnd();
        if (!hasDefaultDataProcessorExecuted) result = appendInitDataMetadata(result);
        if (!processorName) hasDefaultDataProcessorExecuted = true;
        return result;
    };
}
function appendInitDataMetadata(result) {
    // @ts-expect-error todo: add types to i18n logic
    var i18nResourceTranslation = globalThis.__I18N_RESOURCE_TRANSLATION__;
    if (i18nResourceTranslation) result = _object_spread_props(_object_spread({}, result), {
        __I18N_RESOURCE_TRANSLATION__: i18nResourceTranslation
    });
    // @ts-expect-error todo: add types to __EXTRACT_STR__
    if (false) { var extractStrIdentFlag }
    return result;
} //# sourceMappingURL=lynx-data-processors.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/event/firstScreenSync.js
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.




// Initialized once at module load (`renderPage` runs once per runtime and does
// not reset), so a ready mark set before `renderPage` (e.g. in `defaultDataProcessor`)
// survives. In `'manual'` mode the first screen syncs only after both are true.
var firstScreenSync_isFirstScreenSynced = false;
var firstScreenSync_firstScreenEventIdSwap = (/* unused pure expression or super */ null && ({}));
var isMarkedFirstScreenSyncReady = false;
var isFirstScreenTreeReady = false;
function syncFirstScreen() {
    firstScreenSync_isFirstScreenSynced = true;
    if (true) profileStart('ReactLynx::serializeRoot');
    var root = JSON.stringify(__root);
    if (true) profileEnd();
    if (true) profileStart('ReactLynx::transferRoot');
    __OnLifecycleEvent([
        LifecycleConstant.firstScreen,
        /* FIRST_SCREEN */ {
            root,
            firstScreenEventIdSwap: firstScreenSync_firstScreenEventIdSwap
        }
    ]);
    if (true) profileEnd();
    firstScreenSync_firstScreenEventIdSwap = {};
}
// ready signal: business/framework allows the handover. Syncs if the tree is ready.
function onFirstScreenSyncReady() {
    if (true) profileStart('ReactLynx::onFirstScreenSyncReady');
    isMarkedFirstScreenSyncReady = true;
    // A mark made inside `defaultDataProcessor` (a native call before the upcoming render)
    // is recorded but not synced now; `onFirstScreenTreeReady` honors it once render ends.
    if (isFirstScreenTreeReady && !isProcessingDefaultData() && !firstScreenSync_isFirstScreenSynced) syncFirstScreen();
    if (true) profileEnd();
}
// tree built (`renderPage` / `updatePage` done). Syncs if the ready signal already came.
function onFirstScreenTreeReady() {
    isFirstScreenTreeReady = true;
    if (isMarkedFirstScreenSyncReady && !firstScreenSync_isFirstScreenSynced) syncFirstScreen();
}
// the first-screen tree is being (re-)rendered, a mark during this period
// must not sync until the next `onFirstScreenTreeReady`
function resetFirstScreenTreeReady() {
    isFirstScreenTreeReady = false;
}
function firstScreenSync_clearFirstScreenEventIdSwap() {
    firstScreenSync_firstScreenEventIdSwap = {};
}
// Full reset of all first-screen state. Used by SSR hydration to re-initialize.
function resetFirstScreenSyncState() {
    firstScreenSync_isFirstScreenSynced = false;
    firstScreenSync_firstScreenEventIdSwap = {};
    isMarkedFirstScreenSyncReady = false;
    isFirstScreenTreeReady = false;
}
/**
 * @internal
 */  //# sourceMappingURL=firstScreenSync.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/snapshot/lifecycle/reload.js
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/**
 * Implements the reload (thinking of "refresh" in browser) for both main thread
 * and background thread.
 */ 















function reloadMainThread(data, options) {
    if (true) profileStart('ReactLynx::reloadMainThread');
    increaseReloadVersion();
    if (typeof data == 'object' && data !== null && !isEmptyObject(data)) Object.assign(lynx.__initData, data);
    snapshotInstanceManager.clear();
    __pendingListUpdates.clearAttachedLists();
    clearFirstScreenEventIdSwap();
    var oldRoot = __root;
    setRoot(new SnapshotInstance('root'));
    __root.__jsx = oldRoot.__jsx;
    renderMainThread();
    hydrate(oldRoot, __root, {
        skipUnRef: true
    });
    // always call this before `__FlushElementTree`
    __pendingListUpdates.flush();
    applyRefQueue();
    if (isFirstScreenSynced) __OnLifecycleEvent([
        LifecycleConstant.firstScreen,
        /* FIRST_SCREEN */ {
            root: JSON.stringify(__root)
        }
    ]);
    __FlushElementTree(__page, options);
    if (true) profileEnd();
    return;
}
function reloadBackground(updateData) {
    if (true) profile_profileStart('ReactLynx::reloadBackground');
    deinitGlobalSnapshotPatch();
    destroyBackground();
    reload_version_increaseReloadVersion();
    // COW when modify `lynx.__initData` to make sure Provider & Consumer works
    lynx.__initData = Object.assign({}, lynx.__initData, updateData);
    shouldDelayUiOps.value = true;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    preact_render(root_root.__jsx, root_root);
    if (true) profile_profileEnd();
}
 //# sourceMappingURL=reload.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/destroy.js
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.


function destroyWorklet() {
    takeWorkletRefInitValuePatch();
    runDestroyTasks();
} //# sourceMappingURL=destroy.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/tt.js


// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.























function injectTt() {
    var tt = lynxCoreInject.tt;
    tt.OnLifecycleEvent = onLifecycleEvent;
    tt.publishEvent = delayedPublishEvent;
    tt.publicComponentEvent = delayedPublicComponentEvent;
    tt.callDestroyLifetimeFun = ()=>{
        removeCtxNotFoundEventListener();
        destroyWorklet();
        destroyBackground();
    };
    tt.updateGlobalProps = tt_updateGlobalProps;
    tt.updateCardData = updateCardData;
    tt.onAppReload = reloadBackground;
    tt.processCardConfig = ()=>{
    // used to updateTheme, no longer rely on this function
    };
}
function onLifecycleEvent([type, data]) {
    var hasRootRendered = render_constants_CHILDREN in root_root;
    // never called `render(<App/>, __root)`
    // happens if user call `root.render()` async
    if (!hasRootRendered) {
        delayLifecycleEvent(type, data);
        return;
    }
    if (true) profile_profileStart(`OnLifecycleEvent::${type}`);
    try {
        onLifecycleEventImpl(type, data);
    } catch (e) {
        lynx.reportError(e);
    }
    if (true) profile_profileEnd();
}
function onLifecycleEventImpl(type, data) {
    switch(type){
        case constant_LifecycleConstant.firstScreen:
            {
                var _console_alog, _console;
                var processErr;
                try {
                    process();
                } catch (e) {
                    processErr = e;
                }
                var { root: lepusSide, firstScreenEventIdSwap } = data;
                if (true) profile_profileStart('ReactLynx::hydrate');
                beginPipeline(true, PipelineOrigins.reactLynxHydrate, PerformanceTimingFlags.reactLynxHydrate);
                markTiming('hydrateParseSnapshotStart');
                var before = JSON.parse(lepusSide);
                if (false) { var _console2, _console_alog3, _console3, _console_alog1, _console_alog2, _console1 }
                markTiming('hydrateParseSnapshotEnd');
                markTiming('diffVdomStart');
                var snapshotPatch = backgroundSnapshot_hydrate(before, root_root);
                if (false) {}
                if (true) profile_profileEnd();
                markTiming('diffVdomEnd');
                // TODO: It seems `delayedEvents` and `delayedLifecycleEvents` should be merged into one array to ensure the proper order of events.
                flushDelayedLifecycleEvents();
                if (delayedEvents) {
                    delayedEvents.forEach((args)=>{
                        var _firstScreenEventIdSwap_idStr;
                        var [handlerName, _$data] = args;
                        // eslint-disable-next-line prefer-const
                        var [idStr, ...rest] = handlerName.split(':');
                        while(firstScreenEventIdSwap[idStr])idStr = (_firstScreenEventIdSwap_idStr = firstScreenEventIdSwap[idStr]) === null || _firstScreenEventIdSwap_idStr === void 0 ? void 0 : _firstScreenEventIdSwap_idStr.toString();
                        try {
                            publishEvent([
                                idStr,
                                ...rest
                            ].join(':'), _$data);
                        } catch (e) {
                            lynx.reportError(e);
                        }
                    });
                    delayedEvents.length = 0;
                }
                lynxCoreInject.tt.publishEvent = publishEvent;
                lynxCoreInject.tt.publicComponentEvent = publicComponentEvent;
                // console.debug("********** After hydration:");
                // printSnapshotInstance(__root as BackgroundSnapshotInstance);
                var commitTaskId = genCommitTaskId();
                var patchList = {
                    patchList: [
                        {
                            snapshotPatch,
                            id: commitTaskId
                        }
                    ]
                };
                if (delayedRunOnMainThreadData.length) patchList.delayedRunOnMainThreadData = takeDelayedRunOnMainThreadData();
                var obj = commitPatchUpdate(patchList, {
                    isHydration: true
                });
                sendMTRefInitValueToMainThread();
                lynx.getNativeApp().callLepusMethod(constant_LifecycleConstant.patchUpdate, obj, ()=>{
                    globalCommitTaskMap.forEach((commitTask, id)=>{
                        if (id > commitTaskId) return;
                        commitTask();
                        globalCommitTaskMap["delete"](id);
                    });
                });
                runDelayedUiOps();
                if (processErr) throw processErr;
                break;
            }
        case constant_LifecycleConstant.globalEventFromLepus:
            {
                var [eventName, params] = data;
                lynx.getJSModule('GlobalEventEmitter').trigger(eventName, params);
                break;
            }
        case constant_LifecycleConstant.publishEvent:
            {
                var { handlerName, data: d } = data;
                lynxCoreInject.tt.publishEvent(handlerName, d);
                break;
            }
    }
}
var flushingDelayedLifecycleEvents = false;
function flushDelayedLifecycleEvents() {
    // avoid stackoverflow
    if (flushingDelayedLifecycleEvents) return;
    flushingDelayedLifecycleEvents = true;
    if (delayedLifecycleEvents) {
        delayedLifecycleEvents.forEach((e)=>{
            onLifecycleEvent(e);
        });
        delayedLifecycleEvents.length = 0;
    }
    flushingDelayedLifecycleEvents = false;
}
function publishEvent(handlerName, data) {
    var _lynxCoreInject_tt_callBeforePublishEvent, _lynxCoreInject_tt;
    (_lynxCoreInject_tt_callBeforePublishEvent = (_lynxCoreInject_tt = lynxCoreInject.tt).callBeforePublishEvent) === null || _lynxCoreInject_tt_callBeforePublishEvent === void 0 ? void 0 : _lynxCoreInject_tt_callBeforePublishEvent.call(_lynxCoreInject_tt, data);
    var snapshotId;
    var getSnapshotId = ()=>snapshotId !== null && snapshotId !== void 0 ? snapshotId : snapshotId = Number(handlerName.split(':')[0]);
    var eventHandler = backgroundSnapshotInstanceManager.getValueBySign(handlerName);
    if (true) {
        var _ref, _getSnapshotVNodeSource, _ref1;
        var _backgroundSnapshotInstanceManager_values_get;
        var currentSnapshotId = getSnapshotId();
        profile_profileStart(`ReactLynx::publishEvent`, {
            args: {
                handlerName,
                type: data.type,
                snapshotType: (_ref = (_backgroundSnapshotInstanceManager_values_get = backgroundSnapshotInstanceManager.values.get(currentSnapshotId)) === null || _backgroundSnapshotInstanceManager_values_get === void 0 ? void 0 : _backgroundSnapshotInstanceManager_values_get.type) !== null && _ref !== void 0 ? _ref : '',
                source: (_getSnapshotVNodeSource = getSnapshotVNodeSource(currentSnapshotId)) !== null && _getSnapshotVNodeSource !== void 0 ? _getSnapshotVNodeSource : '',
                jsFunctionName: (_ref1 = eventHandler === null || eventHandler === void 0 ? void 0 : eventHandler.name) !== null && _ref1 !== void 0 ? _ref1 : ''
            }
        });
    }
    if (false) { var currentSnapshotId1, _backgroundSnapshotInstanceManager_values_get1, _ref2, _ref3, _console, _console_alog }
    if (eventHandler) try {
        eventHandler(data);
    } catch (e) {
        lynx.reportError(e);
    }
    if (true) profile_profileEnd();
}
function publicComponentEvent(_componentId, handlerName, data) {
    publishEvent(handlerName, data);
}
function delayedPublicComponentEvent(_componentId, handlerName, data) {
    delayedPublishEvent(handlerName, data);
}
function tt_updateGlobalProps(newData) {
    updateGlobalProps(newData, {
        // Snapshot force render consumes any sync setState dirty flags produced by
        // onGlobalPropsChanged listeners, avoiding an extra diff pass.
        forceRerender: ()=>{
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            runWithForce(()=>preact_render(root_root.__jsx, root_root));
        }
    });
}
 //# sourceMappingURL=tt.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/lynx.js
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

// to make sure preact's hooks to register earlier than ours















if (false) {}
if (false) {}
if (false) {}
// Trick Preact and TypeScript to accept our custom document adapter.
preact_options.document = document_document;
preact_options.requestAnimationFrame = lynxQueueMicrotask;
setupBackgroundDocument();
injectTt();
addCtxNotFoundEventListener();
if (false) {}
else {
    replaceCommitHook();
    performance_initTimingAPI();
    if (false) {}
    if (profile_isProfiling) initProfileHook();
}
setupLynxEnv(); //# sourceMappingURL=lynx.js.map

;// CONCATENATED MODULE: ./node_modules/preact/compat/dist/compat.mjs




/**
 * Assign properties from `props` to `obj`
 * @template O, P The obj and props types
 * @param {O} obj The object to copy properties to
 * @param {P} props The object to copy properties from
 * @returns {O & P}
 */ function compat_assign(obj, props) {
    for(var i in props)obj[i] = props[i];
    return /** @type {O & P} */ obj;
}
/**
 * Check if two objects have a different shape
 * @param {object} a
 * @param {object} b
 * @returns {boolean}
 */ function shallowDiffers(a, b) {
    for(var i in a)if (i !== '__source' && !(i in b)) return true;
    for(var _i in b)if (_i !== '__source' && a[_i] !== b[_i]) return true;
    return false;
}
/**
 * Check if two values are the same value
 * @param {*} x
 * @param {*} y
 * @returns {boolean}
 */ function is(x, y) {
    return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
}
/**
 * This is taken from https://github.com/facebook/react/blob/main/packages/use-sync-external-store/src/useSyncExternalStoreShimClient.js#L84
 * on a high level this cuts out the warnings, ... and attempts a smaller implementation
 * @typedef {{ _value: any; _getSnapshot: () => any }} Store
 */ function compat_useSyncExternalStore(subscribe, getSnapshot) {
    var value = getSnapshot();
    /**
   * @typedef {{ _instance: Store }} StoreRef
   * @type {[StoreRef, (store: StoreRef) => void]}
   */ var _useState = useState({
        _instance: {
            __: value,
            _getSnapshot: getSnapshot
        }
    }), _instance = _useState[0]._instance, forceUpdate = _useState[1];
    useLayoutEffect(function() {
        _instance.__ = value;
        _instance._getSnapshot = getSnapshot;
        if (didSnapshotChange(_instance)) forceUpdate({
            _instance: _instance
        });
    }, [
        subscribe,
        value,
        getSnapshot
    ]);
    useEffect(function() {
        if (didSnapshotChange(_instance)) forceUpdate({
            _instance: _instance
        });
        return subscribe(function() {
            if (didSnapshotChange(_instance)) forceUpdate({
                _instance: _instance
            });
        });
    }, [
        subscribe
    ]);
    return value;
}
/** @type {(inst: Store) => boolean} */ function didSnapshotChange(inst) {
    try {
        return !is(inst.__, inst._getSnapshot());
    } catch (error) {
        return true;
    }
}
function startTransition(cb) {
    cb();
}
function useDeferredValue(val) {
    return val;
}
function useTransition() {
    return [
        false,
        startTransition
    ];
}
// TODO: in theory this should be done after a VNode is diffed as we want to insert
// styles/... before it attaches
var useInsertionEffect = (/* unused pure expression or super */ null && (useLayoutEffect));
/**
 * Component class with a predefined `shouldComponentUpdate` implementation
 */ var compat_PureComponent = /*#__PURE__*/ (/* unused pure expression or super */ null && (function() {
    function _PureComponent(p, c) {
        this.props = p;
        this.context = c;
    }
    _PureComponent.prototype = new Component();
    // Some third-party libraries check if this property is present
    _PureComponent.prototype.isPureReactComponent = true;
    _PureComponent.prototype.shouldComponentUpdate = function(props, state) {
        return shallowDiffers(this.props, props) || shallowDiffers(this.state, state);
    };
    return _PureComponent;
}()));
/**
 * Memoize a component, so that it only updates when the props actually have
 * changed. This was previously known as `React.pure`.
 * @param {import('./internal').FunctionComponent} c functional component
 * @param {(prev: object, next: object) => boolean} [comparer] Custom equality function
 * @returns {import('./internal').FunctionComponent}
 */ function compat_memo(c, comparer) {
    function shouldUpdate(nextProps) {
        var ref = this.props.ref;
        if (ref != nextProps.ref && ref) typeof ref == 'function' ? ref(null) : ref.current = null;
        return comparer ? !comparer(this.props, nextProps) || ref != nextProps.ref : shallowDiffers(this.props, nextProps);
    }
    function Memoed(props) {
        this.shouldComponentUpdate = shouldUpdate;
        return createElement(c, props);
    }
    Memoed.displayName = 'Memo(' + (c.displayName || c.name) + ')';
    Memoed.__f = Memoed.prototype.isReactComponent = true;
    Memoed.type = c;
    return Memoed;
}
var oldDiffHook = preact_options.__b;
preact_options.__b = function(vnode) {
    if (vnode.type && vnode.type.__f && vnode.ref) {
        vnode.props.ref = vnode.ref;
        vnode.ref = null;
    }
    if (oldDiffHook) oldDiffHook(vnode);
};
var REACT_FORWARD_SYMBOL = typeof Symbol != 'undefined' && Symbol.for && Symbol.for('react.forward_ref') || 0xf47;
/**
 * Pass ref down to a child. This is mainly used in libraries with HOCs that
 * wrap components. Using `forwardRef` there is an easy way to get a reference
 * of the wrapped component instead of one of the wrapper itself.
 * @param {import('./index').ForwardFn} fn
 * @returns {import('./internal').FunctionComponent}
 */ function compat_forwardRef(fn) {
    function Forwarded(props) {
        var clone = compat_assign({}, props);
        delete clone.ref;
        return fn(clone, props.ref || null);
    }
    // mobx-react checks for this being present
    Forwarded.$$typeof = REACT_FORWARD_SYMBOL;
    // mobx-react heavily relies on implementation details.
    // It expects an object here with a `render` property,
    // and prototype.render will fail. Without this
    // mobx-react throws.
    Forwarded.render = fn;
    Forwarded.prototype.isReactComponent = Forwarded.__f = true;
    Forwarded.displayName = 'ForwardRef(' + (fn.displayName || fn.name) + ')';
    return Forwarded;
}
var compat_mapFn = function mapFn(children, fn) {
    if (children == null) return null;
    return preact_toChildArray(preact_toChildArray(children).map(fn));
};
// This API is completely unnecessary for Preact, so it's basically passthrough.
var compat_Children = {
    map: compat_mapFn,
    forEach: compat_mapFn,
    count: function count(children) {
        return children ? preact_toChildArray(children).length : 0;
    },
    only: function only(children) {
        var normalized = preact_toChildArray(children);
        if (normalized.length !== 1) throw 'Children.only';
        return normalized[0];
    },
    toArray: preact_toChildArray
};
/** Normal hydration that attaches to a DOM tree but does not diff it. */ var compat_MODE_HYDRATE = 32;
var oldCatchError = preact_options.__e;
preact_options.__e = function(error, newVNode, oldVNode, errorInfo) {
    if (error.then) {
        /** @type {import('./internal').Component} */ var component;
        var vnode = newVNode;
        for(; vnode = vnode.__;)if ((component = vnode.__c) && component.__c) {
            if (newVNode.__e == null) {
                newVNode.__e = oldVNode.__e;
                newVNode.__k = oldVNode.__k;
            }
            // Don't call oldCatchError if we found a Suspense
            return component.__c(error, newVNode);
        }
    }
    oldCatchError(error, newVNode, oldVNode, errorInfo);
};
var oldUnmount = preact_options.unmount;
preact_options.unmount = function(vnode) {
    /** @type {import('./internal').Component} */ var component = vnode.__c;
    if (component) component.__z = true;
    if (component && component.__R) component.__R();
    // if the component is still hydrating
    // most likely it is because the component is suspended
    // we set the vnode.type as `null` so that it is not a typeof function
    // so the unmount will remove the vnode._dom
    if (component && vnode.__u & compat_MODE_HYDRATE) vnode.type = null;
    if (oldUnmount) oldUnmount(vnode);
};
function detachedClone(vnode, detachedParent, parentDom) {
    if (vnode) {
        if (vnode.__c && vnode.__c.__H) {
            vnode.__c.__H.__.forEach(function(effect) {
                if (typeof effect.__c == 'function') effect.__c();
            });
            vnode.__c.__H = null;
        }
        vnode = compat_assign({}, vnode);
        if (vnode.__c != null) {
            if (vnode.__c.__P === parentDom) vnode.__c.__P = detachedParent;
            vnode.__c.__e = true;
            vnode.__c = null;
        }
        vnode.__k = vnode.__k && vnode.__k.map(function(child) {
            return detachedClone(child, detachedParent, parentDom);
        });
    }
    return vnode;
}
function removeOriginal(vnode, detachedParent, originalParent) {
    if (vnode && originalParent) {
        vnode.__v = null;
        vnode.__k = vnode.__k && vnode.__k.map(function(child) {
            return removeOriginal(child, detachedParent, originalParent);
        });
        if (vnode.__c) {
            if (vnode.__c.__P === detachedParent) {
                if (vnode.__e) originalParent.appendChild(vnode.__e);
                vnode.__c.__e = true;
                vnode.__c.__P = originalParent;
            }
        }
    }
    return vnode;
}
// having custom inheritance instead of a class here saves a lot of bytes
var compat_Suspense = /*#__PURE__*/ (/* unused pure expression or super */ null && (function() {
    function _Suspense() {
        // we do not call super here to golf some bytes...
        this.__u = 0;
        this._suspenders = null;
        this.__b = null;
    }
    // Things we do here to save some bytes but are not proper JS inheritance:
    // - call `new Component()` as the prototype
    // - do not set `Suspense.prototype.constructor` to `Suspense`
    _Suspense.prototype = new Component();
    /**
   * @this {import('./internal').SuspenseComponent}
   * @param {Promise} promise The thrown promise
   * @param {import('./internal').VNode<any, any>} suspendingVNode The suspending component
   */ _Suspense.prototype.__c = function(promise, suspendingVNode) {
        var suspendingComponent = suspendingVNode.__c;
        /** @type {import('./internal').SuspenseComponent} */ var c = this;
        if (c._suspenders == null) c._suspenders = [];
        c._suspenders.push(suspendingComponent);
        var resolve = suspended(c.__v);
        var resolved = false;
        var onResolved = function onResolved() {
            if (resolved || c.__z) return;
            resolved = true;
            suspendingComponent.__R = null;
            if (resolve) resolve(onSuspensionComplete);
            else onSuspensionComplete();
        };
        suspendingComponent.__R = onResolved;
        // Store and null _parentDom to prevent setState/forceUpdate from
        // scheduling renders while suspended. Render would be a no-op anyway
        // since renderComponent checks _parentDom, but this avoids queue churn.
        var originalParentDom = suspendingComponent.__P;
        suspendingComponent.__P = null;
        var onSuspensionComplete = function onSuspensionComplete() {
            if (!--c.__u) {
                // If the suspension was during hydration we don't need to restore the
                // suspended children into the _children array
                if (c.state.__a) {
                    var suspendedVNode = c.state.__a;
                    c.__v.__k[0] = removeOriginal(suspendedVNode, suspendedVNode.__c.__P, suspendedVNode.__c.__O);
                }
                c.setState({
                    __a: c.__b = null
                });
                var _suspended;
                while(_suspended = c._suspenders.pop()){
                    // Restore _parentDom before forceUpdate so render can proceed
                    _suspended.__P = originalParentDom;
                    _suspended.forceUpdate();
                }
            }
        };
        /**
     * We do not set `suspended: true` during hydration because we want the actual markup
     * to remain on screen and hydrate it when the suspense actually gets resolved.
     * While in non-hydration cases the usual fallback -> component flow would occour.
     */ if (!c.__u++ && !(suspendingVNode.__u & compat_MODE_HYDRATE)) c.setState({
            __a: c.__b = c.__v.__k[0]
        });
        promise.then(onResolved, onResolved);
    };
    _Suspense.prototype.componentWillUnmount = function() {
        this._suspenders = [];
    };
    /**
   * @this {import('./internal').SuspenseComponent}
   * @param {import('./internal').SuspenseComponent["props"]} props
   * @param {import('./internal').SuspenseState} state
   */ _Suspense.prototype.render = function(props, state) {
        if (this.__b) {
            // When the Suspense's _vnode was created by a call to createVNode
            // (i.e. due to a setState further up in the tree)
            // it's _children prop is null, in this case we "forget" about the parked vnodes to detach
            if (this.__v.__k) {
                var detachedParent = options.document.createElement('div');
                var detachedComponent = this.__v.__k[0].__c;
                this.__v.__k[0] = detachedClone(this.__b, detachedParent, detachedComponent.__O = detachedComponent.__P);
            }
            this.__b = null;
        }
        // Wrap fallback tree in a VNode that prevents itself from being marked as aborting mid-hydration:
        /** @type {import('./internal').VNode} */ var fallback = state.__a && createElement(Fragment, null, props.fallback);
        if (fallback) fallback.__u &= ~compat_MODE_HYDRATE;
        return [
            createElement(Fragment, null, state.__a ? null : props.children),
            fallback
        ];
    };
    return _Suspense;
}()));
/**
 * Checks and calls the parent component's _suspended method, passing in the
 * suspended vnode. This is a way for a parent (e.g. SuspenseList) to get notified
 * that one of its children/descendants suspended.
 *
 * The parent MAY return a callback. The callback will get called when the
 * suspension resolves, notifying the parent of the fact.
 * Moreover, the callback gets function `unsuspend` as a parameter. The resolved
 * child descendant will not actually get unsuspended until `unsuspend` gets called.
 * This is a way for the parent to delay unsuspending.
 *
 * If the parent does not return a callback then the resolved vnode
 * gets unsuspended immediately when it resolves.
 *
 * @param {import('./internal').VNode} vnode
 * @returns {((unsuspend: () => void) => void)?}
 */ function suspended(vnode) {
    var component = vnode.__ && vnode.__.__c;
    return component && component.__a && component.__a(vnode);
}
function compat_lazy(loader) {
    var prom;
    var component = null;
    var error;
    var resolved;
    function Lazy(props) {
        if (!prom) {
            prom = loader();
            prom.then(function(exports) {
                if (exports) component = exports.default || exports;
                resolved = true;
            }, function(e) {
                error = e;
                resolved = true;
            });
        }
        if (error) throw error;
        if (!resolved) throw prom;
        return component ? createElement(component, props) : null;
    }
    Lazy.displayName = 'Lazy';
    Lazy.__f = true;
    return Lazy;
}
// Indexes to linked list nodes (nodes are stored as arrays to save bytes).
var SUSPENDED_COUNT = 0;
var RESOLVED_COUNT = 1;
var NEXT_NODE = 2;
// Having custom inheritance instead of a class here saves a lot of bytes.
var SuspenseList = /*#__PURE__*/ (/* unused pure expression or super */ null && (function() {
    function _SuspenseList() {
        this._next = null;
        this._map = null;
    }
    // Mark one of child's earlier suspensions as resolved.
    // Some pending callbacks may become callable due to this
    // (e.g. the last suspended descendant gets resolved when
    // revealOrder === 'together'). Process those callbacks as well.
    var resolve = function resolve(list, child, node) {
        if (++node[RESOLVED_COUNT] === node[SUSPENDED_COUNT]) // matches the number of times it's been resolved. Therefore we
        // mark the child as completely resolved by deleting it from ._map.
        // This is used to figure out when *all* children have been completely
        // resolved when revealOrder is 'together'.
        list._map.delete(child);
        // If revealOrder is falsy then we can do an early exit, as the
        // callbacks won't get queued in the node anyway.
        // If revealOrder is 'together' then also do an early exit
        // if all suspended descendants have not yet been resolved.
        if (!list.props.revealOrder || list.props.revealOrder[0] === 't' && list._map.size) return;
        // Walk the currently suspended children in order, calling their
        // stored callbacks on the way. Stop if we encounter a child that
        // has not been completely resolved yet.
        node = list._next;
        while(node){
            while(node.length > 3)node.pop()();
            if (node[RESOLVED_COUNT] < node[SUSPENDED_COUNT]) break;
            list._next = node = node[NEXT_NODE];
        }
    };
    // Things we do here to save some bytes but are not proper JS inheritance:
    // - call `new Component()` as the prototype
    // - do not set `Suspense.prototype.constructor` to `Suspense`
    _SuspenseList.prototype = new Component();
    _SuspenseList.prototype.__a = function(child) {
        var list = this;
        var delegated = suspended(list.__v);
        var node = list._map.get(child);
        node[SUSPENDED_COUNT]++;
        return function(unsuspend) {
            var wrappedUnsuspend = function wrappedUnsuspend() {
                if (!list.props.revealOrder) // is no need to coordinate a specific order or unsuspends.
                unsuspend();
                else {
                    node.push(unsuspend);
                    resolve(list, child, node);
                }
            };
            if (delegated) delegated(wrappedUnsuspend);
            else wrappedUnsuspend();
        };
    };
    _SuspenseList.prototype.render = function(props) {
        this._next = null;
        this._map = new Map();
        var children = toChildArray(props.children);
        if (props.revealOrder && props.revealOrder[0] === 'b') // then flip the child list around so that the last child will be
        // the first in the linked list.
        children.reverse();
        // Build the linked list. Iterate through the children in reverse order
        // so that `_next` points to the first linked list node to be resolved.
        for(var i = children.length; i--;)// 	[suspended_count, resolved_count, next_node]
        // where suspended_count and resolved_count are numeric counters for
        // keeping track how many times a node has been suspended and resolved.
        //
        // Note that suspended_count starts from 1 instead of 0, so we can block
        // processing callbacks until componentDidMount has been called. In a sense
        // node is suspended at least until componentDidMount gets called!
        //
        // Pending callbacks are added to the end of the node:
        // 	[suspended_count, resolved_count, next_node, callback_0, callback_1, ...]
        this._map.set(children[i], this._next = [
            1,
            0,
            this._next
        ]);
        return props.children;
    };
    _SuspenseList.prototype.componentDidUpdate = _SuspenseList.prototype.componentDidMount = function() {
        var _this = this;
        // Iterate through all children after mounting for two reasons:
        // 1. As each node[SUSPENDED_COUNT] starts from 1, this iteration increases
        //    each node[RELEASED_COUNT] by 1, therefore balancing the counters.
        //    The nodes can now be completely consumed from the linked list.
        // 2. Handle nodes that might have gotten resolved between render and
        //    componentDidMount.
        this._map.forEach(function(node, child) {
            resolve(_this, child, node);
        });
    };
    return _SuspenseList;
}()));
/**
 * @param {import('../../src/index').RenderableProps<{ context: any }>} props
 */ function ContextProvider(props) {
    this.getChildContext = function() {
        return props.context;
    };
    return props.children;
}
/**
 * Portal component
 * @this {import('./internal').Component}
 * @param {object | null | undefined} props
 *
 * TODO: use createRoot() instead of fake root
 */ function Portal(props) {
    var _this = this;
    var container = props._container;
    _this.componentWillUnmount = function() {
        render$1(null, _this._temp);
        _this._temp = null;
        _this._container = null;
    };
    // When we change container we should clear our old container and
    // indicate a new mount.
    if (_this._container && _this._container !== container) _this.componentWillUnmount();
    if (!_this._temp) {
        // Ensure the element has a mask for useId invocations
        var root = _this.__v;
        while(root !== null && !root.__m && root.__ !== null)root = root.__;
        _this._container = container;
        // Create a fake DOM parent node that manages a subset of `container`'s children:
        _this._temp = {
            nodeType: 1,
            parentNode: container,
            childNodes: [],
            __k: {
                __m: root.__m
            },
            contains: function contains() {
                return true;
            },
            namespaceURI: container.namespaceURI,
            insertBefore: function insertBefore(child, before) {
                this.childNodes.push(child);
                _this._container.insertBefore(child, before);
            },
            removeChild: function removeChild(child) {
                this.childNodes.splice(this.childNodes.indexOf(child) >>> 1, 1);
                _this._container.removeChild(child);
            }
        };
    }
    // Render our wrapping element into temp.
    render$1(createElement(ContextProvider, {
        context: _this.context
    }, props.__v), _this._temp);
}
/**
 * Create a `Portal` to continue rendering the vnode tree at a different DOM node
 * @param {import('./internal').VNode} vnode The vnode to render
 * @param {import('./internal').PreactElement} container The DOM node to continue rendering in to.
 */ function compat_createPortal(vnode, container) {
    var el = createElement(Portal, {
        __v: vnode,
        _container: container
    });
    el.containerInfo = container;
    return el;
}
var REACT_ELEMENT_TYPE = typeof Symbol != 'undefined' && Symbol.for && Symbol.for('react.element') || 0xeac7;
// Some libraries like `react-virtualized` explicitly check for this.
BaseComponent.prototype.isReactComponent = true;
// `UNSAFE_*` lifecycle hooks
// Preact only ever invokes the unprefixed methods.
// Here we provide a base "fallback" implementation that calls any defined UNSAFE_ prefixed method.
// - If a component defines its own `componentDidMount()` (including via defineProperty), use that.
// - If a component defines `UNSAFE_componentDidMount()`, `componentDidMount` is the alias getter/setter.
// - If anything assigns to an `UNSAFE_*` property, the assignment is forwarded to the unprefixed property.
// See https://github.com/preactjs/preact/issues/1941
[
    'componentWillMount',
    'componentWillReceiveProps',
    'componentWillUpdate'
].forEach(function(key) {
    Object.defineProperty(BaseComponent.prototype, key, {
        configurable: true,
        get: function get() {
            return this['UNSAFE_' + key];
        },
        set: function set(v) {
            Object.defineProperty(this, key, {
                configurable: true,
                writable: true,
                value: v
            });
        }
    });
});
/**
 * Proxy render() since React returns a Component reference.
 * @param {import('./internal').VNode} vnode VNode tree to render
 * @param {import('./internal').PreactElement} parent DOM node to render vnode tree into
 * @param {() => void} [callback] Optional callback that will be called after rendering
 * @returns {import('./internal').Component | null} The root component reference or null
 */ function compat_render(vnode, parent, callback) {
    // React destroys any existing DOM nodes, see #1727
    // ...but only on the first render, see #1828
    if (parent.__k == null) parent.textContent = '';
    render$1(vnode, parent);
    if (typeof callback == 'function') callback();
    return vnode ? vnode.__c : null;
}
function compat_hydrate(vnode, parent, callback) {
    hydrate$1(vnode, parent);
    if (typeof callback == 'function') callback();
    return vnode ? vnode.__c : null;
}
var oldEventHook = preact_options.event;
preact_options.event = function(e) {
    if (oldEventHook) e = oldEventHook(e);
    e.persist = function() {};
    e.isPropagationStopped = function isPropagationStopped() {
        return this.cancelBubble;
    };
    e.isDefaultPrevented = function isDefaultPrevented() {
        return this.defaultPrevented;
    };
    return e.nativeEvent = e;
};
var oldVNodeHook = preact_options.vnode;
preact_options.vnode = function(vnode) {
    vnode.$$typeof = REACT_ELEMENT_TYPE;
    if (oldVNodeHook) oldVNodeHook(vnode);
};
// This is a very very private internal function for React it
// is used to sort-of do runtime dependency injection.
var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = (/* unused pure expression or super */ null && ({
    ReactCurrentDispatcher: {
        current: {
            useCallback: useCallback,
            useContext: useContext,
            useDebugValue: useDebugValue,
            useDeferredValue: useDeferredValue,
            useEffect: useEffect,
            useId: useId,
            useImperativeHandle: useImperativeHandle,
            useInsertionEffect: useInsertionEffect,
            useLayoutEffect: useLayoutEffect,
            useMemo: useMemo,
            // useMutableSource, // experimental-only and replaced by uSES, likely not worth supporting
            useReducer: useReducer,
            useRef: useRef,
            useState: useState,
            useSyncExternalStore: compat_useSyncExternalStore,
            useTransition: useTransition
        }
    }
}));
var compat_version = '18.3.1'; // trick libraries to think we are react
/**
 * Legacy version of createElement.
 * @param {import('./internal').VNode["type"]} type The node name or Component constructor
 */ function createFactory(type) {
    return createElement.bind(null, type);
}
/**
 * Check if the passed element is a valid (p)react node.
 * @param {*} element The element to check
 * @returns {boolean}
 */ function compat_isValidElement(element) {
    return !!element && element.$$typeof === REACT_ELEMENT_TYPE;
}
/**
 * Check if the passed element is a Fragment node.
 * @param {*} element The element to check
 * @returns {boolean}
 */ function isFragment(element) {
    return compat_isValidElement(element) && element.type === Fragment;
}
/**
 * Check if the passed element is a Memo node.
 * @param {*} element The element to check
 * @returns {boolean}
 */ function isMemo(element) {
    return !!element && typeof element.displayName == 'string' && element.displayName.indexOf('Memo(') == 0;
}
/**
 * Wrap `cloneElement` to abort if the passed element is not a valid element and apply
 * all vnode normalizations.
 * @param {import('./internal').VNode} element The vnode to clone
 * @param {object} props Props to add when cloning
 * @param {Array<import('./internal').ComponentChildren>} rest Optional component children
 */ function compat_cloneElement(element) {
    if (!compat_isValidElement(element)) return element;
    return cloneElement$1.apply(null, arguments);
}
/**
 * Remove a component tree from the DOM, including state and event handlers.
 * @param {import('./internal').PreactElement} container
 * @returns {boolean}
 */ function unmountComponentAtNode(container) {
    if (container.__k) {
        render$1(null, container);
        return true;
    }
    return false;
}
/**
 * Get the matching DOM node for a component
 * @param {import('./internal').Component} component
 * @returns {import('./internal').PreactElement | null}
 */ function findDOMNode(component) {
    return component && (component.base || component.nodeType === 1 && component) || null;
}
/**
 * Deprecated way to control batched rendering inside the reconciler, but we
 * already schedule in batches inside our rendering code
 * @template Arg
 * @param {(arg: Arg) => void} callback function that triggers the updated
 * @param {Arg} [arg] Optional argument that can be passed to the callback
 */ // eslint-disable-next-line camelcase
var compat_unstable_batchedUpdates = function unstable_batchedUpdates(callback, arg) {
    return callback(arg);
};
/**
 * In React, `flushSync` flushes the entire tree and forces a rerender.
 * @template Arg
 * @template Result
 * @param {(arg: Arg) => Result} callback function that runs before the flush
 * @param {Arg} [arg] Optional argument that can be passed to the callback
 * @returns
 */ var compat_flushSync = function flushSync(callback, arg) {
    var prevDebounce = options.debounceRendering;
    options.debounceRendering = function(cb) {
        return cb();
    };
    var res = callback(arg);
    options.debounceRendering = prevDebounce;
    return res;
};
// compat to react-is
var isElement = (/* unused pure expression or super */ null && (compat_isValidElement));
// React copies the named exports to the default one.
var compat_index = (/* unused pure expression or super */ null && ({
    useState: useState,
    useId: useId,
    useReducer: useReducer,
    useEffect: useEffect,
    useLayoutEffect: useLayoutEffect,
    useInsertionEffect: useInsertionEffect,
    useTransition: useTransition,
    useDeferredValue: useDeferredValue,
    useSyncExternalStore: compat_useSyncExternalStore,
    startTransition: startTransition,
    useRef: useRef,
    useImperativeHandle: useImperativeHandle,
    useMemo: useMemo,
    useCallback: useCallback,
    useContext: useContext,
    useDebugValue: useDebugValue,
    version: compat_version,
    Children: compat_Children,
    render: compat_render,
    hydrate: compat_hydrate,
    unmountComponentAtNode: unmountComponentAtNode,
    createPortal: compat_createPortal,
    createElement: createElement,
    createContext: createContext,
    createFactory: createFactory,
    cloneElement: compat_cloneElement,
    createRef: createRef,
    Fragment: Fragment,
    isValidElement: compat_isValidElement,
    isElement: isElement,
    isFragment: isFragment,
    isMemo: isMemo,
    findDOMNode: findDOMNode,
    Component: Component,
    PureComponent: compat_PureComponent,
    memo: compat_memo,
    forwardRef: compat_forwardRef,
    flushSync: compat_flushSync,
    unstable_batchedUpdates: compat_unstable_batchedUpdates,
    StrictMode: Fragment,
    Suspense: compat_Suspense,
    SuspenseList: SuspenseList,
    lazy: compat_lazy,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
}));
 //# sourceMappingURL=compat.module.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/core/component.js
// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/* eslint-disable */ 



var OriginalSetStateKey = '__reactLynxOriginalSetState';
function reportRefDeprecationError(fnName, newFnName) {
    if (false) {}
}
function getReactAppInstance() {
    return lynxCoreInject.tt;
}
function getLegacyNativeApp() {
    return lynxCoreInject.tt._nativeApp;
}
function getLegacyReactComponent() {
    return lynxCoreInject.tt._reactLynx.ReactComponent.prototype;
}
function createLegacyComponentReceiver(reactAppInstance, nativeApp) {
    return {
        _type: '',
        _nativeApp: nativeApp,
        _uiModule: nativeApp.nativeModuleProxy.LynxUIMethodModule,
        _reactAppInstance: reactAppInstance
    };
}
function installComponentCompat() {
    var __Component_prototype_OriginalSetStateKey;
    var __Component = BaseComponent;
    var reactAppInstance = getReactAppInstance();
    __Component.prototype._reactAppInstance = reactAppInstance;
    __Component.prototype.getNodeRef = function(a, b) {
        reportRefDeprecationError('getNodeRef', 'lynx.createSelectorQuery');
        return getLegacyReactComponent().getNodeRef.call(createLegacyComponentReceiver(getReactAppInstance(), getLegacyNativeApp()), a, b);
    };
    __Component.prototype.getNodeRefFromRoot = function(a) {
        reportRefDeprecationError('getNodeRefFromRoot', 'lynx.createSelectorQuery');
        return getLegacyReactComponent().getNodeRefFromRoot.call(createLegacyComponentReceiver(getReactAppInstance(), getLegacyNativeApp()), a);
    };
    __Component.prototype.registerModule = function(name, module) {
        this._reactAppInstance.registerModule(name, module);
    };
    __Component.prototype.getJSModule = function(name) {
        return this._reactAppInstance.getJSModule(name);
    };
    __Component.prototype.addGlobalEventListener = function(eventName, callback, context) {
        return this._reactAppInstance.getJSModule('GlobalEventEmitter').addListener(eventName, callback, context);
    };
    __Component.prototype.getElementById = function(id) {
        reportRefDeprecationError('getElementById', 'lynx.getElementById');
        return lynx.getElementById(id);
    };
    __Component.prototype.GlobalEventEmitter = reactAppInstance.GlobalEventEmitter;
    __Component.prototype.createSelectorQuery = function() {
        reportRefDeprecationError('createSelectorQuery on component instance', 'lynx.createSelectorQuery');
        return lynx.createSelectorQuery();
    };
    var oldSetState = (__Component_prototype_OriginalSetStateKey = __Component.prototype[OriginalSetStateKey]) !== null && __Component_prototype_OriginalSetStateKey !== void 0 ? __Component_prototype_OriginalSetStateKey : __Component.prototype.setState;
    __Component.prototype[OriginalSetStateKey] = oldSetState;
    __Component.prototype.setState = function(state, callback) {
        oldSetState.call(this, state, callback);
        // @ts-ignore
        var timingFlag = this[render_constants_NEXT_STATE][PerfSpecificKey];
        if (timingFlag) {
            globalCommitContext.flushOptions.__lynx_timing_flag = timingFlag;
            markTimingLegacy('updateSetStateTrigger', timingFlag);
            this[render_constants_NEXT_STATE][PerfSpecificKey] = '';
        }
    };
}
 //# sourceMappingURL=component.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/children.js
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

var children_mapFn = (children, fn)=>{
    // eslint-disable-next-line unicorn/no-array-callback-reference
    var mapped = compat_Children.map(children, fn);
    return mapped == null ? null : Object.freeze(mapped);
};
var children_Children = {
    map: children_mapFn,
    forEach: children_mapFn,
    count: compat_Children.count,
    only: compat_Children.only,
    toArray (children) {
        return Object.freeze(compat_Children.toArray(children));
    }
}; //# sourceMappingURL=children.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/element.js



// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.


function splitProps(props, rest, initialKey) {
    var key = initialKey;
    var children = rest;
    var spreadProps = {};
    if (props && typeof props === 'object') {
        spreadProps = props;
        if ('key' in spreadProps) {
            var { key: keyValue } = spreadProps, propsWithoutKey = _object_without_properties(spreadProps, [
                "key"
            ]);
            key = keyValue;
            spreadProps = propsWithoutKey;
        }
        if ('children' in spreadProps) {
            var { children: childrenValue } = spreadProps, propsWithoutChildren = _object_without_properties(spreadProps, [
                "children"
            ]);
            if (rest.length === 0) children = [
                childrenValue
            ];
            spreadProps = propsWithoutChildren;
        }
    }
    return {
        key,
        children,
        spreadProps
    };
}
function pickChildrenProps(props) {
    var childrenProps;
    for(var name in props)if (name.startsWith('$')) {
        childrenProps !== null && childrenProps !== void 0 ? childrenProps : childrenProps = {};
        childrenProps[name] = props[name];
    }
    return childrenProps;
}
/**
 * Creates a ReactLynx element using the snapshot runtime.
 *
 * @public
 */ var element_createElement = function(type, props, ...rest) {
    var _baseCreateElement = createElementBackground;
    /**
     * for built-in element which would create snapshot instance
     *
     * 1. transform props to values
     * 2. transform children to $0 for slot v2
     */ if (typeof type === 'string') {
        var { key, children, spreadProps } = splitProps(props, rest);
        return _baseCreateElement(type, Object.assign({}, {
            key,
            values: [
                _object_spread_props(_object_spread({}, spreadProps), {
                    __spread: true
                })
            ]
        }, children.length > 0 ? {
            $0: children.length > 1 ? children : children[0]
        } : undefined));
    }
    return _baseCreateElement(type, props, ...rest);
};
/**
 * Clones a ReactLynx element using the snapshot runtime.
 *
 * @public
 */ var element_cloneElement = function(vnode, props, ...rest) {
    var _preProps_values, _getCloneSnapshotInfo;
    var type = vnode.type;
    if (typeof type !== 'string') return cloneElementBackground(vnode, props, ...rest);
    if (!props && rest.length === 0) {
        // no props, no children. clone directly
        var _baseCloneElement = cloneElementBackground;
        return _baseCloneElement(vnode, props, ...rest);
    }
    var preProps = vnode.props;
    var preValues = (_preProps_values = preProps.values) !== null && _preProps_values !== void 0 ? _preProps_values : [];
    var resolvedProps = splitProps(props, rest, vnode.key);
    var { key, spreadProps } = resolvedProps;
    var { children } = resolvedProps;
    // raw element, merge props and reset children
    if (!isCompiledSnapshot(type)) {
        var _preValues_;
        var nextProps = _object_spread(_object_spread_props(_object_spread({}, (_preValues_ = preValues[0]) !== null && _preValues_ !== void 0 ? _preValues_ : {}), {
            key
        }), spreadProps);
        if (children.length === 0 && '$0' in preProps) children = [
            preProps.$0
        ];
        return element_createElement(type, nextProps, ...children);
    }
    // normal compiled snapshot
    var values = preValues.slice();
    var _baseCreateElement = createElementBackground;
    var { cloneSpreadIndex } = (_getCloneSnapshotInfo = getCloneSnapshotInfo(type)) !== null && _getCloneSnapshotInfo !== void 0 ? _getCloneSnapshotInfo : {};
    var cloneType = type;
    if (cloneSpreadIndex === undefined) {
        cloneType = getCloneSnapshotType(type, values.length);
        values.push(_object_spread_props(_object_spread({}, spreadProps), {
            __spread: true
        }));
    } else {
        var _preValues_cloneSpreadIndex;
        var preSpread = (_preValues_cloneSpreadIndex = preValues[cloneSpreadIndex]) !== null && _preValues_cloneSpreadIndex !== void 0 ? _preValues_cloneSpreadIndex : {};
        values[cloneSpreadIndex] = _object_spread_props(_object_spread({}, preSpread, spreadProps), {
            __spread: true
        });
    }
    if (children.length > 0) console.warn('cloneElement from compiled snapshot with children is not supported');
    return _baseCreateElement(cloneType, _object_spread_props(_object_spread({
        key
    }, pickChildrenProps(preProps)), {
        values
    }));
}; //# sourceMappingURL=element.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/portals.js
// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.







function portals_ContextProvider(props) {
    this.getChildContext = ()=>props.context;
    return props.children;
}
/**
 * Portal component
 *
 * TODO: use createRoot() instead of fake root
 */ function portals_Portal(props) {
    var _this = this;
    var container = props._container;
    _this.componentWillUnmount = function() {
        render(null, _this._temp);
        delete _this._temp;
        delete _this._container;
    };
    // When we change container we should clear our old container and
    // indicate a new mount.
    if (_this._container && _this._container !== container) _this.componentWillUnmount();
    if (!_this._temp) {
        // Ensure the element has a mask for useId invocations
        var root = _this[VNODE];
        while(root !== null && !root[MASK] && root[PARENT] !== null)root = root[PARENT];
        _this._container = container;
        var fakeRoot = {
            nodeType: 1,
            parentNode: container,
            childNodes: [],
            [CHILDREN]: {
                [MASK]: root[MASK]
            },
            insertBefore (child, before) {
                // Track the child in our local children list AND wire up the BSI's
                // `__parent` pointer to the fakeRoot, regardless of pre-/post-hydrate
                // state. preact's unmount path (`removeNode` in diff/index.js) walks
                // `child.parentNode.removeChild(child)`, not the parent VNode — so
                // without `__parent` set, preact's later unmount silently no-ops and
                // our `removeChild` here never fires.
                this.childNodes.push(child);
                child.__parent = this;
                if (!__globalSnapshotPatch) {
                    // Pre-hydrate: queue for replay in `clearPendingPortalInsertBefore`.
                    pendingInsertBefore.push(_this._container, child, before);
                    return;
                }
                // Post-hydrate: `_this._container` is always set here (we assigned
                // it just above when creating `fakeRoot`), and the global buffer is
                // initialized — emit directly.
                __globalSnapshotPatch.push(SnapshotOperation.nodesRefInsertBefore, serializeNodesRef(_this._container), child.__id, before === null || before === void 0 ? void 0 : before.__id);
            },
            removeChild (child) {
                var idx = this.childNodes.indexOf(child);
                if (idx >= 0) this.childNodes.splice(idx, 1);
                child.__parent = null;
                // Mirror `BackgroundSnapshotInstance.removeChild`'s bookkeeping:
                // mark the subtree as removed and queue its root id for commit-time
                // `tearDown` (which traverses + deletes from
                // `backgroundSnapshotInstanceManager`). Without this, the portaled
                // BSI subtree leaks across mount/unmount cycles. Same in pre- and
                // post-hydrate paths because the BSI was registered in the manager
                // at construction time regardless of hydration state.
                child.__removed_from_tree = true;
                globalBackgroundSnapshotInstancesToRemove.push(child.__id);
                if (__globalSnapshotPatch) {
                    __globalSnapshotPatch.push(SnapshotOperation.nodesRefRemoveChild, serializeNodesRef(_this._container), child.__id);
                    return;
                }
                // Pre-hydrate cancellation: an unmount that fires before hydrate
                // would otherwise be silently dropped (the global patch buffer is
                // `undefined`), and the still-pending `nodesRefInsertBefore` from
                // earlier `insertBefore` would resurrect this child during the
                // queue replay. Drain the matching tuple from the queue.
                for(var i = 0; i < pendingInsertBefore.length; i += 3)if (pendingInsertBefore[i + 1] === child) {
                    pendingInsertBefore.splice(i, 3);
                    break;
                }
            }
        };
        _this._temp = fakeRoot;
    }
    // Render our wrapping element into temp.
    render(createElement(portals_ContextProvider, {
        context: _this.context
    }, props[VNODE]), _this._temp);
    return;
}
/**
 * Renders `vnode` into `container` instead of the current component's position
 * in the element tree, while keeping it in the React tree.
 *
 * `container` is a `NodesRef`, obtained either from a callback `ref` or from
 * `lynx.createSelectorQuery().select(...)`.
 *
 * @remarks
 * Context still flows across the portal boundary, and state updates inside the
 * portal behave like they do in any other component. A few behaviors differ
 * from `react-dom`:
 *
 * - Events do not bubble along the React tree. ReactLynx follows Preact's
 *   approach, which has no synthetic event system, so events follow the actual
 *   element structure of the page.
 * - The portaled subtree renders on the background thread only, and does not
 *   participate in main-thread first-screen rendering.
 * - Mounting across pages or across native containers is not supported.
 *
 * @param vnode - The React node to render into `container`.
 * @param container - The `NodesRef` target to render into.
 * @returns A `ReactNode` placeholder to include in the JSX at the call site;
 * the rendered output goes into `container`.
 *
 * @public
 */ function portals_createPortal(vnode, container) {
    var el = createElement(portals_Portal, {
        [VNODE]: vnode,
        _container: container
    });
    el.containerInfo = container;
    // preact's `VNode` and React's `ReactNode` describe the same runtime value
    // here; the public signature speaks React types like the rest of the surface.
    return el;
} //# sourceMappingURL=portals.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/snapshot/lynx/suspense.js
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.



var suspense_Suspense = ({ children, fallback })=>{
    var __createElement = createElementBackground;
    var childrenRef = useRef();
    var newChildren = __createElement('wrapper', {
        ref: (bsi)=>{
            if (bsi) childrenRef.current = bsi;
        },
        $0: children
    });
    var newFallback = __createElement('wrapper', {
        ref: (bsi)=>{
            if (bsi && childrenRef.current) {
                var i = globalBackgroundSnapshotInstancesToRemove.indexOf(childrenRef.current.__id);
                if (i !== -1) globalBackgroundSnapshotInstancesToRemove.splice(i, 1);
                childrenRef.current = undefined;
            }
        },
        $0: fallback
    });
    return __createElement(PreactSuspense, {
        fallback: newFallback
    }, newChildren);
}; //# sourceMappingURL=suspense.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/core/hooks/useLynxGlobalEventListener.js
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

/**
 * `useLynxGlobalEventListener` helps you `addListener` as early as possible.
 *
 * @example
 *
 * Use this hooks to listen to event 'exposure' and event 'disexposure'
 *
 * ```jsx
 * function App() {
 *   useLynxGlobalEventListener('exposure', (e) => {
 *     console.log("exposure", e)
 *   })
 *   useLynxGlobalEventListener('disexposure', (e) => {
 *     console.log("disexposure", e)
 *   })
 *   return (
 *     <view
 *       style='width: 100px; height: 100px; background-color: red;'
 *       exposure-id='a'
 *     />
 *   )
 * }
 * ```
 *
 * @param eventName - Event name to listen
 * @param listener - Event handler
 * @public
 */ function useLynxGlobalEventListener_useLynxGlobalEventListener(eventName, listener) {
    'background only';
    var previousArgsRef = useRef();
    useMemo(()=>{
        if (previousArgsRef.current) {
            var [_$eventName, _$listener] = previousArgsRef.current;
            lynx.getJSModule('GlobalEventEmitter').removeListener(_$eventName, _$listener);
        }
        lynx.getJSModule('GlobalEventEmitter').addListener(eventName, listener);
        previousArgsRef.current = [
            eventName,
            listener
        ];
    }, [
        eventName,
        listener
    ]);
    useEffect(()=>{
        return ()=>{
            if (previousArgsRef.current) {
                var [_$eventName, _$listener] = previousArgsRef.current;
                lynx.getJSModule('GlobalEventEmitter').removeListener(_$eventName, _$listener);
            }
        };
    }, []);
} //# sourceMappingURL=useLynxGlobalEventListener.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/call/runOnMainThread.js
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.



var runOnMainThreadImpl = (/* unused pure expression or super */ null && (createRunOnMainThread({
    shouldDispatchRunOnMainThreadDirectly () {
        return __globalSnapshotPatch !== undefined && !isRendering.value;
    }
})));
/**
 * `runOnMainThread` allows triggering main thread functions on the main thread asynchronously.
 * @param fn - The main thread functions to be called.
 * @returns A function. Calling which with the arguments to be passed to the main thread function to trigger it on the main thread. This function returns a promise that resolves to the return value of the main thread function.
 * @example
 * ```ts
 * import { runOnMainThread } from '@lynx-js/react';
 *
 * async function someFunction() {
 *   const fn = runOnMainThread(() => {
 *     'main thread';
 *     return 'hello';
 *   });
 *   const result = await fn();
 * }
 * ```
 * @public
 */ function runOnMainThread(fn) {
    return runOnMainThreadImpl(fn);
} //# sourceMappingURL=runOnMainThread.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/snapshot/worklet/ref/workletRef.js



// Split into two variables for testing purposes
var lastIdBG = 0;
function clearWorkletRefLastIdForTesting() {
    lastIdBG = 0;
}
class WorkletRef {
    get current() {
        if (false) {}
        return undefined;
    }
    set current(_) {
        if (false) {}
    }
    /**
     * @internal
     */ toJSON() {
        return {
            _wvid: this._wvid
        };
    }
    /**
     * @internal
     */ constructor(initValue, type){
        this._initValue = initValue;
        this._type = type;
        this._wvid = ++lastIdBG;
        addWorkletRefInitValue(this._wvid, initValue);
    }
}
/**
 * A `MainThreadRef` is a ref that can only be accessed on the main thread. It is used to preserve
 * states between main thread function calls.
 * The data saved in `current` property of the `MainThreadRef` can be read and written in
 * multiple main thread functions.
 * @public
 */ class MainThreadRef extends WorkletRef {
    constructor(initValue){
        super(initValue, 'main-thread');
        {
            var _lynx_getNativeApp_createJSObjectDestructionObserver, _lynx_getNativeApp;
            var id = this._wvid;
            this._lifecycleObserver = (_lynx_getNativeApp_createJSObjectDestructionObserver = (_lynx_getNativeApp = lynx.getNativeApp()).createJSObjectDestructionObserver) === null || _lynx_getNativeApp_createJSObjectDestructionObserver === void 0 ? void 0 : _lynx_getNativeApp_createJSObjectDestructionObserver.call(_lynx_getNativeApp, ()=>{
                var _lynx_getCoreContext, _lynx;
                (_lynx_getCoreContext = (_lynx = lynx).getCoreContext) === null || _lynx_getCoreContext === void 0 ? void 0 : _lynx_getCoreContext.call(_lynx).dispatchEvent({
                    type: events_WorkletEvents.releaseWorkletRef,
                    data: {
                        id
                    }
                });
            });
        }
    }
}
function useMainThreadRef(initValue) {
    return useMemo(()=>{
        return new MainThreadRef(initValue);
    }, []);
} //# sourceMappingURL=workletRef.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/lynx-api.js
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.










/**
 * The default and only root of ReactLynx for you to render JSX
 * @example
 * ```ts
 * import { root } from "@lynx-js/react"
 * ```
 *
 * @public
 */ var lynx_api_root = {
    render: (jsx)=>{
        root_root.__jsx = jsx;
        if (true) profile_profileStart('ReactLynx::renderBackground');
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        preact_render(jsx, root_root);
        if (true) profile_profileEnd();
        if (false) // framework marks ready automatically once the background is ready.
        {}
        else // for the background, so the `firstScreen` message might have been
        // reached when `root.render()` is called asynchronously.
        flushDelayedLifecycleEvents();
    },
    /* v8 ignore next 3 */ registerDataProcessors: (dataProcessorDefinition)=>{
        lynx.registerDataProcessors(dataProcessorDefinition);
    }
};
/**
 * Mark the first screen as ready to sync when `firstScreenSyncTiming` is `'manual'`.
 *
 * The main thread holds the UI control until this is called, so the handover timing to
 * the background thread (for hydration) is fully controlled by the user. It can be called
 * from both threads (a background-thread call is forwarded to the main thread), is a no-op
 * unless `firstScreenSyncTiming` is `'manual'`, and has no further effect once called.
 *
 * @example
 *
 * ```ts
 * import { markFirstScreenSyncReady } from "@lynx-js/react"
 *
 * markFirstScreenSyncReady();
 * ```
 *
 * @public
 */ function markFirstScreenSyncReady() {
    if (true) return;
    // The sync happens on the main thread, forward the mark to it.
    // removed by dead control flow
{}
    // removed by dead control flow
{}
}
var _InitData = /* @__PURE__ */ (/* unused pure expression or super */ null && (factory({
    createContext,
    useState,
    createElement,
    useLynxGlobalEventListener
}, '__initData', 'onDataChanged')));
/**
 * The {@link https://react.dev/reference/react/createContext#provider | Provider} Component that provide `initData`,
 * you must wrap your JSX inside it
 * @group Components
 *
 * @example
 *
 * ```ts
 * import { root } from "@lynx-js/react"
 *
 * function App() {
 *   return (
 *     <InitDataConsumer children={(initData) => <view>...</view>}/>
 *   )
 * }
 *
 * root.render(
 *   <InitDataProvider>
 *      <App/>
 *   </InitDataProvider>
 * );
 *
 * ```
 *
 * @public
 */ // @ts-expect-error make preact and react types work
var InitDataProvider = /* @__PURE__ */ (/* unused pure expression or super */ null && (_InitData.Provider()));
/**
 * The {@link https://react.dev/reference/react/createContext#consumer | Consumer} Component that provide `initData`.
 * This should be used with {@link InitDataProvider}
 * @group Components
 * @public
 */ // @ts-expect-error make preact and react types work
var InitDataConsumer = /* @__PURE__ */ (/* unused pure expression or super */ null && (_InitData.Consumer()));
/**
 * A React Hooks for you to get `initData`.
 * If `initData` is changed, a re-render will be triggered automatically.
 *
 * @example
 *
 * ```ts
 * function App() {
 *   const initData = useInitData();
 *
 *   initData.someProperty // use it
 * }
 * ```
 *
 * @public
 */ var useInitData = /* @__PURE__ */ (/* unused pure expression or super */ null && (_InitData.use()));
/**
 * A React Hooks for you to get notified when `initData` changed.
 *
 * @example
 * ```ts
 * function App() {
 *   useInitDataChanged((data) => {
 *     data.someProperty // can use it
 *   })
 * }
 * ```
 * @public
 */ var useInitDataChanged = /* @__PURE__ */ (/* unused pure expression or super */ null && (_InitData.useChanged()));
var _GlobalProps = /* @__PURE__ */ (/* unused pure expression or super */ null && (createGlobalProps({
    createContext,
    useState,
    createElement,
    useLynxGlobalEventListener
})));
/**
 * The {@link https://react.dev/reference/react/createContext#provider | Provider} Component that provide `lynx.__globalProps`,
 * you must wrap your JSX inside it
 * @group Components
 *
 * @example
 *
 * ```ts
 * import { root } from "@lynx-js/react"
 *
 * function App() {
 *   return (
 *     <GlobalPropsConsumer children={(globalProps) => <view>...</view>}/>
 *   )
 * }
 *
 * root.render(
 *   <GlobalPropsProvider>
 *      <App/>
 *   </GlobalPropsProvider>
 * );
 *
 * ```
 *
 * @public
 */ // @ts-expect-error make preact and react types work
var GlobalPropsProvider = /* @__PURE__ */ (/* unused pure expression or super */ null && (_GlobalProps.Provider()));
/**
 * The {@link https://react.dev/reference/react/createContext#consumer | Consumer} Component that provide `lynx.__globalProps`.
 * This should be used with {@link GlobalPropsProvider}
 * @group Components
 * @public
 */ // @ts-expect-error make preact and react types work
var GlobalPropsConsumer = /* @__PURE__ */ (/* unused pure expression or super */ null && (_GlobalProps.Consumer()));
/**
 * A React Hooks for you to get `lynx.__globalProps`.
 * If `lynx.__globalProps` is changed, a re-render will be triggered automatically.
 *
 * @example
 *
 * ```ts
 * function App() {
 *   const globalProps = useGlobalProps();
 *
 *   globalProps.someProperty // use it
 * }
 * ```
 *
 * @public
 */ var useGlobalProps = /* @__PURE__ */ (/* unused pure expression or super */ null && (_GlobalProps.use()));
/**
 * A React Hooks for you to get notified when `__globalProps` changed.
 *
 * @example
 * ```ts
 * function App() {
 *   useGlobalPropsChanged((data) => {
 *     lynx.__globalProps.someProperty // can use lynx.__globalProps
 *     data.someProperty // can use data
 *   })
 * }
 * ```
 * @public
 */ var useGlobalPropsChanged = /* @__PURE__ */ (/* unused pure expression or super */ null && (_GlobalProps.useChanged()));




 //# sourceMappingURL=lynx-api.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/index.js
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.









installComponentCompat();



/**
 * @internal
 */ /* export default */ var lib = ((/* unused pure expression or super */ null && ({
    // hooks
    useState,
    useReducer,
    useEffect,
    useLayoutEffect,
    useRef,
    useImperativeHandle,
    useMemo,
    useCallback,
    useContext,
    useDebugValue,
    useSyncExternalStore,
    createContext,
    createRef,
    Fragment,
    isValidElement,
    Children,
    Component,
    PureComponent,
    memo,
    forwardRef,
    Suspense,
    lazy,
    createElement,
    cloneElement,
    createPortal
})));

 //# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/core/lynx/lazy-bundle.js
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
// Inlined rather than imported from `snapshot/` so this `core/` module stays
// free of runtime-backend dependencies (enforced by
// `guardrails/snapshot-containment`). `PREPARE_LAZY_BUNDLE_MTS` must stay in
// sync with `snapshot/lifecycle/constant.ts`'s
// `LifecycleConstant.prepareLazyBundleMTS`, the lifecycle name the snapshot
// backend registers the main-thread prepare handler under.
var SECTION_BACKGROUND = 'background';
var LYNX_LAZY_SYNC_TIMEOUT_SECONDS = 5;
var PREPARE_LAZY_BUNDLE_MTS = 'rLynxPrepareLazyBundleMTS';
// Background-thread dedup cache: a `source` whose FetchBundle load fully
// succeeded maps to its exports, so a repeat load returns the same result
// without re-fetching or re-triggering the main-thread prepare. Only populated
// on success — a failed load stays out of the cache and can be retried, exactly
// like `prepareLazyBundleMTS`'s main-thread cache.
var fetchBundleBgCache = new Map();
/**
 * To make code below works
 * const App1 = lazy(() => import("./x").then(({App1}) => ({default: App1})))
 * const App2 = lazy(() => import("./x").then(({App2}) => ({default: App2})))
 * @internal
 */ var makeSyncThen = function(result) {
    return function(onF, _onR) {
        if (onF) {
            var ret;
            try {
                ret = onF(result);
            } catch (e) {
                // if (onR) {
                //   return Promise.resolve(onR(e));
                // }
                return Promise.reject(e);
            }
            if (ret && typeof ret.then === 'function' /* `thenable` object */ ) //   import("./x").then(() => new Promise(...))
            // )
            // Calling `then` and passing a callback is standard behavior
            // but in Lepus runtime the callback will never be called
            // So can be simplified to code below
            return ret;
            var p = Promise.resolve(ret);
            var then = makeSyncThen(ret);
            p.then = then;
            return p;
        }
        return this;
    };
};
// loadScript a background section with `globalThis.globDynamicComponentEntry`
// set to `entry` (restored after). The bundle's wrapper reads it once as
// `g.globDynamicComponentEntry || '__Card__'`, so without this its modules — and
// any nested `import()` it triggers — would resolve against the caller's host.
function loadBackgroundBundle(bundleName, entry) {
    var g = globalThis;
    var previous = g.globDynamicComponentEntry;
    g.globDynamicComponentEntry = entry;
    try {
        return lynx.loadScript(SECTION_BACKGROUND, {
            bundleName
        });
    } finally{
        g.globDynamicComponentEntry = previous;
    }
}
/**
 * Load dynamic component from source. Designed to be used with `lazy`.
 *
 * The `mode` is threaded in by the chunk-loading runtime from the
 * `import(..., { with: { mode } })` import attribute (see `lynx_acm`), so each
 * lazy import carries its own mode instead of relying on shared mutable state.
 * @param source - where dynamic component template.js locates
 * @param mode - `'sync'` (first-screen blocking) or `'async'` (default)
 * @returns
 * @public
 */ var lazy_bundle_loadLazyBundle = /*#__PURE__*/ (/* unused pure expression or super */ null && ((()=>{
    // Default to QueryComponent when `__LAZY_BUNDLE_FETCHER__` is missing —
    // older react-webpack-plugin builds don't stamp it and they predate
    // FetchBundle support, so falling through to QueryComponent is the only
    // safe behavior.
    var useFetchBundle =  true && "QueryComponent" === 'FetchBundle';
    var impl = useFetchBundle ? loadLazyBundleWithFetchBundle : loadLazyBundleWithQueryComponent;
    lynx.loadLazyBundle = impl;
    function loadLazyBundleWithQueryComponent(source, mode) {
        {
            if (false) {}
            var resolver = withSyncResolvers();
            var callback = (result)=>{
                var { code, detail } = result;
                if (code === 0) {
                    var { schema } = detail;
                    var exports = lynxCoreInject.tt.getDynamicComponentExports(schema);
                    // `code === 0` means that the lazy bundle has been successfully parsed. However,
                    // its javascript files may still fail to run, which would prevent the retrieval of the exports object.
                    if (exports) {
                        resolver.resolve(exports);
                        return;
                    }
                }
                var e = new Error('Lazy bundle load failed, schema: ' + result.detail.schema);
                // ES5 does not support new Error('message', { cause: 'detail' })
                // So we set cause using `.cause` assignment
                e.cause = JSON.stringify(result);
                resolver.reject(e);
            };
            if (typeof lynx.QueryComponent === 'function') lynx.QueryComponent(source, callback);
            else lynx.getNativeLynx().QueryComponent(source, callback);
            if (resolver.result !== null) {
                var p = Promise.resolve(resolver.result);
                p.then = makeSyncThen(resolver.result);
                return p;
            } else if (resolver.error === null) return new Promise((_resolve, _reject)=>{
                resolver.resolve = _resolve;
                resolver.reject = _reject;
            });
            else return Promise.reject(resolver.error);
        }
        // removed by dead control flow
{}
    }
    function loadLazyBundleWithFetchBundle(source, mode, host) {
        {
            var cached = fetchBundleBgCache.get(source);
            if (cached !== undefined) {
                var r = Promise.resolve(cached);
                r.then = makeSyncThen(cached);
                return r;
            }
            if (mode === 'sync') {
                var response;
                try {
                    response = lynx.fetchBundle(source, {}).wait(LYNX_LAZY_SYNC_TIMEOUT_SECONDS);
                } catch (e) {
                    return Promise.reject(e instanceof Error ? e : new Error(String(e)));
                }
                if (!response || response.code !== 0) {
                    console.error('Lazy bundle load failed', response);
                    var _$e = new Error('Lazy bundle load failed, schema: ' + source);
                    _$e.cause = JSON.stringify(response);
                    return Promise.reject(_$e);
                }
                var result;
                try {
                    result = loadBackgroundBundle(response.url, source);
                } catch (e) {
                    return Promise.reject(e instanceof Error ? e : new Error(String(e)));
                }
                // A sync bundle that wasn't part of the first-screen main-thread render
                // still needs its main-thread section prepared on the MT (the
                // createSnapshot side effect), or a later patch referencing it hits
                // "snapshot not found". Runs synchronously — the bundle is already in
                // the native cache — just like the async path below.
                try {
                    lynx.getNativeApp().callLepusMethod(PREPARE_LAZY_BUNDLE_MTS, {
                        url: source,
                        host
                    }, ()=>{});
                } catch (e) {
                    return Promise.reject(e instanceof Error ? e : new Error(String(e)));
                }
                // Fully loaded and prepared — cache so repeat loads skip the work above.
                fetchBundleBgCache.set(source, result);
                var r1 = Promise.resolve(result);
                r1.then = makeSyncThen(result);
                return r1;
            }
            // async (default)
            return new Promise((resolve, reject)=>{
                var handler;
                try {
                    handler = lynx.fetchBundle(source, {});
                } catch (e) {
                    reject(e instanceof Error ? e : new Error(String(e)));
                    return;
                }
                handler.then((response)=>{
                    if (!response || response.code !== 0) {
                        console.error('Lazy bundle load failed', response);
                        var _$e = new Error('Lazy bundle load failed, schema: ' + source);
                        _$e.cause = JSON.stringify(response);
                        reject(_$e);
                        return;
                    }
                    var btsResult;
                    try {
                        btsResult = loadBackgroundBundle(response.url, source);
                    } catch (e) {
                        reject(e instanceof Error ? e : new Error(String(e)));
                        return;
                    }
                    // Bundle is now in native cache, so MT's `.then` fires sync and
                    // the whole prepare runs synchronously inside `Call`, meaning the
                    // cb fires only after MT snapshots are registered.
                    try {
                        lynx.getNativeApp().callLepusMethod(PREPARE_LAZY_BUNDLE_MTS, {
                            url: source,
                            host
                        }, ()=>{
                            // Fully loaded and MT-prepared — cache so repeat loads skip
                            // the fetch / background eval / MT prepare above.
                            fetchBundleBgCache.set(source, btsResult);
                            resolve(btsResult);
                        });
                    } catch (e) {
                        reject(e instanceof Error ? e : new Error(String(e)));
                    }
                });
            });
        }
        // removed by dead control flow
{}
    }
    return impl;
})()));
function withSyncResolvers() {
    'background-only';
    var resolver = {
        resolve: (result)=>{
            resolver.result = result;
        },
        reject: (error)=>{
            resolver.error = error;
        },
        result: null,
        error: null
    };
    return resolver;
} //# sourceMappingURL=lazy-bundle.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/core/lynx/dynamic-import.js
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

function loadDynamicJS(url) {
    return new Promise((resolve, reject)=>{
        lynx.requireModuleAsync(url, (err, data)=>{
            if (err) reject(err);
            else resolve(data);
        });
    });
}
function __dynamicImport(url, options) {
    var w = options === null || options === void 0 ? void 0 : options.with;
    var t = w === null || w === void 0 ? void 0 : w.type;
    if (t === 'component' || t === 'tsx' || t === 'jsx') return loadLazyBundle(url, w === null || w === void 0 ? void 0 : w.mode);
    else return loadDynamicJS(url);
} //# sourceMappingURL=dynamic-import.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/core/compat/lynxComponent.js
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

function wrapWithLynxComponent(jsxSnapshot, jsxComponent) {
    var componentVNode = jsxComponent;
    var C = componentVNode.type;
    if (typeof C === 'function' && (C === ComponentFromReactRuntime || C.prototype instanceof ComponentFromReactRuntime)) {
        if (jsxSnapshot.length === 1) return jsxSnapshot(jsxComponent);
        else {
            // spread
            if (!componentVNode.props['removeComponentElement']) return jsxSnapshot(jsxComponent, takeComponentAttributes(componentVNode));
        }
    }
    return jsxComponent;
}
class ComponentFromReactRuntime extends (/* unused pure expression or super */ null && (Component)) {
    /* v8 ignore next 3 -- marker component, never rendered directly. */ render() {
        return null;
    }
}
var __COMPONENT_ATTRIBUTES__ = /* @__PURE__ */ (/* unused pure expression or super */ null && (new Set([
    'name',
    'style',
    'class',
    'flatten',
    'clip-radius',
    'overlap',
    'user-interaction-enabled',
    'native-interaction-enabled',
    'block-native-event',
    'enableLayoutOnly',
    'cssAlignWithLegacyW3C',
    'intersection-observers',
    'trigger-global-event',
    'exposure-scene',
    'exposure-id',
    'exposure-screen-margin-top',
    'exposure-screen-margin-bottom',
    'exposure-screen-margin-left',
    'exposure-screen-margin-right',
    'focusable',
    'focus-index',
    'accessibility-label',
    'accessibility-element',
    'accessibility-traits',
    'enable-new-animator'
])));
function takeComponentAttributes(jsxComponent) {
    var attributes = {};
    Object.keys(jsxComponent.props).forEach((k)=>{
        // let re1 = Regex::new(r"^(global-bind|bind|catch|capture-bind|capture-catch)([A-Za-z]+)$").unwrap();
        // let re2 = Regex::new(r"^data-([A-Za-z]+)$").unwrap();
        if (__COMPONENT_ATTRIBUTES__.has(k) || k === 'id' || k === 'className' || k === 'dataSet' || k === 'data-set' || k === 'removeComponentElement' || /^(global-bind|bind|catch|capture-bind|capture-catch)([A-Za-z]+)$/.exec(k) || /^data-([A-Za-z]+)$/.exec(k)) {
            attributes[k] = jsxComponent.props[k];
            delete jsxComponent.props[k];
        }
    });
    return attributes;
} //# sourceMappingURL=lynxComponent.js.map

;// CONCATENATED MODULE: ./node_modules/@lynx-js/react/runtime/lib/internal.js
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

















var __DynamicPartSlot = dynamicPartType_DynamicPartType.Slot;
var __DynamicPartMultiChildren = dynamicPartType_DynamicPartType.MultiChildren;
var __DynamicPartChildren = dynamicPartType_DynamicPartType.Children;
var __DynamicPartListChildren = dynamicPartType_DynamicPartType.ListChildren;

// v2 slot
var __DynamicPartSlotV2 = dynamicPartType_DynamicPartType.SlotV2;
var __DynamicPartListSlotV2 = dynamicPartType_DynamicPartType.ListSlotV2;












/**
 * @internal a polyfill for <component is=? />
 */ var __ComponentIsPolyfill = /* @__PURE__ */ (/* unused pure expression or super */ null && (factory2({
    Suspense,
    lazy,
    createElement,
    useMemo
}, loadLazyBundle)));




if (false) // stringified for cross-thread HMR and must not capture module bindings);
// register this namespace as that runtime. Production creators close over
// their own module's runtime import, so this reference is dropped there.
{} //# sourceMappingURL=internal.js.map

;// CONCATENATED MODULE: ./src/App.tsx



function makeCounter(step) {
    var value = 0;
    return {
        bump: ()=>value += step,
        read: ()=>value
    };
}
function describe(label, total) {
    return `${label}: ${total}`;
}
var App_snapshot_835da_8604a_1 = "__snapshot_835da_8604a_1";
snapshotCreatorMap_snapshotCreatorMap[App_snapshot_835da_8604a_1] = (__snapshot_835da_8604a_1)=>createSnapshot(__snapshot_835da_8604a_1, null, null, [
        [
            __DynamicPartSlotV2,
            1
        ]
    ], undefined, globDynamicComponentEntry, null, true);
function App() {
    var [count, setCount] = react_useState(0);
    var counter = makeCounter(1);
    var onTap = hooks_useCallback(()=>{
        counter.bump();
        setCount((previous)=>previous + counter.read());
    }, [
        counter
    ]);
    return /*#__PURE__*/ jsxRuntime_createVNode(App_snapshot_835da_8604a_1, {
        values: [
            onTap
        ],
        $0: describe('count', count)
    });
}

;// CONCATENATED MODULE: ./src/index.tsx



lynx_api_root.render(/*#__PURE__*/ jsxRuntime_createVNode(App, {}));



})();
    });
    return tt.require("background.cc30ad8f.js");
  };
  if (g && g.bundleSupportLoadScript){
    var res = {init: __init_card_bundle__};
    g.__bundle__holder = res;
    return res;
  } else {
    __init_card_bundle__({"tt": tt});
  };
})();

//# sourceMappingURL=/.rspeedy/main/background.cc30ad8f.js.map