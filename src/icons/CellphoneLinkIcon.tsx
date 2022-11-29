import React, { FC, memo } from 'react';
import CellphoneLinkSvg from '../svg/cellphone-link.svg';

export interface ICellphoneLinkIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CellphoneLinkIcon: FC<ICellphoneLinkIconProps> = memo(props => {
  return <CellphoneLinkSvg {...props} />;
});
