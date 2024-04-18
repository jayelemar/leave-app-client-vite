const Loading = () => {
  return (
    <section>
      <div className="container flex min-h-[82vh] flex-col items-center justify-center">
        <div className="flex flex-row items-center justify-center gap-2">
          <h2 className="flex gap-1 text-xl text-primary">
            Loading
            <span className="custom-bounce-delay-1 animate-bounce">.</span>
            <span className="custom-bounce-delay-2 animate-bounce">.</span>
            <span className="custom-bounce-delay-3 animate-bounce">.</span>
          </h2>
        </div>
      </div>
    </section>
  )
}

export default Loading
