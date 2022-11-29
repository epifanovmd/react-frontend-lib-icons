import React, { FC, memo } from 'react';
import RulerSquareSvg from '../svg/ruler-square.svg';

export interface IRulerSquareIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RulerSquareIcon: FC<IRulerSquareIconProps> = memo(props => {
  return <RulerSquareSvg {...props} />;
});
