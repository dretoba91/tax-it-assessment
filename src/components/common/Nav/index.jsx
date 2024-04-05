
function NavTab({toggleState, onClickToggle}) {
  
  const clickToggle = () => {
    const index = toggleState == 1 ? 2 : 1;
    console.log(`===> ${index}`);
    console.log(`toggle state: ${toggleState}`);
    onClickToggle(index);
    
  }
  

  return (
    <nav className="display: flex flex-direction: row align-items: flex-start padding: 0px gap-10">
      <div className={`py-1 px-2 border-b-2 ${toggleState == 1 ? 'border-[#5CB23A]' : 'border-black'}`}>
        <ul>
        <li className="font-poppins text-[20px] text-[#ECF1F0] lg:text-[12.5px] font-semibold" onClick={clickToggle}>
          For Individuals
        </li>
        </ul>
      </div>
      <div className={`py-1 px-2 border-b-2 ${toggleState == 2 ? 'border-[#5CB23A]' : 'border-black'}`}>
        <ul>
        <li className="font-poppins text-[20px] text-[#ECF1F0] lg:text-[12.5px] font-semibold" onClick={clickToggle}>
          For Businesses
        </li>
        </ul>
      </div>
      <ul></ul>
    </nav>
  );
}

export default NavTab;
