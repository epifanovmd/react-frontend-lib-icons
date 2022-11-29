import React, { FC, memo } from 'react';
import CardRemoveOutlineSvg from '../svg/card-remove-outline.svg';

export interface ICardRemoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CardRemoveOutlineIcon: FC<ICardRemoveOutlineIconProps> = memo(props => {
  return <CardRemoveOutlineSvg {...props} />;
});
