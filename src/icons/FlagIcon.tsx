import React, { FC, memo } from 'react';
import FlagSvg from '../svg/flag.svg';

export interface IFlagIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlagIcon: FC<IFlagIconProps> = memo(props => {
  return <FlagSvg {...props} />;
});
