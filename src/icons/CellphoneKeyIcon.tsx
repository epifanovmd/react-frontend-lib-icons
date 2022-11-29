import React, { FC, memo } from 'react';
import CellphoneKeySvg from '../svg/cellphone-key.svg';

export interface ICellphoneKeyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CellphoneKeyIcon: FC<ICellphoneKeyIconProps> = memo(props => {
  return <CellphoneKeySvg {...props} />;
});
