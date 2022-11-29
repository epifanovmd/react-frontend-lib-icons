import React, { FC, memo } from 'react';
import CellphoneCogSvg from '../svg/cellphone-cog.svg';

export interface ICellphoneCogIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CellphoneCogIcon: FC<ICellphoneCogIconProps> = memo(props => {
  return <CellphoneCogSvg {...props} />;
});
