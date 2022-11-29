import React, { FC, memo } from 'react';
import LotionOutlineSvg from '../svg/lotion-outline.svg';

export interface ILotionOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LotionOutlineIcon: FC<ILotionOutlineIconProps> = memo(props => {
  return <LotionOutlineSvg {...props} />;
});
