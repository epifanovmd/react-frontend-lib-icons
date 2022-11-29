import React, { FC, memo } from 'react';
import CardBulletedOutlineSvg from '../svg/card-bulleted-outline.svg';

export interface ICardBulletedOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CardBulletedOutlineIcon: FC<ICardBulletedOutlineIconProps> = memo(props => {
  return <CardBulletedOutlineSvg {...props} />;
});
