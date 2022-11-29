import React, { FC, memo } from 'react';
import HandCoinOutlineSvg from '../svg/hand-coin-outline.svg';

export interface IHandCoinOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HandCoinOutlineIcon: FC<IHandCoinOutlineIconProps> = memo(props => {
  return <HandCoinOutlineSvg {...props} />;
});
