

function Loading() {
  return (
    <div className='flex items-center justify-center flex-col gap-6'>
        <img src='https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGwwaW40ZzI2NDBmbDgyYzJkaXAydDFoN2lhdTFkZWZuZG9seG53MCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3o7bu3XilJ5BOiSGic/giphy.webp' height={100} width={100} alt='loading'/>
        <p >Fetching Weather...</p>
    </div>
  )
}

export default Loading