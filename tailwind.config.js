/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        lGreen: "#25DAC5",
        lHeading: "#1e0e62",
        lGray: "#808080",
        lBlue: "#2F1893",
        lPush: "#E93A7D",
        lred: "#EA3223",
        offwhite: "#E4E3ED",
      },
      gridTemplateColumns: {
        'custom': '57% 42%',
      },
    },
  },
  plugins: [require("daisyui")],
};