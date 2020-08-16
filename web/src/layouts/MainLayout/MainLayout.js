import DogIcon from 'src/assets/dog.png'

const MainLayout = ({ children }) => {
  return (
    <>
      <header className="header">
        <h1>pawsitivity.io</h1>
        <img src={DogIcon} alt="" className="icon" />
      </header>
      <main className="main">{children}</main>
    </>
  )
}

export default MainLayout
