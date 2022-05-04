// this is hoc.
// to share common functionality b/w components

const applyStyles = (OriginalComponent) => {

  return( (props) => {
    return (
      <div className="hocStyle">
        <OriginalComponent {...props} />
      </div>
    )
  });
}

export default applyStyles;