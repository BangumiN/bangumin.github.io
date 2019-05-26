// Generated by dts-bundle v0.7.3
// Dependencies for this module:
//   ../../../@material/base/types
//   ../../../@material/base/component
//   ../../../@material/base/foundation

declare module '@material/line-ripple' {
    /**
      * @license
      * Copyright 2019 Google Inc.
      *
      * Permission is hereby granted, free of charge, to any person obtaining a copy
      * of this software and associated documentation files (the "Software"), to deal
      * in the Software without restriction, including without limitation the rights
      * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      * copies of the Software, and to permit persons to whom the Software is
      * furnished to do so, subject to the following conditions:
      *
      * The above copyright notice and this permission notice shall be included in
      * all copies or substantial portions of the Software.
      *
      * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
      * THE SOFTWARE.
      */
    export * from '@material/line-ripple/adapter';
    export * from '@material/line-ripple/component';
    export * from '@material/line-ripple/foundation';
}

declare module '@material/line-ripple/adapter' {
    /**
        * @license
        * Copyright 2018 Google Inc.
        *
        * Permission is hereby granted, free of charge, to any person obtaining a copy
        * of this software and associated documentation files (the "Software"), to deal
        * in the Software without restriction, including without limitation the rights
        * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        * copies of the Software, and to permit persons to whom the Software is
        * furnished to do so, subject to the following conditions:
        *
        * The above copyright notice and this permission notice shall be included in
        * all copies or substantial portions of the Software.
        *
        * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
        * THE SOFTWARE.
        */
    import { EventType, SpecificEventListener } from '@material/base/types';
    /**
        * Defines the shape of the adapter expected by the foundation.
        * Implement this adapter for your framework of choice to delegate updates to
        * the component in your framework of choice. See architecture documentation
        * for more details.
        * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
        */
    export interface MDCLineRippleAdapter {
            /**
                * Adds a class to the line ripple element.
                */
            addClass(className: string): void;
            /**
                * Removes a class from the line ripple element.
                */
            removeClass(className: string): void;
            hasClass(className: string): boolean;
            /**
                * Sets the style property with propertyName to value on the root element.
                */
            setStyle(propertyName: string, value: string): void;
            /**
                * Registers an event listener on the line ripple element for a given event.
                */
            registerEventHandler<K extends EventType>(evtType: K, handler: SpecificEventListener<K>): void;
            /**
                * Deregisters an event listener on the line ripple element for a given event.
                */
            deregisterEventHandler<K extends EventType>(evtType: K, handler: SpecificEventListener<K>): void;
    }
}

declare module '@material/line-ripple/component' {
    /**
        * @license
        * Copyright 2018 Google Inc.
        *
        * Permission is hereby granted, free of charge, to any person obtaining a copy
        * of this software and associated documentation files (the "Software"), to deal
        * in the Software without restriction, including without limitation the rights
        * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        * copies of the Software, and to permit persons to whom the Software is
        * furnished to do so, subject to the following conditions:
        *
        * The above copyright notice and this permission notice shall be included in
        * all copies or substantial portions of the Software.
        *
        * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
        * THE SOFTWARE.
        */
    import { MDCComponent } from '@material/base/component';
    import { MDCLineRippleFoundation } from '@material/line-ripple/foundation';
    export type MDCLineRippleFactory = (el: Element, foundation?: MDCLineRippleFoundation) => MDCLineRipple;
    export class MDCLineRipple extends MDCComponent<MDCLineRippleFoundation> {
            static attachTo(root: Element): MDCLineRipple;
            /**
                * Activates the line ripple
                */
            activate(): void;
            /**
                * Deactivates the line ripple
                */
            deactivate(): void;
            /**
                * Sets the transform origin given a user's click location.
                * The `rippleCenter` is the x-coordinate of the middle of the ripple.
                */
            setRippleCenter(xCoordinate: number): void;
            getDefaultFoundation(): MDCLineRippleFoundation;
    }
}

declare module '@material/line-ripple/foundation' {
    /**
        * @license
        * Copyright 2018 Google Inc.
        *
        * Permission is hereby granted, free of charge, to any person obtaining a copy
        * of this software and associated documentation files (the "Software"), to deal
        * in the Software without restriction, including without limitation the rights
        * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        * copies of the Software, and to permit persons to whom the Software is
        * furnished to do so, subject to the following conditions:
        *
        * The above copyright notice and this permission notice shall be included in
        * all copies or substantial portions of the Software.
        *
        * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
        * THE SOFTWARE.
        */
    import { MDCFoundation } from '@material/base/foundation';
    import { MDCLineRippleAdapter } from '@material/line-ripple/adapter';
    export class MDCLineRippleFoundation extends MDCFoundation<MDCLineRippleAdapter> {
            static readonly cssClasses: {
                    LINE_RIPPLE_ACTIVE: string;
                    LINE_RIPPLE_DEACTIVATING: string;
            };
            /**
                * See {@link MDCLineRippleAdapter} for typing information on parameters and return types.
                */
            static readonly defaultAdapter: MDCLineRippleAdapter;
            constructor(adapter?: Partial<MDCLineRippleAdapter>);
            init(): void;
            destroy(): void;
            activate(): void;
            setRippleCenter(xCoordinate: number): void;
            deactivate(): void;
            handleTransitionEnd(evt: TransitionEvent): void;
    }
    export default MDCLineRippleFoundation;
}

