import PropTypes from "prop-types";



function ShopButton({title}) {
  return (
    <>
      <button>{title}</button>
    </>
  )
}

export default ShopButton

ShopButton.propTypes = {
  title: PropTypes.string,
};