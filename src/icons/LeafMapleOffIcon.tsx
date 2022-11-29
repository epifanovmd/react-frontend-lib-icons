import React, { FC, memo } from 'react';
import LeafMapleOffSvg from '../svg/leaf-maple-off.svg';

export interface ILeafMapleOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LeafMapleOffIcon: FC<ILeafMapleOffIconProps> = memo(props => {
  return <LeafMapleOffSvg {...props} />;
});
