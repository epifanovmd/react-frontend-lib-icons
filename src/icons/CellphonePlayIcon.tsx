import React, { FC, memo } from 'react';
import CellphonePlaySvg from '../svg/cellphone-play.svg';

export interface ICellphonePlayIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CellphonePlayIcon: FC<ICellphonePlayIconProps> = memo(props => {
  return <CellphonePlaySvg {...props} />;
});
