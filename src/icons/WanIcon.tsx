import React, { FC, memo } from 'react';
import WanSvg from '../svg/wan.svg';

export interface IWanIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WanIcon: FC<IWanIconProps> = memo(props => {
  return <WanSvg {...props} />;
});
