/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      screens: {
        'sm': {min:'320px', max:'1024px'},
        'lg': {min:'1024px', max:'1880px'},
        
        // => @media (min-width: 992px) { ... }
      },
    },
    
  },
   plugins: [
        require('flowbite/plugin')
    ]
}

