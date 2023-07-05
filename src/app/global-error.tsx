'use client'
 
export default function GlobalError({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {

  return (
    <html>
      <body className="tits">
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  )
}