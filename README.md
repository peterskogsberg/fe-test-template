# XXL FE assignment

Welcome! Your mission is as follows.

Build a React component that displays whether a specific XXL warehouse store 🏬 is currently ✔️ open or ❌ closed.

## Have it your way

You are free to choose both implementation details and your way of working.

- Work in a local IDE or this online based one
- TypeScript or JavaScript
- How the component will look (SVG icons are provided if you want to use them)
- How to fetch data (e.g. fetch, Axios, react-query or even XMLHttpRequest)
- App internal data management (e.g. React context, Redux, Immer, a hook, useState?

## Keep calm and code on 👌

✋ Use any online resources freely! If you get stuck we will help you along the way, and if we run out of time we will discuss and outline the remaining parts of the solution as text or pseudo code; what you would have done as the next steps. We are more interested in the process than the result.

## Let's get started

Navigate to [https://www.xxl.se/store-finder](https://www.xxl.se/store-finder) to browse the list of XXL stores in Sweden. Pick any store, maybe your "local" or closest store? Note the name of the store.

## API

The underlying API that is used on this page is
[https://api.xxlsports.com/content-api-v5/datasets/xxl-se/stores/](https://api.xxlsports.com/content-api-v5/datasets/xxl-se/stores/) - go ahead, try a `GET` request in a new browser tab, cURL, Postman or however you wish!

Find your selected store and note the `id` attribute which you can use to request specifically only the data for a single store, by ending the API URL with that id as a suffix. Please refer to `api.ts` for a starting point to this, or `swagger.png` if you want more API details.

The file `example.json` contains one such response example. You may also use this file as a mock or fixture if you like.

## Hints

To determine whether the store is currently open or closed, you will need to combine the opening hours data from the API with the actual current weekday and time 📅⌚. You are free to use the native [Date API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) or any datetime library you want.

In `date-utils.ts`, a function is provided to return the name of the current day in English. This may help to process the data from the API response.

If you choose to code in TypeScript, or just as schema help, you can refer to `types.ts` for a simplified schema representation of the API's response type.

## Expected result

Import your React component from `App.tsx` and make sure it renders to indicate whether the store is currently open or closed.

### Example

```jsx
<StoreOpenIndicator storeId={1337} />
```

## Bonus

If you have time remaining, consider improving the layout 💅, writing unit tests 🧪, adding a link to the store URL or a map 🗺️ using the latitude/longitude, or any other idea you may have.

## Attribution

SVG icons from [Icons8](https://icons8.com/license)

## Contact

- [Peter Skogsberg](mailto:peter.skogsberg@xxl.se)
