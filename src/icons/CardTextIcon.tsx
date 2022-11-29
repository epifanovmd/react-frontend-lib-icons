import React, { FC, memo } from 'react';
import CardTextSvg from '../svg/card-text.svg';

export interface ICardTextIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CardTextIcon: FC<ICardTextIconProps> = memo(props => {
  return <CardTextSvg {...props} />;
});
