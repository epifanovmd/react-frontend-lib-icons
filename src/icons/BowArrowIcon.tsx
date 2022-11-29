import React, { FC, memo } from 'react';
import BowArrowSvg from '../svg/bow-arrow.svg';

export interface IBowArrowIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BowArrowIcon: FC<IBowArrowIconProps> = memo(props => {
  return <BowArrowSvg {...props} />;
});
