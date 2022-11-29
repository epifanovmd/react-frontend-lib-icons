import React, { FC, memo } from 'react';
import CardTextOutlineSvg from '../svg/card-text-outline.svg';

export interface ICardTextOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CardTextOutlineIcon: FC<ICardTextOutlineIconProps> = memo(props => {
  return <CardTextOutlineSvg {...props} />;
});
