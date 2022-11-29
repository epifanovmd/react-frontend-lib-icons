import React, { FC, memo } from 'react';
import CardOffSvg from '../svg/card-off.svg';

export interface ICardOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CardOffIcon: FC<ICardOffIconProps> = memo(props => {
  return <CardOffSvg {...props} />;
});
