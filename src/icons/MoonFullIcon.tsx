import React, { FC, memo } from 'react';
import MoonFullSvg from '../svg/moon-full.svg';

export interface IMoonFullIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MoonFullIcon: FC<IMoonFullIconProps> = memo(props => {
  return <MoonFullSvg {...props} />;
});
