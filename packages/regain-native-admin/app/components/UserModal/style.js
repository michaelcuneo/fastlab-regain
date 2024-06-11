const modal = {
  position: 'fixed',
  fontFamily: 'Arial, Helvetica, sans-serif',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  background: 'rgba(0, 0, 0, 0.4)',
  transition: 'opacity .1s ease-in',
  pointerEvents: 'auto',
  zIndex: 9999,
};

const pointer = {
  width: '20px',
  position: 'relative',
  margin: '0px 0px 0px 0px',
  padding: '0px 0px 0px 0px',
};

const container = {
  width: '240px',
  position: 'relative',
  margin: '0px 0px 0px 0px',
  padding: '0px 0px 0px 0px',
  borderRadius: '10px',
  zIndex: 2,
};

export default {
  modal,
  pointer,
  container,
};
