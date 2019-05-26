// Generated by dts-bundle v0.7.3
// Dependencies for this module:
//   ../../../@material/base/component
//   ../../../@material/base/foundation

declare module '@material/list' {
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
    export * from '@material/list/adapter';
    export * from '@material/list/component';
    export * from '@material/list/foundation';
    export * from '@material/list/types';
}

declare module '@material/list/adapter' {
    /**
        * Defines the shape of the adapter expected by the foundation.
        * Implement this adapter for your framework of choice to delegate updates to
        * the component in your framework of choice. See architecture documentation
        * for more details.
        * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
        */
    export interface MDCListAdapter {
            /**
                * Returns the attribute value of list item at given `index`.
                */
            getAttributeForElementIndex(index: number, attr: string): string | null;
            getListItemCount(): number;
            getFocusedElementIndex(): number;
            setAttributeForElementIndex(index: number, attribute: string, value: string): void;
            addClassForElementIndex(index: number, className: string): void;
            removeClassForElementIndex(index: number, className: string): void;
            /**
                * Focuses list item at the index specified.
                */
            focusItemAtIndex(index: number): void;
            /**
                * Sets the tabindex to the value specified for all button/a element children of
                * the list item at the index specified.
                */
            setTabIndexForListItemChildren(listItemIndex: number, tabIndexValue: string): void;
            /**
                * @return true if radio button is present at given list item index.
                */
            hasRadioAtIndex(index: number): boolean;
            /**
                * @return true if checkbox is present at given list item index.
                */
            hasCheckboxAtIndex(index: number): boolean;
            /**
                * @return true if checkbox inside a list item is checked.
                */
            isCheckboxCheckedAtIndex(index: number): boolean;
            /**
                * @return true if root element is focused.
                */
            isRootFocused(): boolean;
            /**
                * Sets the checked status of checkbox or radio at given list item index.
                */
            setCheckedCheckboxOrRadioAtIndex(index: number, isChecked: boolean): void;
            /**
                * Notifies user action on list item.
                */
            notifyAction(index: number): void;
            /**
                * @return true when the current focused element is inside list root.
                */
            isFocusInsideList(): boolean;
    }
}

declare module '@material/list/component' {
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
    import { MDCListFoundation } from '@material/list/foundation';
    import { MDCListIndex } from '@material/list/types';
    export type MDCListFactory = (el: Element, foundation?: MDCListFoundation) => MDCList;
    export class MDCList extends MDCComponent<MDCListFoundation> {
            vertical: boolean;
            readonly listElements: Element[];
            wrapFocus: boolean;
            singleSelection: boolean;
            selectedIndex: MDCListIndex;
            static attachTo(root: Element): MDCList;
            initialSyncWithDOM(): void;
            destroy(): void;
            layout(): void;
            /**
                * Initialize selectedIndex value based on pre-selected checkbox list items, single selection or radio.
                */
            initializeListType(): void;
            getDefaultFoundation(): MDCListFoundation;
    }
}

declare module '@material/list/foundation' {
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
    import { MDCListAdapter } from '@material/list/adapter';
    import { MDCListIndex } from '@material/list/types';
    export class MDCListFoundation extends MDCFoundation<MDCListAdapter> {
            static readonly strings: {
                    ACTION_EVENT: string;
                    ARIA_CHECKED: string;
                    ARIA_CHECKED_CHECKBOX_SELECTOR: string;
                    ARIA_CHECKED_RADIO_SELECTOR: string;
                    ARIA_CURRENT: string;
                    ARIA_ORIENTATION: string;
                    ARIA_ORIENTATION_HORIZONTAL: string;
                    ARIA_ROLE_CHECKBOX_SELECTOR: string;
                    ARIA_SELECTED: string;
                    CHECKBOX_RADIO_SELECTOR: string;
                    CHECKBOX_SELECTOR: string;
                    CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: string;
                    FOCUSABLE_CHILD_ELEMENTS: string;
                    RADIO_SELECTOR: string;
            };
            static readonly cssClasses: {
                    LIST_ITEM_ACTIVATED_CLASS: string;
                    LIST_ITEM_CLASS: string;
                    LIST_ITEM_DISABLED_CLASS: string;
                    LIST_ITEM_SELECTED_CLASS: string;
                    ROOT: string;
            };
            static readonly numbers: {
                    UNSET_INDEX: number;
            };
            static readonly defaultAdapter: MDCListAdapter;
            constructor(adapter?: Partial<MDCListAdapter>);
            layout(): void;
            /**
                * Sets the private wrapFocus_ variable.
                */
            setWrapFocus(value: boolean): void;
            /**
                * Sets the isVertical_ private variable.
                */
            setVerticalOrientation(value: boolean): void;
            /**
                * Sets the isSingleSelectionList_ private variable.
                */
            setSingleSelection(value: boolean): void;
            /**
                * Sets the useActivatedClass_ private variable.
                */
            setUseActivatedClass(useActivated: boolean): void;
            getSelectedIndex(): MDCListIndex;
            setSelectedIndex(index: MDCListIndex): void;
            /**
                * Focus in handler for the list items.
                */
            handleFocusIn(_: FocusEvent, listItemIndex: number): void;
            /**
                * Focus out handler for the list items.
                */
            handleFocusOut(_: FocusEvent, listItemIndex: number): void;
            /**
                * Key handler for the list.
                */
            handleKeydown(evt: KeyboardEvent, isRootListItem: boolean, listItemIndex: number): void;
            /**
                * Click handler for the list.
                */
            handleClick(index: number, toggleCheckbox: boolean): void;
            /**
                * Focuses the next element on the list.
                */
            focusNextElement(index: number): number;
            /**
                * Focuses the previous element on the list.
                */
            focusPrevElement(index: number): number;
            focusFirstElement(): number;
            focusLastElement(): number;
    }
    export default MDCListFoundation;
}

declare module '@material/list/types' {
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
    export interface MDCListActionEventDetail {
            /**
                * Index of the list item that was activated.
                */
            index: number;
    }
    export interface MDCListActionEvent extends Event {
            detail: MDCListActionEventDetail;
    }
    export type MDCListIndex = number | number[];
}
