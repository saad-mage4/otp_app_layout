
const MiniToggle = ({checkStateS, enable, auto}) => {
  return (
      <div className="toggles">
      <div className="toggle">
        <span className="switch">
          <input
            onChange={checkStateS}
            id={enable}
            type="checkbox"
          />
          <label htmlFor={enable}></label>
        </span>
      </div>
      <div className="toggle">
        <span className="switch">
          <input id={auto} type="checkbox" />
          <label htmlFor={auto}></label>
        </span>
      </div>
    </div>
  )
}

export default MiniToggle