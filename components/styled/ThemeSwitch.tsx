import { styled } from '@mui/system';
import { Switch, SwitchProps } from '@mui/material';

const ThemeSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 44,
  height: 24,
  padding: 3,

  '&:hover': {
    '& .MuiSwitch-track': {
      border: '1px solid rgb(0,0,0)',
    },

    '& .MuiSwitch-switchBase': {
      '&.Mui-checked': {
        transform: 'translateX(18px)',
        color: 'rgba(0,0,0)',
        '& + .MuiSwitch-track': {
          border: '1px solid rgba(255,255,255)',
        },
      },
    },
  },
  '& .MuiSwitch-switchBase:hover': {
    backgroundColor: 'transparent',
  },
  '& .MuiSwitch-switchBase': {
    transitionDuration: '250ms',
    paddingTop: 4.8,
    paddingBottom: 4.65,
    paddingRight: 5,
    paddingLeft: 5,
    '&.Mui-checked': {
      transform: 'translateX(18px)',
      color: 'rgba(0,0,0)',
      '& + .MuiSwitch-track': {
        backgroundColor:
          theme.palette.mode === 'dark' ? 'rgb(47,47,47)' : 'rgb(47,47,47)',
        opacity: 1,
        border: '1px solid rgba(255,255,255, .8)',
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },

      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 25 25"><path stroke="${encodeURIComponent(
          '#fff'
        )}" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>')`,
      },
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? 'rgba(255, 255, 255, .5)'
          : 'rgba(255, 255, 255)',
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    padding: 2,
    boxSizing: 'border-box',
    width: 16.5,
    height: 16.5,

    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16.5" width="16.5" viewBox="0 0 21 20"><path fill="${encodeURIComponent(
        '#000'
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    border: '1px solid rgba(0,0,0, .5)',
    padding: 0,
    borderRadius: 22 / 2,
    backgroundColor:
      theme.palette.mode === 'light' ? 'rgb(224,224,224)' : 'rgb(0,0,0,.5)',
    opacity: 1,
    transition: '250ms',
  },
}));

export default ThemeSwitch;
