import React, { FC, memo } from 'react';
import CellphoneLockSvg from '../svg/cellphone-lock.svg';

export interface ICellphoneLockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CellphoneLockIcon: FC<ICellphoneLockIconProps> = memo(props => {
  return <CellphoneLockSvg {...props} />;
});
