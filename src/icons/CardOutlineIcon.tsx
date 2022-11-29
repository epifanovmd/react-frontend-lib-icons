import React, { FC, memo } from 'react';
import CardOutlineSvg from '../svg/card-outline.svg';

export interface ICardOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CardOutlineIcon: FC<ICardOutlineIconProps> = memo(props => {
  return <CardOutlineSvg {...props} />;
});
