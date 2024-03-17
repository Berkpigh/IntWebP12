/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      smpb: '720px',
      // => @media (min-width: 720px) { ... }

      mdpb: '920px',
      // => @media (min-width: 920px) { ... }
    },
    fontFamily: {
      sans: ['Avenir', 'Helvetica', 'Arial', 'sans-serif'],
    },
    fontSize: {
      '0.75rem': '0.75rem',
      '0.9rem': '0.9rem',
      '1.1rem': '1.1rem',
      '1.2rem': '1.2rem',
      '1.5rem': '1.5rem',
      '2em': '2em',
      '2.5rem': '2.5rem',
    },
    colors: {
      grey: {
        DEFAULT: '#2c3e50',
        222: '#222',
        fff: '#ffffff',
      },
      green: {
        154: '#04300a',
      },
      red: {
        fonce: '#b00b31',
      },
    },
    top: {
      '50px': '50px',
    },
    left: {
      '0px': '0px',
      '20px': '20px',
    },
    right: {
      '50px': '50px',
    },
    width: {
      '80pc': '80%',
      '30px': '30px',
      '62px': '62px',
      '90px': '90px',
      '100px': '100px',
      '150px': '150px',
      '200px': '200px',
      '211px': '211px',
      '220px': '220px',
      '250px': '250px',
      '300px': '300px',
      '320px': '320px',
      '364px': '364px',
      '412px': '412px',
      '720px': '720px',
      '920px': '920px',
      '100pw': '100vw',
    },
    height: {
      '40px': '40px',
      '44px': '44px',
      '75px': '75px',
      '100px': '100px',
      '125px': '125px',
      '150px': '150px',
      '250px': '250px',
      '300px': '300px',
      '400px': '400px',
      '550px': '550px',
      '30ph': '30vh',
      '600px': '600px',
      '700px': '700px',
      '800px': '800px',
      '915px': '915px',
      '1170px': '1170px',
      '100ph': '100vh',
    },
    borderWidth: {
      '1px': '1px',
      '2px': '2px',
      '10px': '10px',
    },
    borderRadius: {
      '0.25rem': '0.25rem',
      '1rem': '1rem',
      '1.5rem': '1.5rem',
    },
    borderColor: {
      green: {
        feature: '#00bc77',
        submit: '#00bc77',
      },
      grey: {
        ccc: '#ccc',
        fff: '#fff',
      },
      zero: '#000',
    },
    backgroundColor: {
      yellow: '#c8cc45',
      lgreen: '#b9edc7',
      dark: '#12002b',
      submit: '#00bc77',
      darkgreen: '#04300a',
      fff: '#fff',
      zero: '#000',
      grey: '#D1D5DB',
      rgrey: '#70626d',
    },
    padding: {
      r5px: '5px',
      '5px': '5px',
      '10px': '10px',
      '24px': '24px',
      demirem: '0.5rem',
      '1rem': '1rem',
      '2rem': '2rem',
      '2.5rem': '2.5rem',
      left: {
        '500px': '500px',
      },
    },
    marginBottom: {
      '2.5rem': '2.5rem',
    },
    flex: {
      zero: '0',
      un: '1',
    },
    minHeight: {
      '6vh': '6vh',
      '10vh': '10vh',
      '55vh': '55vh',
      '80vh': '80vh',
    },
    maxHeight: {
      '10vh': '10vh',
      '80vh': '80vh',
    },
    gap: {
      demirem: '0.5rem',
      '0.75rem': '0.75rem',
    },
    objectFit: {
      cover: 'cover',
      contain: 'contain',
      scaledown: 'scale-down',
    },
    extend: {
      backgroundImage: {
        home: "url('/home_office.jpg')",
        passe: "url('/passé_cartePerforée4.jpg')",
        present: "url('/Present_Raisins.jpg')",
        formation: "url('/Formation_JS.jpg')",
        projet: "url('/Projet_OpenClassrooms.png')",
        avenir: "url('/Avenir_2bouteilles.jpg')",
      },
      /*
    gridAutoColumns: {
      '1tierfr': 'minmax(0.3fr, 0.3fr)',
      '2tierfr': 'minmax(0.7fr, 0.7fr)',
    }, 
*/
    },
  },
  plugins: [],
}
