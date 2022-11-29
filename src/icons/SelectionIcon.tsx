import React, { FC, memo } from 'react';
import SelectionSvg from '../svg/selection.svg';

export interface ISelectionIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SelectionIcon: FC<ISelectionIconProps> = memo(props => {
  return <SelectionSvg {...props} />;
});
