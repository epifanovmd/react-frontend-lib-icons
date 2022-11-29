import React, { FC, memo } from 'react';
import LotionPlusOutlineSvg from '../svg/lotion-plus-outline.svg';

export interface ILotionPlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LotionPlusOutlineIcon: FC<ILotionPlusOutlineIconProps> = memo(props => {
  return <LotionPlusOutlineSvg {...props} />;
});
