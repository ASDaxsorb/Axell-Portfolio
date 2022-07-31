import ToggleButton from './ToggleButton'

function Nav() {
  return (
    <nav className="w-full p-3 backdrop-blur bg-stone-200/50 dark:bg-zinc-800/20 fixed right-0 z-50">
      <div className="max-w-xl mx-auto flex justify-end">
        <ToggleButton />
      </div>
    </nav>
  )
}

export default Nav
