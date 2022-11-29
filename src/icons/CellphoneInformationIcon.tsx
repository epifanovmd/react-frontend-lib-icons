import React, { FC, memo } from 'react';
import CellphoneInformationSvg from '../svg/cellphone-information.svg';

export interface ICellphoneInformationIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CellphoneInformationIcon: FC<ICellphoneInformationIconProps> = memo(props => {
  return <CellphoneInformationSvg {...props} />;
});
