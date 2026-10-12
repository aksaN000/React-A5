# DevStack

A one-page React app for exploring development technologies and building your own stack: browse 12 technologies, add the ones you like to "Your Stack", and remove them again.

## Technologies used

- React 19 with TypeScript (Vite)
- Tailwind CSS 4 and daisyUI 5
- react-toastify

## Features

1. **Build your stack**: add any technology from its card; duplicates are blocked, and an added card shows "✓ Added to Stack".
2. **Manage your stack**: see a live count, remove one item with ✕, or clear everything with Remove All, with a toast message for every action.
3. **Responsive layout**: 1, 2 or 3 card columns depending on the screen, a sticky navbar with a mobile menu, and a loading spinner while the data loads.

## Questions

### 1. What is JSX, and why is it used in React?

JSX lets us write HTML-like tags inside JavaScript, for example `<h3>{tech.name}</h3>`. It is not real HTML: when the project is built, every tag turns into a normal JavaScript function call that React uses to create the element. We use it because describing the UI with tags is much easier to read than calling those functions by hand, and inside `{ }` we can put any JavaScript value, like a variable, a `.map()` or a `? :` condition.

### 2. What is the difference between props and state?

Props are values a parent gives to a child, like arguments to a function. The child can only read them, not change them. In this project `TechCard` gets `prop_tech` and `prop_added` from `TechGrid`. State is a component's own memory that can change over time, made with `useState`. When state changes, React runs the component again and updates the screen. The stack list is state that lives in `Technologies`.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` gives a component a value that is kept between re-renders, plus a setter function. Calling the setter with a new value tells React to re-render. I used it in `Technologies` for the selected stack (`const [stack, setStack] = useState<Technology[]>([])`) and in `Navbar` for opening and closing the mobile menu (`menuOpen`). For arrays I always pass a new array (`[...stack, tech]`, `filter`, `[]`) instead of using `push`, because React checks whether it is the same array object.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs code after the component has appeared on the screen, which makes it the place for side effects like fetching data. With an empty dependency array `[]` it runs only once, after the first render. I first loaded `Technologies.json` this way (`TechnologiesEffect.tsx`): fetch inside the effect, save the result with `setTechnologies`, and show a spinner while `loading` is true. Without the effect, the fetch would run on every render. The final version uses React 19's `use()` with `<Suspense>` instead: the promise is created once at the top of the file, `use()` reads it, and Suspense shows the spinner until it is ready.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

When a list changes, React compares the new list with the old one. The `key` is a name tag that tells React which item is which, so it can keep, move or remove the right element. I used `key={tech.id}` for the cards and the stack items. Using the array index is risky, because when an item is removed the indexes shift and React can attach the wrong state to the wrong item.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different JSX depending on a value. In the Your Stack panel I show a message when the stack is empty and the list otherwise:

```tsx
{stack.length === 0 ? (
  <div>Your stack is empty.</div>
) : (
  <ul>{stack.map((tech) => <li key={tech.id}>…</li>)}</ul>
)}
```

Other places: the card button switches to "✓ Added to Stack", Remove All only shows with `stack.length > 0 && …`, and the mobile menu shows with `menuOpen && …`.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

Data goes down as props: the parent writes it as an attribute, like `<TechCard prop_tech={tech} />`, and the child receives it in its parameters, `function TechCard({ prop_tech })`. A child cannot change the parent's state directly, so to send something back the parent passes a function as a prop. `Technologies` passes `addToStack` down (as `onAdd`, then `prop_onAdd`), and the card's button calls it with its own technology: `onClick={() => prop_onAdd(prop_tech)}`. The function runs in the parent, which updates its state.
