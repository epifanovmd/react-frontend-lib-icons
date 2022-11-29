import React, { FC, memo } from 'react';
import CardMultipleOutlineSvg from '../svg/card-multiple-outline.svg';

export interface ICardMultipleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CardMultipleOutlineIcon: FC<ICardMultipleOutlineIconProps> = memo(props => {
  return <CardMultipleOutlineSvg {...props} />;
});
