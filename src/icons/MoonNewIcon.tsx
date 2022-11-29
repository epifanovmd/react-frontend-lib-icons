import React, { FC, memo } from 'react';
import MoonNewSvg from '../svg/moon-new.svg';

export interface IMoonNewIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MoonNewIcon: FC<IMoonNewIconProps> = memo(props => {
  return <MoonNewSvg {...props} />;
});
