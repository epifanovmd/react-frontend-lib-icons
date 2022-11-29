import React, { FC, memo } from 'react';
import FlagPlusSvg from '../svg/flag-plus.svg';

export interface IFlagPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlagPlusIcon: FC<IFlagPlusIconProps> = memo(props => {
  return <FlagPlusSvg {...props} />;
});
