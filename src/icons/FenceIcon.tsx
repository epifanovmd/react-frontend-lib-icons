import React, { FC, memo } from 'react';
import FenceSvg from '../svg/fence.svg';

export interface IFenceIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FenceIcon: FC<IFenceIconProps> = memo(props => {
  return <FenceSvg {...props} />;
});
