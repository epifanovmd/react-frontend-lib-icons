import React, { FC, memo } from 'react';
import FlagCheckeredSvg from '../svg/flag-checkered.svg';

export interface IFlagCheckeredIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlagCheckeredIcon: FC<IFlagCheckeredIconProps> = memo(props => {
  return <FlagCheckeredSvg {...props} />;
});
