import React, { FC, memo } from 'react';
import CardBulletedOffOutlineSvg from '../svg/card-bulleted-off-outline.svg';

export interface ICardBulletedOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CardBulletedOffOutlineIcon: FC<ICardBulletedOffOutlineIconProps> = memo(props => {
  return <CardBulletedOffOutlineSvg {...props} />;
});
