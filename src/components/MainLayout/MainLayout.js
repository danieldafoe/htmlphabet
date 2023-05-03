import dinosaur from '../../images/dinosaur.svg';
import dratini from '../../images/dratini.svg';

function MainLayout({children}) {
  return (
    <div className='wrapper'>
      <img src={dinosaur} className='dinosaur' alt=""/>
      <img src={dratini} className='dratini' alt=""/>

      <header>
        <h1 className='logo'>
          htmlphabet
        </h1>
      </header>
      <main>
        {children}
      </main>
    </div>
  )
}

export default MainLayout;