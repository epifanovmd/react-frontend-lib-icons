import React, { FC, memo } from 'react';
import CellphoneRemoveSvg from '../svg/cellphone-remove.svg';

export interface ICellphoneRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CellphoneRemoveIcon: FC<ICellphoneRemoveIconProps> = memo(props => {
  return <CellphoneRemoveSvg {...props} />;
});
