import React, { FC, memo } from 'react';
import CardRemoveSvg from '../svg/card-remove.svg';

export interface ICardRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CardRemoveIcon: FC<ICardRemoveIconProps> = memo(props => {
  return <CardRemoveSvg {...props} />;
});
