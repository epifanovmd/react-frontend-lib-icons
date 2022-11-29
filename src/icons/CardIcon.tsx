import React, { FC, memo } from 'react';
import CardSvg from '../svg/card.svg';

export interface ICardIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CardIcon: FC<ICardIconProps> = memo(props => {
  return <CardSvg {...props} />;
});
