import React, { FC, memo } from 'react';
import SelectionOffSvg from '../svg/selection-off.svg';

export interface ISelectionOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SelectionOffIcon: FC<ISelectionOffIconProps> = memo(props => {
  return <SelectionOffSvg {...props} />;
});
