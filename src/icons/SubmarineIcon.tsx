import React, { FC, memo } from 'react';
import SubmarineSvg from '../svg/submarine.svg';

export interface ISubmarineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SubmarineIcon: FC<ISubmarineIconProps> = memo(props => {
  return <SubmarineSvg {...props} />;
});
