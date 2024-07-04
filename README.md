# React Useful Hooks

A collection of custom React hooks designed to handle common tasks efficiently.

## Installation

You can install the package using npm or yarn:

```bash
npm install react-useful-hooks
# or
yarn add react-useful-hooks
```
## Available Hooks
useActive
Detects when an element is actively interacted with (e.g., mouse down, mouse up).

# useBoolean
Provides state and functions for managing boolean values (e.g., toggling).

# useClickOutside
Detects clicks outside a specified element.

# useClipboard
Provides utilities for copying text to the clipboard.

# useDebounce
Debounces a callback function to limit its execution rate.

# useEventListener
Adds and removes event listeners to a DOM element.

# useFetch
Handles data fetching with loading and error states.

# useFocus
Detects when an element gains or loses focus.

# useHover
Detects when an element is hovered over.

# useLocalStorage
Provides a simple interface for interacting with localStorage.

# useMediaQuery
Tracks changes in the browser's media query state.

# useModal
Manages the state of a modal component.

# useNavbar
Handles navigation bar state and behavior.

# useOnScreen
Detects if an element is visible on the screen.

# usePrevious
Returns the previous value of a state or variable.

## Usage
Each hook comes with its own usage instructions and examples. Import the hooks from 'react-useful-hooks' and use them in your React components.

```
import { useActive, useBoolean } from 'react-useful-hooks';

const ExampleComponent = () => {
  const { isActive } = useActive<HTMLDivElement>();
  const { isOpen, toggle } = useBoolean();

  return (
    <div>
      <div ref={isActive}>Active state</div>
      <button onClick={toggle}>{isOpen ? 'Close' : 'Open'}</button>
    </div>
  );
};
```

Copyright 2024 COPYRIGHT saadi925

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.