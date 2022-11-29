import React, { FC, memo } from 'react';
import CardBulletedSvg from '../svg/card-bulleted.svg';

export interface ICardBulletedIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CardBulletedIcon: FC<ICardBulletedIconProps> = memo(props => {
  return <CardBulletedSvg {...props} />;
});
