import React, { FC, memo } from 'react';
import ThemeLightDarkSvg from '../svg/theme-light-dark.svg';

export interface IThemeLightDarkIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ThemeLightDarkIcon: FC<IThemeLightDarkIconProps> = memo(props => {
  return <ThemeLightDarkSvg {...props} />;
});
