import React, { FC, memo } from 'react';
import BowlSvg from '../svg/bowl.svg';

export interface IBowlIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BowlIcon: FC<IBowlIconProps> = memo(props => {
  return <BowlSvg {...props} />;
});
