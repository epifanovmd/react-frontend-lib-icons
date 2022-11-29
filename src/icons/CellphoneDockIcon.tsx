import React, { FC, memo } from 'react';
import CellphoneDockSvg from '../svg/cellphone-dock.svg';

export interface ICellphoneDockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CellphoneDockIcon: FC<ICellphoneDockIconProps> = memo(props => {
  return <CellphoneDockSvg {...props} />;
});
