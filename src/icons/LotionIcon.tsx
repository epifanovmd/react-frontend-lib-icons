import React, { FC, memo } from 'react';
import LotionSvg from '../svg/lotion.svg';

export interface ILotionIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LotionIcon: FC<ILotionIconProps> = memo(props => {
  return <LotionSvg {...props} />;
});
