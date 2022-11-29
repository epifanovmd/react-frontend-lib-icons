import React, { FC, memo } from 'react';
import CardBulletedOffSvg from '../svg/card-bulleted-off.svg';

export interface ICardBulletedOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CardBulletedOffIcon: FC<ICardBulletedOffIconProps> = memo(props => {
  return <CardBulletedOffSvg {...props} />;
});
