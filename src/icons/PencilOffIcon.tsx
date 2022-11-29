import React, { FC, memo } from 'react';
import PencilOffSvg from '../svg/pencil-off.svg';

export interface IPencilOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PencilOffIcon: FC<IPencilOffIconProps> = memo(props => {
  return <PencilOffSvg {...props} />;
});
