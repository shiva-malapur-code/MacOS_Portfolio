import useWindowStore from "#store/window";

const WindowControlls = ({ target }) => {
  const { closeWindow } = useWindowStore();
  return (
    <div id="window-controlls">
      <div className="close" onClick={() => closeWindow(target)} />
      <div className="minimize" />
      <div className="maximize" />
    </div>
  );
};

export default WindowControlls;
