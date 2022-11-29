import React, { FC, memo } from 'react';
import CardMinusOutlineSvg from '../svg/card-minus-outline.svg';

export interface ICardMinusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CardMinusOutlineIcon: FC<ICardMinusOutlineIconProps> = memo(props => {
  return <CardMinusOutlineSvg {...props} />;
});
