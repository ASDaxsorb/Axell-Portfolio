function TitleSection({ children }) {
  return (
    <div>
      <h3 className="text-center text-2xl md:text-3xl text-cyan-500 dark:text-green-300 font-bold">
        {children}
      </h3>
    </div>
  )
}

export default TitleSection
