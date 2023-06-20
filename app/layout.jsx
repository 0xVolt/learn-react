import '@styles/globals.css';

export const metadata = {
  title: 'Tutorial Next.js Site',
  description: 'This is a test website to learn next.js and what it has to offer.'
}

const RootLayout = () => {
  return (
    <html lang='en'>
      <body>
        {/* Set a main class for the body of our layouts. */}
        <div className='main'>
          {/* Set the background to be a gradient of it's own class. */}
          <div className='gradient' />
        </div>

        {/* Wrap the entire application. */}
        <main className='app'>
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout;
