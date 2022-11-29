import React, { FC, memo } from 'react';
import RulerSvg from '../svg/ruler.svg';

export interface IRulerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RulerIcon: FC<IRulerIconProps> = memo(props => {
  return <RulerSvg {...props} />;
});
