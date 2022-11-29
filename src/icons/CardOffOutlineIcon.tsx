import React, { FC, memo } from 'react';
import CardOffOutlineSvg from '../svg/card-off-outline.svg';

export interface ICardOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CardOffOutlineIcon: FC<ICardOffOutlineIconProps> = memo(props => {
  return <CardOffOutlineSvg {...props} />;
});
