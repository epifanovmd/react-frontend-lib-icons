import React, { FC, memo } from 'react';
import LotionPlusSvg from '../svg/lotion-plus.svg';

export interface ILotionPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LotionPlusIcon: FC<ILotionPlusIconProps> = memo(props => {
  return <LotionPlusSvg {...props} />;
});
