import React, { FC, memo } from 'react';
import BowlOutlineSvg from '../svg/bowl-outline.svg';

export interface IBowlOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BowlOutlineIcon: FC<IBowlOutlineIconProps> = memo(props => {
  return <BowlOutlineSvg {...props} />;
});
