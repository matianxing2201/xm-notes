import './Button.css'
export default function Button({type, children}) {
  let _type = "primary";
  if([
    'primary',
    'success',
    'wran',
    'danger'
  ].includes(type)) {
    _type = type
  }
  return (
    <div>
      <button className={ _type }>{ children }</button>
    </div>
  );
}