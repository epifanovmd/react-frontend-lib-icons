import React, { FC, memo } from 'react';
import BowlingSvg from '../svg/bowling.svg';

export interface IBowlingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BowlingIcon: FC<IBowlingIconProps> = memo(props => {
  return <BowlingSvg {...props} />;
});
