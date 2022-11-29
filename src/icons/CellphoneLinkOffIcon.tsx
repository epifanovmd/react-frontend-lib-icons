import React, { FC, memo } from 'react';
import CellphoneLinkOffSvg from '../svg/cellphone-link-off.svg';

export interface ICellphoneLinkOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CellphoneLinkOffIcon: FC<ICellphoneLinkOffIconProps> = memo(props => {
  return <CellphoneLinkOffSvg {...props} />;
});
