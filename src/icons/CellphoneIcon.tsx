import React, { FC, memo } from 'react';
import CellphoneSvg from '../svg/cellphone.svg';

export interface ICellphoneIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CellphoneIcon: FC<ICellphoneIconProps> = memo(props => {
  return <CellphoneSvg {...props} />;
});
